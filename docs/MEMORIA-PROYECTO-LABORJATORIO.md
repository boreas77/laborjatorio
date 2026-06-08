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

- La carpeta fuente activa del proyecto para Codex es `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE`.
- El contenido reciente de `LABORJATORIO` fue copiado a `MI TALLER DE ELE` para trabajar desde la carpeta que Codex abre por defecto.
- `C:\Users\borja\OneDrive\Documentos\LABORJATORIO` queda como referencia/copia externa, pero no debe usarse como carpeta principal mientras esta configuracion siga asi.
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

### 2026-06-06

- Se reorganizo la arquitectura publica de LABORJATORIO alrededor de necesidades del usuario, no de categorias tecnicas.
- La Home mantiene el hero visual existente: imagen superior del laboratorio, recuadro con "Has entrado al Laborjatorio" y entradilla editorial. No se debe sustituir ese primer impacto por una home nueva.
- La entradilla actual de la Home conserva los dos primeros parrafos historicos y elimina el antiguo cierre "Te lo cuento todo aqui abajo...".
- La Home ya no tiene el buscador grande bajo la entradilla. La busqueda se movio a la navegacion mediante `HeaderSearch`.
- La navegacion principal queda reducida a logo + `Inventario` + `Sobre mi` + icono de busqueda. No debe volver a aparecer una pestana `Inicio`; el logo lleva a la Home.
- En movil, la navegacion debe mantenerse en una sola linea siempre que sea posible: logo a la izquierda, enlaces e icono de busqueda a la derecha.
- Se creo la ruta `/buscar`, con `src/app/buscar/page.tsx`, para buscar dentro de herramientas, categorias tecnicas y paginas del sitio.
- La logica de busqueda vive en `src/lib/search.ts` y devuelve resultados agrupados en herramientas, categorias y paginas.
- `HeaderSearch` vive en `src/components/HeaderSearch.tsx`. Es un boton con icono que despliega un formulario hacia `/buscar`.
- La Home muestra 9 bloques de necesidad con iconos SVG monocolor, sobrios y no infantilizados:
  1. Crear contenido
  2. Crear materiales
  3. Dar clases online
  4. Conseguir estudiantes
  5. Vender y cobrar
  6. Ahorrar tiempo
  7. Construir mi web
  8. Mi escritorio
  9. Cuidarme
- Esas necesidades se centralizaron en `src/data/needs.ts`, junto con su `slug`, descripcion, icono y lista temporal de herramientas relacionadas.
- Las tarjetas de la Home ya no apuntan a una busqueda generica: apuntan a paginas reales de necesidad:
  - `/crear-contenido`
  - `/crear-materiales`
  - `/dar-clases-online`
  - `/conseguir-estudiantes`
  - `/vender-y-cobrar`
  - `/ahorrar-tiempo`
  - `/construir-mi-web`
  - `/mi-escritorio`
  - `/cuidarme`
