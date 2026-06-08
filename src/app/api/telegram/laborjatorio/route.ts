import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

type TelegramMessage = {
  message_id: number;
  chat: {
    id: number;
  };
  text?: string;
  caption?: string;
  voice?: TelegramFileRef;
  audio?: TelegramFileRef;
  document?: TelegramFileRef & {
    mime_type?: string;
    file_name?: string;
  };
};

type TelegramFileRef = {
  file_id: string;
};

type TelegramUpdate = {
  message?: TelegramMessage;
};

type SessionMode = "tool" | "category";

type SessionState = {
  mode: SessionMode;
  notes: string[];
  updatedAt: number;
  categoryName?: string;
};

type BotCommand = "start" | "ampliar" | "crear-archivo" | "error" | "descartar" | "categoria" | null;

const CONTEXT_FILES = [
  "docs/fundamentos-laborjatorio.md",
  "docs/BORJISMO_UNIVERSAL.md",
  "docs/SEO-LABORATORIO.md",
  "docs/Herramientas.md",
  "docs/MEMORIA-PROYECTO-LABORJATORIO.md",
  "docs/EDITORIAL CLAUDE.md",
  "propuestas-borjismo.md"
];

const MAX_TELEGRAM_CHARS = 3800;
const MAX_CONTEXT_CHARS_PER_FILE = 18000;
const SESSION_TTL_MS = 1000 * 60 * 60 * 8;
const MAX_SESSION_NOTES = 24;
const MAX_SESSION_CHARS = 28000;
const TELEGRAM_DOCUMENT_CAPTION_LIMIT = 1000;
const sessionStore = new Map<string, SessionState>();

