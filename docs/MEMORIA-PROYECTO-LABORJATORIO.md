# Memoria del proyecto LABORJATORIO

Este documento es la memoria viva del proyecto. Debe actualizarse al final de cada sesion de trabajo relevante para que, al abrir un nuevo chat, podamos recuperar rapidamente el estado real de LABORJATORIO sin depender de memoria suelta, intuiciones o arqueologia de conversaciones.

## Documentos obligatorios

Antes de trabajar en el proyecto hay que leer:

1. `docs/BORJISMO_UNIVERSAL.md`
2. `docs/fundamentos-laborjatorio.md`
3. `docs/MEMORIA-PROYECTO-LABORJATORIO.md`
4. `docs/SEO-LABORATORIO.md`
5. `docs/Herramientas.md`

Si hay contradicciones entre documentos, hay que avisar antes de continuar.

## Estado general

LABORJATORIO es una web/directorio curado de herramientas para profesores de idiomas, especialmente profesores de espanol, construido desde el criterio de Borja.

No es un comparador generico ni una lista fria de software. Debe funcionar como una biblioteca util, opinada y mantenible.

## Stack y estructura

- Next.js.
- TypeScript.
- Tailwind CSS.
- Contenido pensado para SEO y mantenimiento sencillo.
- Despliegue en Vercel.
- Documentacion principal en `docs/`.

Archivos estrategicos actuales:

- `CODEX_INSTRUCTIONS.md`
- `docs/BORJISMO_UNIVERSAL.md`
- `docs/fundamentos-laborjatorio.md`
- `docs/SEO-LABORATORIO.md`
- `docs/Herramientas.md`
- `docs/MEMORIA-PROYECTO-LABORJATORIO.md`

## Decisiones ya tomadas

- La carpeta fuente del proyecto es `C:\Users\borja\OneDrive\Documentos\LABORJATORIO`.
- No trabajar desde `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE`.
- Vercel despliega desde GitHub: `https://github.com/boreas77/laborjatorio.git`.
- La rama de trabajo principal es `main`.
- La web publicada es `https://laborjatorio.vercel.app/`.
- LABORJATORIO debe priorizar utilidad real para profesores por encima de sofisticacion tecnica.
- La tecnologia es un medio, no el centro del proyecto.
- El valor diferencial esta en el criterio de Borja.
- La voz debe seguir el Borjismo Universal.
- Cada ficha de herramienta debe tener opinion, uso real o uso razonado, limites, ventajas y veredicto honesto.
- El proyecto debe conectar de forma natural con `borjaprofe.com`.
- La primera version debe ser pequena, clara y publicable.
- No construir todavia login, panel de administracion, base de datos compleja, usuarios, pagos ni comentarios.

## Cambios recientes

### 2026-06-03

- Se empezo la automatizacion Telegram para crear borradores de fichas del Laborjatorio desde texto o audio.
- Se creo la ruta `src/app/api/telegram/laborjatorio/route.ts`.
- El MVP funciona en modo solo borrador: recibe mensajes, transcribe audios, consulta los documentos obligatorios y devuelve una ficha Markdown por Telegram.
- No modifica archivos del repositorio, no hace commits, no hace push y no publica automaticamente.
- Se documento el sistema en `docs/AUTOMATIZACION-TELEGRAM-LABORJATORIO.md`.
- Variables necesarias para probar: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `TELEGRAM_WEBHOOK_SECRET` y `OPENAI_API_KEY`.
- Se detecto que la copia ligera local no tiene `node_modules`, por lo que `npm run typecheck` no puede ejecutarse hasta instalar dependencias.

### 2026-06-02

- Se confirmo el flujo correcto del proyecto: trabajar siempre desde `C:\Users\borja\OneDrive\Documentos\LABORJATORIO`, subir a GitHub `https://github.com/boreas77/laborjatorio.git` en la rama `main` y dejar que Vercel despliegue `https://laborjatorio.vercel.app/`.
- Se detecto que `MI TALLER DE ELE` era una copia antigua que tambien apuntaba al mismo remoto de GitHub, lo que podia provocar confusion y pushes accidentales.
- Se comprobo que `LABORJATORIO` estaba en el commit mas reciente: `736912d Actualiza copy de la home`.
- Se intento borrar `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE`, pero la sesion de Codex bloqueo el borrado recursivo.
- Para neutralizar el riesgo, se renombro `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE\.git` a `.git-desactivado`.
- Resultado: `MI TALLER DE ELE` ya no es un repositorio Git funcional y no puede hacer `push` por accidente.
- Se confirmo que `LABORJATORIO` conserva el remoto correcto `https://github.com/boreas77/laborjatorio.git`.
- Se confirmo que `docs/SEO-LABORATORIO.md` y `docs/Herramientas.md` existen y forman parte del contexto obligatorio.
- `docs/Herramientas.md` registra 43 herramientas actuales.
- Se hizo commit local del copy de la home con el mensaje `Actualiza copy de la home` y Borja ejecuto `git push` desde PowerShell en la carpeta `LABORJATORIO`.
- Se verifico la web publicada en Vercel: ya aparecen los textos nuevos de la home y ya no aparece el copy antiguo.

