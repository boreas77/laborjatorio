# Fundamentos de LABORJATORIO

## Idea central

LABORJATORIO es una web/directorio de herramientas para profesores de espanol y otros profesores de idiomas. No debe comportarse como un comparador generico ni como una lista fria de software, sino como una biblioteca curada con criterio profesional.

La promesa principal es ayudar a profesores ocupados a entender que herramientas merecen su atencion, para que sirven de verdad, cuando no convienen y como pueden aplicarlas en clases, materiales, contenido, automatizacion, organizacion o venta.

## Filosofia

La tecnologia es un medio, no el fin. La pregunta de fondo es:

> Como puedo multiplicar mi impacto minimizando el tiempo y esfuerzo que debo invertir personalmente?

El valor diferencial no esta en la IA ni en recopilar herramientas. Esta en el criterio acumulado de Borja como profesor, creador de materiales, productor de contenido y constructor de recursos educativos.

## Documento de identidad creativa

El archivo `docs/BORJISMO_UNIVERSAL.md` es una fuente principal del proyecto. Debe leerse junto a estas bases antes de tomar decisiones editoriales o de tono.

Principios que afectan directamente a LABORJATORIO:

- La personalidad no es decoración: el punto de vista de Borja debe notarse.
- Primero va la claridad; después, la locura.
- El humor debe tener estructura debajo, no ser un adorno aleatorio.
- La tecnología debe multiplicar la humanidad, no sustituirla.
- Cada ficha debe tener criterio, experiencia, opinión y utilidad real.
- Si un texto podría haberlo escrito cualquier comparador genérico, falta Borja.

## Criterios de decision

Antes de construir o priorizar cualquier idea, hay que responder:

1. Que problema real resuelve?
2. Quien lo usaria?
3. Que ventaja tiene frente a una solucion generica?
4. Que activo existente aprovecha?
5. Como puede mejorar con el tiempo?
6. Podria convertirse en un activo duradero del negocio?

Se priorizan proyectos que reutilicen contenido, experiencia, productos, audiencia o relaciones profesionales existentes; que tengan efecto compuesto; que incorporen criterio propio; y que puedan escalar sin depender siempre del tiempo directo de Borja.

## Producto V1

La primera version debe ser pequena, clara y publicable:

- Home.
- Directorio de herramientas.
- Paginas individuales de herramienta.
- Categorias.
- Buscador o filtro sencillo.
- Datos editables en JSON, Markdown o MDX.
- Campo de enlace oficial.
- Campo de enlace afiliado.
- Aviso honesto de afiliacion.
- Conexion clara con el proyecto principal de Borja: borjaprofe.com.
- Llamadas a la accion hacia la suscripcion/newsletter de borjaprofe.com.

No construir todavia:

- Login.
- Panel de administracion.
- Base de datos externa compleja.
- Sistema de usuarios.
- Pagos.
- Comentarios.

## Stack preferido

- Next.js.
- TypeScript.
- Tailwind CSS.
- Contenido en JSON, Markdown o MDX.
- Paginas estaticas optimizadas para SEO.
- Despliegue en Vercel.

La prioridad tecnica es que sea facil de mantener, no que sea sofisticado.

## Estructura editorial de cada herramienta

Cada ficha-articulo debe responder a:

> Por que deberia importarle esta herramienta a un profesor ocupado?

La forma por defecto ya no es una ficha tradicional de producto, sino un articulo editorial con voz de Borja.

Si Borja entrega un texto ya redactado desde su blog, Cloth, Claude u otro borrador externo, ese texto marca la estructura principal de la pagina.

Reglas:

1. Mantener, siempre que funcionen, el H1, los H2, el orden de ideas, el ritmo y el remate del articulo original.
2. No reventar el texto en mini-bloques tecnicos si eso le quita continuidad.
3. Usar precio, enlaces, tablas o metadatos como apoyo de lectura, no como esqueleto obligatorio.
4. Priorizar experiencia, criterio, ejemplos y decisiones reales por encima de listas de funciones.
5. Si hace falta adaptar el articulo a la web, la adaptacion debe proteger la voz, no normalizarla.
6. Cuando Borja haya dado enlaces de compra o acceso, no esconderlos solo al final: deben aparecer en el primer punto natural del articulo donde ya tenga sentido pulsarlos.
7. Si el articulo introduce un complemento relevante, por ejemplo un accesorio o una segunda compra necesaria, ese complemento debe tener su propia llamada a la accion en el momento en que entra en juego.
8. La seccion final de compra puede repetirse, pero no debe ser la unica via para llegar a los enlaces.
9. El estilo del boton debe mantenerse constante en toda la web; por defecto, usar el boton editorial rojo ya establecido.
10. Evitar muletillas de autopresentacion como "aqui soy transparente" o "voy a ser transparente". Cuando no haya alternativas reales, se dice de forma directa o se elimina esa seccion.

La estructura base orientativa puede incluir:

1. Introduccion breve: para que la utiliza Borja y por que merece atencion.
2. Que es la herramienta o por que entro en su trabajo.
3. Como la usa Borja de verdad.
4. Problemas, avisos, limites o matices que un profe deberia saber.
5. Ejemplos reales conectados con proyectos propios, cursos, recursos, articulos o contenidos.
6. Precio o modelo, cuando sea util.
7. Alternativas, si Borja tiene criterio para nombrarlas.
8. Veredicto honesto.
9. Enlaces normal y afiliado, si aplica.

Nota editorial:

- Si la seccion `Alternativas` no aporta alternativas reales, no hace falta mantenerla por sistema.
- La honestidad debe notarse en el contenido, no declararse como etiqueta de tono.

## Objetivo de conversion

LABORJATORIO debe servir tambien como puerta de entrada al proyecto principal de Borja:

- Dominio/proyecto principal: borjaprofe.com.
- En la pagina "Sobre" debe explicarse la relacion entre LABORJATORIO y el trabajo de Borja.
- La web debe incluir llamadas a la accion naturales hacia borjaprofe.com.
- Cuando Borja tenga una caja/formulario/pagina de suscripcion en borjaprofe.com, se enlazara desde LABORJATORIO.
- El tono de esas llamadas no debe sonar agresivo: algo tipo "si quieres que te cuente estas movidas con calma, apuntate en borjaprofe.com".
- En las fichas-articulo se podran enlazar cursos, recursos, articulos o proyectos propios relacionados.

Una ficha debe cubrir:

- Que es.
- Para que sirve de verdad.
- Para que no sirve.
- Como la usa Borja o como la usaria.
- Que problema resuelve para un profesor.
- Casos de uso docentes.
- Ventajas reales.
- Limitaciones.
- Precio o modelo.
- Cuando merece pagar.
- Alternativas.
- Veredicto honesto.
- Enlaces normal y afiliado, si aplica.

## Tono

Claro, practico, directo, con personalidad y honestidad. Debe sonar a recomendacion de profesor a profesor.

Usar enfoques como:

- "Yo usaria esta herramienta para..."
- "Esto te interesa si..."
- "No la usaria para..."
- "El problema que resuelve es..."
- "La trampa es..."
- "Merece la pena pagar si..."

Evitar lenguaje corporativo vacio como:

- "Solucion innovadora."
- "Maximiza tus flujos de trabajo."
- "Plataforma integral de ultima generacion."
- "Herramienta revolucionaria."

## Categorias iniciales

- IA y agentes.
- Automatizacion.
- Creacion de materiales.
- Audio y video.
- Equipo fisico / hardware de grabacion.
- Diseno e imagen.
- Organizacion.
- Formularios y encuestas.
- Web, SEO y analitica.
- Email marketing.
- Comunidad y comunicacion.
- Productividad.

## Modelo de datos base

Campos minimos recomendados:

- name.
- slug.
- tagline.
- category.
- subcategories.
- pricing.
- officialUrl.
- affiliateUrl.
- hasAffiliate.
- myUseCase.
- bestFor.
- notFor.
- pros.
- cons.
- alternatives.
- rating.
- difficulty.
- status.
- updatedAt.
- publishedAt, opcional pero recomendado en nuevas fichas para ordenar el inventario por publicacion real.

Campos editoriales opcionales:

- intro.
- whatItDoes.
- howIUseIt.
- teacherUseCases.
- quickTutorial.
- honestVerdict.
- relatedOwnResources.

## Roadmap

Fase 1: prototipo local con home, directorio, fichas, categorias, buscador y datos de ejemplo.

Fase 2: contenido real con 10-20 herramientas iniciales, enlaces afiliados, aviso de afiliacion y CTA a newsletter o recurso propio.

Fase 3: SEO y publicacion con metadatos, sitemap, Open Graph, URLs limpias, Vercel, dominio y analitica.

Fase 4: mejora editorial con guias comparativas, articulos tipo "mejores herramientas para...", casos reales, videos o capturas, y conexion con productos propios.

Fase 5: automatizacion ligera con generador de borradores, formulario interno, revision periodica de enlaces y deteccion de fichas pendientes de actualizar.

## Regla de oro para Codex

Cuando trabajemos en este proyecto, Codex debe proteger el criterio y la utilidad real por encima de la complejidad tecnica. Si una decision no ayuda a un profesor real a elegir, entender o usar mejor una herramienta, probablemente no es prioritaria.

## Herramientas candidatas mencionadas por Borja

Lista provisional, pendiente de completar, clasificar y convertir en fichas:

- ChatGPT.
- Canva.
- Notion.
- Zoom.
- DaVinci Resolve.
- Happy Scribe.
- Opus Clip.
- Sound Made Seen / Sound Made Scene. Revisar nombre exacto.
- AppSumo.
- Stripe.
- WooCommerce.
- Plugins de WordPress por definir.
- LearnDash.
- Metricool.
- I Love PDF.
- Spotify for Creators.
- Audacity.