export async function POST(request: NextRequest) {
  try {
    const authError = verifyRequest(request);

    if (authError) {
      return authError;
    }

    const update = (await request.json()) as TelegramUpdate;
    const message = update.message;

    if (!message) {
      return NextResponse.json({ ok: true, ignored: "No message in update" });
    }

    const configuredChatId = process.env.TELEGRAM_CHAT_ID;

    if (configuredChatId && String(message.chat.id) !== configuredChatId) {
      return NextResponse.json({ ok: true, ignored: "Unauthorized chat" });
    }

    const rawNotes = await extractRawNotes(message);
    const command = detectCommand(rawNotes);

    if (command === "start") {
      clearSession(message.chat.id);
      await sendTelegramMessage(
        message.chat.id,
        [
          "Laborjatorio listo.",
          "",
          "Para una ficha de herramienta, enviame una nota de texto o audio.",
          "Para una pagina de categoria, escribe CATEGORIA y el nombre. Ejemplo: CATEGORIA Conseguir estudiantes.",
          "",
          "Primero te hare preguntas para ampliar; cuando este listo, escribe CREAR ARCHIVO."
        ].join("\n")
      );

      return NextResponse.json({ ok: true });
    }

    if (!rawNotes.trim()) {
      await sendTelegramMessage(
        message.chat.id,
        "No he encontrado texto ni audio aprovechable. Prueba con una nota de voz o un mensaje sobre una herramienta, recurso o proceso."
      );

      return NextResponse.json({ ok: true });
    }

    if (command === "categoria") {
      const categoryName = extractCategoryName(rawNotes);
      startCategorySession(message.chat.id, categoryName);

      if (!categoryName) {
        await sendTelegramMessage(
          message.chat.id,
          "Modo categoria activado. Dime el nombre o necesidad central de la categoria. Ejemplo: Conseguir estudiantes."
        );

        return NextResponse.json({ ok: true });
      }

      await sendTelegramMessage(
        message.chat.id,
        [
          `Modo categoria activado: ${categoryName}.`,
          "",
          "Enviame notas, audios o respuestas sobre el problema, tu experiencia, errores habituales, filosofia, casos reales y herramientas relacionadas."
        ].join("\n")
      );

      return NextResponse.json({ ok: true });
    }

    if (command === "descartar") {
      const currentMode = getExistingChatSession(message.chat.id)?.mode || "tool";
      clearSession(message.chat.id);
      await sendTelegramMessage(
        message.chat.id,
        `Descartado. He borrado el contexto acumulado de esta ${getModeLabel(currentMode)}. Cuando quieras, empezamos otra.`
      );

      return NextResponse.json({ ok: true });
    }

    if (command === "ampliar") {
      const currentMode = getExistingChatSession(message.chat.id)?.mode || "tool";
      await sendTelegramMessage(
        message.chat.id,
        `Perfecto. Enviame la ampliacion en texto o audio y la sumare al contexto de esta ${getModeLabel(currentMode)}.`
      );

      return NextResponse.json({ ok: true });
    }

    if (command === "error") {
      const currentMode = getExistingChatSession(message.chat.id)?.mode || "tool";
      await sendTelegramMessage(
        message.chat.id,
        `Dime que esta mal o que dato debo corregir. Mandamelo como texto o audio y lo sumare al contexto de esta ${getModeLabel(currentMode)} antes de generar el archivo.`
      );

      return NextResponse.json({ ok: true });
    }

    if (command !== "crear-archivo") {
      appendSessionNote(message.chat.id, rawNotes);
    }

    const session = getExistingChatSession(message.chat.id);
    const mode = session?.mode || "tool";
    const accumulatedNotes = getSessionText(message.chat.id);

    if (!accumulatedNotes) {
      await sendTelegramMessage(
        message.chat.id,
        `No tengo contexto acumulado para pasar a Claude. Enviame primero una nota sobre la ${getModeLabel(mode)} o reenvia un resumen.`
      );

      return NextResponse.json({ ok: true });
    }

    if (command === "crear-archivo" && session && !hasEnoughContentForFile(session)) {
      await sendTelegramMessage(
        message.chat.id,
        [
          "No voy a crear el archivo todavia.",
          "",
          `Ahora mismo solo tengo ${getMeaningfulNotes(session).length} nota(s) util(es) para esta ${getModeLabel(mode)}.`,
          "Si genero el Markdown asi, Claude tendria que rellenar huecos y eso es justo lo que queremos evitar.",
          "",
          "Enviame una nota o audio con experiencia real, ejemplos, errores, criterio o herramientas relacionadas. Despues escribe CREAR ARCHIVO."
        ].join("\n")
      );

      return NextResponse.json({ ok: true });
    }

    const statusMessage =
      command === "crear-archivo"
        ? "Recibido. Estoy creando el archivo Markdown con todo lo acumulado."
        : [
            "Recibido. He guardado esta nota y estoy preparando preguntas para afinar el paquete.",
            "",
            formatSavedNotePreview(rawNotes)
          ].join("\n");

    await sendTelegramMessage(message.chat.id, statusMessage);

    const context = await loadLaborjatorioContext();
    const draft =
      mode === "category"
        ? await generateCategoryDraft(accumulatedNotes, context, session?.categoryName)
        : await generateLaborjatorioDraft(accumulatedNotes, context);
    const response = formatTelegramDraftResponse(draft, mode);

    if (command === "crear-archivo") {
      await sendTelegramMessage(
        message.chat.id,
        [
          "Paquete editorial listo.",
          "",
          "Te lo envio como archivo Markdown para que puedas descargarlo y subirlo a Claude sin copiar varios mensajes.",
          "",
          "Si ves algo mal, responde ERROR y dime que hay que corregir."
        ].join("\n")
      );
      await sendTelegramMarkdownDocument(message.chat.id, response, buildDraftFileName(draft));
    } else {
      await sendLongTelegramMessage(message.chat.id, formatTelegramInterviewResponse(draft, mode));
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    const fallbackChatId = process.env.TELEGRAM_CHAT_ID;

    if (fallbackChatId) {
      try {
        await sendTelegramMessage(
          fallbackChatId,
          formatErrorMessage(error)
        );
      } catch (telegramError) {
        console.error(telegramError);
      }
    }

  return NextResponse.json({ ok: false, retry: false });
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    name: "Laborjatorio Telegram draft webhook",
    mode: "draft-only"
  });
}