### 2026-06-01

- Se creo la carpeta nueva del proyecto en `C:\Users\borja\OneDrive\Documentos\LABORJATORIO`.
- La carpeta nueva se copio sin `node_modules`, `.next` ni `logs`, por lo que quedo mucho mas ligera y conserva los archivos relevantes del proyecto.
- Se actualizo el copy principal de la home con el documento `copy-home-laborjatorio.md`.
- La home ahora abre con "Has entrado al Laborjatorio" y presenta el proyecto como directorio de herramientas para profesores de idiomas, sin rankings ni promesas de comparador.
- Se rehizo la FAQ de la home con preguntas nuevas sobre afiliados, tipo de herramientas, busqueda y expectativas reales.
- Se actualizo el aviso global de afiliacion con referencia a Duna y el tagline del pie: "Herramientas probadas con criterio de profe. Sin solemnidad innecesaria."
- Archivos modificados: `src/app/page.tsx`, `src/data/site.ts`, `src/components/SiteFooter.tsx`, `src/app/globals.css` y `docs/MEMORIA-PROYECTO-LABORJATORIO.md`.
- Se sustituyo `docs/BORJISMO_UNIVERSAL.md` por una version mucho mas completa, basada en analisis de emails y cartas de venta de Borja.
- Se actualizo `CODEX_INSTRUCTIONS.md` para obligar a leer `BORJISMO_UNIVERSAL.md`, `fundamentos-laborjatorio.md` y esta memoria al empezar cada nuevo chat de trabajo.

## Pendiente inmediato

- Borrar manualmente la carpeta antigua `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE` cuando Windows lo permita. Ahora mismo esta neutralizada porque su carpeta `.git` fue renombrada a `.git-desactivado`.
- Mantener actualizado `docs/Herramientas.md` cuando se incorporen, descarten o reclasifiquen herramientas.
- Actualizar esta memoria al cerrar cada sesion de trabajo importante.
- Revisar si las paginas actuales del sitio siguen alineadas con el Borjismo Universal ampliado.

## Proximos pasos posibles

- Convertir el inventario de `docs/Herramientas.md` en una estructura editable para fichas reales del sitio.
- Revisar la home con el nuevo Borjismo Universal.
- Revisar la pagina "Sobre".
- Revisar la estructura de fichas individuales.
- Preparar una plantilla de ficha de herramienta.

## Riesgos a vigilar

- Volver a trabajar por error desde `MI TALLER DE ELE`.
- Que LABORJATORIO suene como un comparador SEO generico.
- Que la voz de Borja se convierta en una capa de chistes anadida al final.
- Que se construyan funciones tecnicas antes de tener contenido suficiente.
- Que la memoria del proyecto crezca demasiado y deje de ser util.
- Que se mezclen fundamentos estrategicos con tareas operativas sin distinguir niveles.

## Flujo de trabajo recomendado

Para futuros cambios:

1. Abrir `C:\Users\borja\OneDrive\Documentos\LABORJATORIO`.
2. Leer los documentos obligatorios.
3. Confirmar `git status`.
4. Editar archivos.
5. Ejecutar comprobaciones si procede.
6. Hacer commit.
7. Hacer `git push`.
8. Comprobar `https://laborjatorio.vercel.app/`.

Si Git dice `Your branch is ahead of 'origin/main' by 1 commit`, no falta otro commit: falta ejecutar `git push`.

Si vuelve a aparecer un problema de permisos con `.git/index.lock`, revisar permisos/propietario de `C:\Users\borja\OneDrive\Documentos\LABORJATORIO\.git` antes de perder tiempo tocando archivos de la web.

## Ultima sesion registrada

Fecha: 2026-06-02

Resumen:

- Se aclaro que la carpeta fuente del proyecto es `C:\Users\borja\OneDrive\Documentos\LABORJATORIO`.
- Se confirmo que Vercel despliega desde GitHub `boreas77/laborjatorio`.
- Se desactivo Git en `MI TALLER DE ELE` renombrando `.git` a `.git-desactivado`.
- Se actualizo esta memoria para incluir `SEO-LABORATORIO.md`, `Herramientas.md` y la neutralizacion de la carpeta antigua.

Proximo paso recomendado:

- Borrar manualmente `MI TALLER DE ELE` cuando Windows lo permita y seguir trabajando siempre desde `LABORJATORIO`.