- Se creo `src/app/[needSlug]/page.tsx` como solucion temporal para esas paginas de necesidad.
- Mientras Borja no escriba los articulos largos de cada necesidad, cada pagina muestra una cabecera breve y el mismo feed de fichas que Inventario, filtrado por las herramientas relacionadas con esa necesidad.
- Esta solucion temporal debe sustituirse mas adelante por paginas editoriales largas: articulo, filosofia, experiencia de Borja, reflexiones y enlaces naturales a fichas de herramientas.
- Se creo `/inventario` como pagina principal de todas las herramientas.
- `/inventario` sustituye conceptualmente a la antigua pagina `Herramientas`. Debe sentirse como inventario vivo / cuaderno de taller, no como directorio SEO.
- El Inventario muestra herramientas en orden cronologico inverso usando `publishedAt` cuando exista; si no existe, usa `updatedAt`. Para nuevas fichas, anadir `publishedAt` con fecha y hora de publicacion para que la ultima publicada quede arriba aunque comparta dia con otras.
- Si varias fichas empatan tambien en fecha/hora interna, gana la que aparece mas abajo en `src/data/tools.ts`.
- Las fechas de actualizacion no se muestran en las tarjetas del Inventario ni en las fichas: son metadato interno, no informacion util para el profe que entra.
- El componente compartido `src/components/InventoryFeed.tsx` renderiza el feed de fichas para Inventario y para paginas temporales de necesidad.
- `InventoryFeed` acepta textos adaptables para el buscador y el contador (`searchLabel`, `countLabel`) para poder decir "Buscar dentro de esta categoria" y "en esta categoria" cuando se usa en paginas de necesidad.
- `/herramientas` redirige a `/inventario`, conservando el parametro `q` si existe.
- Las fichas individuales siguen viviendo en `/herramientas/[slug]` por compatibilidad. No renombrarlas todavia.
- El sitemap incluye `/inventario`, `/sobre`, la Home y las 9 paginas temporales de necesidad.
- El CTA final de la Home quedo asi:
  - Titular: "Y esas son las herramientas que utilizo en mi dia a dia."
  - Texto: "Si quieres ver como las uso para ayudar a estudiantes y a otros profes, puedes comprobarlo aqui.", con "como las uso para ayudar a estudiantes y a otros profes" en negrita.
  - Boton: "Ir a Borjaprofe.com".
- Se incorporo la imagen de Borja en el laboratorio como imagen real del CTA final de la Home y como icono/social provisional del sitio. La version optimizada para web vive en `public/images/laborjatorio-borja-avatar.jpg` y sustituye al avatar provisional anterior en los metadatos.
- La pagina `/sobre` no debe mostrar por ahora imagen ni hueco reservado para foto de Borja. Si se incorpora mas adelante, debe hacerse como decision nueva, no como placeholder.
- Se verifico en local que `/crear-materiales` muestra Canva y ChatGPT, `/mi-escritorio` muestra Logitech C920 y la Home enlaza a las rutas reales de necesidad.
- Se verifico que `npm.cmd run typecheck` y `npm.cmd run build` pasan. `next build` mantiene un warning ya conocido de Turbopack sobre `next.config.ts` trazado desde la ruta del bot de Telegram.
- Produccion se comprobo durante la sesion en `https://laborjatorio.com` tras los despliegues principales.
- Hay cambios locales sin commitear ajenos a esta reorganizacion en `.gitignore`, `CODEX_INSTRUCTIONS.md`, `docs/BORJISMO_UNIVERSAL.md` y `src/app/layout.tsx`. No deben revertirse sin permiso de Borja.
- Hay una carpeta local `.codex-remote-attachments/` sin seguimiento, generada por adjuntos de la conversacion. No debe commitearse salvo decision explicita.

### 2026-06-03