function verifyRequest(request: NextRequest) {
  const expectedSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

  if (!expectedSecret) {
    return null;
  }

  const receivedSecret = request.headers.get("x-telegram-bot-api-secret-token");

  if (receivedSecret !== expectedSecret) {
    return NextResponse.json({ ok: false, error: "Invalid Telegram webhook secret" }, { status: 401 });
  }

  return null;
}

async function extractRawNotes(message: TelegramMessage) {
  const text = message.text || message.caption;

  if (text) {
    return text;
  }

  const fileId = getAudioFileId(message);

  if (!fileId) {
    return "";
  }

  return transcribeTelegramAudio(fileId);
}

function detectCommand(rawNotes: string): BotCommand {
  const normalizedText = normalizeCommandText(rawNotes);

  if (normalizedText.startsWith("/START")) {
    return "start";
  }

  if (
    normalizedText === "CATEGORIA" ||
    normalizedText === "NUEVA CATEGORIA" ||
    normalizedText.startsWith("CATEGORIA ") ||
    normalizedText.startsWith("NUEVA CATEGORIA ") ||
    normalizedText === "/CATEGORIA" ||
    normalizedText.startsWith("/CATEGORIA ")
  ) {
    return "categoria";
  }

  if (normalizedText === "AMPLIAR") {
    return "ampliar";
  }

  if (
    normalizedText === "CREAR ARCHIVO" ||
    normalizedText === "GENERAR ARCHIVO" ||
    normalizedText === "PASAR A CLAUDE" ||
    normalizedText === "PASAR A CLOD" ||
    normalizedText === "PASAR A CLOUD" ||
    normalizedText === "PASAR A CLOD." ||
    normalizedText === "PASAR A CLAUDE." ||
    normalizedText === "CREAR ARCHIVO." ||
    normalizedText === "GENERAR ARCHIVO."
  ) {
    return "crear-archivo";
  }

  if (
    normalizedText === "ERROR" ||
    normalizedText === "HAY UN ERROR" ||
    normalizedText === "MARCAR ERROR" ||
    normalizedText === "CORREGIR"
  ) {
    return "error";
  }

  if (normalizedText === "DESCARTAR") {
    return "descartar";
  }

  return null;
}

function extractCategoryName(rawNotes: string) {
  return rawNotes
    .replace(/^\/?categor[ií]a\b[:\s-]*/i, "")
    .replace(/^nueva\s+categor[ií]a\b[:\s-]*/i, "")
    .trim();
}

function normalizeCommandText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function appendSessionNote(chatId: number, note: string) {
  const session = getChatSession(chatId);
  const trimmedNote = note.trim();

  if (session.mode === "category" && !session.categoryName) {
    session.categoryName = trimmedNote.split(/\r?\n/)[0]?.trim().slice(0, 120) || undefined;
  }

  session.notes.push(trimmedNote);
  session.updatedAt = Date.now();

  while (session.notes.length > MAX_SESSION_NOTES) {
    session.notes.shift();
  }

  while (session.notes.join("\n\n").length > MAX_SESSION_CHARS && session.notes.length > 1) {
    session.notes.shift();
  }
}

function getSessionText(chatId: number) {
  const session = getExistingChatSession(chatId);

  if (!session || session.notes.length === 0) {
    return "";
  }

  return session.notes
    .map((note, index) => `Nota ${index + 1} de Borja:\n${note}`)
    .join("\n\n---\n\n");
}

function getMeaningfulNotes(session: SessionState) {
  return session.notes.filter((note) => {
    const trimmedNote = note.trim();
    return trimmedNote.length > 0 && !trimmedNote.toLowerCase().startsWith("categoria indicada por borja:");
  });
}

function hasEnoughContentForFile(session: SessionState) {
  const meaningfulNotes = getMeaningfulNotes(session);
  const totalChars = meaningfulNotes.join("\n\n").trim().length;

  if (session.mode === "category") {
    return meaningfulNotes.length >= 1 && totalChars >= 180;
  }

  return meaningfulNotes.length >= 1 && totalChars >= 120;
}

function formatSavedNotePreview(note: string) {
  const compactNote = note.replace(/\s+/g, " ").trim();
  const preview = compactNote.length > 220 ? `${compactNote.slice(0, 220)}...` : compactNote;

  return `Registrado: ${preview}`;
}

