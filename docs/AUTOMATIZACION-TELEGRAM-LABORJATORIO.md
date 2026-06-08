# Automatizacion Telegram para Laborjatorio

## Objetivo del MVP

Este sistema permite enviar textos o audios a un bot de Telegram y recibir un paquete editorial para Claude.

El bot tiene dos flujos paralelos:

- Fichas de herramientas.
- Paginas de categoria.

El MVP esta disenado en modo solo borrador:

- Recibe mensajes de Telegram.
- Transcribe audios.
- Acumula las ampliaciones de una misma conversacion.
- Persiste la memoria de conversacion en GitHub cuando las variables de GitHub estan configuradas.
- Lee el contexto editorial del repositorio.
- Genera un paquete editorial Markdown revisable para herramienta o categoria.
- Separa hechos confirmados, respuestas de Borja, dudas resueltas, datos utiles y advertencias.
- Hace maximo 3 preguntas para extraer experiencia real.
- Devuelve primero preguntas y opciones por Telegram.
- Solo genera el archivo Markdown descargable cuando Borja lo pide.
- Bloquea la generacion del archivo si el contexto acumulado es insuficiente.
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
   - envio de un resumen corto.
   - preguntas prioritarias.
   - opciones para ampliar, crear archivo, marcar error o descartar.
   - envio del paquete editorial como archivo `.md` cuando Borja lo pide.

No hay servidor dedicado, base de datos ni panel de administracion.

## Memoria de conversacion del MVP

El bot guarda temporalmente las notas de cada chat para que Borja pueda construir una ficha por partes:

1. Borja envia una primera nota sobre una herramienta.
2. El bot genera un primer paquete editorial y hace preguntas.
3. Borja responde con mas informacion en texto o audio.
4. El bot suma esa ampliacion al contexto anterior.
5. El bot vuelve a procesar el contexto y hace preguntas para completar experiencia real.
6. Cuando Borja escribe `CREAR ARCHIVO`, `PASAR A CLAUDE` o `PASAR A CLOD`, el bot genera el paquete usando todo lo acumulado.
7. El bot envia un mensaje breve y adjunta el paquete completo como archivo Markdown.

Comandos actuales:

- `AMPLIAR`: el bot espera mas informacion y no llama a OpenAI.
- `CREAR ARCHIVO`: genera el paquete editorial final como archivo Markdown.
- `PASAR A CLAUDE`: hace lo mismo que `CREAR ARCHIVO`.
- `PASAR A CLOD`: hace lo mismo que `CREAR ARCHIVO`, para aceptar la forma rapida dictada o escrita.
- `ERROR`: permite indicar que algo esta mal y enviar una correccion.
- `DESCARTAR`: borra el contexto acumulado y permite empezar otra herramienta.
- `/start`: reinicia la conversacion y borra el contexto acumulado.

La memoria se guarda en dos capas:

1. Memoria rapida dentro de la funcion de Vercel.
2. Memoria persistente en GitHub, si existen `GITHUB_TOKEN` y `GITHUB_REPO`.

La memoria persistente evita que el bot pierda tus audios y ampliaciones cuando Vercel cambia de instancia entre mensajes.

Por defecto, las sesiones se guardan en una rama separada:

```text
telegram-sessions
```

Se puede cambiar con:

```text
GITHUB_SESSION_BRANCH
```

Esta rama se usa como almacen tecnico de sesiones, no como contenido editorial publicable.

Proteccion importante: aunque Borja pida `CREAR ARCHIVO`, el bot no debe adjuntar un Markdown si solo tiene contexto debil, por ejemplo solo el nombre de una categoria o una nota demasiado breve. En ese caso debe pedir mas informacion antes de generar el archivo para evitar que Claude rellene huecos.

## Flujo de categorias

El flujo de categorias se activa con:

```text
CATEGORIA Nombre de la categoria
```

Tambien funciona:

```text
NUEVA CATEGORIA Nombre de la categoria
```

Ejemplos:

```text
CATEGORIA Conseguir estudiantes
```

```text
NUEVA CATEGORIA Equipar mi escritorio
```

Cuando se activa este modo, el bot abandona el flujo de fichas y empieza una memoria temporal nueva para esa categoria.

El objetivo no es preparar una ficha de herramienta. El objetivo es preparar una pagina pilar centrada en un problema real de un profesor online.

Ejemplos de categorias editoriales:

- Crear contenido.
- Crear materiales.
- Dar clases online.
- Conseguir estudiantes.
- Vender y cobrar.
- Ahorrar tiempo.
- Construir mi web.
- Equipar mi escritorio.
- Cuidarme.

En modo categoria, el bot debe recopilar:

- problema principal.
- perfil del lector.
- experiencia de Borja.
- filosofia personal.
- casos reales.
- herramientas relacionadas.
- oportunidades de enlazado interno.
- ideas SEO sin keyword stuffing.
- FAQ potencial.

Regla principal: las categorias no son colecciones de herramientas. Son colecciones de decisiones.

La pagina debe responder:

```text
Como resuelve Borja este problema y que herramientas utiliza para hacerlo.
```

Las herramientas aparecen como consecuencia, no como protagonistas.

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
- `GITHUB_SESSION_BRANCH`
  - Valor por defecto: `telegram-sessions`

Reservadas para fase 2:

- `GITHUB_TOKEN`
- `GITHUB_REPO`
- `GITHUB_BRANCH`

Nota: aunque `GITHUB_TOKEN`, `GITHUB_REPO` y `GITHUB_BRANCH` nacieron como variables de fase 2, el bot ya usa `GITHUB_TOKEN` y `GITHUB_REPO` para guardar memoria persistente de conversaciones.

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
2. Despues devuelve un resumen breve.
3. Hace hasta 3 preguntas para completar experiencia real.
4. Ofrece opciones:
   - `AMPLIAR`
   - `CREAR ARCHIVO`
   - `ERROR`
   - `DESCARTAR`
5. Si respondes `CREAR ARCHIVO`, adjunta un archivo `.md` con el paquete editorial completo.
6. El archivo incluye:
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

Para probar la memoria:

1. Envia una nota inicial sobre una herramienta.
2. Responde a una de las preguntas del bot con otra nota.
3. Envia otra ampliacion si hace falta.
4. Escribe `CREAR ARCHIVO` o `PASAR A CLOD`.
5. Descarga el archivo `.md`.
6. Comprueba que el paquete incluye la informacion de todas las notas anteriores, no solo la ultima frase.

Para probar categorias:

1. Envia:

```text
CATEGORIA Conseguir estudiantes
```

2. Envia notas o audios sobre por que ese problema importa, errores habituales, experiencia real, filosofia y herramientas relacionadas.
3. Responde a las preguntas del bot.
4. Escribe `CREAR ARCHIVO`.
5. Descarga el archivo `.md` y subelo a Claude.

Resultado esperado: el archivo debe decir que es una pagina de categoria, no una ficha de herramienta. Debe centrarse en el problema y en el criterio de Borja, con herramientas como apoyo.

## Que hace y que no hace

Hace:

- convierte notas brutas en paquetes editoriales utiles para Claude.
- genera paquetes para fichas de herramientas.
- genera paquetes para paginas de categoria.
- transcribe audios.
- acumula ampliaciones de una misma herramienta o categoria durante la conversacion.
- recupera la conversacion aunque Vercel cambie de instancia, siempre que la memoria persistente de GitHub este configurada.
- hace preguntas antes de generar el archivo final.
- confirma con una vista previa breve que la nota enviada ha quedado registrada.
- bloquea archivos demasiado vacios o pobres antes de enviarlos a Claude.
- envia el paquete como archivo Markdown descargable para subirlo a Claude solo cuando Borja lo pide.
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