- Se empezo la automatizacion Telegram para crear borradores de fichas del Laborjatorio desde texto o audio.
- Se creo la ruta `src/app/api/telegram/laborjatorio/route.ts`.
- El MVP funciona en modo solo borrador: recibe mensajes, transcribe audios, consulta los documentos obligatorios y devuelve una ficha Markdown por Telegram.
- No modifica archivos del repositorio, no hace commits, no hace push y no publica automaticamente.
- Se documento el sistema en `docs/AUTOMATIZACION-TELEGRAM-LABORJATORIO.md`.
- Variables necesarias para probar: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `TELEGRAM_WEBHOOK_SECRET` y `OPENAI_API_KEY`.
- Se detecto que la copia ligera local no tiene `node_modules`, por lo que `npm run typecheck` no puede ejecutarse hasta instalar dependencias.
- Borja creo el bot de Telegram, obtuvo `TELEGRAM_CHAT_ID`, creo `TELEGRAM_WEBHOOK_SECRET`, creo `OPENAI_API_KEY` y anadio las cuatro variables en Vercel para Production.
- Se creo el commit local `d6ddad0 Crea MVP de bot Telegram para borradores`.
- El `git push origin main` quedo bloqueado por autenticacion de GitHub en la sesion de Codex.
- Se diagnostico que Git fallaba con `schannel` y se configuro el repositorio local para usar `http.sslbackend=openssl`, lo que permite conectar con GitHub.
- Queda pendiente crear una credencial/token de GitHub estable y limitado para `boreas77/laborjatorio`; este punto es prioritario porque el flujo futuro Telegram -> GitHub -> Vercel no debe depender de credenciales locales fragiles.
- Borja copio el contenido reciente de `C:\Users\borja\OneDrive\Documentos\LABORJATORIO` a `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE`, porque esta es la carpeta que Codex abre como workspace por defecto.
- Se confirmo que `MI TALLER DE ELE` contiene la ruta del bot, los documentos nuevos, el commit local `d6ddad0`, el remoto correcto y la configuracion `http.sslbackend=openssl`.
- Desde este momento, para evitar redirecciones constantes, se decide trabajar desde `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE`.
- La carpeta `.git-desactivado/` queda ignorada en `.gitignore` para que Git no la muestre como contenido pendiente.
- Se creo y guardo en Vercel un fine-grained token de GitHub para `boreas77/laborjatorio`, junto con `GITHUB_REPO=boreas77/laborjatorio` y `GITHUB_BRANCH=main`.
- Se guardo la credencial de GitHub en Git Credential Manager para el usuario `boreas77`.
- Se subio a GitHub el commit local `d6ddad0 Crea MVP de bot Telegram para borradores`.
- Se activo el webhook de Telegram apuntando a `https://laborjatorio.vercel.app/api/telegram/laborjatorio`.
- Al probar el webhook aparecio un bucle de reintentos porque el endpoint devolvia error 500; se corrigio con el commit `a28104f Evita reintentos del webhook de Telegram`.
- Se mejoro el diagnostico de errores por Telegram con el commit `496d288 Muestra error seguro del bot Telegram`.
- El primer error real fue `insufficient_quota` de OpenAI; Borja anadio 10 dolares de saldo sin recarga automatica.
- La prueba de texto genero correctamente un borrador de ficha.
- La prueba de audio fallo inicialmente porque Telegram envia notas de voz como `.oga`; se corrigio renombrando el archivo a `.ogg` antes de enviarlo a OpenAI con el commit `d374913 Acepta notas de voz de Telegram`.
- La prueba final de audio funciono y genero un borrador completo dividido en varios mensajes de Telegram.
- Estado actual del MVP: recibe texto/audio por Telegram, transcribe audio, genera borradores y los devuelve por Telegram. Sigue sin publicar ni modificar archivos automaticamente.
- Se detecto que los borradores salian demasiado completos a partir de poca informacion y rellenaban huecos con conocimiento general.
- Se ajusto el enfoque editorial del bot: debe actuar como entrevistador editorial, extraer hechos confirmados, separar conocimiento externo de experiencia personal, generar ficha preliminar si falta informacion y hacer maximo 3 preguntas buenas.
- Nueva regla central del bot: no inventar experiencia, no rellenar huecos y no convertir una nota breve en ficha final.
- Se decidio que el bot no debe generar el articulo final. Debe generar un "paquete editorial para Claude" con hechos confirmados, respuestas de Borja, dudas resueltas, datos utiles, tono deseado, estructura esperada y advertencias sobre no inventar experiencia.
- Nuevo flujo editorial: Telegram prepara el paquete; Borja lo pasa a Claude; cuando Borja pegue en Codex el articulo final de Claude, Codex lo convierte en ficha web, actualiza archivos necesarios y prepara el commit.
- Se recibio el articulo final de Claude para LastPass y se convirtio en ficha web dentro del sistema de herramientas.
- LastPass se anadio a `src/data/tools.ts` con bloques editoriales ricos: aviso de brecha de 2022, metricas reales, ventajas/inconvenientes, precio, alternativas y veredicto honesto.
- Se amplio la plantilla de `src/app/herramientas/[slug]/page.tsx` para mostrar campos opcionales de fichas ricas sin romper las fichas antiguas.
- Se actualizo `docs/Herramientas.md` para incluir LastPass como herramienta importante con etiquetas de productividad, seguridad y organizacion.
- Tras revisar la primera publicacion, se simplifico la ficha de LastPass: una sola columna, sin subtitulo repetido bajo el H1, sin bloque lateral de veredicto, texto mas oscuro y alternativas sin descripciones inventadas.
- Se anadio enlace oficial a LastPass en la primera mencion y un boton rojo de acceso dentro del cuerpo. Borja comprobo Impact, pero LastPass no acepto la solicitud de afiliacion, asi que el enlace queda como enlace oficial no afiliado.
- Se detecto un fallo en el flujo del bot: al responder `PASAR A CLOD` despues de varias ampliaciones, la ruta solo veia el ultimo mensaje y generaba un paquete sin la informacion acumulada.
- Se corrigio el bot para guardar memoria temporal por chat: cada nota o audio se suma al contexto de la herramienta, `PASAR A CLAUDE` y `PASAR A CLOD` generan el paquete con todo lo acumulado, `AMPLIAR` pide mas informacion y `DESCARTAR` borra la conversacion.
- Limitacion asumida del MVP: esa memoria vive en la funcion de Vercel y puede perderse si la funcion se reinicia o pasa demasiado tiempo. Si el flujo se vuelve central, la siguiente mejora debe ser persistir esa memoria en Vercel KV, Redis, una base de datos pequena o GitHub.
- Tras comprobar que Claude sigue dando mejores articulos finales que Codex para este flujo, se decidio mantener Claude como redactor y reducir la friccion: el bot dejara de enviar paquetes largos en varios mensajes y pasara a enviar el paquete completo como archivo Markdown descargable.
- Se ajusto el flujo para que el archivo Markdown no se genere inmediatamente tras cada nota. Ahora el bot primero procesa la informacion, devuelve un resumen con preguntas y ofrece `AMPLIAR`, `CREAR ARCHIVO`, `ERROR` o `DESCARTAR`. El `.md` solo se adjunta cuando Borja escribe `CREAR ARCHIVO`, `PASAR A CLAUDE` o `PASAR A CLOD`.
- Se amplio el alcance del bot de Telegram con un segundo flujo paralelo para paginas de categoria. El comando `CATEGORIA` o `NUEVA CATEGORIA` inicia una memoria temporal nueva en modo categoria. El paquete resultante no es ficha de herramienta ni listado SEO: es un paquete para pagina pilar centrada en un problema real del profesor online, con experiencia de Borja, filosofia, casos, herramientas relacionadas, enlazado interno, ideas SEO y FAQ potencial.
- Se detecto un riesgo critico en el bot: podia generar archivos Markdown con contexto demasiado debil o practicamente vacio, lo que empujaba a Claude a inventar contenido. Se anadio una proteccion: antes de crear el archivo, el bot valida que haya notas utiles suficientes y, si no las hay, bloquea el `.md` y pide mas informacion. Tambien confirma cada nota registrada con una vista previa breve para que Borja detecte si un audio no se ha recogido bien.
- Se detecto el fallo de fondo del bot: la memoria estaba en un `Map` dentro de Vercel, por lo que podia perderse entre audios si la siguiente peticion caia en otra instancia. Se corrigio anadiendo memoria persistente en GitHub: cada sesion se guarda como JSON en la rama tecnica `telegram-sessions` usando `GITHUB_TOKEN` y `GITHUB_REPO`. `CREAR ARCHIVO` recupera esa sesion persistida antes de generar el Markdown.
- Se reforzo el flujo editorial de estilo: las transcripciones de audio deben tratarse como fuente de informacion y tambien como fuente de voz. Antes de redactar una ficha hay que detectar expresiones, comparaciones, bromas, juicios, frustraciones y giros propios de Borja para conservarlos cuando funcionen.
- Se creo `propuestas-borjismo.md` como archivo de observacion previa para patrones repetibles de Borjismo detectados en multiples transcripciones. No se deben incorporar patrones nuevos directamente a `docs/BORJISMO_UNIVERSAL.md` sin evidencia repetida.

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