function getChatSession(chatId: number) {
  cleanupExpiredSessions();

  const key = String(chatId);
  const currentSession = sessionStore.get(key);

  if (currentSession) {
    return currentSession;
  }

  const session: SessionState = { mode: "tool", notes: [], updatedAt: Date.now() };
  sessionStore.set(key, session);
  return session;
}

function getExistingChatSession(chatId: number) {
  cleanupExpiredSessions();
  return sessionStore.get(String(chatId));
}

function clearSession(chatId: number) {
  sessionStore.delete(String(chatId));
}

function startCategorySession(chatId: number, categoryName?: string) {
  const session: SessionState = {
    mode: "category",
    notes: [],
    updatedAt: Date.now(),
    categoryName: categoryName || undefined
  };

  if (categoryName) {
    session.notes.push(`Categoria indicada por Borja: ${categoryName}`);
  }

  sessionStore.set(String(chatId), session);
}

function getModeLabel(mode: SessionMode) {
  return mode === "category" ? "categoria" : "herramienta";
}

function cleanupExpiredSessions() {
  const now = Date.now();

  for (const [key, session] of sessionStore.entries()) {
    if (now - session.updatedAt > SESSION_TTL_MS) {
      sessionStore.delete(key);
    }
  }
}

function getAudioFileId(message: TelegramMessage) {
  if (message.voice?.file_id) {
    return message.voice.file_id;
  }

  if (message.audio?.file_id) {
    return message.audio.file_id;
  }

  if (message.document?.file_id && message.document.mime_type?.startsWith("audio/")) {
    return message.document.file_id;
  }

  return null;
}

async function transcribeTelegramAudio(fileId: string) {
  const token = getRequiredEnv("TELEGRAM_BOT_TOKEN");
  const fileResponse = await fetch(`https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`);
  const filePayload = await fileResponse.json();
  const filePath = filePayload?.result?.file_path;

  if (!fileResponse.ok || !filePath) {
    throw new Error("Telegram did not return a downloadable file path");
  }

  const audioResponse = await fetch(`https://api.telegram.org/file/bot${token}/${filePath}`);

  if (!audioResponse.ok) {
    throw new Error("Could not download Telegram audio");
  }

  const audioBlob = await audioResponse.blob();
  const formData = new FormData();
  formData.append("model", process.env.OPENAI_TRANSCRIPTION_MODEL || "gpt-4o-mini-transcribe");
  formData.append("file", audioBlob, getOpenAiAudioFileName(filePath));

  const transcriptionResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getRequiredEnv("OPENAI_API_KEY")}`
    },
    body: formData
  });

  if (!transcriptionResponse.ok) {
    throw new Error(await transcriptionResponse.text());
  }

  const transcription = await transcriptionResponse.json();
  return String(transcription.text || "");
}

async function loadLaborjatorioContext() {
  const entries = await Promise.all(
    CONTEXT_FILES.map(async (filePath) => {
      const absolutePath = path.join(process.cwd(), filePath);
      const content = await readFile(absolutePath, "utf8");
      const trimmedContent =
        content.length > MAX_CONTEXT_CHARS_PER_FILE
          ? `${content.slice(0, MAX_CONTEXT_CHARS_PER_FILE)}\n\n[Contexto truncado para el MVP]`
          : content;

      return `# ${filePath}\n\n${trimmedContent}`;
    })
  );

  return entries.join("\n\n---\n\n");
}

