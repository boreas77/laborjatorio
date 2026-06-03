# Automatizacion Telegram para Laborjatorio

## Objetivo del MVP

Este sistema permite enviar textos o audios a un bot de Telegram y recibir un paquete editorial para Claude.

El MVP esta disenado en modo solo borrador:

- Recibe mensajes de Telegram.
- Transcribe audios.
- Lee el contexto editorial del repositorio.
- Genera un paquete editorial Markdown revisable.
- Separa hechos confirmados, respuestas de Borja, dudas resueltas, datos utiles y advertencias.
- Hace maximo 3 preguntas para extraer experiencia real.
- Devuelve el borrador por Telegram.
- No modifica archivos.
- No hace commit.
- No hace push.
- No publica en Vercel.

La publicacion automatica queda para una segunda fase, cuando el flujo de borradores ya funcione bien.

## Arquitectura simple

La arquitectura recomendada es:

1. Bot de Telegram.
2. Webhook de Telegram apuntando a Vercel.
3. Ruta serverless de Next.js:
   - `src/app/api/telegram/laborjatorio/route.ts`
4. OpenAI:
   - transcripcion de audio.
   - generacion del paquete editorial para Claude.
5. Telegram:
   - envio del paquete editorial.
   - preguntas prioritarias.
   - opciones para ampliar, pasar a Claude o descartar.

No hay servidor dedicado, base de datos ni panel de administracion.

## Archivos que consulta

La ruta lee estos archivos del repositorio:

- `docs/fundamentos-laborjatorio.md`
- `docs/BORJISMO_UNIVERSAL.md`
- `docs/SEO-LABORATORIO.md`
- `docs/Herramientas.md`
- `docs/MEMORIA-PROYECTO-LABORJATORIO.md`

Para controlar coste y tamano de peticion, el MVP limita cada documento a los primeros 18.000 caracteres.

## Variables secretas necesarias

Obligatorias para el MVP:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `TELEGRAM_WEBHOOK_SECRET`
- `OPENAI_API_KEY`

Opcionales:

- `OPENAI_DRAFT_MODEL`
  - Valor por defecto: `gpt-4.1-mini`
- `OPENAI_TRANSCRIPTION_MODEL`
  - Valor por defecto: `gpt-4o-mini-transcribe`

Reservadas para fase 2:

- `GITHUB_TOKEN`
- `GITHUB_REPO`
- `GITHUB_BRANCH`

## Como conseguir las variables

### TELEGRAM_BOT_TOKEN

1. Abre Telegram.
2. Busca `@BotFather`.
3. Usa `/newbot`.
4. Ponle nombre y usuario al bot.
5. Copia el token que te da BotFather.

### TELEGRAM_CHAT_ID

Metodo sencillo:

1. Escribe cualquier mensaje a tu bot.
2. Abre esta URL en el navegador, sustituyendo el token:

```text
https://api.telegram.org/botTELEGRAM_BOT_TOKEN/getUpdates
```

3. Busca:

```json
"chat":{"id":123456789}
```

4. Ese numero es `TELEGRAM_CHAT_ID`.

### TELEGRAM_WEBHOOK_SECRET

Crea una cadena secreta larga. Por ejemplo, una frase sin espacios o un valor aleatorio.

Telegram la enviara en la cabecera `X-Telegram-Bot-Api-Secret-Token` y la ruta la comprobara antes de procesar el mensaje.

## Configuracion en Vercel

En el proyecto de Vercel:

1. Entra en `Settings`.
2. Entra en `Environment Variables`.
3. Anade:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `TELEGRAM_WEBHOOK_SECRET`
   - `OPENAI_API_KEY`
4. Guarda las variables para Production.
5. Haz un nuevo deploy.

La URL del webhook sera:

```text
https://laborjatorio.vercel.app/api/telegram/laborjatorio
```

## Activar el webhook de Telegram

Despues de desplegar en Vercel, abre esta URL en el navegador sustituyendo los valores:

```text
https://api.telegram.org/botTELEGRAM_BOT_TOKEN/setWebhook?url=https://laborjatorio.vercel.app/api/telegram/laborjatorio&secret_token=TELEGRAM_WEBHOOK_SECRET
```

Si todo va bien, Telegram respondera algo parecido a:

```json
{"ok":true,"result":true,"description":"Webhook was set"}
```

## Primera prueba

Envia al bot un mensaje como este:

```text
Quiero una ficha sobre Tally. Lo uso para crear formularios sencillos para profes, encuestas de alumnos y recogida de ideas para cursos. Me gusta porque es mas ligero que Google Forms y se parece un poco a Notion. No se si ponerlo como imprescindible o importante.
```

Resultado esperado:

1. El bot responde que ha recibido el mensaje.
2. Despues devuelve un borrador Markdown.
3. El borrador incluye:
   - hechos confirmados.
   - respuestas de Borja.
   - dudas resueltas.
   - datos utiles.
   - tono deseado.
   - estructura esperada.
   - advertencias para no inventar experiencia.
   - maximo 3 preguntas buenas.
   - opciones `AMPLIAR`, `PASAR A CLAUDE` o `DESCARTAR`.

Tambien puedes probar con una nota de voz diciendo lo mismo.

## Que hace y que no hace

Hace:

- convierte notas brutas en paquetes editoriales utiles para Claude.
- transcribe audios.
- usa el contexto editorial del proyecto.
- limita el bot a tu `TELEGRAM_CHAT_ID`.
- protege el webhook con `TELEGRAM_WEBHOOK_SECRET`.
- evita inventar experiencia personal no mencionada.
- evita rellenar huecos con frases genericas o de marketing.
- no genera el articulo final.

No hace todavia:

- convertir el articulo final de Claude en ficha web.
- actualizar `Herramientas.md`.
- actualizar `MEMORIA-PROYECTO-LABORJATORIO.md`.
- hacer commits.
- hacer push.
- publicar cambios.

## Fase 2 sugerida

Cuando el MVP funcione bien, la siguiente fase puede anadir aprobacion real:

1. El bot guarda el borrador pendiente.
2. Borja responde `APROBAR`.
3. Una GitHub Action o una ruta serverless crea una rama.
4. Actualiza:
   - ficha Markdown o datos de herramienta.
   - `docs/Herramientas.md`.
   - `docs/MEMORIA-PROYECTO-LABORJATORIO.md`.
5. Abre un Pull Request o hace commit directo a `main`.
6. Vercel despliega automaticamente.

Recomendacion: empezar con Pull Request, no commit directo, para conservar revision humana.

## Regla editorial actual

El bot debe comportarse como entrevistador editorial y preparador de contexto para Claude, no como redactor automatico.

Reglas principales:

- No inventar experiencia.
- No rellenar huecos.
- No convertir una nota breve en articulo final.
- Usar conocimiento externo solo para datos objetivos.
- Marcar como `Pendiente` lo que no este confirmado.
- No inventar alternativas, limitaciones, precio percibido, frustraciones, valoraciones ni recomendaciones fuertes.
- Generar un paquete editorial con hechos, respuestas, dudas, datos, tono, estructura y advertencias.
- Hacer maximo 3 preguntas para completar experiencia real.

El articulo final lo escribira Claude aparte. Cuando Borja pegue ese articulo final en Codex, entonces se hara la conversion a ficha web:

- crear o actualizar la ficha web.
- actualizar `docs/Herramientas.md` si procede.
- actualizar `docs/MEMORIA-PROYECTO-LABORJATORIO.md`.
- preparar commit.

## Motivo de esta arquitectura

Esta solucion prioriza simplicidad y coste bajo:

- Vercel Functions evita mantener un servidor.
- Telegram Bot API evita crear una interfaz propia.
- OpenAI resuelve transcripcion y borrador.
- GitHub queda fuera del MVP para no mezclar captura de ideas con publicacion.

Es suficientemente simple para probar rapido y suficientemente ordenada para crecer sin rehacerlo todo.