- No borrar `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE`: vuelve a ser la carpeta activa del proyecto en Codex.
- Si se quiere limpiar la carpeta, borrar manualmente `.git-desactivado/`; Git ya la ignora y no afecta al repositorio activo.
- Mantener actualizado `docs/Herramientas.md` cuando se incorporen, descarten o reclasifiquen herramientas.
- Actualizar esta memoria al cerrar cada sesion de trabajo importante.
- Revisar si las paginas actuales del sitio siguen alineadas con el Borjismo Universal ampliado.
- Revisar la calidad de los paquetes editoriales para Claude y ajustar el prompt si salen demasiado genericos, demasiado largos o poco alineados con Borjismo.
- Definir el flujo de entrada para cuando Borja pegue el articulo final de Claude: convertir a ficha web, actualizar inventario/memoria y preparar commit.

## Proximos pasos posibles

- Convertir el inventario de `docs/Herramientas.md` en una estructura editable para fichas reales del sitio.
- Revisar la home con el nuevo Borjismo Universal.
- Revisar la pagina "Sobre".
- Revisar la estructura de fichas individuales.
- Preparar una plantilla de ficha de herramienta.

## Riesgos a vigilar

- Volver a trabajar por error desde `LABORJATORIO` cuando Codex este usando `MI TALLER DE ELE` como workspace activo.
- Que LABORJATORIO suene como un comparador SEO generico.
- Que la voz de Borja se convierta en una capa de chistes anadida al final.
- Que se construyan funciones tecnicas antes de tener contenido suficiente.
- Que la memoria del proyecto crezca demasiado y deje de ser util.
- Que se mezclen fundamentos estrategicos con tareas operativas sin distinguir niveles.