async function generateLaborjatorioDraft(rawNotes: string, context: string) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getRequiredEnv("OPENAI_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_DRAFT_MODEL || "gpt-4.1-mini",
      instructions:
        [
          "Eres el asistente editorial del Laborjatorio.",
          "Tu trabajo no es escribir el articulo final: preparas un paquete editorial para Claude a partir de notas de Borja.",
          "Ese paquete debe ayudar a Claude a escribir despues, pero no debe sustituir el criterio final de Borja.",
          "Regla central: no inventes experiencia, no rellenes huecos y no conviertas una nota breve en articulo final.",
          "Distingue siempre hechos confirmados, conocimiento externo objetivo y dudas pendientes.",
          "Puedes usar conocimiento general solo para datos objetivos: enlace oficial, categoria aproximada o funcion basica.",
          "Nunca presentes como experiencia de Borja algo que Borja no haya dicho.",
          "Prohibido inventar alternativas probadas, limitaciones vividas, precio percibido, valoracion personal, frustraciones, casos de uso, veredictos emocionales o recomendaciones fuertes.",
          "Evita lenguaje de marketing y SaaS: simplifica tu vida digital, aliado silencioso, herramienta imprescindible, solucion ideal, potente y versatil, para profesores ocupados.",
          "Escribe claro, directo, conversacional, practico y honesto. La experiencia de Borja pesa mas que la descripcion tecnica.",
          "Trata las transcripciones como fuente de informacion y fuente de voz: conserva expresiones, comparaciones, bromas, juicios, frustraciones y formas particulares de explicar si funcionan.",
          "Antes de preparar el paquete, identifica frases literales o casi literales que Claude deberia conservar y no traduzcas la voz de Borja a lenguaje corporativo.",
          "Detecta posibles patrones de Borjismo solo si aparecen varias veces en las notas acumuladas. Si aparecen una sola vez, registralos como expresiones utiles para esta ficha, no como patron.",
          "No modifiques propuestas-borjismo.md desde Telegram. Solo puedes sugerir candidatos dentro del paquete editorial si hay evidencia repetida.",
          "En el apartado de respuestas de Borja, separa la voz que conviene conservar de los posibles patrones de Borjismo.",
          "Si no hay evidencia repetida para proponer patrones, dilo claramente: no hay patrones registrables todavia.",
          "Cuando Borja pegue mas adelante un articulo final de Claude, entonces se convertira en ficha web, se actualizaran archivos y se preparara el commit. Ahora no hagas eso."
        ].join(" "),
      input: `Contexto obligatorio del repositorio:\n\n${context}\n\nNotas brutas recibidas por Telegram:\n\n${rawNotes}\n\nGenera un paquete editorial para Claude. No generes el articulo final, no generes ficha web definitiva y no prepares commit.\n\nSigue este proceso:\n\n1. Extrae solo hechos confirmados por Borja. No anadas nada no mencionado.\n2. Separa respuestas literales o casi literales de Borja de datos utiles objetivos.\n3. Identifica dudas resueltas y dudas todavia pendientes.\n4. Prepara instrucciones claras para que Claude escriba mas adelante sin inventar experiencia.\n5. Haz maximo 3 preguntas si faltan datos importantes.\n\nResponde con esta estructura exacta:\n\nConfirmacion breve: una frase corta.\n\n# Paquete editorial para Claude\n\n## 1. Hechos confirmados\n\n- Lista solo hechos que Borja ha dicho claramente.\n- Si algo es inferencia, marcalo como inferencia.\n\n## 2. Respuestas de Borja\n\n- Recoge las respuestas, frases o ideas de Borja que conviene conservar.\n- No las mejores ni las conviertas en copy.\n\n## 3. Dudas resueltas\n\n- Lista las dudas que las notas ya resuelven.\n- Si no hay dudas resueltas suficientes, dilo.\n\n## 4. Datos utiles\n\n- Datos objetivos que pueden ayudar a Claude: enlace oficial, categoria aproximada, funcion basica, estado provisional, etiquetas posibles.\n- Marca como Pendiente cualquier dato no confirmado.\n- Usa alternatives: [] si Borja no ha mencionado alternativas o si no estan en el inventario.\n\n## 5. Tono deseado\n\n- Indica el tono Laborjatorio que debe usar Claude: claro, directo, conversacional, practico, honesto, sin lenguaje corporativo ni ficha SaaS.\n- Incluye una advertencia breve sobre evitar frases genericas.\n\n## 6. Estructura esperada\n\n- Propón una estructura para el futuro articulo de Claude.\n- Debe priorizar experiencia real de Borja antes que descripcion tecnica.\n- Si falta informacion, indica que Claude debe escribir una version incompleta o pedir mas datos, no inventar.\n\n## 7. Advertencias para Claude\n\n- Incluye advertencias explicitas: no inventar experiencia, no rellenar huecos, no atribuir a Borja limitaciones/precios/alternativas/veredictos no mencionados.\n- Indica que el articulo final debe dejar como Pendiente lo no confirmado.\n\n## Preguntas pendientes para Borja\n\n1. Maximo tres preguntas concretas para completar experiencia real.\n2. Prioriza problema resuelto, alternativa anterior, molestia, pago o estado si falta.\n3. No hagas preguntas genericas.\n\n# Opciones\n\nAMPLIAR - responder a las preguntas y enriquecer el paquete.\nCREAR ARCHIVO - generar el archivo Markdown para subirlo a Claude.\nERROR - indicar que hay algo mal y mandar una correccion.\nDESCARTAR - no seguir con esta herramienta.\n\nEstados permitidos para clasificacion provisional: Imprescindible si Borja no podria trabajar normalmente sin ella; Importante si la usa a menudo y aporta valor claro; Secundaria si la usa de vez en cuando; En prueba si todavia no tiene criterio suficiente; Abandonada si ya no la usa.`,
      store: false
    })
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const payload = await response.json();
  return extractResponseText(payload);
}

