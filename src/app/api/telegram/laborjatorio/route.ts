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

const CONTEXT_FILES = [
  "docs/fundamentos-laborjatorio.md",
  "docs/BORJISMO_UNIVERSAL.md",
  "docs/SEO-LABORATORIO.md",
  "docs/Herramientas.md",
  "docs/MEMORIA-PROYECTO-LABORJATORIO.md"
];

const MAX_TELEGRAM_CHARS = 3800;
const MAX_CONTEXT_CHARS_PER_FILE = 18000;

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

    if (rawNotes.trim().startsWith("/start")) {
      await sendTelegramMessage(
        message.chat.id,
        "Laborjatorio listo. Enviame una nota de texto o audio sobre una herramienta y te devolvere un borrador revisable."
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

    await sendTelegramMessage(message.chat.id, "Recibido. Estoy preparando el borrador del Laborjatorio.");

    const context = await loadLaborjatorioContext();
    const draft = await generateLaborjatorioDraft(rawNotes, context);
    const response = formatTelegramDraftResponse(draft);

    await sendLongTelegramMessage(message.chat.id, response);

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
        "Eres el asistente editorial del Laborjatorio. Generas borradores de fichas Markdown para Borja a partir de notas brutas. Respetas la filosofia del proyecto, el Borjismo Universal y las reglas SEO. No publicas, no prometes cambios realizados y no inventas experiencia real: si falta informacion, lo marcas como pendiente.",
      input: `Contexto obligatorio del repositorio:\n\n${context}\n\nNotas brutas recibidas por Telegram:\n\n${rawNotes}\n\nGenera una respuesta en Markdown con esta estructura exacta:\n\n# Borrador de ficha\n\nIncluye una ficha completa y revisable para el Laborjatorio. Debe tener titulo, descripcion SEO, estado sugerido, etiquetas, enlace oficial si aparece en las notas, posible slug, y secciones editoriales utiles.\n\n# Cambios sugeridos\n\nResume si habria que crear herramienta nueva, actualizar Herramientas.md, cambiar estado, o actualizar memoria. No digas que has cambiado archivos: solo son sugerencias.\n\n# Dudas para Borja\n\nLista preguntas concretas para mejorar o aprobar la ficha.\n\n# Accion recomendada\n\nTermina preguntando si quiere aprobar, corregir o descartar el borrador.`,
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

function formatTelegramDraftResponse(draft: string) {
  return `BORRADOR DEL LABORJATORIO\n\n${draft}\n\n---\n\nResponde con APROBAR, CORREGIR o DESCARTAR. En este MVP no se publicara nada automaticamente: sirve para revisar el borrador sin tocar GitHub.`;
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