## Flujo de trabajo recomendado

Para futuros cambios:

1. Abrir `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE`.
2. Leer los documentos obligatorios.
3. Confirmar `git status`.
4. Editar archivos.
5. Ejecutar comprobaciones si procede.
6. Hacer commit.
7. Hacer `git push`.
8. Comprobar `https://laborjatorio.com/`.

Si Git dice `Your branch is ahead of 'origin/main' by 1 commit`, no falta otro commit: falta ejecutar `git push`.

Si vuelve a aparecer un problema de permisos con `.git/index.lock`, revisar permisos/propietario de `C:\Users\borja\OneDrive\Documentos\MI TALLER DE ELE\.git` antes de perder tiempo tocando archivos de la web.

## Ultima sesion registrada

Fecha: 2026-06-06

Resumen:

- La Home quedo reorganizada alrededor de 9 necesidades con iconos editoriales monocolor.
- El buscador principal paso a la navegacion como `HeaderSearch` y la busqueda vive en `/buscar`.
- La pagina `Herramientas` se transformo conceptualmente en `/inventario`, con feed cronologico de fichas.
- `/herramientas` redirige a `/inventario`; las fichas individuales siguen en `/herramientas/[slug]`.
- Se crearon paginas temporales por necesidad con rutas propias y feeds filtrados de herramientas.
- Las paginas temporales se reemplazaran mas adelante por articulos largos escritos por Borja.
- La navegacion publica queda: logo a Home, `Inventario`, `Sobre mi` y boton de busqueda.
- Se documento el estado real en esta memoria para evitar construir sobre cambios dispersos del chat de estilo.
- `npm.cmd run typecheck` y `npm.cmd run build` pasan en el estado actual.

Proximo paso recomendado:

- Revisar y ajustar el mapeo de `src/data/needs.ts` antes de escribir los articulos largos de cada necesidad, para que cada pagina temporal muestre exactamente las herramientas que Borja quiere asociar a ese problema.