async function generateCategoryDraft(rawNotes: string, context: string, categoryName?: string) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getRequiredEnv("OPENAI_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_DRAFT_MODEL || "gpt-4.1-mini",
      instructions:
        [
          "Eres el asistente editorial del Laborjatorio.",
          "Tu trabajo es preparar paquetes editoriales para paginas de categoria del Laborjatorio.",
          "Una pagina de categoria no es una ficha de herramienta, no es una coleccion de herramientas y no es un listado SEO.",
          "Es una pagina pilar centrada en un problema real de un profesor online.",
          "Las herramientas aparecen como apoyo, no como protagonistas.",
          "La pregunta central es: como resuelve Borja este problema y que herramientas utiliza para hacerlo.",
          "No inventes experiencia, resultados, casos reales, filosofia personal ni herramientas usadas por Borja.",
          "Si faltan datos, haz preguntas concretas. Maximo 3 preguntas por iteracion.",
          "Prioriza experiencias, errores, aprendizajes, cambios de opinion, filosofia personal, casos reales y decisiones.",
          "Evita keyword stuffing, lenguaje corporativo, listados genericos y tono de enciclopedia.",
          "La pagina debe seguir siendo util aunque se quitaran todos los enlaces a herramientas.",
          "No generes el articulo final. Prepara un paquete editorial para Claude."
        ].join(" "),
      input: `Contexto obligatorio del repositorio:\n\n${context}\n\nCategoria o necesidad indicada:\n\n${categoryName || "Pendiente de confirmar"}\n\nNotas brutas acumuladas por Telegram:\n\n${rawNotes}\n\nGenera un paquete editorial de categoria para Claude. No generes el articulo final, no generes ficha web definitiva y no prepares commit.\n\nResponde con esta estructura exacta:\n\nConfirmacion breve: una frase corta.\n\n# Paquete editorial de categoria para Claude\n\n## Nombre de la categoria\n\n- Nombre recomendado.\n- Si el nombre no esta claro, marca Pendiente y explica por que.\n\n## Problema principal\n\n- Resume el problema real que intenta resolver esta pagina.\n- No lo conviertas en una lista de herramientas.\n\n## Perfil del lector\n\n- Que situacion vive.\n- Que busca.\n- Que frustraciones tiene.\n\n## Experiencia de Borja\n\n- Historias, errores, aprendizajes, resultados o cambios de opinion confirmados por Borja.\n- Si falta experiencia real, dilo claramente.\n\n## Filosofia personal\n\n- Principios, criterios, formas de trabajar y opiniones relevantes confirmadas por Borja.\n- No inventes creencias.\n\n## Casos reales\n\n- Ejemplos concretos, proyectos relacionados o situaciones vividas.\n- Marca Pendiente si no hay suficientes casos.\n\n## Herramientas relacionadas\n\n### Imprescindibles\n\n- Solo herramientas mencionadas por Borja o claramente presentes en el inventario con estado imprescindible y relacion directa.\n\n### Importantes\n\n- Solo herramientas mencionadas por Borja o claramente presentes en el inventario con estado importante y relacion directa.\n\n### Opcionales\n\n- Solo herramientas mencionadas por Borja o claramente presentes en el inventario con estado opcional/secundario y relacion directa.\n\n## Oportunidades de enlazado interno\n\n- Herramientas o paginas que deberian enlazarse desde esta categoria.\n- No fuerces enlaces.\n\n## Categorias relacionadas\n\n- Otras categorias del Laborjatorio que podrian enlazarse.\n- Explica brevemente la relacion.\n\n## Ideas SEO detectadas\n\n- Orientacion editorial, no keyword stuffing.\n- Incluye necesidades, preguntas y formulaciones naturales del lector.\n\n## FAQ potencial\n\n- Preguntas frecuentes detectadas durante la conversacion.\n- Solo preguntas utiles para la pagina pilar.\n\n## Instrucciones para Claude\n\n- Tipo de contenido: pagina de categoria, no ficha de herramienta.\n- Funcion estrategica: pagina pilar centrada en un problema real.\n- Longitud recomendada: entre 1000 y 2000 palabras; la utilidad manda, no la longitud.\n- Filosofia editorial: no enciclopedia, no listado, no comparador generico.\n- Estructura sugerida: Introduccion; Por que esta categoria importa; Mi experiencia; Errores habituales; Mi forma de entender este problema; Herramientas que utilizo; Si empezara hoy desde cero; Conclusion.\n- Regla principal: las categorias no son colecciones de herramientas, son colecciones de decisiones.\n- Comprobacion final: la pagina debe seguir siendo util si se eliminaran todos los enlaces a herramientas.\n\n## Preguntas pendientes para Borja\n\n1. Maximo tres preguntas concretas para completar experiencia real.\n2. Prioriza problema, experiencia, filosofia, casos reales y herramientas relacionadas.\n3. No hagas preguntas genericas.\n\n# Opciones\n\nAMPLIAR - responder a las preguntas y enriquecer el paquete.\nCREAR ARCHIVO - generar el archivo Markdown para subirlo a Claude.\nERROR - indicar que hay algo mal y mandar una correccion.\nDESCARTAR - no seguir con esta categoria.`,
      store: false
    })
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const payload = await response.json();
  return extractResponseText(payload);
}

function extractResponseText(payload: unknown) {
  const responsePayload = payload as { output_text?: unknown };

  if (
    typeof payload === "object" &&
    payload !== null &&
    typeof responsePayload.output_text === "string"
  ) {
    return responsePayload.output_text;
  }

  const outputItems = (payload as { output?: Array<{ content?: Array<{ text?: unknown; type?: string }> }> }).output;
  const outputText = outputItems
    ?.flatMap((item) => item.content || [])
    .map((content) => content.text)
    .filter((text): text is string => typeof text === "string")
    .join("\n\n");

  if (outputText) {
    return outputText;
  }

  return JSON.stringify(payload, null, 2);
}

function formatTelegramDraftResponse(draft: string, mode: SessionMode) {
  const modeTitle = mode === "category" ? "CATEGORIA" : "HERRAMIENTA";

  return `LABORJATORIO / ${modeTitle}\n\n${draft}\n\n---\n\nResponde con AMPLIAR, CREAR ARCHIVO, ERROR o DESCARTAR. En este MVP no se publicara nada automaticamente: sirve para preparar el paquete editorial sin tocar GitHub.`;
}

function formatTelegramInterviewResponse(draft: string, mode: SessionMode) {
  const confirmation = extractSection(
    draft,
    /Confirmacion breve:\s*/i,
    /\n\s*# Paquete editorial para Claude/i
  );
  const questions = extractSection(
    draft,
    /## Preguntas pendientes para Borja\s*/i,
    /\n\s*# Opciones/i
  );

  return [
    "He procesado lo que me has enviado.",
    "",
    confirmation ? `Resumen: ${confirmation}` : `Resumen: ya tengo contexto acumulado para esta ${getModeLabel(mode)}.`,
    "",
    "Preguntas para afinar antes de crear el archivo:",
    "",
    questions || "No veo preguntas imprescindibles ahora mismo. Si estas conforme, puedo crear el archivo.",
    "",
    "Opciones:",
    "",
    "AMPLIAR - responder a estas preguntas o anadir mas informacion.",
    "CREAR ARCHIVO - generar el Markdown completo para subirlo a Claude.",
    "ERROR - decirme que dato esta mal y corregirlo.",
    `DESCARTAR - borrar esta ${getModeLabel(mode)} y empezar otra.`
  ].join("\n");
}

function extractSection(text: string, startPattern: RegExp, endPattern: RegExp) {
  const startMatch = startPattern.exec(text);

  if (!startMatch || startMatch.index < 0) {
    return "";
  }

  const startIndex = startMatch.index + startMatch[0].length;
  const rest = text.slice(startIndex);
  const endMatch = endPattern.exec(rest);
  const section = endMatch ? rest.slice(0, endMatch.index) : rest;

  return section.trim();
}

function buildDraftFileName(draft: string) {
  const titleMatch = draft.match(/Confirmacion breve:\s*(.+)/i);
  const title = titleMatch?.[1] || "paquete-editorial-laborjatorio";
  const slug = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

  return `${slug || "paquete-editorial-laborjatorio"}.md`;
}

async function sendTelegramMarkdownDocument(chatId: number | string, markdown: string, fileName: string) {
  const token = getRequiredEnv("TELEGRAM_BOT_TOKEN");
  const formData = new FormData();
  const caption = [
    "Archivo Markdown del paquete editorial.",
    "Descargalo y subelo a Claude cuando quieras redactar el articulo."
  ].join("\n");

  formData.append("chat_id", String(chatId));
  formData.append("caption", caption.slice(0, TELEGRAM_DOCUMENT_CAPTION_LIMIT));
  formData.append("document", new Blob([markdown], { type: "text/markdown;charset=utf-8" }), fileName);

  const response = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
}

async function sendLongTelegramMessage(chatId: number | string, text: string) {
  const chunks = splitIntoTelegramChunks(text);

  for (const chunk of chunks) {
    await sendTelegramMessage(chatId, chunk);
  }
}

function splitIntoTelegramChunks(text: string) {
  const chunks: string[] = [];
  let remaining = text;

  while (remaining.length > MAX_TELEGRAM_CHARS) {
    const paragraphBreak = remaining.lastIndexOf("\n\n", MAX_TELEGRAM_CHARS);
    const lineBreak = remaining.lastIndexOf("\n", MAX_TELEGRAM_CHARS);
    const splitAt = paragraphBreak > 0 ? paragraphBreak : lineBreak > 0 ? lineBreak : MAX_TELEGRAM_CHARS;

    chunks.push(remaining.slice(0, splitAt).trim());
    remaining = remaining.slice(splitAt).trim();
  }

  if (remaining) {
    chunks.push(remaining);
  }

  return chunks;
}

async function sendTelegramMessage(chatId: number | string, text: string) {
  const token = getRequiredEnv("TELEGRAM_BOT_TOKEN");
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true
    })
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
}

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getOpenAiAudioFileName(filePath: string) {
  const fileName = path.basename(filePath);

  if (fileName.toLowerCase().endsWith(".oga")) {
    return fileName.replace(/\.oga$/i, ".ogg");
  }

  return fileName;
}

function formatErrorMessage(error: unknown) {
  const rawMessage = error instanceof Error ? error.message : String(error);
  const safeMessage = rawMessage
    .replace(/Bearer\s+[A-Za-z0-9._-]+/g, "Bearer [oculto]")
    .replace(/sk-[A-Za-z0-9._-]+/g, "sk-[oculto]")
    .replace(/github_pat_[A-Za-z0-9_]+/g, "github_pat_[oculto]")
    .replace(/bot\d+:[A-Za-z0-9_-]+/g, "bot[oculto]");

  return [
    "Ha fallado la automatizacion del Laborjatorio, pero ya sin bucle.",
    "",
    "Error resumido:",
    safeMessage.slice(0, 1200),
    "",
    "Mandame este mensaje tal cual y lo ajusto."
  ].join("\n");
}
