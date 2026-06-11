export type Pricing = "gratis" | "gratis-con-plan-pago" | "pago" | "pago-unico" | "suscripcion";
export type Difficulty = "facil" | "media" | "alta";
export type ToolStatus =
  | "uso-actual"
  | "probada"
  | "pendiente"
  | "descartada"
  | "imprescindible"
  | "importante"
  | "opcional"
  | "secundaria"
  | "en-prueba"
  | "abandonada";

export type ToolMetric = {
  label: string;
  value: string;
};

export type ToolPriceRow = {
  label: string;
  value: string;
};

export type ToolAlternativeDetail = {
  name: string;
  description?: string;
  url?: string;
};

export type ToolRelatedLink = {
  label: string;
  description?: string;
  url: string;
};

export type ToolFaq = {
  question: string;
  answer: string;
};

export type Tool = {
  name: string;
  slug: string;
  title?: string;
  metaDescription?: string;
  keywords?: string[];
  tagline: string;
  category: string;
  subcategories: string[];
  pricing: Pricing;
  officialUrl?: string;
  affiliateUrl?: string;
  hasAffiliate: boolean;
  myUseCase: string;
  bestFor: string[];
  notFor: string[];
  pros: string[];
  cons: string[];
  alternatives: string[];
  rating: number;
  difficulty: Difficulty;
  editorialVersion?: "1.0" | "2.0" | "3.0";
  hideDifficulty?: boolean;
  status: ToolStatus;
  updatedAt: string;
  publishedAt?: string;
  intro: string;
  whatItDoes: string;
  howIUseIt: string;
  teacherUseCases: string[];
  honestVerdict: string;
  importantNotice?: string;
  metrics?: ToolMetric[];
  priceRows?: ToolPriceRow[];
  priceNote?: string;
  relatedLinks?: ToolRelatedLink[];
  alternativeDetails?: ToolAlternativeDetail[];
  faqs?: ToolFaq[];
  cta?: string;
};

export const tools: Tool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "Asistente de IA para pensar, escribir, ordenar ideas y crear materiales.",
    category: "IA y agentes",
    subcategories: ["escritura", "automatización", "materiales"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://chatgpt.com/",
    hasAffiliate: false,
    myUseCase:
      "Lo uso para desarrollar ideas, preparar estructuras, analizar proyectos y convertir notas desordenadas en documentos útiles.",
    bestFor: [
      "Profes que crean materiales",
      "Profes que escriben newsletters o artículos",
      "Profes que quieren ordenar proyectos complejos"
    ],
    notFor: [
      "Quien quiera delegar todo el criterio en la herramienta",
      "Quien busque resultados perfectos sin revisar"
    ],
    pros: [
      "Muy flexible",
      "Sirve para pensar y no solo para escribir",
      "Acelera mucho la creación de borradores"
    ],
    cons: [
      "Puede sonar genérico si no se dirige bien",
      "Necesita revisión humana",
      "No sustituye la experiencia del profesor"
    ],
    alternatives: ["Claude", "Gemini", "Perplexity"],
    rating: 5,
    difficulty: "facil",
    status: "uso-actual",
    updatedAt: "2026-05-30",
    intro:
      "ChatGPT puede ser un compañero de pensamiento muy útil para profesores, siempre que no le entregues el volante como si fuera un oráculo con WiFi.",
    whatItDoes:
      "Ayuda a generar borradores, ordenar ideas, transformar contenidos, crear ejemplos, preparar actividades y analizar decisiones.",
    howIUseIt:
      "Lo uso para pasar de una idea con forma de ovillo a una estructura clara: una clase, una ficha, una secuencia, un guion o una lista de tareas.",
    teacherUseCases: [
      "Crear una primera versión de una actividad comunicativa.",
      "Adaptar un texto a distintos niveles.",
      "Generar ejemplos controlados para practicar una estructura.",
      "Convertir notas sueltas en un esquema de clase."
    ],
    honestVerdict:
      "Merece la pena si tienes criterio y revisas. Si esperas que piense por ti, te devolverá materiales correctos, limpios y un poco muertos por dentro."
  },
  {
    name: "Canva",
    slug: "canva",
    title: "Canva: ¿merece la pena pagarla de verdad?",
    metaDescription:
      "Llevo ocho años con Canva y mi relación con ella ha cambiado mucho con la IA. ¿Merece la pena pagarla? Te cuento para qué la uso hoy, sus límites y cuándo sí compensa.",
    keywords: [
      "Canva",
      "merece la pena pagar Canva",
      "Canva para profesores",
      "crear materiales didácticos",
      "plantillas para redes",
      "diseño para profes"
    ],
    tagline:
      "La navaja suiza de diseño que sigo usando para coherencia visual, aunque ya no es el imprescindible que era antes.",
    category: "Diseño e imagen",
    subcategories: ["diseño", "materiales", "redes sociales", "contenido", "portadas"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://www.canva.com/",
    hasAffiliate: false,
    myUseCase:
      "La uso sobre todo para mantener coherencia visual en portadas de Gramaticón y algún material de redes. Antes la usaba mucho más para materiales didácticos.",
    bestFor: [
      "Profes que crean materiales visuales con frecuencia",
      "Creadores que necesitan plantillas y coherencia de marca",
      "Quien quiere resolver diseño sin saber diseño",
      "Profes que amortizan una herramienta recurrente con uso real"
    ],
    notFor: [
      "Quien solo necesita diseños sueltos de vez en cuando",
      "Quien ya resuelve imágenes con IA y no crea materiales visuales",
      "Quien busca edición de vídeo seria",
      "Quien quiere convertir documentos en materiales didácticos de forma fluida"
    ],
    pros: [
      "Permite mantener un estilo visual reutilizando plantillas.",
      "No necesitas saber diseño para sacar algo decente.",
      "Es muy versátil: portadas, posts, presentaciones, documentos y materiales.",
      "Para flujos repetidos, como portadas semanales, ahorra mucho tiempo.",
      "El catálogo y las plantillas siguen siendo útiles."
    ],
    cons: [
      "La IA generativa le ha quitado parte del valor que antes tenía para buscar imágenes.",
      "El plan gratuito se queda limitado si quieres sacarle jugo de verdad.",
      "Para crear materiales didácticos puede ser un flujo artesanal.",
      "Su editor de vídeo no me compensa frente a herramientas específicas.",
      "Si no tuviera acceso EDU en muy buenas condiciones, probablemente me habría dado de baja."
    ],
    alternatives: ["ChatGPT", "DaVinci Resolve", "OpusClip"],
    rating: 4,
    difficulty: "facil",
    status: "importante",
    updatedAt: "2026-06-07",
    publishedAt: "2026-06-07T11:00:00+02:00",
    intro:
      "Canva es una herramienta compleja, compleja de la que hablar. Y no porque sea difícil de usar —al revés—, sino porque mi relación con ella ha cambiado mucho. Llevo utilizándola por lo menos ocho años, y hasta hace muy poco te habría dicho, sin pestañear, que es un imprescindible para un profe que tiene un negocio propio. Hoy ya no lo tengo tan claro, y de eso va esta ficha.",
    whatItDoes:
      "Canva es una herramienta de diseño online para crear casi cualquier cosa visual: portadas, posts para redes, presentaciones, materiales, documentos. Funciona con plantillas y un catálogo enorme de imágenes, de forma que no necesitas saber diseño para sacar algo decente. Una navaja suiza, vamos.",
    howIUseIt:
      "Hoy la utilizo principalmente para una cosa: mantener la coherencia visual. En concreto, para las portadas de los episodios de mi podcast Gramaticón y para algún material de redes. Lo hago de la forma más vaga y eficiente posible: tengo un archivo con todo montado, la fuente, el fondo y la estructura, y cada semana sustituyo la imagen principal y el título. Cinco minutos y la portada está lista, siempre con el mismo estilo. Para eso, Canva sigue siendo comodísima. Los clips del podcast ya no los toco aquí: esos los hago con OpusClip.",
    teacherUseCases: [
      "Mantener una línea visual estable en portadas de podcast o contenidos.",
      "Crear posts, carruseles o materiales rápidos para redes.",
      "Preparar materiales didácticos si ya tienes una plantilla clara.",
      "Diseñar portadas o recursos de venta sin abrir programas complejos.",
      "Reutilizar una estructura visual y cambiar solo imagen y título."
    ],
    honestVerdict:
      "Canva sigue siendo una herramienta estupenda y versátil, pero su trono de imprescindible se ha tambaleado en mi caso por culpa de la IA. Hoy la uso para coherencia visual, mis portadas y poco más, y soy consciente de que solo sigo dentro porque tengo una cuenta en condiciones muy buenas. Si vives de crear contenido visual y materiales, sí, puede merecer la pena pagarla. Si tu uso es ocasional, piénsatelo dos veces antes del pago anual: analiza tus necesidades reales y mira si la IA y otras herramientas gratuitas no te cubren ya buena parte.",
    importantNotice:
      "Mi situación con el precio no es la normal: tengo acceso a una cuenta EDU compartida con condiciones muy buenas. Si tuviera que pagar Canva Pro solo para mi uso actual, probablemente me habría dado de baja.",
    metrics: [
      { label: "Uso", value: "+8 años" },
      { label: "Estado", value: "Importante" },
      { label: "Coste real", value: "Cuenta EDU" }
    ],
    priceRows: [
      { label: "Free", value: "Plan gratuito con límites" },
      { label: "Pro", value: "Plan de pago recurrente" },
      { label: "Education", value: "Condiciones especiales si cumples requisitos" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Aquí va la respuesta a la pregunta del título, y es el clásico depende: depende del uso y del valor que te aporte. Si creas materiales con Canva de forma habitual, sí, merece la pena. Cuando yo hacía materiales didácticos, amortizaba la suscripción cada mes. Pero si solo la usas para algún diseño suelto, probablemente no te compense un pago anual, y menos ahora que la IA te resuelve buena parte de las imágenes. Mi situación, además, no es la normal: tengo acceso a una cuenta EDU compartida con condiciones muy buenas.",
    alternativeDetails: [
      {
        name: "ChatGPT",
        url: "/herramientas/chatgpt",
        description:
          "La IA generativa me ha sustituido buena parte del valor que antes tenía el catálogo de imágenes de Canva."
      },
      {
        name: "DaVinci Resolve",
        url: "/herramientas/davinci-resolve-editor-video-gratis-profesores",
        description:
          "Para vídeo prefiero una herramienta específica, gratis y mucho más potente que el editor de Canva."
      },
      {
        name: "OpusClip",
        url: "/herramientas/opusclip",
        description:
          "Para clips del podcast ya no paso por Canva: uso OpusClip para convertir vídeos largos en piezas cortas."
      }
    ],
    faqs: [
      {
        question: "¿Canva sigue mereciendo la pena para profesores?",
        answer:
          "Sí, si creas materiales visuales, portadas o contenido de forma frecuente. Si solo haces diseños sueltos, quizá no compense pagar una suscripción."
      },
      {
        question: "¿Por qué ha bajado de imprescindible a importante?",
        answer:
          "Porque la IA generativa ha cubierto parte del uso que antes hacía en Canva, sobre todo la búsqueda de imágenes. La sigo usando, pero menos."
      },
      {
        question: "¿Pagaría Canva si no tuviera cuenta EDU?",
        answer:
          "Con mi uso actual, probablemente no. La mantengo porque tengo unas condiciones muy buenas. Si volviera a crear materiales didácticos a menudo, la valoración cambiaría."
      },
      {
        question: "¿La usaría para editar vídeo?",
        answer:
          "No como herramienta principal. Para vídeo uso DaVinci Resolve, y para clips cortos de podcast uso OpusClip."
      }
    ]
  },
  {
    name: "OpusClip",
    slug: "opusclip",
    title: "OpusClip: cómo publico clips de Gramaticón y el podcast de Palabras",
    tagline:
      "La herramienta que uso para convertir vídeos largos en clips cortos y verticales para redes sociales.",
    category: "Audio y vídeo",
    subcategories: ["video", "redes sociales", "contenido", "ia", "podcast"],
    pricing: "suscripcion",
    officialUrl: "https://www.opus.pro/?via=laborjatorio",
    hasAffiliate: false,
    myUseCase:
      "Lo uso para transformar episodios largos de Gramaticón y el podcast de Palabras en clips cortos para Instagram, TikTok, YouTube Shorts y otras redes.",
    bestFor: [
      "Profes que ya graban vídeos largos, clases, episodios o tutoriales",
      "Profes de idiomas que quieren aparecer en redes sin editar cada clip a mano",
      "Creadores educativos con un ritmo mínimo de publicación semanal",
      "Quien entiende los clips como inversión de visibilidad, no como adorno"
    ],
    notFor: [
      "Quien publica vídeos largos solo de vez en cuando",
      "Quien no tiene una estrategia clara de distribución",
      "Quien busca una herramienta barata para usar una vez al mes",
      "Quien quiere delegar también la programación de publicaciones"
    ],
    pros: [
      "Detecta momentos interesantes dentro de vídeos largos.",
      "El subtitulado automático en español funciona bastante bien.",
      "Permite guardar fuentes y colores de marca.",
      "La detección de caras en entrevistas ayuda mucho en formato vertical.",
      "Ahorra el tiempo que antes hacía que directamente no publicara clips."
    ],
    cons: [
      "El precio da respeto al principio.",
      "Tiene más sentido si ya produces contenido con cierta regularidad.",
      "La puntuación de viralidad orienta, pero no sustituye el criterio propio.",
      "No lo uso para programar publicaciones, aunque la plataforma lo permite."
    ],
    alternatives: ["CapCut", "Descript", "Klap", "Captions"],
    rating: 4,
    difficulty: "facil",
    status: "importante",
    updatedAt: "2026-06-03",
    intro:
      "OpusClip es la herramienta que uso para convertir episodios largos de Gramaticón y el podcast de Palabras en clips cortos y verticales para redes. Empecé a usarla en 2026 y, aunque al principio me costó aceptar el precio, ha cambiado bastante mi forma de distribuir contenido.",
    whatItDoes:
      "OpusClip analiza un vídeo largo con inteligencia artificial, detecta momentos que pueden funcionar como clips y los convierte en piezas verticales preparadas para redes sociales. También ayuda con subtítulos automáticos, eliminación de silencios, ajustes de encuadre, efectos básicos y plantillas de marca.",
    howIUseIt:
      "Cuando sale un episodio nuevo de Gramaticón, subo el vídeo a OpusClip y reviso los momentos que propone. Elijo los que me parecen más interesantes, corrijo los subtítulos cuando hace falta y exporto. Con el podcast de Palabras hago algo parecido: vídeo largo dentro, varios clips fuera. Antes no publicaba clips porque localizar el momento, cortarlo, subtitularlo y pasarlo a vertical era una movida que no cabía en mi flujo de trabajo. Ahora publico contenido en redes prácticamente cada día con muy poco esfuerzo.",
    teacherUseCases: [
      "Convertir una clase grabada en varios clips breves para redes.",
      "Sacar fragmentos didácticos de un episodio largo de YouTube.",
      "Reutilizar entrevistas o podcasts educativos en formato vertical.",
      "Crear piezas cortas para atraer alumnos hacia contenidos más largos.",
      "Mantener presencia en redes sin dedicar horas a edición manual."
    ],
    honestVerdict:
      "OpusClip merece la pena si ya produces vídeos largos y quieres distribuirlos mejor. Para mí ha sido la diferencia entre publicar clips y no publicarlos. No lo recomendaría como capricho aislado: necesita volumen, estrategia y cierta continuidad. Pero si grabas cada semana, el precio empieza a parecer menos un gasto y más una forma razonable de comprar tiempo y visibilidad.",
    metrics: [
      { label: "Créditos incluidos en el plan anual", value: "3.600" },
      { label: "Horas de vídeo al año", value: "60" },
      { label: "Año en que empecé a usarlo", value: "2026" }
    ],
    priceRows: [
      { label: "Plan anual Pro", value: "~174 euros" },
      { label: "Créditos incluidos", value: "3.600 minutos al año" },
      { label: "Crédito", value: "1 minuto de vídeo procesado" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Al verlo por primera vez me pareció caro. Luego me pregunté cuánto estaría dispuesto a pagar en publicidad para conseguir esa visibilidad, y 174 euros al año dejó de parecer tanto. Eso sí: solo tiene sentido si vas a darle uso real.",
    alternativeDetails: [
      {
        name: "CapCut",
        description:
          "Lo probé brevemente, pero me pareció algo lioso y no encontré claro cómo encajaba en mi flujo."
      },
      {
        name: "Descript"
      },
      {
        name: "Klap"
      },
      {
        name: "Captions"
      }
    ],
    cta:
      "Si quieres ver cómo convierto contenido largo en piezas más pequeñas para redes, en borjaprofe.com voy contando estas pruebas con calma."
  },
  {
    name: "DaVinci Resolve",
    slug: "davinci-resolve-editor-video-gratis-profesores",
    title: "DaVinci Resolve: el editor de vídeo gratis con el que edito siendo profe (y no técnico)",
    metaDescription:
      "Por qué edito mis vídeos y mi audio con DaVinci Resolve siendo profe y sin ser técnico: el editor de vídeo gratis que me hizo dejar Premiere, lo bueno y lo que me irrita.",
    keywords: [
      "DaVinci Resolve",
      "editor de vídeo gratis",
      "editar vídeos para clases",
      "software para profesores",
      "edición de audio"
    ],
    tagline:
      "El editor de vídeo gratis que uso para montar vídeos y mejorar audio sin ser técnico.",
    category: "Audio y vídeo",
    subcategories: ["vídeo", "audio", "contenido", "editor de vídeo", "software gratuito"],
    pricing: "gratis",
    officialUrl: "https://www.blackmagicdesign.com/products/davinciresolve",
    hasAffiliate: false,
    myUseCase:
      "Lo uso desde al menos 2020 para editar vídeos y audio de clase, materiales y contenido sin pagar una suscripción ni depender de Premiere.",
    bestFor: [
      "Profes online que necesitan editar vídeos sin pagar una suscripción",
      "Profes de idiomas que quieren cuidar el audio de sus materiales",
      "Profes de español que graban explicaciones, clases o contenido",
      "Creadores educativos que quieren una herramienta seria, gratis y legal"
    ],
    notFor: [
      "Quien busca el editor más ligero para un ordenador modesto",
      "Quien solo necesita cortar un vídeo muy simple una vez al año",
      "Quien quiere comparar editores profesionales en profundidad"
    ],
    pros: [
      "La versión gratuita es muy completa.",
      "Incluye recursos suficientes para editar vídeo y audio sin comprar extras.",
      "Permite mejorar el audio sin ser técnico de sonido.",
      "Evita pagar otra suscripción mensual.",
      "Me hizo dejar Premiere porque cubría mis necesidades igual o mejor."
    ],
    cons: [
      "Al principio puede resultar un poco abrumador.",
      "Consume bastantes recursos del ordenador.",
      "Si tienes muchas pestañas y programas abiertos, se nota.",
      "No he probado la versión Studio, así que no comparo desde experiencia propia."
    ],
    alternatives: ["Adobe Premiere Pro", "CapCut", "Final Cut Pro"],
    rating: 5,
    difficulty: "media",
    status: "importante",
    updatedAt: "2026-06-04",
    intro:
      "DaVinci Resolve es el editor de vídeo que uso para montar vídeos de clase, materiales y contenido sin ser editor profesional. Lo uso desde al menos 2020 y lo meto en el Laborjatorio porque resuelve un problema muy concreto: necesito editar esto, quiero que se vea y suene limpio, y no quiero pagar otra suscripción.",
    whatItDoes:
      "DaVinci Resolve es un programa de Blackmagic Design para editar vídeo, audio, color y posproducción. En el mundo profesional se usa para trabajos muy serios, pero su versión gratuita ya es más que suficiente para un profesor que necesita montar vídeos claros, mejorar audio y preparar contenido educativo sin entrar en una cadena de plugins y pagos extra.",
    howIUseIt:
      "Lo uso siendo profe, no técnico. No vengo del mundo del vídeo: vengo del mundo de las clases. Para mí la clave es que puedo editar un vídeo, limpiar el audio y dejar una pieza decente sin sentir que estoy delante de un programa reservado a gente con bata de posproducción. Antes usaba Premiere en una versión pirateada. Era pobre, no me juzgues. Cambié porque DaVinci era gratis, legal y cubría mis necesidades igual o mejor.",
    teacherUseCases: [
      "Editar tutoriales, explicaciones grabadas o clases asíncronas.",
      "Mejorar el audio de materiales donde la pronunciación y la escucha importan.",
      "Montar vídeos para alumnos sin pagar una suscripción mensual.",
      "Preparar contenido para YouTube, cursos o redes a partir de grabaciones propias.",
      "Trabajar vídeo y audio en el mismo programa sin saltar entre cinco herramientas."
    ],
    honestVerdict:
      "DaVinci Resolve cumple lo que necesito como profe, que no es edición de cine: vídeo y audio limpios, sin complicaciones absurdas, sin pagar y sin sentirme un impostor delante de un programa carísimo. Lo uso desde 2020, me hizo dejar Premiere y solo me pide a cambio que mi ordenador respire un poco. Para mí, ese trato es justo. ¿Lo seguiría recomendando hoy? Sí.",
    importantNotice:
      "Esta ficha habla desde el uso de la versión gratuita. No he probado DaVinci Resolve Studio, así que cualquier comentario sobre la versión de pago queda como posibilidad, no como experiencia real.",
    metrics: [
      { label: "Año aproximado desde el que lo uso", value: "2020" },
      { label: "Coste de la versión que uso", value: "0 €" },
      { label: "Afiliación", value: "No" }
    ],
    priceRows: [
      { label: "DaVinci Resolve", value: "Gratis" },
      { label: "DaVinci Resolve Studio", value: "Versión de pago" },
      { label: "Cuándo pagaría", value: "Si necesitara una función concreta y fuera pago único" }
    ],
    priceNote:
      "La versión gratuita me cubre. Si algún día necesitara algo más específico, posiblemente invertiría, sobre todo si fuera de pago único. Una suscripción mensual más me da pereza; un pago único útil lo puedo entender.",
    alternativeDetails: [
      {
        name: "Adobe Premiere Pro",
        description:
          "Es la alternativa que usaba antes. Cambié porque DaVinci era gratis, legal y suficiente para mi forma de editar."
      },
      {
        name: "CapCut",
        description:
          "Puede servir para ediciones sencillas o contenido social, pero esta ficha no nace de una comparación profunda con CapCut."
      },
      {
        name: "Final Cut Pro",
        description:
          "Otra opción conocida en edición de vídeo, especialmente en Mac, pero no es una alternativa que valore aquí desde experiencia propia."
      }
    ],
    faqs: [
      {
        question: "¿DaVinci Resolve es gratis de verdad?",
        answer:
          "Sí. Hay una versión gratuita muy completa que puedes usar sin caducidad. Por encima existe DaVinci Resolve Studio, con funciones más avanzadas."
      },
      {
        question: "¿Sirve si no tengo ni idea de edición?",
        answer:
          "Sí. Al principio puede abrumar un poco, pero la interfaz es visual y permite hacer ediciones útiles sin conocimientos técnicos avanzados."
      },
      {
        question: "¿Va lento?",
        answer:
          "Puede consumir bastantes recursos. Si tu ordenador va justo o trabajas con muchos programas abiertos, es posible que lo notes."
      },
      {
        question: "¿Es mejor que Premiere?",
        answer:
          "Para lo que hago yo como profesor, me cumple igual o mejor y encima es gratis y legal. Para edición profesional pesada, esa comparación ya no la hago yo."
      }
    ],
    cta:
      "Si quieres que te cuente estas movidas de herramientas con más calma, te las cuento en borjaprofe.com."
  },
  {
    name: "iLovePDF",
    slug: "ilovepdf",
    title: "iLovePDF: la herramienta gratis con la que arreglo PDFs en dos minutos",
    metaDescription:
      "iLovePDF es mi herramienta de cabecera para arreglar PDFs rápido: unir, extraer páginas, comprimir o firmar. Te cuento para qué la uso y cuándo tirar de ella.",
    keywords: [
      "iLovePDF",
      "editar PDF gratis",
      "unir PDF",
      "comprimir PDF",
      "extraer páginas de un PDF",
      "firmar PDF online"
    ],
    tagline:
      "La herramienta online que uso para arreglos rápidos de PDF sin instalar nada ni abrir un programa pesado.",
    category: "Productividad",
    subcategories: ["documentación", "pdf", "productividad", "web"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://www.ilovepdf.com",
    hasAffiliate: false,
    myUseCase:
      "La uso un par de veces al mes para arreglos puntuales de PDF: unir documentos, quitar páginas, comprimir archivos o firmar algo rápido.",
    bestFor: [
      "Profes que necesitan arreglar PDFs rápido",
      "Quien quiere unir, dividir o comprimir un PDF sin instalar nada",
      "Personas que hacen apaños puntuales de documentación",
      "Quien no necesita un editor profesional de PDF"
    ],
    notFor: [
      "Documentos muy sensibles que prefieres no subir a un servicio online",
      "Edición avanzada y constante de PDFs",
      "Quien necesita trabajar sin conexión",
      "Quien busca diseño o maquetación, no arreglo técnico de documentos"
    ],
    pros: [
      "Es comodísima para arreglos rápidos.",
      "Funciona desde el navegador, sin instalar nada.",
      "Permite unir, dividir, comprimir y firmar PDFs.",
      "Para mi uso puntual, el plan gratis me basta.",
      "Resuelve en minutos tareas que suelen dar mucha pereza."
    ],
    cons: [
      "La versión gratuita tiene límites de procesamiento.",
      "Tiene plan Premium, así que no todo es ilimitado gratis.",
      "Al ser online, subes el PDF a sus servidores.",
      "No sustituye un editor profesional si trabajas PDFs a fondo."
    ],
    alternatives: ["Canva", "Adobe Acrobat"],
    rating: 4,
    difficulty: "facil",
    status: "opcional",
    updatedAt: "2026-06-06",
    intro:
      "iLovePDF es una maravilla porque tiene una función muy específica: modificar PDFs rápido. No la uso todos los días, pero el día que la necesito me salva en dos minutos. Es de esas herramientas que conviene tener guardadas para cuando aparece el marrón.",
    whatItDoes:
      "iLovePDF es una herramienta online para modificar archivos PDF. Hace cosas muy concretas y muy útiles: extraer páginas, unir varios documentos en uno, comprimir el archivo para que pese menos o añadir firmas. Todo desde el navegador, sin instalar nada.",
    howIUseIt:
      "La uso para arreglos puntuales que aparecen sin avisar. Un caso reciente: me tocó corregir una presentación de un curso, un PDF que tenía páginas de más, y con iLovePDF lo hice rapidísimo. No la abro a diario; la uso quizá un par de veces al mes, cuando surge algo concreto con un PDF.",
    teacherUseCases: [
      "Unir varios PDF en un solo documento.",
      "Extraer o eliminar páginas de una presentación.",
      "Comprimir un PDF para enviarlo por correo.",
      "Firmar documentos online de forma rápida.",
      "Resolver un apaño de documentación sin instalar software."
    ],
    honestVerdict:
      "iLovePDF no es una herramienta protagonista, y no pasa nada: es una secundaria que cumple un papel muy concreto y lo borda. Rápida, sencilla y sin complicaciones. De esas que no recuerdas que tienes hasta que las necesitas, y entonces las bendices.",
    importantNotice:
      "Para documentos muy delicados, recuerda que es un servicio online: subes el archivo para procesarlo. Si el PDF contiene información sensible, valora si prefieres una solución local.",
    metrics: [
      { label: "Uso", value: "1-2 veces/mes" },
      { label: "Instalación", value: "No" },
      { label: "Plan gratis", value: "Sí" }
    ],
    priceRows: [
      { label: "Basic", value: "Gratis, con límites" },
      { label: "Premium", value: "Desde 5 US$/mes en plan anual" },
      { label: "Business", value: "Precio personalizado" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Para mi uso puntual, el plan gratuito me basta. iLovePDF sí tiene planes de pago: Premium desbloquea más herramientas, procesamiento ilimitado, uso en web/móvil/escritorio, firmas digitales y experiencia sin anuncios. Antes de pagar, confirma el precio actual en su página oficial.",
    alternativeDetails: [
      {
        name: "Canva",
        url: "/herramientas/canva",
        description:
          "Puede resolver parte de estos apaños si ya estás trabajando el diseño de un documento, pero para tocar PDFs rápido iLovePDF va más directo."
      },
      {
        name: "Adobe Acrobat",
        url: "https://www.adobe.com/acrobat.html",
        description:
          "Es la opción potente para edición avanzada y trabajo constante con PDF. Para mis apaños puntuales, me sobra."
      }
    ],
    faqs: [
      {
        question: "¿Necesito instalar algo?",
        answer:
          "No. Funciona desde el navegador: entras, eliges la función y subes el archivo."
      },
      {
        question: "¿Es gratis de verdad?",
        answer:
          "Tiene plan gratuito, pero no todo es ilimitado. Para unir, extraer, comprimir o firmar de forma puntual, a mí me basta."
      },
      {
        question: "¿La uso para documentos sensibles?",
        answer:
          "Con cuidado. Al ser online, subes el archivo a sus servidores. Para documentos delicados, mejor valorar una alternativa local."
      },
      {
        question: "¿iLovePDF, Canva o Adobe Acrobat?",
        answer:
          "Para arreglos rápidos de PDF, iLovePDF. Si ya estás diseñando, Canva puede servir. Si necesitas edición avanzada y constante, Adobe Acrobat juega en otra liga."
      }
    ]
  },
  {
    name: "Kommodo",
    slug: "kommodo",
    title: "Kommodo: cómo grabo y alojo vídeos para mis estudiantes",
    metaDescription:
      "Uso Kommodo (antes Komodo Decks) para grabar tutoriales, explicar a mis estudiantes cómo entrar en mis cursos y alojar algunos vídeos. Te cuento para qué me sirve, qué me chirría y cuándo merece la pena.",
    keywords: [
      "Kommodo",
      "Komodo Decks",
      "grabar pantalla",
      "alojar vídeos online",
      "tutoriales para estudiantes",
      "grabar cámara y pantalla",
      "AppSumo"
    ],
    tagline:
      "Grabador de pantalla y cámara para tutoriales rápidos, soporte a estudiantes y vídeos alojados fuera de YouTube.",
    category: "Audio y vídeo",
    subcategories: ["vídeo", "contenido", "educación", "formación", "tutoriales", "AppSumo"],
    pricing: "suscripcion",
    officialUrl: "https://kommodo.ai",
    affiliateUrl: "https://kommodo.ai/?via=borja",
    hasAffiliate: true,
    myUseCase:
      "Lo uso de forma ocasional para grabar tutoriales, explicar a estudiantes cómo entrar en mis cursos y alojar algunos vídeos sin pasarlos por YouTube.",
    bestFor: [
      "Profes que necesitan grabar tutoriales rápidos para estudiantes",
      "Profes online que quieren compartir pantalla y cámara sin mucha edición",
      "Quien necesita alojar vídeos puntuales fuera de YouTube",
      "Quien quiere mandar enlaces privados o protegidos con contraseña"
    ],
    notFor: [
      "Alojar vídeos importantes como único almacén",
      "Editar cursos completos con un editor principal",
      "Quien necesita una infraestructura de vídeo muy fiable",
      "Quien solo busca grabación avanzada con mucho control técnico"
    ],
    pros: [
      "Permite grabar pantalla y cámara a la vez sin complicarse.",
      "El vídeo queda alojado en la propia plataforma y se comparte por enlace.",
      "El plan gratuito sirve para probar y para uso puntual.",
      "Las landings sencillas con contraseña y botones pueden resolver tutoriales privados.",
      "El plan de pago promete vídeos ilimitados y almacenamiento sin tope."
    ],
    cons: [
      "A veces aparece una marca de tiempo junto a la cámara y no he conseguido quitarla.",
      "Tuve un fallo concreto: un vídeo dejó de mostrarse y tuve que volver a subirlo.",
      "No la usaría como único sitio de almacenamiento para vídeos importantes.",
      "El editor incorporado sirve para apuros, pero no lo usaría como editor principal.",
      "Ha añadido funciones de IA que no he explorado, así que no las valoro desde experiencia real."
    ],
    alternatives: ["Loom", "OBS", "Vimeo", "DaVinci Resolve"],
    rating: 3,
    difficulty: "facil",
    status: "opcional",
    updatedAt: "2026-06-04",
    intro:
      "Kommodo es una de esas herramientas que tengo en el cajón para cuando necesito grabar un tutorial rápido: enseñar una pantalla, explicar a un estudiante cómo entrar en una plataforma o dejar grabada esa cosa que por email se vuelve una procesión de flechas, botones azules y malentendidos.",
    whatItDoes:
      "Kommodo, antes Komodo Decks, permite grabar pantalla, cámara o ambas cosas a la vez. La diferencia frente a un grabador básico es que también aloja el vídeo dentro de la plataforma, lo comparte por enlace y permite crear páginas sencillas con contraseña, botones y texto.",
    howIUseIt:
      "La compré en AppSumo cuando todavía se llamaba Komodo Decks, con una oferta de pago único. La he usado a veces con estudiantes para explicarles cómo acceder a una plataforma o a mis cursos. También he alojado algunos vídeos ahí cuando quería que no estuvieran en abierto en YouTube. No la uso de forma constante ni la pondría en el centro de mi infraestructura de vídeo, pero para soporte, tutoriales sueltos y vídeos rápidos me ha dado servicio.",
    teacherUseCases: [
      "Grabar un tutorial corto para explicar cómo entrar en un curso.",
      "Resolver dudas repetidas de estudiantes con un vídeo reutilizable.",
      "Compartir una explicación con pantalla y cámara por enlace privado.",
      "Alojar vídeos puntuales fuera de YouTube.",
      "Montar una landing sencilla con vídeo, contraseña y algún botón."
    ],
    honestVerdict:
      "Kommodo es útil y práctica para grabar y compartir rápido, pero no la convertiría en mi único almacén de vídeo. En su día, comprada como pago único en AppSumo, fue una compra razonable. Hoy, con planes recurrentes, la miraría con más calma: el gratuito sirve para uso puntual y el pago solo tiene sentido si vas a vivir dentro de la herramienta.",
    importantNotice:
      "Nota de fiabilidad: tuve un caso en el que un vídeo dejó de mostrarse por un fallo del reproductor y tuve que volver a subirlo. Fue una vez, pero suficiente para no confiarle lo que no pueda permitirme perder.",
    metrics: [
      { label: "Vídeos en el plan gratuito", value: "15" },
      { label: "Precio anual Premium desde", value: "108 $" },
      { label: "Mi compra original", value: "AppSumo" }
    ],
    priceRows: [
      { label: "Starter", value: "Gratis, 15 vídeos" },
      { label: "Premium anual", value: "9 $/mes, 108 $/año" },
      { label: "Premium mensual", value: "15 $/mes, 180 $/año" },
      { label: "Mi caso", value: "Pago único antiguo en AppSumo" },
      { label: "Afiliación", value: "Sí" }
    ],
    priceNote:
      "El plan gratuito ya sirve para probar y para uso esporádico. Pagaría solo si vas a crear muchos tutoriales, necesitas vídeos ilimitados o quieres usar sus landings y opciones de compartir como parte habitual de tu trabajo.",
    alternativeDetails: [
      {
        name: "Loom",
        url: "https://www.loom.com",
        description:
          "La alternativa más directa para grabar y compartir pantalla en el día a día. La he probado, pero no la uso lo suficiente como para hacer una ficha a fondo."
      },
      {
        name: "OBS",
        url: "https://obsproject.com/",
        description:
          "Mejor si quieres más control sobre la grabación. Juega en otra liga, pero también exige otra relación con la herramienta."
      },
      {
        name: "Vimeo",
        url: "https://vimeo.com",
        description:
          "Opción más seria para alojamiento de vídeo cuando la fiabilidad pesa más que la rapidez de grabar y compartir."
      },
      {
        name: "DaVinci Resolve",
        url: "/herramientas/davinci-resolve-editor-video-gratis-profesores",
        description:
          "No es alternativa para alojar, sino para editar de verdad. Para montar vídeo con calma, prefiero DaVinci antes que el editor interno de Kommodo."
      }
    ],
    faqs: [
      {
        question: "¿Kommodo es lo mismo que Komodo Decks?",
        answer:
          "Sí. Yo la compré cuando se llamaba Komodo Decks y hoy el producto se llama Kommodo, en kommodo.ai."
      },
      {
        question: "¿Sirve para alojar vídeos de cursos?",
        answer:
          "Puede servir para algunos vídeos, pero no la usaría como único almacén de vídeos importantes. Para eso conviene tener copia en otra plataforma."
      },
      {
        question: "¿Merece la pena pagar Kommodo?",
        answer:
          "Solo si vas a usarla de forma habitual: muchos tutoriales, vídeos ilimitados, landings y enlaces privados como parte de tu flujo real. Para uso puntual, el plan gratuito puede bastar."
      },
      {
        question: "¿Puedo editar dentro de Kommodo?",
        answer:
          "Tiene editor sencillo, pero lo dejaría para apuros. Para editar en serio, usaría una herramienta específica como DaVinci Resolve."
      }
    ]
  },
  {
    name: "SoundMadeSeen",
    slug: "soundmadeseen",
    title: "SoundMadeSeen: cómo convierto episodios de podcast en clips para redes",
    metaDescription:
      "Uso SoundMadeSeen para convertir mis episodios de podcast en audio en clips cortos con subtítulos para redes. Te cuento cómo funciona, su precio y para quién tiene sentido.",
    keywords: [
      "SoundMadeSeen",
      "convertir audio en clips",
      "clips para redes desde podcast",
      "clips de podcast solo audio",
      "crear clips automáticos",
      "vídeo para redes desde audio"
    ],
    tagline:
      "La herramienta que uso para convertir episodios antiguos de podcast solo audio en clips cortos para redes.",
    category: "Audio y vídeo",
    subcategories: ["ia", "video", "audio", "contenido", "redes sociales", "podcast"],
    pricing: "pago-unico",
    officialUrl: "https://appsumo.com/products/soundmadeseen/",
    affiliateUrl: "https://appsumo.8odi.net/ZdZDO0",
    hasAffiliate: true,
    myUseCase:
      "La uso un par de veces al mes para rescatar episodios buenos que solo tienen audio y convertirlos en clips con subtítulos para redes.",
    bestFor: [
      "Podcasters con catálogo de episodios solo en audio",
      "Profes que quieren sacar clips de podcasts antiguos",
      "Creadores que necesitan vídeos cortos sin haber grabado vídeo",
      "Quien quiere subtítulos y onda de sonido sin editar desde cero"
    ],
    notFor: [
      "Quien ya graba siempre en vídeo y tiene otros flujos más directos",
      "Quien necesita procesar muchos episodios largos cada mes con pocos minutos",
      "Quien busca una herramienta generalista de edición de vídeo",
      "Quien espera resultados sólidos de la función de historias con IA"
    ],
    pros: [
      "Detecta momentos y propone clips automáticamente.",
      "Genera subtítulos automáticos editables.",
      "Permite añadir fondos, imágenes y ondas de sonido.",
      "Exporta clips en un par de minutos.",
      "Es útil para dar segunda vida a episodios antiguos solo en audio."
    ],
    cons: [
      "El límite mensual de minutos condiciona cuántos episodios puedes procesar.",
      "La función de historias con IA todavía no me convence.",
      "No la uso a diario: mi uso real es ocasional.",
      "El precio y el modelo pueden cambiar en AppSumo."
    ],
    alternatives: ["OpusClip"],
    rating: 4,
    difficulty: "facil",
    status: "opcional",
    updatedAt: "2026-06-08",
    publishedAt: "2026-06-08T09:00:00+02:00",
    intro:
      "Esta es una herramienta que he comprado hace poco. Y sí, comprado, porque es de pago único. Tiene un objetivo muy específico: convertir episodios de podcast en solo audio en clips cortos para redes sociales. Si tienes un catálogo de episodios viejos que solo existen en audio, SoundMadeSeen es una forma rápida de darles una segunda vida en vídeo.",
    whatItDoes:
      "SoundMadeSeen coge un episodio de audio y lo transforma en clips cortos y visuales, listos para publicar en redes. Su gracia está en que no necesitas haber grabado vídeo: parte del audio y le pone una capa visual encima, con fondo, subtítulos y ondas de sonido, para que funcione en Instagram, TikTok y compañía.",
    howIUseIt:
      "No la uso todo el tiempo, porque ahora mismo doy prioridad a los episodios que grabo con vídeo. La saco de vez en cuando, un par de veces al mes, para rescatar episodios buenos que solo tienen audio y convertirlos en material para redes. Mis episodios duran de media unos veinte y pico minutos, así que con 100 minutos al mes puedo procesar unos cuatro episodios y sacar entre 15 y 20 clips.",
    teacherUseCases: [
      "Convertir episodios antiguos solo en audio en vídeos cortos para redes.",
      "Recortar momentos destacados sin hacer toda la edición manual.",
      "Añadir subtítulos editables a clips de podcast.",
      "Usar imágenes preparadas en Canva como fondo visual.",
      "Publicar piezas cortas en redes sin haber grabado el episodio en vídeo."
    ],
    honestVerdict:
      "SoundMadeSeen hace una cosa muy concreta y la hace bien: convertir tu audio en clips visuales para redes en un par de clics. No es una herramienta para todo, ni la uso a diario, pero para rescatar episodios antiguos que se merecían más vida tiene un valor claro. Por el precio de pago único que pagué, me ha salido a cuenta.",
    importantNotice:
      "Este artículo usa enlace de afiliado de AppSumo vía Impact. Si compras desde ese enlace, a ti te cuesta lo mismo y a mí me llega una comisión que ayuda a mantener el Laborjatorio.",
    metrics: [
      { label: "Precio verificado", value: "39 $" },
      { label: "Minutos", value: "100/mes" },
      { label: "Uso", value: "Ocasional" }
    ],
    priceRows: [
      { label: "AppSumo", value: "39 $ pago único, verificado el 8 de junio de 2026" },
      { label: "Límite", value: "100 minutos de generación de vídeo al mes" },
      { label: "Ampliación", value: "Más códigos aumentan límites, según AppSumo" },
      { label: "Afiliación", value: "Sí, AppSumo vía Impact" }
    ],
    priceNote:
      "Pagué 39 dólares como pago único. AppSumo muestra actualmente ese precio con 100 minutos de generación de vídeo al mes. Confirma siempre el plan actual antes de comprar, porque estas ofertas pueden cambiar.",
    alternativeDetails: [
      {
        name: "OpusClip",
        url: "/herramientas/opusclip",
        description:
          "OpusClip brilla cuando ya tienes vídeo. SoundMadeSeen tiene más sentido cuando partes de episodios solo en audio."
      },
      {
        name: "Canva",
        url: "/herramientas/canva",
        description:
          "Lo uso para preparar imágenes o fondos visuales que luego puedo llevar a SoundMadeSeen."
      },
      {
        name: "Spotify for Podcasters",
        url: "/herramientas/spotify-for-podcasters",
        description:
          "Es la plataforma donde gestiono la distribución del podcast; SoundMadeSeen entra después para reciclar episodios en redes."
      }
    ],
    faqs: [
      {
        question: "¿SoundMadeSeen sirve si mi podcast no tiene vídeo?",
        answer:
          "Sí. Ese es precisamente su caso más claro: partir de audio y generar clips visuales con subtítulos, fondo y onda de sonido."
      },
      {
        question: "¿Cuántos episodios puedo procesar con 100 minutos al mes?",
        answer:
          "En mi caso, con episodios de unos veinte y pico minutos, calculo unos cuatro episodios al mes."
      },
      {
        question: "¿La uso a diario?",
        answer:
          "No. La uso de forma ocasional, un par de veces al mes, para rescatar episodios antiguos solo en audio."
      },
      {
        question: "¿Qué tal la función de historias con IA?",
        answer:
          "De momento no me convence. La parte fuerte para mí es convertir audio en clips con subtítulos, no generar historias visuales con IA."
      }
    ]
  },
  {
    name: "HappyScribe",
    slug: "happyscribe",
    title: "HappyScribe: cómo transcribo mis podcasts y formaciones cada semana",
    metaDescription:
      "Uso HappyScribe todas las semanas para transcribir mis podcasts y formaciones. Te cuento cómo funciona, qué planes tiene, cuándo merece pagarlo y por qué es de lo mejor que he probado.",
    keywords: [
      "HappyScribe",
      "transcribir audio y vídeo",
      "transcripciones para podcast",
      "generar subtítulos",
      "transcripción automática",
      "transcripción con IA"
    ],
    tagline:
      "La herramienta que uso cada semana para transcribir podcasts, formaciones y vídeos sin pelearme con el audio.",
    category: "Audio y vídeo",
    subcategories: ["ia", "audio", "contenido", "productividad", "transcripción", "subtítulos"],
    pricing: "suscripcion",
    officialUrl: "https://www.happyscribe.com",
    affiliateUrl: "https://happyscribe.cello.so/QLTRpQgTSlY",
    hasAffiliate: true,
    myUseCase:
      "La uso todas las semanas para transcribir podcasts y formaciones, sacar subtítulos, reutilizar contenido y mantener organizado el material por proyectos.",
    bestFor: [
      "Profes que graban formaciones y quieren reutilizar el contenido",
      "Creadores educativos con podcast o canal de vídeo",
      "Profes de idiomas que necesitan subtítulos o transcripciones limpias",
      "Quien transcribe con frecuencia y quiere un flujo estable"
    ],
    notFor: [
      "Quien solo necesita transcribir un audio suelto de vez en cuando",
      "Quien espera una transcripción perfecta sin revisar nada",
      "Quien busca exclusivamente una herramienta para grabar reuniones",
      "Quien no quiere pagar una suscripción y no necesita transcripción habitual"
    ],
    pros: [
      "La calidad de transcripción es de lo mejor que he probado.",
      "Permite editar la transcripción y nombrar interlocutores.",
      "Genera subtítulos a partir del archivo transcrito.",
      "Las carpetas ayudan a separar proyectos y no mezclar materiales.",
      "La IA interna permite pedir resúmenes, citas y elementos destacados."
    ],
    cons: [
      "La oferta de pago único de AppSumo con la que entré ya no existe.",
      "La transcripción automática sigue necesitando un repasito humano.",
      "No he probado la revisión humana de pago.",
      "No he usado la grabación de reuniones con transcripción directa.",
      "Para uso muy esporádico, una suscripción puede no tener sentido."
    ],
    alternatives: ["ChatGPT", "Zoom", "Audacity", "Spotify for Podcasters"],
    rating: 5,
    difficulty: "facil",
    status: "imprescindible",
    updatedAt: "2026-06-04",
    intro:
      "HappyScribe es la herramienta que uso todas las semanas para pasar a texto podcasts, vídeos y formaciones. Me sirve para sacar subtítulos, convertir audios en artículos, reutilizar ideas y tener a mano el texto de cosas que antes solo existían en una grabación.",
    whatItDoes:
      "HappyScribe permite subir archivos de audio o vídeo y generar una transcripción automática. Después puedes corregir el texto, identificar quién habla, exportar la transcripción o generar subtítulos. No se queda solo en convertir audio en texto: te da un espacio para trabajar ese contenido.",
    howIUseIt:
      "La uso sobre todo con mis formaciones y mi podcast. Subo el archivo, dejo que HappyScribe genere la transcripción y después reviso lo necesario. También organizo los proyectos en carpetas para no mezclar audios de distintas formaciones o episodios. Últimamente he incorporado su IA interna para pedir resúmenes, citas y elementos destacados sin tener que sacar siempre el texto a otra herramienta.",
    teacherUseCases: [
      "Transcribir una formación grabada para convertirla en material escrito.",
      "Sacar subtítulos de vídeos educativos.",
      "Convertir episodios de podcast en artículos o notas de apoyo.",
      "Tener por escrito una clase, explicación o entrevista.",
      "Enviar una transcripción a una IA para limpiar incoherencias o sacar ideas."
    ],
    honestVerdict:
      "HappyScribe es de esas herramientas que uso sin pensarlo. Me da buenas transcripciones, me organiza el trabajo y me permite exprimir mejor lo que ya he grabado. La pega real es que mi oferta de pago único de AppSumo ya no existe, así que hoy entras por suscripción. Si transcribes a menudo, merece mucho la pena. Si transcribes de pascuas a ramos, empieza por el gratis.",
    importantNotice:
      "Yo entré con una oferta antigua de AppSumo que me da 2 horas semanales. Esa oferta ya no existe, así que mi situación no es la misma que la de alguien que entre hoy por los planes actuales.",
    metrics: [
      { label: "Uso real", value: "Semanal" },
      { label: "Mi plan antiguo", value: "2 h/semana" },
      { label: "Oferta original", value: "AppSumo" }
    ],
    priceRows: [
      { label: "Gratis", value: "45 min por grabación y 10 min de prueba IA" },
      { label: "Basic anual", value: "8,50 €/mes, 1.440 min/año" },
      { label: "Pro anual", value: "19 €/mes, 7.200 min/año" },
      { label: "Business anual", value: "59 €/mes, 72.000 min/año" },
      { label: "Créditos extra", value: "0,20 $/min en la página oficial" },
      { label: "Afiliación", value: "Sí" }
    ],
    priceNote:
      "Tomo como referencia los precios que se muestran para España en planes anuales. El plan gratis permite grabaciones de hasta 45 minutos, pero la prueba de transcripción/subtítulos/traducción IA es de 10 minutos. Como los precios cambian, conviene confirmarlos siempre en la web oficial antes de pagar.",
    alternativeDetails: [
      {
        name: "ChatGPT",
        url: "/herramientas/chatgpt",
        description:
          "No transcribe el archivo por sí solo en mi flujo, pero lo uso para pulir transcripciones, detectar incoherencias y convertir texto bruto en material útil."
      },
      {
        name: "Zoom",
        url: "https://zoom.us/",
        description:
          "Lo uso para reuniones y clases online. Si necesito transcripción de reuniones, esa parte la cubro por ahí, no con HappyScribe."
      },
      {
        name: "Audacity",
        url: "/herramientas/audacity",
        description:
          "Juega en otra parte del proceso: editar audio. No sustituye a HappyScribe, pero puede ir antes si necesitas limpiar o preparar el archivo."
      },
      {
        name: "Spotify for Podcasters",
        url: "/herramientas/spotify-for-podcasters",
        description:
          "Sirve para publicar podcast, no para transcribir. Lo menciono como herramienta relacionada dentro del flujo de audio."
      }
    ],
    faqs: [
      {
        question: "¿HappyScribe transcribe perfecto?",
        answer:
          "No. La transcripción automática es muy buena, pero siempre conviene revisar. En mi caso, con una revisión ligera y apoyo de IA queda bastante limpio."
      },
      {
        question: "¿Merece la pena pagar HappyScribe?",
        answer:
          "Sí, si transcribes a menudo: podcasts, vídeos, formaciones o clases grabadas. Si solo tienes un audio suelto cada mucho tiempo, empieza por el plan gratuito."
      },
      {
        question: "¿Uso la revisión humana de HappyScribe?",
        answer:
          "No. Existe como servicio extra de pago, pero no la he necesitado. Con la transcripción automática y mi revisión me basta."
      },
      {
        question: "¿Uso HappyScribe para grabar reuniones?",
        answer:
          "No. Sé que han añadido funciones de grabación y notas de reuniones, pero esa parte la cubro con Zoom."
      }
    ]
  },
  {
    name: "SpeakPipe",
    slug: "speakpipe",
    title: "SpeakPipe: cómo recibo audios de mi audiencia (y consigo sus emails)",
    metaDescription:
      "Usé SpeakPipe en mi podcast para que la audiencia me enviara audios de hasta 90 segundos. Te cuento cómo funciona, sus límites y por qué con la versión gratis sobra.",
    keywords: [
      "SpeakPipe",
      "recibir audios de la audiencia",
      "mensajes de voz para podcast",
      "interacción con la audiencia",
      "recoger audios en WordPress",
      "captar emails"
    ],
    tagline:
      "La herramienta que usé para que la audiencia de mi podcast me enviara mensajes de voz sin montar un lío técnico.",
    category: "Audio y vídeo",
    subcategories: ["comunicación", "audio", "contenido", "podcast", "audiencia"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://www.speakpipe.com/",
    hasAffiliate: false,
    myUseCase:
      "La usé en ¡Palabras! para recibir audios de estudiantes y profesores, recoger palabras para episodios futuros y, de paso, pedir el email de quien participaba.",
    bestFor: [
      "Podcasters que quieren recibir mensajes de voz de su audiencia",
      "Profes que quieren participación oral sin montar una infraestructura propia",
      "Creadores que necesitan una página sencilla para recoger audios",
      "Quien quiere captar emails junto con la participación de la audiencia"
    ],
    notFor: [
      "Quien no tiene podcast ni dinámica de participación por voz",
      "Recoger audios largos en el plan gratuito",
      "Quien necesita personalización visual completa sin pagar",
      "Quien busca una herramienta generalista de comunicación"
    ],
    pros: [
      "El plan gratuito es suficiente para mensajes cortos.",
      "Puedes recibir audios desde una página propia o incrustarlo en WordPress.",
      "Puedes pedir el email de quien envía el mensaje.",
      "No necesitas configuraciones complejas para empezar.",
      "Encaja muy bien con podcasts y dinámicas de audiencia."
    ],
    cons: [
      "El plan gratuito limita cada audio a 90 segundos.",
      "El almacenamiento gratuito es de 100 MB.",
      "En la versión gratis el botón es naranja y la personalización visual es limitada.",
      "Solo puedes tener un micrófono o proyecto activo en el plan gratuito.",
      "Ahora mismo la tengo en pausa."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    status: "opcional",
    updatedAt: "2026-06-07",
    publishedAt: "2026-06-07T10:00:00+02:00",
    intro:
      "Es una herramienta estupenda para algo muy concreto: que tu audiencia te envíe audios. SpeakPipe permite que tus oyentes o estudiantes te dejen un mensaje de voz, y eso, bien usado, da mucho juego. Yo la usé en mi podcast ¡Palabras! para que estudiantes y profesores me mandaran palabras para episodios futuros.",
    whatItDoes:
      "SpeakPipe es una herramienta que permite a tu audiencia enviarte mensajes de audio, normalmente pensada para podcasts. Creas tu cuenta y te genera una página donde la gente puede grabar directamente, o si lo prefieres embebes esa interfaz en tu WordPress. Tu audiencia graba su audio, a ti te llega un correo con el mensaje y desde ahí decides qué hacer con él: usarlo en un episodio, responderlo o guardarlo. Es de uso muy específico, eso te lo digo ya: no es una navaja suiza, es una herramienta para una cosa. Pero esa cosa la hace muy bien.",
    howIUseIt:
      "Cuando tenía el podcast de ¡Palabras! activo, usaba SpeakPipe cada semana: los oyentes me mandaban palabras en audio y yo las llevaba a episodios futuros. Una forma muy directa de que la comunidad formara parte del programa. Ahora mismo lo tengo parado, pero sí tengo a la vista un proyecto en el que voy a volver a utilizarlo. Para gestionar los episodios en sí uso Spotify for Podcasters; SpeakPipe es solo la pieza de recoger las voces.",
    teacherUseCases: [
      "Recibir preguntas de estudiantes en audio.",
      "Pedir participación oral para un podcast educativo.",
      "Recoger palabras, testimonios o historias de la audiencia.",
      "Crear una página sencilla para mensajes de voz.",
      "Pedir email junto con el audio para mantener el contacto."
    ],
    honestVerdict:
      "SpeakPipe no es una herramienta que vayas a usar para todo, pero para lo suyo —recibir audios de tu audiencia— es estupenda, sencilla y gratis. A mí me funcionó muy bien con ¡Palabras!, y pienso recuperarla para un proyecto futuro. Si tienes podcast o quieres una interacción más directa con tu audiencia mediante la voz, puede ser una gran idea. Si no, probablemente no la necesites. Tan claro como eso.",
    importantNotice:
      "Está en pausa en mi flujo actual. La incluyo porque ya la he usado de verdad y porque tengo previsto recuperarla, pero no es una herramienta diaria: es una pieza muy concreta para recoger voces. Además, pedir el email de quien participa puede ayudarte a construir una lista de potenciales estudiantes.",
    metrics: [
      { label: "Audio gratis", value: "90 s" },
      { label: "Almacenamiento gratis", value: "100 MB" },
      { label: "Uso actual", value: "En pausa" }
    ],
    priceRows: [
      { label: "Free", value: "Gratis, mensajes ilimitados, 90 s por audio, 100 MB" },
      { label: "Gold", value: "12 $/mes si se paga anual; 15 $/mes mensual" },
      { label: "Premium", value: "36 $/mes si se paga anual; 45 $/mes mensual" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Tiene versión gratuita y versión de pago. Mi recomendación honesta: con la gratuita sobra para el uso típico de un profe o podcaster que empieza. Yo no he necesitado pagar, así que no te voy a empujar a hacerlo.",
    faqs: [
      {
        question: "¿SpeakPipe sirve para podcasts?",
        answer:
          "Sí. De hecho, su caso más claro es recibir mensajes de voz de oyentes para usarlos en episodios, preguntas o dinámicas de participación."
      },
      {
        question: "¿Cuánto permite grabar el plan gratis?",
        answer:
          "El plan gratuito permite grabaciones de hasta 90 segundos, con 100 MB de almacenamiento."
      },
      {
        question: "¿Tengo que instalarlo en WordPress?",
        answer:
          "No necesariamente. Puedes usar una página propia de SpeakPipe. Si quieres integrarlo en tu web, también puedes incrustar un widget."
      },
      {
        question: "¿Tiene afiliación?",
        answer:
          "No. La propia documentación de SpeakPipe indica que no tienen programa de afiliados en este momento."
      }
    ]
  },
  {
    name: "Metricool",
    slug: "metricool",
    title: "Metricool: cómo veo mis métricas y programo en redes sin entrar en ellas",
    metaDescription:
      "Llevo más de seis años usando Metricool para ver las métricas de mi web y programar en redes sin tener que entrar en ellas. Te cuento para qué la uso, sus límites y cuándo merece pagarla.",
    keywords: [
      "Metricool",
      "métricas de web",
      "programar publicaciones en redes",
      "analítica web sencilla",
      "alternativa a Google Analytics",
      "programación de redes sociales"
    ],
    tagline:
      "La herramienta que uso para ver métricas sencillas y programar publicaciones sin vivir dentro de cada red social.",
    category: "Marketing y ventas",
    subcategories: ["analítica", "redes sociales", "productividad", "contenido", "programación"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://metricool.com",
    affiliateUrl: "https://f.mtr.cool/laborjatorio",
    hasAffiliate: true,
    myUseCase:
      "La uso desde hace más de seis años para consultar métricas básicas de mi web y programar publicaciones en Instagram, TikTok, Shorts y Facebook sin entrar constantemente en cada red.",
    bestFor: [
      "Profes que quieren ver métricas web sencillas sin pelearse con Google Analytics",
      "Creadores educativos que programan contenido en varias redes",
      "Quien quiere publicar en redes sin tener que entrar en ellas cada día",
      "Profes con una marca o proyecto que necesitan un panel claro para redes y métricas"
    ],
    notFor: [
      "Quien necesita analítica web profunda y muy técnica",
      "Quien ya programa publicaciones desde otra herramienta que paga y le cubre",
      "Quien publica muy poco y no supera los límites del plan gratuito",
      "Quien necesita LinkedIn o X/Twitter dentro del plan gratis"
    ],
    pros: [
      "El plan gratuito es generoso para empezar.",
      "La interfaz es mucho más amable que Google Analytics para mirar lo básico.",
      "Centraliza métricas y programación en un solo sitio.",
      "Permite programar sin tener que entrar en cada red social.",
      "Los informes son personalizables y digeribles."
    ],
    cons: [
      "El plan gratuito tiene límite de 20 publicaciones programadas al mes.",
      "LinkedIn y X/Twitter quedan fuera del plan gratuito.",
      "Solo permite una marca en el plan gratis.",
      "Las autolistas existen, pero no las he explorado mucho.",
      "En mi caso actual no pagaría la mensualidad porque tengo una licencia antigua y OpusClip ya cubre parte de la programación."
    ],
    alternatives: ["OpusClip", "Google Analytics"],
    rating: 4,
    difficulty: "facil",
    status: "importante",
    updatedAt: "2026-06-04",
    intro:
      "Metricool es una pedazo de herramienta que llevo usando desde hace más de seis años para dos cosas que suelen dar bastante pereza: mirar métricas de la web y programar publicaciones en redes. Me permite ver lo básico sin marearme y publicar sin vivir pegado a Instagram, TikTok, Shorts o Facebook.",
    whatItDoes:
      "Metricool muestra métricas de web y redes sociales, genera informes y permite programar publicaciones desde un solo panel. Su valor, para mí, no está en tener mil datos, sino en que puedo ver visitas, actividad y planificación sin abrir cada red por separado ni pelearme con paneles llenos de ruido.",
    howIUseIt:
      "Antes no usaba ninguna herramienta de métricas. Probé Google Analytics y acabé tan horrorizado que no lo volví a abrir: siempre me ha parecido lioso y con demasiada información para lo que necesito. Metricool fue mi alternativa amable. Hoy miro ahí las métricas básicas de la web y también programo contenido en Instagram, Reels, TikTok, Shorts y Facebook, aunque a Facebook no entro prácticamente nunca. Esa es la clave: publicar sin estar ahí.",
    teacherUseCases: [
      "Consultar visitas mensuales, semanales y en tiempo real sin entrar en Google Analytics.",
      "Programar publicaciones educativas en varias redes desde un solo panel.",
      "Publicar en Facebook u otras redes sin tener que entrar a distraerse.",
      "Preparar informes sencillos de evolución del contenido.",
      "Centralizar redes y métricas si tienes una marca educativa online."
    ],
    honestVerdict:
      "Metricool me acompaña desde hace más de seis años, y eso ya dice bastante. Me parece comodísima para ver métricas sencillas y programar redes sin entrar en ellas. Mi matiz honesto es que hoy yo no pagaría la mensualidad en mi caso concreto: tengo una licencia antigua de pago único y OpusClip ya incorpora programación. Pero si empiezas de cero y quieres una herramienta sencilla para métricas básicas y redes, Metricool es una opción muy sólida. Empieza por el gratis y paga solo cuando sus límites te aprieten.",
    importantNotice:
      "Mi situación no es la habitual: compré en su día una oferta de pago único que ya no está disponible. Hoy Metricool funciona con planes recurrentes, así que mi coste real y el de alguien que entre ahora no son el mismo.",
    metrics: [
      { label: "Tiempo usándola", value: "+6 años" },
      { label: "Límite gratis", value: "20 posts/mes" },
      { label: "Primer plan de pago", value: "20 $/mes" }
    ],
    priceRows: [
      { label: "Free", value: "1 marca, hasta 20 posts/mes" },
      { label: "Starter", value: "Hasta 5 marcas, 20 $/mes" },
      { label: "Mi caso", value: "Pago único antiguo, ya no disponible" },
      { label: "Afiliación", value: "Sí" }
    ],
    priceNote:
      "El plan gratis permite empezar sin coste, pero tiene límites: una marca, 20 publicaciones programadas al mes y sin conexión de LinkedIn ni X/Twitter. El primer plan de pago añade hasta 5 marcas y elimina varios límites. Como los precios cambian, conviene confirmarlos en la web oficial antes de pagar.",
    alternativeDetails: [
      {
        name: "OpusClip",
        url: "/herramientas/opusclip",
        description:
          "La pago cada mes para crear clips y ahora también permite programar publicaciones. Si algún día tuviera que elegir, podría mover parte de la programación ahí."
      },
      {
        name: "Google Analytics",
        url: "https://analytics.google.com/",
        description:
          "Es el estándar para analítica web profunda, pero a mí me resulta demasiado lioso para mirar lo básico que necesito en mi día a día."
      }
    ],
    faqs: [
      {
        question: "¿Metricool sirve como alternativa a Google Analytics?",
        answer:
          "Para métricas sencillas, sí. Si quieres ver visitas y evolución sin entrar en un panel complejo, Metricool puede ser mucho más amable. Para analítica profunda, Google Analytics sigue siendo otra cosa."
      },
      {
        question: "¿El plan gratuito de Metricool merece la pena?",
        answer:
          "Sí, sobre todo si tienes una sola marca y no programas más de 20 publicaciones al mes. Para empezar, da bastante de sí."
      },
      {
        question: "¿Pagaría Metricool hoy?",
        answer:
          "En mi caso concreto, no pagaría la mensualidad porque tengo una licencia antigua y otra herramienta que ya cubre parte de la programación. Pero para alguien que empieza de cero y publica mucho, el pago puede tener sentido."
      },
      {
        question: "¿Uso mucho las autolistas?",
        answer:
          "No demasiado. Sé que existen y pueden ser útiles para republicar contenido que funcionó, pero yo sigo siendo un poquito analógico para esa parte."
      }
    ]
  },
  {
    name: "WordPress",
    slug: "wordpress",
    title: "WordPress.org: por qué todo profe debería tener su propia casa en internet",
    metaDescription:
      "Llevo casi diez años con mi web en WordPress.org, mi casa en internet. Te cuento qué es, en qué se diferencia de .com, sus límites y por qué hoy también miraría otras opciones.",
    keywords: [
      "WordPress.org",
      "WordPress para profesores",
      "crear tu propia web",
      "WordPress.org vs WordPress.com",
      "tu propia web frente a redes sociales",
      "montar una web de negocio"
    ],
    tagline:
      "La base de mi casa en internet durante casi diez años: abierta, flexible y tuya.",
    category: "Web",
    subcategories: ["web", "ventas", "documentación", "negocio", "cms", "wordpress"],
    pricing: "gratis",
    officialUrl: "https://wordpress.org",
    hasAffiliate: false,
    myUseCase:
      "Es la base sobre la que he construido mi web principal durante casi diez años: mi casa propia en internet, fuera de los algoritmos de las redes.",
    bestFor: [
      "Profes que quieren una web propia a largo plazo",
      "Negocios educativos que necesitan vender, captar leads o publicar contenido",
      "Quien quiere controlar su audiencia fuera de redes sociales",
      "Proyectos que pueden crecer con plugins y funcionalidades nuevas"
    ],
    notFor: [
      "Quien quiere una página ultrarrápida sin aprender nada",
      "Quien no quiere contratar dominio ni hosting",
      "Quien prefiere una solución cerrada y muy guiada",
      "Quien quiere experimentar con webs generadas con IA sin tocar WordPress"
    ],
    pros: [
      "Es gratuito y de código abierto.",
      "Te permite construir una web muy flexible, módulo a módulo.",
      "No dependes solo de redes sociales ni de algoritmos ajenos.",
      "Tiene un ecosistema enorme de plugins y documentación.",
      "Con un buen hosting, instalarlo cada vez es más sencillo."
    ],
    cons: [
      "Tiene curva de aprendizaje.",
      "Necesitas dominio, hosting y cierto mantenimiento.",
      "El ecosistema de plugins puede complicarse si no eliges bien.",
      "La IA está abriendo alternativas nuevas para construir webs."
    ],
    alternatives: ["Web con IA", "Constructores cerrados"],
    rating: 5,
    difficulty: "media",
    status: "imprescindible",
    updatedAt: "2026-06-08",
    publishedAt: "2026-06-08T10:00:00+02:00",
    intro:
      "Empecemos deshaciendo un malentendido muy común. Si alguna vez te han dicho que WordPress es de pago, no: posiblemente hayas mirado WordPress.com. Yo la que utilizo es la punto org, WordPress.org, que es gratuita y abierta. Y es la herramienta sobre la que he construido toda mi web. Ha sido mi fiel compañero durante casi diez años, y siempre la he defendido a muerte.",
    whatItDoes:
      "WordPress.org es una plataforma de código abierto para crear y gestionar tu web. Si tu web es tu casa de internet, hay diferentes formas de fabricarla: puedes tener casas prefabricadas o puedes construirla poco a poco, módulo a módulo. WordPress es justo lo segundo: te permite construir algo a la medida de tus necesidades, con diseño, formularios, membresías, ventas, plugins y funciones avanzadas.",
    howIUseIt:
      "WordPress es la base de mi proyecto desde hace casi diez años. Antes de tener WordPress, yo solo tenía redes sociales, y eso tiene un peligro tremendo: si solo estás en redes y no tienes tu propia casa en internet, dependes de algoritmos y decisiones que no controlas. Montarte tu propia casa en internet es importante. Esa web vive en tu hosting y nadie te la puede apagar por un cambio de política ajena.",
    teacherUseCases: [
      "Crear una web profesional propia.",
      "Publicar contenido que no dependa de redes sociales.",
      "Captar suscriptores y estudiantes desde formularios propios.",
      "Vender cursos, clases, membresías o recursos.",
      "Construir una base de negocio educativo a largo plazo."
    ],
    honestVerdict:
      "WordPress.org ha sido mi fiel compañero durante casi diez años y lo sigo defendiendo: para montarte tu propia casa en internet, con control y sin depender de los algoritmos de nadie, es una opción sólida, abierta y probada. Mi honestidad añadida es que internet se mueve rápido y yo mismo ya estoy mirando qué traen las herramientas de IA. Pero el consejo de fondo no cambia: ten tu propia casa en internet. Lo demás es secundario.",
    importantNotice:
      "Hablo de WordPress.org, no de WordPress.com. El software es gratuito, pero una web profesional necesita dominio, hosting y, según el caso, plugins o temas de pago.",
    metrics: [
      { label: "Uso", value: "Casi 10 años" },
      { label: "Software", value: "Gratis" },
      { label: "Estado", value: "Imprescindible" }
    ],
    priceRows: [
      { label: "WordPress.org", value: "Gratis y de código abierto" },
      { label: "Costes reales", value: "Dominio, hosting y posibles plugins" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "El software de WordPress.org es gratuito. Lo que pagas son las piezas que lo rodean: dominio y hosting, que son costes inevitables, y a veces algún plugin o tema de pago.",
    alternativeDetails: [
      {
        name: "Webempresa",
        url: "/herramientas/webempresa",
        description:
          "El hosting que uso y la vía más sencilla para instalar WordPress prácticamente de la mano."
      },
      {
        name: "MailPoet",
        url: "/herramientas/mailpoet",
        description:
          "El plugin que uso dentro de WordPress para gestionar mi newsletter y mi lista."
      },
      {
        name: "GitHub + Vercel + Codex",
        url: "/herramientas/codex",
        description:
          "El Laborjatorio no está hecho con WordPress: es una alternativa más técnica que estoy explorando con IA, GitHub y Vercel."
      }
    ],
    faqs: [
      {
        question: "¿WordPress.org es lo mismo que WordPress.com?",
        answer:
          "No. WordPress.org es el software abierto y gratuito que instalas en tu hosting. WordPress.com es una plataforma alojada con sus propios planes y condiciones."
      },
      {
        question: "¿WordPress.org es gratis de verdad?",
        answer:
          "Sí, el software es gratis. Lo que pagas es el dominio, el hosting y, si los necesitas, plugins o temas concretos."
      },
      {
        question: "¿Sigue mereciendo la pena con la llegada de la IA?",
        answer:
          "Sí, si quieres una base sólida y control propio. Pero hoy también tiene sentido mirar nuevas formas de construir webs con IA, sobre todo si quieres experimentar."
      },
      {
        question: "¿Por qué insisto tanto en tener web propia?",
        answer:
          "Porque si solo vives en redes, dependes de algoritmos y reglas ajenas. Tu web es tu casa: tu contenido, tus formularios y tu relación con la audiencia viven en un lugar que controlas."
      }
    ]
  },
  {
    name: "Webempresa",
    slug: "webempresa",
    title: "Webempresa: el hosting español donde tengo mi web (y por qué no me cambio)",
    metaDescription:
      "Tengo mi web y mi dominio en Webempresa: hosting español, soporte rápido en español y precios honestos. Te cuento mi experiencia, lo que pago y para quién tiene sentido.",
    keywords: [
      "Webempresa",
      "hosting español",
      "hosting para WordPress",
      "dónde alojar mi web",
      "hosting con soporte en español",
      "registrar dominio"
    ],
    tagline:
      "El hosting español donde tengo alojada mi web y mis dominios, con soporte en español y precios claros.",
    category: "Web",
    subcategories: ["hosting", "wordpress", "dominios", "web", "productividad"],
    pricing: "suscripcion",
    officialUrl: "https://www.webempresa.com/",
    affiliateUrl: "https://clientes.webempresa.com/europa/gestion/aff.php?aff=6200",
    hasAffiliate: true,
    myUseCase:
      "Tengo mi web y mis dominios alojados en Webempresa. Lo uso como base técnica del negocio: hosting, dominio, correos asociados y soporte cuando algo se complica.",
    bestFor: [
      "Profes en España que quieren montar una web en WordPress",
      "Quien valora soporte técnico en español",
      "Personas que empiezan y quieren acompañamiento al configurar la web",
      "Negocios educativos que necesitan una base fiable para su web"
    ],
    notFor: [
      "Quien busca el hosting más barato posible sin mirar soporte",
      "Quien ya tiene un proveedor fiable y no necesita cambiar",
      "Proyectos que requieren una arquitectura técnica muy personalizada",
      "Quien no quiere pagar anualmente por la base de su web"
    ],
    pros: [
      "Soporte en español rápido y útil.",
      "Me han parecido honestos con el precio.",
      "Acompañan bien al instalar WordPress y arrancar.",
      "Permiten gestionar hosting, dominio y correos en el mismo entorno.",
      "La documentación es amplia si quieres resolver cosas por tu cuenta."
    ],
    cons: [
      "No es gratis ni tiene sentido medirlo como una herramienta menor.",
      "La documentación es tan extensa que puede dar pereza.",
      "El precio público puede variar mucho entre promoción, renovación e impuestos.",
      "No he probado otros hostings recientes para comparar desde la experiencia."
    ],
    alternatives: [],
    rating: 5,
    difficulty: "media",
    status: "importante",
    updatedAt: "2026-06-06",
    publishedAt: "2026-06-06T23:59:00+02:00",
    intro:
      "Toda web necesita un sitio donde vivir, y ese sitio es el hosting. El mío es Webempresa, un hosting español, y ahí es donde tengo alojada mi web y también mis dominios. La verdad es que solo tengo cosas buenas que decir.",
    whatItDoes:
      "Webempresa es una empresa española de hosting y registro de dominios. En cristiano: es donde guardas tu web para que esté disponible en internet, y donde puedes registrar el nombre de tu dominio. También puedes gestionar correos asociados a ese dominio y pedir soporte cuando algo técnico se atasca.",
    howIUseIt:
      "Vengo de otro hosting cuyo nombre ya ni recuerdo. Funcionaba, pero tuve una mala experiencia con el precio de renovación. Con Webempresa valoro justo lo contrario: tranquilidad con el precio, soporte en español y ayuda cuando toca configurar cosas como WordPress, correos o problemas concretos de la web. A veces consulto su documentación, aunque para respuestas rápidas también tiro de ChatGPT.",
    teacherUseCases: [
      "Alojar una web profesional de profe online.",
      "Registrar y mantener dominios propios.",
      "Instalar WordPress con acompañamiento.",
      "Crear correos asociados al dominio.",
      "Tener soporte en español cuando algo técnico se rompe o no se entiende."
    ],
    honestVerdict:
      "Webempresa hace su trabajo y me da algo que valoro mucho después de un mal susto con otro proveedor: tranquilidad. Precios honestos, soporte en español y la mano tendida para arrancar. Para mí, es la base sobre la que se sostiene todo lo demás. Si estás en España y quieres alojar tu web sin dolores de cabeza, le echaría un ojo.",
    metrics: [
      { label: "Mi hosting", value: "126 €/año" },
      { label: "Mi dominio", value: "19 €/año" },
      { label: "Soporte", value: "Español" }
    ],
    priceRows: [
      { label: "Mi hosting", value: "126 €/año" },
      { label: "Mis dominios", value: "19 €/año cada uno" },
      { label: "Plan WordPress Micro", value: "Precio normal 70 €/año; promoción 35 €/año + impuestos" },
      { label: "Plan WordPress Mini", value: "Precio normal 142 €/año; promoción 35,50 €/año + impuestos" },
      { label: "Afiliación", value: "Sí" }
    ],
    priceNote:
      "Mis cifras son mi caso real. En la web pública de Webempresa hay precios promocionales y precios normales, y pueden cambiar según plan, renovación e impuestos. Antes de contratar, conviene mirar el precio actual y el precio normal tras promoción.",
    faqs: [
      {
        question: "¿Webempresa sirve para WordPress?",
        answer:
          "Sí. Tiene planes específicos de hosting para WordPress y acompañamiento para instalarlo y arrancar."
      },
      {
        question: "¿Por qué valoro que sea español?",
        answer:
          "Porque el soporte en español reduce mucho la fricción cuando no dominas la parte técnica. Para un profe que empieza, eso puede marcar la diferencia."
      },
      {
        question: "¿Es barato?",
        answer:
          "No lo mediría así. Para mí es una base de negocio: pagar algo más de 10 euros al mes por alojar una web profesional me parece razonable si la web genera trabajo."
      },
      {
        question: "¿He probado otros hostings para comparar?",
        answer:
          "No desde que estoy en Webempresa. Vengo de otro proveedor, tuve un susto con la renovación y desde que cambié no he sentido necesidad de probar más."
      }
    ]
  },
  {
    name: "MailPoet",
    slug: "mailpoet",
    title: "MailPoet: cómo envío mis newsletters desde mi propio WordPress",
    metaDescription:
      "Llevo más de seis años usando MailPoet para enviar mis newsletters desde mi propia web en WordPress. Te cuento cómo funciona, sus límites, sus planes y por qué es el corazón de mi negocio.",
    keywords: [
      "MailPoet",
      "email marketing para profesores",
      "newsletter en WordPress",
      "plugin de newsletter",
      "enviar newsletters",
      "alternativa a Mailchimp"
    ],
    tagline:
      "El plugin de WordPress con el que envío mis newsletters y mantengo viva mi lista de suscriptores.",
    category: "Marketing y ventas",
    subcategories: ["email marketing", "ventas", "web", "productividad", "newsletter"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://www.mailpoet.com",
    hasAffiliate: false,
    myUseCase:
      "Lo uso desde hace más de seis años para enviar mis newsletters desde mi propio WordPress. Para mí es imprescindible: es el corazón de mi negocio.",
    bestFor: [
      "Profes con una web en WordPress que quieren empezar una newsletter",
      "Profes que venden cursos, clases o formaciones y necesitan una lista propia",
      "Negocios educativos que quieren gestionar sus suscriptores dentro de WordPress",
      "Quien quiere enviar newsletters sin conectar mil herramientas distintas"
    ],
    notFor: [
      "Quien no tiene WordPress ni quiere trabajar dentro de WordPress",
      "Quien busca una plataforma de newsletter independiente de su web",
      "Quien necesita automatizaciones muy complejas desde el primer día",
      "Quien quiere delegar toda la estrategia de email marketing en la herramienta"
    ],
    pros: [
      "Está integrado dentro de WordPress.",
      "Es sencillo e intuitivo para enviar newsletters.",
      "Permite crear formularios, listas, campañas y automatizaciones básicas.",
      "Puedes exportar tu lista y llevártela a otra herramienta.",
      "El soporte me ha respondido bien cuando he tenido problemas."
    ],
    cons: [
      "Las actualizaciones del plugin pueden dar algún fallo puntual.",
      "Un reporte de spam puede bloquear temporalmente los envíos.",
      "Los planes actuales dependen del tamaño de la lista.",
      "Si no usas WordPress, seguramente te encajen mejor otras opciones."
    ],
    alternatives: ["Mailchimp", "Substack"],
    rating: 5,
    difficulty: "facil",
    status: "imprescindible",
    updatedAt: "2026-06-05",
    intro:
      "Si tienes una web en WordPress y quieres mandar newsletters sin montar un circo de herramientas conectadas entre sí, MailPoet es de las opciones más cómodas que existen. Es la herramienta que yo utilizo para enviar mis newsletters desde hace por lo menos seis años. Para que te hagas una idea de cuánto la valoro: para mí es imprescindible, porque realmente es el corazón de mi negocio.",
    whatItDoes:
      "MailPoet es un plugin de WordPress para hacer email marketing. Puedes crear formularios de suscripción, gestionar listas de suscriptores, enviar campañas y montar automatizaciones sencillas desde el mismo panel de WordPress. No te vas a una plataforma externa: lo gestionas todo dentro de tu web.",
    howIUseIt:
      "Lo uso para mantener mi lista de suscriptores y enviar newsletters a mi comunidad. Creo el formulario, gestiono la lista, preparo los correos y envío desde WordPress. Y si algún día quisiera moverme a otra herramienta, puedo exportar la base de datos de suscriptores y llevármela. La lista es mía, que en email marketing no es un detalle menor.",
    teacherUseCases: [
      "Crear un formulario de suscripción en tu web de profe.",
      "Enviar una newsletter semanal o mensual a tus estudiantes y comunidad.",
      "Dar la bienvenida automáticamente a quien se suscribe.",
      "Mantener una lista propia para vender cursos, clases o formaciones.",
      "Comprobar cómo funciona una newsletter real apuntándote a la mía en borjaprofe.com."
    ],
    honestVerdict:
      "Para mí MailPoet es imprescindible, sin matices: es el corazón de mi negocio y lo que me permite mantener vivo el vínculo con mi comunidad. Es sencillo, está integrado en mi web y, cuando algo ha fallado, el soporte ha respondido. Si tienes WordPress y quieres una newsletter sin líos, es de lo más cómodo que hay. Lo importante no es encontrar la herramienta perfecta: es empezar.",
    importantNotice:
      "No actualices el plugin justo antes de un envío importante. En mi experiencia, a veces las actualizaciones pueden traer fallos puntuales durante las primeras horas. Mejor actualizar con margen y dormir con menos ruido mental.",
    metrics: [
      { label: "Tiempo usándola", value: "+6 años" },
      { label: "Plan gratis", value: "Hasta 500 suscriptores" },
      { label: "Emails gratis", value: "5.000/mes" }
    ],
    priceRows: [
      { label: "Starter", value: "Gratis hasta 500 suscriptores y 5.000 emails/mes" },
      { label: "Business", value: "Pago recurrente; escala según número de suscriptores" },
      { label: "Creator", value: "Para gestionar tu propio sistema de envío" },
      { label: "Mi caso", value: "Vengo de un pago único antiguo que ya no es la entrada normal" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Yo entré en su día con una versión de pago único y pronto tendré que pasar por los planes actuales. MailPoet mantiene un plan gratuito para empezar, y los planes de pago dependen mucho del tamaño de tu lista. Antes de pagar, confirma el precio exacto en su web oficial.",
    alternativeDetails: [
      {
        name: "Mailchimp",
        url: "https://mailchimp.com/",
        description:
          "Es la alternativa más famosa, pero a mí me pareció abrumadora para empezar: demasiadas cosas encima desde el primer minuto."
      },
      {
        name: "Substack",
        url: "https://substack.com/",
        description:
          "La estoy valorando para un proyecto secundario. Puede tener sentido si quieres una newsletter independiente de tu web, pero no encaja igual si quieres tenerlo todo integrado en WordPress."
      }
    ],
    faqs: [
      {
        question: "¿MailPoet sirve para profesores?",
        answer:
          "Sí, sobre todo si ya tienes una web en WordPress y quieres construir una lista propia para vender cursos, llenar clases o mantener una comunidad."
      },
      {
        question: "¿MailPoet tiene plan gratis?",
        answer:
          "Sí. Según su página oficial, el plan Starter permite empezar gratis hasta 500 suscriptores y 5.000 emails al mes."
      },
      {
        question: "¿Puedo llevarme mi lista si cambio de herramienta?",
        answer:
          "Sí. Puedes exportar tus suscriptores y moverlos a otra plataforma. Para mí eso es clave: tu lista no debería quedar secuestrada por una herramienta."
      },
      {
        question: "¿Recomiendo Mailchimp como alternativa?",
        answer:
          "No para empezar. Es potente y conocida, pero a mí me resultó demasiado abrumadora. Si tienes WordPress, MailPoet me parece una entrada más sencilla."
      }
    ]
  },
  {
    name: "Audacity",
    slug: "audacity",
    title: "Audacity: con qué edito mi podcast desde hace más de 200 episodios",
    metaDescription:
      "Audacity es el único editor de audio que he usado en mi vida, y con él llevo más de 200 episodios de podcast. Te cuento para qué sirve, sus límites y por qué sigo con él.",
    keywords: [
      "Audacity",
      "editar audio gratis",
      "editar podcast",
      "programa de edición de audio",
      "cortar audio",
      "editor de audio gratuito"
    ],
    tagline:
      "El editor de audio gratuito, rústico y manual con el que llevo más de 200 episodios de podcast.",
    category: "Audio y vídeo",
    subcategories: ["audio", "contenido", "productividad", "podcast", "edición"],
    pricing: "gratis",
    officialUrl: "https://www.audacityteam.org/",
    hasAffiliate: false,
    myUseCase:
      "Lo uso para editar la mayoría de los episodios de mis podcasts en solo audio, especialmente ¡Palabras! y Gramaticón, y también para mejorar pistas de sonido de algunos vídeos.",
    bestFor: [
      "Profes que quieren editar audio sin pagar",
      "Creadores educativos que editan podcast de forma manual",
      "Quien busca cortar, ajustar volumen y aplicar efectos básicos",
      "Quien prefiere control artesanal antes que automatización"
    ],
    notFor: [
      "Quien quiere una interfaz moderna y bonita",
      "Quien necesita automatizar la edición de muchos audios",
      "Quien necesita arreglar problemas de audio muy raros o complejos",
      "Quien busca una herramienta integrada con IA"
    ],
    pros: [
      "Es gratis y de código abierto.",
      "Da control absoluto sobre cada corte.",
      "Es sencillo si lo que quieres es editar audio puro.",
      "Tiene lo necesario para cortar, ajustar volumen y aplicar efectos.",
      "No se interpone demasiado entre tú y el audio."
    ],
    cons: [
      "La interfaz es fea y rústica.",
      "Todo es muy manual.",
      "No automatiza la edición.",
      "Se queda corto con problemas de audio extraordinarios.",
      "Hay que entender bien la diferencia entre exportar audio y guardar proyecto."
    ],
    alternatives: ["DaVinci Resolve"],
    rating: 5,
    difficulty: "media",
    status: "imprescindible",
    updatedAt: "2026-06-05",
    intro:
      "Audacity es el único programa de edición de audio que he utilizado en mi vida. Y mira que ha llovido: con él llevo editados más de 200 episodios de mi podcast. Te lo presento con el aviso por delante: Audacity es más feo que un frigorífico visto desde atrás. Si superas eso, puede que te encante.",
    whatItDoes:
      "Audacity es un editor y grabador de audio gratuito y de código abierto. Permite cargar una pista, ver las ondas en una línea de tiempo, cortar, ajustar volumen, aplicar efectos y exportar el resultado final en formatos como MP3 o WAV. No promete magia: promete edición de audio directa.",
    howIUseIt:
      "Lo uso, sobre todo, para editar la mayoría de episodios de mis podcasts en formato solo audio: ¡Palabras! y Gramaticón. También lo he usado para mejorar pistas de sonido en algunos vídeos. Para mí hay algo artesanal en editar podcast así: necesito decidir cada corte con criterio, y Audacity me da sencillez y control.",
    teacherUseCases: [
      "Editar un podcast educativo sin pagar una herramienta mensual.",
      "Cortar silencios, errores o repeticiones de una grabación.",
      "Ajustar volumen de una pista de voz.",
      "Preparar audios para materiales de clase o recursos descargables.",
      "Exportar un episodio final en MP3 después de editarlo a mano."
    ],
    honestVerdict:
      "Audacity es feo, rústico y manual, y aun así es el único editor de audio que he necesitado en toda mi vida. Más de 200 episodios de podcast lo avalan. Su gracia no está en lo que automatiza, sino en el control absoluto que te da. Si editas audio y quieres control total sin pagar, es difícil pedirle más.",
    importantNotice:
      "Ojo con una diferencia importante: exportar el audio no es lo mismo que guardar el proyecto. Exportar genera el MP3 final; guardar el proyecto conserva tus cortes y tu línea de tiempo para seguir editando después. Yo perdí algunos audios al principio por no tener esto claro.",
    metrics: [
      { label: "Episodios editados", value: "+200" },
      { label: "Precio", value: "0 €" },
      { label: "Licencia", value: "Open source" }
    ],
    priceRows: [
      { label: "Audacity", value: "Gratis" },
      { label: "Código abierto", value: "Sí" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Audacity es gratis y de código abierto. No hay suscripción ni enlace de afiliado.",
    alternativeDetails: [
      {
        name: "DaVinci Resolve",
        url: "/herramientas/davinci-resolve-editor-video-gratis-profesores",
        description:
          "Lo uso para editar el audio que va asociado a vídeo dentro del propio montaje. Para tocar audio puro, Audacity me resulta más directo."
      },
      {
        name: "HappyScribe",
        url: "/herramientas/happyscribe",
        description:
          "No edita audio: transcribe. Lo uso después o alrededor del proceso cuando necesito pasar una grabación a texto."
      },
      {
        name: "Spotify for Podcasters",
        url: "/herramientas/spotify-for-podcasters",
        description:
          "Sirve para publicar el podcast, no para editarlo. Es la pieza del flujo que entra cuando el audio ya está listo."
      }
    ],
    faqs: [
      {
        question: "¿Audacity es gratis de verdad?",
        answer:
          "Sí. Audacity es gratuito y de código abierto. Puedes usarlo para grabar y editar audio sin pagar una suscripción."
      },
      {
        question: "¿Audacity sirve para editar podcasts?",
        answer:
          "Sí. Yo lo uso para editar podcasts desde hace años y con él llevo más de 200 episodios."
      },
      {
        question: "¿Qué diferencia hay entre guardar y exportar?",
        answer:
          "Guardar conserva el proyecto editable; exportar crea el archivo final, por ejemplo un MP3. Conviene hacer las dos cosas si quieres poder retocar después."
      },
      {
        question: "¿Audacity tiene IA?",
        answer:
          "En mi uso, no. Lo utilizo como editor manual. Si algún día necesito automatización o limpieza avanzada, quizá busque otra herramienta."
      }
    ]
  },
  {
    name: "Spotify for Podcasters",
    slug: "spotify-for-podcasters",
    title: "Spotify for Podcasters: cómo subo y distribuyo mis podcasts (gratis)",
    metaDescription:
      "Uso Spotify for Podcasters, ahora integrado en Spotify for Creators, desde 2022 para subir mis episodios y gestionar mis podcasts gratis.",
    keywords: [
      "Spotify for Podcasters",
      "subir un podcast",
      "distribuir podcast en todas las plataformas",
      "dónde publicar un podcast",
      "Anchor",
      "panel para gestionar podcast"
    ],
    tagline:
      "El panel gratuito desde el que subo episodios, reviso estadísticas y mantengo vivos mis podcasts.",
    category: "Audio y vídeo",
    subcategories: ["audio", "contenido", "comunicación", "podcast", "distribución"],
    pricing: "gratis",
    officialUrl: "https://podcasters.spotify.com/",
    hasAffiliate: false,
    myUseCase:
      "Lo uso desde 2022 como panel de publicación y gestión de mis podcasts. Llego con el episodio ya grabado y editado, lo subo y desde ahí controlo publicación, RSS y estadísticas.",
    bestFor: [
      "Profes que quieren publicar un podcast sin pagar hosting al principio",
      "Creadores educativos que necesitan un panel sencillo para episodios",
      "Quien quiere publicar audio o vídeo en Spotify",
      "Quien necesita generar y usar un RSS para llevar el podcast a otras plataformas"
    ],
    notFor: [
      "Quien busca una herramienta para grabar o editar el episodio",
      "Quien quiere una plataforma que haga por ti toda la configuración externa",
      "Quien necesita una suite profesional avanzada de podcasting",
      "Quien espera pasar mucho tiempo dentro del panel: aquí se entra, se sube y se sale"
    ],
    pros: [
      "Es gratis.",
      "Sirve como panel central para subir episodios y consultar estadísticas.",
      "Permite alojar audio y también trabajar con vídeo en Spotify.",
      "Genera RSS para llevar el podcast a otras plataformas.",
      "Para mi uso, no me ha dado motivos para buscar otra cosa."
    ],
    cons: [
      "La configuración inicial de otras plataformas puede llevar una o dos horas.",
      "No graba ni edita por ti: llegas con el episodio ya hecho.",
      "Para plataformas fuera de Spotify tienes que activar y enviar el RSS donde corresponda.",
      "El cambio de nombres, de Anchor a Spotify for Podcasters y luego Spotify for Creators, puede confundir."
    ],
    alternatives: [],
    rating: 5,
    difficulty: "facil",
    status: "imprescindible",
    updatedAt: "2026-06-11",
    intro:
      "Si tienes un podcast o planes de crearlo, necesitas un sitio desde el que subir los episodios y gestionar la publicación. Spotify for Podcasters, lo que antes se llamaba Anchor y que ahora vive bajo Spotify for Creators, es justo eso. Lo uso desde 2022 y para mí es fantástico porque funciona como panel de control del podcast.",
    whatItDoes:
      "Spotify for Podcasters permite subir episodios de audio o vídeo, gestionar el programa, ver estadísticas y trabajar con el RSS del podcast. Si alojas el podcast ahí, se publica automáticamente en Spotify. Para llegar a otras plataformas, como Apple Podcasts o Amazon Music, tienes que activar el RSS y configurarlas la primera vez; después, los episodios nuevos se actualizan a través de ese feed. Si subes episodios en vídeo, Spotify los muestra como vídeo en Spotify y los sirve como audio en las plataformas donde el vídeo no está disponible.",
    howIUseIt:
      "No grabo dentro de Spotify for Podcasters. Mi flujo real es este: escribo el guion en Notion, grabo o edito el audio con Audacity, preparo vídeo cuando toca con DaVinci Resolve y subo el resultado a Spotify for Podcasters. Es la última pieza del proceso: no crea el alma del podcast, pero hace que el episodio salga al mundo. Así gestiono mis podcasts ¡Palabras! y Gramaticón.",
    teacherUseCases: [
      "Subir episodios de podcast sin pagar una plataforma de hosting al principio.",
      "Mantener un panel sencillo con episodios y estadísticas.",
      "Publicar audio o vídeo en Spotify.",
      "Cubrir un episodio en vídeo sin dejar fuera a las plataformas que funcionan solo con audio.",
      "Activar un RSS para enviar el podcast a otras plataformas.",
      "Separar bien el trabajo creativo de la parte de publicación."
    ],
    honestVerdict:
      "Spotify for Podcasters hace una cosa y la hace muy bien: ser el centro desde el que subes y gestionas tu podcast. Es gratis, es sencillo y, salvo la pereza de configurar el RSS y las plataformas externas al principio, no me ha dado problemas en años. Para cualquiera que tenga o quiera tener un podcast, lo recomiendo sin dudar.",
    importantNotice:
      "Matiz importante: Spotify publica tu podcast automáticamente en Spotify. Para llegar a otras plataformas tienes que activar el RSS y enviarlo donde corresponda la primera vez. No es difícil, pero conviene saberlo para no esperar magia automática.",
    metrics: [
      { label: "Uso desde", value: "2022" },
      { label: "Precio", value: "Gratis" },
      { label: "Antes", value: "Anchor" }
    ],
    priceRows: [
      { label: "Uso del panel", value: "Gratis" },
      { label: "Publicación en Spotify", value: "Incluida" },
      { label: "RSS", value: "Disponible tras publicar el primer episodio" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "No conozco planes de pago para el uso básico que hago. La lógica es clara: Spotify quiere que haya creadores subiendo contenido a su ecosistema, y a mí el panel me resuelve la publicación sin coste.",
    faqs: [
      {
        question: "¿Spotify for Podcasters sigue existiendo?",
        answer:
          "La herramienta se ha integrado bajo la marca Spotify for Creators. Antes fue Anchor y después Spotify for Podcasters. La URL de Podcasters redirige al entorno actual de creadores."
      },
      {
        question: "¿Es gratis?",
        answer:
          "Sí, para el uso que hago: subir y gestionar podcasts desde el panel de Spotify."
      },
      {
        question: "¿Distribuye automáticamente a todas las plataformas?",
        answer:
          "No exactamente. En Spotify se publica automáticamente si alojas ahí el podcast. Para otras plataformas tienes que activar el RSS y configurarlas la primera vez."
      },
      {
        question: "¿Sirve si hago el podcast en vídeo?",
        answer:
          "Sí. Puedes subir episodios en vídeo para Spotify y, cuando otras plataformas no admiten ese formato, el episodio funciona como audio."
      },
      {
        question: "¿Sirve para grabar o editar?",
        answer:
          "No es mi herramienta para eso. Yo llego con el episodio ya preparado y uso Spotify for Podcasters para publicarlo y gestionarlo."
      },
      {
        question: "¿Necesito saber mucho de tecnología para empezar?",
        answer:
          "No demasiado. Lo más técnico es activar el RSS y configurar las plataformas externas la primera vez; después el día a día es subir el episodio y revisar el panel."
      }
    ]
  },
  {
    name: "Squoosh",
    slug: "squoosh",
    title: "Squoosh: cómo comprimo imágenes para que no me revienten la web",
    metaDescription:
      "Uso Squoosh para comprimir imágenes y que no me ralenticen la web ni me saturen el correo. Te cuento cómo funciona, para qué la uso y por qué deberías tenerla a mano.",
    keywords: [
      "Squoosh",
      "comprimir imágenes",
      "reducir peso de imágenes",
      "optimizar imágenes para web",
      "comprimir imágenes gratis",
      "imágenes ligeras para la web"
    ],
    tagline: "Compresor de imágenes gratuito y rápido para que una foto pesada no te reviente la web, el podcast o el correo.",
    category: "Diseño e imagen",
    subcategories: ["diseño", "productividad", "web", "contenido", "imagen", "optimización"],
    pricing: "gratis",
    officialUrl: "https://squoosh.app/",
    hasAffiliate: false,
    myUseCase:
      "Lo uso de vez en cuando para comprimir imágenes antes de subirlas a la web, preparar portadas de podcast o enviar archivos sin saturar el correo.",
    bestFor: [
      "Profes que suben imágenes a su web",
      "Creadores que preparan portadas de podcast o imágenes para contenido",
      "Quien quiere aligerar imágenes sin aprender Photoshop",
      "Quien necesita resolver rápido un aviso de imagen demasiado pesada"
    ],
    notFor: [
      "Procesar muchas imágenes a la vez de forma automatizada",
      "Editar diseños complejos",
      "Quien necesita una cadena completa de optimización web",
      "Quien quiere tener una herramienta abierta todo el día"
    ],
    pros: [
      "Es gratis y no tiene plan de pago.",
      "El flujo es subir, comprimir y descargar.",
      "La vista previa en tiempo real permite controlar la calidad.",
      "Funciona directamente en el navegador.",
      "Procesa las imágenes en tu propio navegador.",
      "Ayuda a evitar webs lentas, hosting saturado y correos pesados."
    ],
    cons: [
      "Si te pasas con la compresión, la imagen pierde calidad.",
      "Es una herramienta de uso puntual, no una solución completa para toda la optimización web.",
      "No está pensada para editar diseños complejos.",
      "No la usaría como sistema automático para procesar grandes lotes."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    status: "importante",
    updatedAt: "2026-06-04",
    intro:
      "Squoosh parece una tontería hasta que tienes una web, un podcast o un correo que te dice que esa imagen pesa demasiado. Entonces entiendes la gracia: abres la herramienta, metes la imagen, bajas el peso y sigues con tu vida.",
    whatItDoes:
      "Squoosh comprime imágenes desde el navegador. Reduce el peso del archivo, permite ajustar la calidad viendo el resultado en tiempo real y también ofrece opciones básicas para redimensionar, recortar o exportar a formatos modernos como WebP.",
    howIUseIt:
      "La uso sobre todo cuando una imagen pesa demasiado para subirla a la web o cuando preparo portadas de podcast y me encuentro el aviso de que la imagen pasa de tres megas. También me sirve antes de enviar archivos por correo para no ir llenando Gmail con imágenes absurdamente grandes. No la uso todos los días; quizá una vez a la semana. Pero cuando la necesitas, la necesitas ya.",
    teacherUseCases: [
      "Comprimir imágenes antes de subirlas a una entrada de blog.",
      "Reducir portadas, miniaturas o imágenes de podcast que superan el límite permitido.",
      "Preparar imágenes ligeras para materiales descargables o páginas de cursos.",
      "Convertir una imagen a WebP para mejorar la carga de una página.",
      "Enviar imágenes por correo sin saturar el almacenamiento."
    ],
    honestVerdict:
      "Squoosh es gratis, simple y de tener siempre a mano. No la vas a usar todo el día, y no pasa nada: su valor está en resolver rápido el problema concreto de una imagen demasiado pesada. Si tienes web, blog o podcast, yo la tendría en marcadores. Solo hay que comprimir con cabeza para no cargarse la calidad.",
    metrics: [
      { label: "Precio", value: "0 €" },
      { label: "Instalación", value: "No" },
      { label: "Uso aproximado", value: "Semanal" }
    ],
    priceRows: [
      { label: "Squoosh", value: "Gratis" },
      { label: "Plan de pago", value: "No" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Squoosh es gratis. No hay suscripción, ni plan premium, ni asterisco raro por el camino.",
    faqs: [
      {
        question: "¿Squoosh sube mis imágenes a internet?",
        answer:
          "No. Procesa las imágenes en tu propio navegador, en tu equipo, así que tus archivos no viajan a un servidor para comprimirse."
      },
      {
        question: "¿Cuánto puedo comprimir sin que se note?",
        answer:
          "No hay un número mágico. Para eso está la vista previa en tiempo real: bajas la calidad y te paras antes de que la imagen empiece a verse fea."
      },
      {
        question: "¿A qué formato conviene exportar?",
        answer:
          "Para web, WebP suele ser una buena opción porque pesa menos que JPG o PNG manteniendo buena calidad. Pero depende de dónde vayas a usar la imagen."
      },
      {
        question: "¿Necesito instalar algo?",
        answer:
          "No. Funciona directamente en el navegador: abres Squoosh, comprimes, descargas y cierras."
      }
    ]
  },
  {
    name: "LastPass",
    slug: "lastpass",
    title: "LastPass: 336 contraseñas guardadas y solo recuerdo una",
    tagline: "336 contraseñas guardadas. Solo recuerdo una.",
    category: "Productividad",
    subcategories: ["seguridad", "organización"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://www.lastpass.com",
    hasAffiliate: false,
    myUseCase:
      "Lo uso en mi ordenador principal para guardar las contraseñas de plataformas educativas, hosting, redes sociales, banca, herramientas de edición y servicios de facturación.",
    bestFor: [
      "Profes que gestionan muchas cuentas desde un ordenador principal",
      "Personas que quieren dejar de reutilizar contraseñas simples",
      "Quien necesita generar claves largas sin acordarse de todas"
    ],
    notFor: [
      "Quien no quiera depender de una contraseña maestra",
      "Quien necesita sincronización gratuita entre móvil, tablet y ordenador"
    ],
    pros: [
      "La extensión detecta formularios y rellena automáticamente.",
      "Generador de contraseñas seguras integrado.",
      "Organización en carpetas para tener orden con muchas cuentas.",
      "Versión gratuita completa para un dispositivo.",
      "No tiene curva de aprendizaje real."
    ],
    cons: [
      "Tuvo una brecha de seguridad en 2022 que no se puede ignorar.",
      "La contraseña maestra hay que cuidarla: si se pierde, se pierde todo.",
      "Sin plan de pago no hay sincronización entre dispositivos.",
      "Como toda herramienta en la nube, requiere confiar en un tercero."
    ],
    alternatives: ["Bitwarden", "1Password", "Dashlane"],
    rating: 4,
    difficulty: "facil",
    status: "importante",
    updatedAt: "2026-06-03",
    intro:
      "LastPass es el gestor de contraseñas que uso para no tener que recordar las 336 claves que viven repartidas por mi vida digital.",
    whatItDoes:
      "LastPass es un gestor de contraseñas que funciona como extensión del navegador. Guarda credenciales en una bóveda cifrada, las rellena automáticamente cuando las necesitas y genera contraseñas nuevas seguras cuando creas una cuenta. La única contraseña que tienes que recordar es la maestra.",
    howIUseIt:
      "Tengo LastPass en mi ordenador principal y uso la versión gratuita, que para un único dispositivo es suficiente. Cuando entro en cualquier plataforma, la extensión detecta el formulario y rellena usuario y contraseña. Antes tenía dos opciones igual de malas: reutilizar contraseñas simples o apuntarlas en algún sitio poco seguro. Ahora cada cuenta tiene una contraseña generada, larga y única, y yo no sé ninguna de ellas. Solo la maestra.",
    teacherUseCases: [
      "Guardar accesos de plataformas educativas y herramientas de clase.",
      "Gestionar credenciales de hosting, web, redes sociales y servicios de facturación.",
      "Generar contraseñas largas y únicas al crear cuentas nuevas.",
      "Organizar muchas cuentas en carpetas sin convertir el navegador en una libreta de claves."
    ],
    honestVerdict:
      "Llevo cuatro o cinco años con LastPass y no lo he cambiado, incluso después del susto de 2022. Funciona y la versión gratuita es suficiente para trabajar desde un ordenador. No lo recomendaría sin mencionar la brecha, porque eso sería hacerte un flaco favor. Pero tampoco lo descarto por eso: ellos avisaron, yo reforcé mis hábitos y aquí seguimos.",
    importantNotice:
      "Ojo antes de seguir: en 2022 LastPass sufrió una brecha de seguridad. Ellos mismos avisaron a todos los usuarios. Lo cuento aquí porque si no lo cuento, esta ficha miente por omisión. Sigo usándolo, pero con más criterio: contraseña maestra muy larga, vigilancia activa y autenticación de dos factores en las cuentas críticas con herramientas externas, no dentro de LastPass.",
    priceRows: [
      { label: "Un solo dispositivo", value: "Gratis" },
      { label: "Sincronización entre varios dispositivos", value: "Plan de pago" },
      { label: "Cuándo pagar", value: "Si trabajas desde móvil, tablet y ordenador" }
    ],
    priceNote:
      "Si solo usas el ordenador, la versión gratuita llega. Si necesitas que tu móvil y tu ordenador estén coordinados, el plan de pago existe, funciona y el precio no va a ser el problema.",
    alternativeDetails: [
      {
        name: "Bitwarden",
        url: "https://bitwarden.com/"
      },
      {
        name: "1Password",
        url: "https://1password.com/"
      },
      {
        name: "Dashlane",
        url: "https://www.dashlane.com/"
      }
    ],
    cta:
      "Si te interesa organizar mejor tu vida digital como profesor, en borjaprofe.com cuento estas cosas con calma."
  },
  {
    name: "Standing Desk Maidesite",
    slug: "standing-desk-maidesite",
    title: "Standing Desk Maidesite: ergonomía también es productividad",
    tagline:
      "Mesa elevable para alternar trabajo sentado y de pie en un puesto de profesor online.",
    category: "Equipo físico",
    subcategories: ["ergonomía", "productividad", "hardware", "stamindesk", "standing desk"],
    pricing: "pago-unico",
    officialUrl: "https://www.maidesite.de/",
    hasAffiliate: false,
    myUseCase:
      "La tengo registrada en el Laborjatorio como parte del equipo físico que sostiene muchas horas de clases, escritura, grabación y trabajo online.",
    bestFor: [
      "Profes online que pasan muchas horas delante del ordenador",
      "Creadores educativos que graban, editan y escriben en el mismo puesto",
      "Quien quiere mejorar la ergonomía sin convertir el escritorio en una reforma completa"
    ],
    notFor: [
      "Quien trabaja pocas horas sentado al día",
      "Quien no tiene espacio para una mesa regulable",
      "Quien espera que una mesa solucione por sí sola todos los problemas posturales"
    ],
    pros: [
      "Permite alternar trabajo sentado y de pie.",
      "Recuerda que el equipo físico también influye en la energía de trabajo.",
      "Tiene sentido para rutinas largas de clases, edición, escritura y gestión.",
      "Encaja mejor como inversión de puesto de trabajo que como capricho tecnológico."
    ],
    cons: [
      "Ocupa más espacio y exige medir bien antes de comprar.",
      "No sustituye pausas, movimiento ni una buena organización del puesto.",
      "La ficha necesita ampliarse con detalles concretos de uso y modelo exacto.",
      "El precio depende del modelo y de la tienda."
    ],
    alternatives: ["FlexiSpot", "IKEA Bekant", "Escritorio fijo con soporte elevador"],
    rating: 4,
    difficulty: "media",
    status: "importante",
    updatedAt: "2026-06-03",
    intro:
      "Standing Desk Maidesite aparece en el Laborjatorio por una razón sencilla: el trabajo de un profesor online no vive solo dentro del navegador. También vive en la espalda, en la postura, en las horas sentado y en el puesto físico desde el que grabas, corriges, escribes y das clase.",
    whatItDoes:
      "Una standing desk es una mesa regulable en altura que permite trabajar sentado o de pie. En un proyecto como este no entra por ser un mueble bonito, sino porque la ergonomía afecta directamente a la constancia, la comodidad y la energía con la que se trabaja.",
    howIUseIt:
      "La tengo clasificada como herramienta importante dentro del bloque de ergonomía y productividad. No es software, pero forma parte del sistema: si pasas muchas horas preparando clases, grabando vídeos, editando podcasts o escribiendo materiales, el escritorio deja de ser decorado y empieza a ser infraestructura.",
    teacherUseCases: [
      "Alternar postura durante jornadas largas de clases online.",
      "Grabar vídeos o explicaciones de pie con más naturalidad.",
      "Preparar materiales, corregir y escribir sin estar siempre en la misma posición.",
      "Construir un puesto de trabajo más sostenible para un negocio educativo online."
    ],
    honestVerdict:
      "No es una herramienta mágica ni va a arreglar por sí sola una mala rutina. Pero si trabajas muchas horas desde casa, una mesa elevable puede ser una decisión bastante sensata. Esta ficha queda publicada como entrada breve y pendiente de ampliar con modelo exacto, precio pagado y experiencia concreta de uso.",
    importantNotice:
      "Ficha breve: Standing Desk Maidesite estaba registrada como herramienta importante en la documentación interna, pero todavía falta ampliar la experiencia concreta antes de convertirla en un artículo largo.",
    priceRows: [
      { label: "Modelo", value: "Pendiente de concretar" },
      { label: "Tipo de pago", value: "Compra única" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "No fijo un precio aquí porque depende del modelo, país y tienda. Conviene confirmarlo antes de actualizar la ficha definitiva.",
    cta:
      "Si te interesa montar un puesto de trabajo más cómodo para enseñar, grabar y crear contenido, en borjaprofe.com voy contando estas decisiones sin convertirlas en postureo de escritorio."
  },
  {
    name: "Silla de oficina de malla",
    slug: "silla-oficina-malla",
    title: "Silla de oficina de malla: la que uso para dar clases (y el protector que salva mi suelo)",
    metaDescription:
      "Una silla de oficina de malla ligera y fresca, de 50-60 euros, y un protector de suelo para no rayar la madera: el dúo con el que trabajo en casa.",
    keywords: [
      "silla de oficina de malla",
      "silla para teletrabajo",
      "silla para dar clases online",
      "silla giratoria barata",
      "silla transpirable",
      "protector de suelo para silla"
    ],
    tagline:
      "La silla ligera y fresca que uso para dar clase, con el protector de suelo que evita disgustos en la madera.",
    category: "Equipo físico",
    subcategories: ["ergonomía", "productividad", "hardware", "silla", "teletrabajo"],
    pricing: "pago-unico",
    hasAffiliate: false,
    myUseCase:
      "La uso a diario para dar clases y trabajar desde casa. El protector de suelo va debajo para que las ruedas no acaben marcando la madera.",
    bestFor: [
      "Profes online que quieren una silla barata y digna para trabajar",
      "Quien busca una silla fresca para pasar horas sentado en verano",
      "Personas que prefieren una silla ligera y fácil de mover",
      "Quien tiene suelo de madera y necesita protegerlo de las ruedas"
    ],
    notFor: [
      "Quien busca una silla ergonómica premium",
      "Quien necesita soporte lumbar avanzado o ajustes profesionales",
      "Quien trabaja sobre alfombra y quiere que las ruedas deslicen bien",
      "Quien espera una silla definitiva para muchísimas horas sin mirar gamas superiores"
    ],
    pros: [
      "La malla transpirable resulta fresca en verano.",
      "Es ligera, giratoria y regulable en altura.",
      "Por 50-60 euros me parece una compra sensata.",
      "El montaje no tiene mayor complicación.",
      "El protector de suelo evita rayar parqué o tarima."
    ],
    cons: [
      "No es una silla premium.",
      "Hay sillas de gama alta bastante superiores si puedes invertir más.",
      "Las ruedas pueden marcar la madera si no usas protector.",
      "Sobre alfombra no desliza demasiado bien.",
      "Los enlaces concretos de Amazon están pendientes."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-11",
    intro:
      "Cuando empecé a dar clases online en Nicaragua, usaba una silla de plástico cutre, no muy diferente de la de la portada del último disco de Bad Bunny. Para salir del paso valía, pero en cuanto volví a España y quise montarme un setup más permanente, di el salto a una silla de oficina de malla de las de verdad. No es la silla de mis sueños, pero es la que uso cada día y me sirve.",
    whatItDoes:
      "Es una silla de oficina giratoria, con ruedas, regulable en altura y con respaldo y asiento de malla transpirable. No es de gama alta, pero es cómoda y, sobre todo, fresca: no se te queda la espalda pegada en verano. El protector de suelo es una pieza aparte, de PVC transparente antideslizante, que pongo debajo para no rayar la madera.",
    howIUseIt:
      "La uso a diario para dar clases, escribir, preparar materiales y trabajar en el ordenador. Para mí era importante que fuera ligera, no el típico trasto pesado que cuesta mover. La mueves con un dedo, la giras, ajustas la altura y listo. Y debajo tengo el protector de suelo de 120x90 cm: es feo, sí, pero prefiero eso a dejar marcas en la madera de casa.",
    teacherUseCases: [
      "Dar clases online durante varias horas con una silla cómoda y fresca.",
      "Teletrabajar sin gastar en una silla premium.",
      "Moverte con facilidad en un puesto de trabajo pequeño.",
      "Proteger parqué o tarima de las ruedas de la silla.",
      "Montar un setup de profe online sensato sin convertirlo en showroom."
    ],
    honestVerdict:
      "Esta silla de malla no te va a cambiar la vida, pero por 50-60 euros es una compra muy sensata para dar clases o teletrabajar: ligera, fresca y ajustable. Eso sí, no te olvides del protector de suelo si tienes madera, porque ahí sí te puede dar un disgusto. Es una solución económica que cumple, no la silla definitiva de la humanidad.",
    importantNotice:
      "Si tienes suelo de madera, cuidadito: las ruedas pueden dejar marcas. Y si tienes alfombra, probablemente no va a deslizar demasiado bien. El protector de suelo no es bonito, pero puede ahorrarte un disgusto bastante más feo.",
    metrics: [
      { label: "Precio silla", value: "50-60 €" },
      { label: "Protector", value: "120x90 cm" },
      { label: "Material clave", value: "Malla" }
    ],
    priceRows: [
      { label: "Silla", value: "50-60 € aprox." },
      { label: "Protector de suelo", value: "Extra barato, PVC transparente 120x90 cm" },
      { label: "Dónde", value: "Amazon" },
      { label: "Afiliación", value: "Pendiente de enlaces" }
    ],
    priceNote:
      "Los enlaces concretos de Amazon están pendientes: uno para la silla y otro para el protector de suelo. Cuando los tenga, los añadiré. Mientras tanto, la referencia útil es el tipo de compra: silla de oficina de malla barata, ligera y regulable, más protector de suelo si tienes madera."
  },
  {
    name: "Inphic PM6",
    slug: "inphic-pm6",
    title: "Inphic PM6: el ratón inalámbrico barato con el que trabajo cada día",
    metaDescription:
      "Uso un ratón inalámbrico barato, de unos 20 euros, con botones laterales para navegar rápido entre mis mil pestañas. Te cuento por qué repito el mismo modelo y para quién tiene sentido.",
    keywords: [
      "Inphic PM6",
      "ratón inalámbrico barato",
      "ratón con botones laterales",
      "ratón para teletrabajo",
      "ratón recargable",
      "ratón para profesores online"
    ],
    tagline:
      "El ratón inalámbrico barato que uso a diario por una razón muy simple: funciona y tiene botones laterales.",
    category: "Equipo físico",
    subcategories: ["ergonomía", "productividad", "hardware", "ratón", "teletrabajo"],
    pricing: "pago-unico",
    officialUrl: "https://www.amazon.es/",
    affiliateUrl: "https://amzn.to/4uexpYP",
    hasAffiliate: true,
    myUseCase:
      "Lo uso como ratón principal para trabajar, navegar entre pestañas, preparar clases y moverme rápido por el navegador gracias a sus botones laterales.",
    bestFor: [
      "Profes online que quieren un ratón inalámbrico barato",
      "Quien trabaja con muchas pestañas abiertas",
      "Personas que quieren botones laterales para avanzar y retroceder",
      "Quien busca una compra sencilla y funcional sin gastar de más"
    ],
    notFor: [
      "Quien necesita un ratón ergonómico vertical o muy específico",
      "Gamers exigentes que buscan precisión y respuesta de gama alta",
      "Diseñadores o editores que necesitan funciones avanzadas",
      "Quien quiere una comparativa técnica profunda de ratones"
    ],
    pros: [
      "Es barato: ronda los 20 euros o menos.",
      "Tiene dos botones laterales muy útiles para navegar.",
      "Es inalámbrico y recargable.",
      "Se puede usar mientras carga.",
      "Me ha durado varios años con uso diario."
    ],
    cons: [
      "No tiene características ergonómicas avanzadas.",
      "No es una compra para quien necesita precisión gaming seria.",
      "No hay una web oficial clara del producto fuera de Amazon.",
      "No he hecho una comparativa real con otros modelos."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    status: "importante",
    updatedAt: "2026-06-05",
    intro:
      "Vamos a hablar de algo que como profes online usamos todos los días y que, a la vez, no es ni de lejos lo más importante de nuestro equipo: el ratón. Te lo digo ya para rebajar expectativas: aquí no tienes que tomar una decisión súper acertada, cualquiera te sirve. Pero ya que toca comprar uno, te cuento cuál uso yo y por qué repito el mismo modelo.",
    whatItDoes:
      "El Inphic PM6 es un ratón inalámbrico económico. Lo que me interesa de él no es una lista infinita de especificaciones, sino cuatro cosas muy concretas: no tiene cable, se carga por USB, puedes seguir usándolo mientras carga y trae dos botones laterales para avanzar y retroceder en el navegador.",
    howIUseIt:
      "Lo uso cada día para trabajar con muchas pestañas abiertas. Los botones laterales son la clave: avanzar y retroceder con el pulgar, sin ir a buscar la flecha del navegador, agiliza mucho cuando estás investigando, preparando clases o creando materiales. Cuando el anterior se gastó después de unos años, no me puse a estudiar el mercado: compré el mismo otra vez.",
    teacherUseCases: [
      "Moverte rápido entre páginas mientras preparas una clase.",
      "Trabajar con muchas pestañas sin depender tanto del teclado o de la barra del navegador.",
      "Tener un ratón inalámbrico barato para clases, administración y creación de materiales.",
      "Seguir trabajando aunque se agote la batería, conectándolo por USB.",
      "Resolver una compra pequeña sin convertirla en una investigación de tres tardes."
    ],
    honestVerdict:
      "No te voy a vender que este ratón te va a cambiar la vida, porque sería mentira y porque un ratón es un ratón. Pero es cómodo, es barato, tiene los botones laterales que de verdad uso a diario y me ha durado años. Por eso repito modelo sin pensármelo. Si eres profe online y solo quieres algo que funcione sin gastar de más, es una opción de las de compra y olvídate.",
    metrics: [
      { label: "Precio habitual", value: "~20 € o menos" },
      { label: "Duración anterior", value: "2-3 años" },
      { label: "Botones laterales", value: "Sí" }
    ],
    priceRows: [
      { label: "Tipo de compra", value: "Pago único" },
      { label: "Precio orientativo", value: "Alrededor de 20 € o menos" },
      { label: "Dónde lo compro", value: "Amazon" },
      { label: "Afiliación", value: "Sí, Amazon" }
    ],
    priceNote:
      "El precio puede cambiar según disponibilidad y vendedor. Lo importante aquí no es perseguir una oferta exacta, sino la idea: un ratón inalámbrico barato con botones laterales basta para la mayoría de profes online.",
    faqs: [
      {
        question: "¿El Inphic PM6 merece la pena para dar clases online?",
        answer:
          "Sí, si buscas un ratón barato, inalámbrico y cómodo para trabajo diario. No es una pieza crítica del equipo, pero cumple de sobra."
      },
      {
        question: "¿Por qué me importan tanto los botones laterales?",
        answer:
          "Porque sirven para avanzar y retroceder en el navegador con el pulgar. Cuando trabajas con muchas pestañas, ese gesto pequeño se nota muchísimo."
      },
      {
        question: "¿Se puede usar mientras carga?",
        answer:
          "Sí. Si se queda sin batería, lo conectas por USB y puedes seguir usándolo."
      },
      {
        question: "¿Lo recomiendo para gaming?",
        answer:
          "No como recomendación especializada. Yo juego, pero esta ficha va de trabajo diario como profesor online, no de ratones gaming de alto rendimiento."
      }
    ]
  },
  {
    name: "Ventilador recargable silencioso",
    slug: "ventilador-recargable-silencioso",
    title: "Ventilador recargable y silencioso: la herramienta más rara de mi escritorio (y funciona)",
    metaDescription:
      "Un ventilador recargable y casi sin ruido, en el escritorio apuntando a la cara, me ha salvado los veranos dando clases online. No es para tus alumnos, es para ti.",
    keywords: [
      "ventilador recargable silencioso",
      "ventilador de escritorio silencioso",
      "ventilador para teletrabajo",
      "ventilador para dar clases online",
      "ventilador USB recargable",
      "confort del profesor online"
    ],
    tagline:
      "Un ventilador pequeño, recargable y casi sin ruido para sobrevivir al verano dando clases online.",
    category: "Equipo físico",
    subcategories: ["ergonomía", "bienestar", "productividad", "hardware", "confort"],
    pricing: "pago-unico",
    hasAffiliate: false,
    myUseCase:
      "Lo tengo en el escritorio apuntando a la cara durante los días de calor. No es para los alumnos: es para estar cómodo mientras doy clase o trabajo frente a la pantalla.",
    bestFor: [
      "Profes online que dan clase en verano sin aire acondicionado",
      "Quien quiere refrescarse sin meter ruido en el micrófono",
      "Personas que trabajan muchas horas frente al ordenador",
      "Quien busca una mejora barata de confort en el escritorio"
    ],
    notFor: [
      "Quien busca un recurso didáctico para sus alumnos",
      "Quien ya trabaja con aire acondicionado cómodo y estable",
      "Quien necesita enfriar una habitación entera",
      "Quien quiere una compra tecnológica importante"
    ],
    pros: [
      "Apenas hace ruido, que es lo clave con el micrófono abierto.",
      "Es recargable por USB.",
      "También puede funcionar con pilas.",
      "Tiene 5 velocidades.",
      "Es barato y ocupa poco en el escritorio."
    ],
    cons: [
      "No es un recurso para clase ni para tus alumnos.",
      "No enfría una habitación entera.",
      "El enlace de compra concreto está pendiente.",
      "La marca no tiene una página oficial clara de referencia."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    status: "opcional",
    updatedAt: "2026-06-06",
    intro:
      "Esto te parecerá una marcianada que te lo recomiende aquí, pero escucha. En el Laborjatorio enseño las herramientas que me rodean mientras trabajo, y resulta que una de las que más agradezco en verano no es un software ni un micrófono: es un ventilador recargable y silencioso que tengo en el escritorio, enchufado a la cara.",
    whatItDoes:
      "El modelo que uso es un Jsdoin: un ventilador portátil y plegable que puedes sostener en la mano o dejar plantado en el escritorio. Tiene 5 velocidades, se recarga por USB, también funciona con pilas y trae una pequeña pantalla LED. Pero lo importante para mí es que apenas hace ruido y puedo tenerlo apuntando a la cara mientras doy clase.",
    howIUseIt:
      "Empecé a dar clases online en Nicaragua, con un ventilador ruidoso detrás que se oía más que yo. Al volver a España agradecí el silencio, hasta que llegó el verano en el País Vasco sin aire acondicionado. Después de aguantar un par de veranos, copié el ventilador que usaba mi novia y lo adopté para mi escritorio. Lo uso en esos días en los que el calor empieza a comerse la paciencia.",
    teacherUseCases: [
      "Dar clase online en verano sin que el micrófono capte un ventilador enorme de fondo.",
      "Mantenerte cómodo durante sesiones largas frente a la pantalla.",
      "Refrescarte la cara sin depender de aire acondicionado.",
      "Mejorar el ánimo y la concentración cuando el calor empieza a pesar.",
      "Tener una solución barata y pequeña para el escritorio."
    ],
    honestVerdict:
      "De todas las herramientas del Laborjatorio, esta es probablemente la más tonta sobre el papel y una de las que más agradezco en la práctica. Es barata, es silenciosa, es recargable y me ha quitado el agobio de varios veranos dando clase. No le pidas más de lo que es, pero lo que es, lo hace de maravilla.",
    importantNotice:
      "No es un material para tus alumnos. Es una herramienta para ti, para que estés cómodo dando clase. Y sí, también va de eso un laboratorio de profe: de las cosas pequeñas que te hacen el trabajo más llevadero.",
    metrics: [
      { label: "Precio orientativo", value: "~15 €" },
      { label: "Velocidades", value: "5" },
      { label: "Ruido", value: "Muy bajo" }
    ],
    priceRows: [
      { label: "Tipo de compra", value: "Pago único" },
      { label: "Precio orientativo", value: "Alrededor de 15 €" },
      { label: "Producto", value: "Jsdoin portátil plegable de escritorio, azul" },
      { label: "Afiliación", value: "Pendiente de enlace" }
    ],
    priceNote:
      "El enlace de compra concreto está pendiente. Cuando esté, lo añadiré aquí. Mientras tanto, la referencia útil es el tipo de producto: ventilador de escritorio silencioso, recargable, pequeño y con potencia ajustable.",
    alternativeDetails: [
      {
        name: "Standing Desk Maidesite",
        url: "/herramientas/standing-desk-maidesite",
        description:
          "Otra herramienta de puesto de trabajo: no enseña por ti, pero puede hacer más sostenible pasar horas delante del ordenador."
      },
      {
        name: "Inphic PM6",
        url: "/herramientas/inphic-pm6",
        description:
          "Otro ejemplo de compra pequeña de escritorio que no cambia la vida, pero sí hace el trabajo diario un poco más cómodo."
      },
      {
        name: "Petit BamBou",
        description:
          "Relacionado por bienestar, aunque todavía no tiene ficha publicada en el Laborjatorio."
      }
    ],
    faqs: [
      {
        question: "¿Es una herramienta para los alumnos?",
        answer:
          "No. Es para ti. No mejora la clase como recurso didáctico, pero puede mejorar cómo la vives cuando estás dando clase con calor."
      },
      {
        question: "¿Hace ruido en una clase online?",
        answer:
          "Lo valioso de este tipo de ventilador es precisamente que apenas hace ruido. Para usarlo con micrófono abierto, ese detalle importa más que la potencia bruta."
      },
      {
        question: "¿Hace falta gastar mucho?",
        answer:
          "No. La gracia es que ronda los 15 euros y resuelve un problema muy concreto: estar menos incómodo en verano mientras trabajas."
      },
      {
        question: "¿Qué tengo que mirar si compro uno parecido?",
        answer:
          "Que sea silencioso, recargable, de tamaño escritorio y con potencia ajustable. Con eso cubres lo importante."
      }
    ]
  },
  {
    name: "Audio-Technica ATR2100x-USB",
    slug: "audio-technica-atr2100x-usb",
    title: "Audio-Technica ATR2100x-USB: el micro con el que grabo (aunque no te lo recomiende del todo)",
    metaDescription:
      "Grabo mis podcasts, entrevistas y vídeos con el Audio-Technica ATR2100x-USB. Suena bien, pero no estoy 100% satisfecho. Te cuento por qué, con anécdota de taza incluida.",
    keywords: [
      "Audio-Technica ATR2100x-USB",
      "micrófono para podcast",
      "micrófono USB para grabar",
      "micrófono para grabar clases y vídeos",
      "micrófono dinámico USB XLR",
      "micrófono para entrevistas"
    ],
    tagline:
      "El micrófono con el que grabo podcasts, entrevistas y vídeos, aunque hoy no te lo recomendaría sin matices.",
    category: "Audio y vídeo",
    subcategories: ["audio", "comunicación", "formación", "contenido", "podcast", "micrófono"],
    pricing: "pago-unico",
    officialUrl: "https://www.audio-technica.com/en-eu/atr2100x-usb",
    affiliateUrl: "https://amzn.to/4dXGalj",
    hasAffiliate: true,
    myUseCase:
      "Lo uso para grabar mis entrevistas, episodios de podcast y vídeos. Es imprescindible por uso real, no porque esté plenamente satisfecho ni porque lo recomiende al 100%.",
    bestFor: [
      "Profes que quieren escuchar una experiencia real antes de comprar un micro",
      "Podcasters que valoran un micrófono dinámico USB/XLR",
      "Creadores que quieren grabar voz con calidad decente",
      "Quien quiere una referencia honesta, con ventajas y problemas"
    ],
    notFor: [
      "Quien quiere una recomendación redonda y sin dudas",
      "Quien necesita volumen alto de grabación sin tocar nada después",
      "Quien busca una base de escritorio resistente",
      "Quien prefiere esperar a que encuentre mi micrófono ideal"
    ],
    pros: [
      "La calidad de sonido me parece buena.",
      "Permite conexión USB-C y XLR.",
      "Me ha servido para podcasts, entrevistas y vídeos.",
      "Es fácil escuchar muestras reales en Gramaticón y ¡Palabras!."
    ],
    cons: [
      "En mi uso por USB se graba demasiado bajo.",
      "No he encontrado cómo subir el volumen desde el propio micro.",
      "La base de plástico se me rompió.",
      "No estoy 100% satisfecho con él."
    ],
    alternatives: [],
    rating: 3,
    difficulty: "facil",
    status: "imprescindible",
    updatedAt: "2026-06-11",
    publishedAt: "2026-06-11T09:00:00+02:00",
    intro:
      "Empiezo por lo más honesto que te voy a decir en toda la ficha: no te voy a recomendar este micrófono. Y no porque sea malo, sino porque no estoy 100% satisfecho con él. Aun así, es el micro con el que grabo mis entrevistas, los episodios de mi podcast y mis vídeos, así que se ha ganado un sitio en el Laborjatorio.",
    whatItDoes:
      "El Audio-Technica ATR2100x-USB es un micrófono dinámico que puedes conectar de dos formas: por USB-C o por XLR. Lo bueno es que la calidad me parece buena: se escucha bien. No tienes que fiarte de mi palabra; puedes juzgarlo escuchando episodios de Gramaticón o de ¡Palabras!, que están grabados con él.",
    howIUseIt:
      "De momento he grabado siempre por USB, normalmente en una sola pista con Audacity. Ahí viene mi gran frustración: se escucha muy bajito. Se puede subir después, claro, pero si grabas todo en una sola pista tienes que ir igualando el volumen a mano. Mientras preparaba esta ficha decidí probar la conexión XLR en próximos audios para ver si mejora ese problema.",
    teacherUseCases: [
      "Grabar podcasts educativos.",
      "Grabar entrevistas online o presenciales.",
      "Mejorar el audio de vídeos y clases grabadas.",
      "Tener un micrófono USB/XLR flexible.",
      "Escuchar una experiencia real antes de comprar."
    ],
    honestVerdict:
      "Este es de los pocos casos en los que mi veredicto es un no lo recomiendo, y quiero que se entienda bien. No es que sea un mal micrófono: la calidad de sonido es buena y llevo años grabando con él todo lo que hago. Es que no estoy plenamente satisfecho, sobre todo por lo del volumen y por la base frágil. Lo tienes en el Laborjatorio porque es lo que uso de verdad, no como recomendación de compra.",
    importantNotice:
      "Esta ficha incluye enlace de afiliado de Amazon. Si compras desde él, a ti te cuesta lo mismo y a mí me llega una pequeña comisión. Aun así, mi veredicto no cambia: es el micro que uso, pero no te lo recomiendo sin reservas.",
    metrics: [
      { label: "Uso", value: "Diario" },
      { label: "Conexión", value: "USB-C / XLR" },
      { label: "Estado", value: "Imprescindible por uso" }
    ],
    priceRows: [
      { label: "Compra", value: "Pago único" },
      { label: "Precio", value: "Variable en Amazon" },
      { label: "Afiliación", value: "Sí, Amazon" }
    ],
    priceNote:
      "El precio exacto lo dejo como pendiente porque varía. Si después de todo lo que te he contado decides hacerte con él, el enlace principal de esta ficha es mi enlace de afiliado de Amazon.",
    alternativeDetails: [
      {
        name: "Filtro antipop InnoGear",
        url: "/herramientas/filtro-antipop-innogear",
        description:
          "Al margen del micrófono concreto, sí recomiendo usar un filtro antipop para reducir golpes de aire en las p y las b."
      },
      {
        name: "Audacity",
        url: "/herramientas/audacity",
        description:
          "Es el editor con el que grabo y ajusto audio, especialmente cuando toca igualar volumen después."
      },
      {
        name: "Logitech C920",
        url: "/herramientas/logitech-c920",
        description:
          "Otra pieza de mi equipo de grabación, en este caso para vídeo."
      }
    ],
    faqs: [
      {
        question: "¿Se conecta por USB o por XLR?",
        answer:
          "Por las dos. Yo he grabado siempre por USB-C, pero voy a probar XLR para ver si mejora lo del volumen bajo."
      },
      {
        question: "¿Por qué se escucha tan bajo?",
        answer:
          "En mi caso, el volumen de grabación por USB sale muy bajo y no he encontrado cómo subirlo desde el propio micrófono. Si grabas en una sola pista, tendrás que igualar niveles después en tu editor."
      },
      {
        question: "¿Necesito un filtro antipop?",
        answer:
          "Te lo recomiendo, sí. Mejora bastante el resultado evitando golpes de aire al hablar. La marca concreta es lo de menos."
      },
      {
        question: "¿Entonces por qué está marcado como imprescindible?",
        answer:
          "Porque es el micro con el que grabo todo. Es imprescindible por uso real en mi flujo, no porque lo recomiende como compra ideal."
      }
    ]
  },
  {
    name: "Filtro antipop InnoGear",
    slug: "filtro-antipop-innogear",
    title: "Filtro antipop InnoGear: cómo quité los \"pop\" de mis grabaciones por 20 euros",
    metaDescription:
      "Un filtro antipop de unos 20 euros me quitó los molestos pop de mis grabaciones. Te cuento qué hace, mi experiencia con el InnoGear y un aviso sobre su agarre.",
    keywords: [
      "filtro antipop",
      "InnoGear filtro pop",
      "reducir sonidos pop",
      "mejorar audio podcast",
      "filtro pop para micrófono",
      "accesorio para grabar voz"
    ],
    tagline:
      "Un accesorio barato para reducir los golpes de aire y mejorar grabaciones de voz sin complicarte.",
    category: "Equipo físico",
    subcategories: ["audio", "comunicación", "contenido", "podcast", "grabación"],
    pricing: "pago-unico",
    hasAffiliate: false,
    myUseCase:
      "Lo uso desde 2022 delante del micrófono para reducir los sonidos pop en podcasts, vídeos y grabaciones de voz.",
    bestFor: [
      "Profes que graban podcast o vídeo con voz",
      "Creadores que quieren mejorar el audio por poco dinero",
      "Quien nota golpes de aire al pronunciar p o b cerca del micrófono",
      "Personas que ya tienen micrófono y quieren cuidar un poco más la grabación"
    ],
    notFor: [
      "Quien solo hace videollamadas ocasionales",
      "Quien no graba voz ni contenido de audio",
      "Quien busca una mejora de audio profesional completa",
      "Quien necesita resolver ruido de habitación, eco o mala acústica"
    ],
    pros: [
      "Mejora mucho el audio por unos 20 euros.",
      "Reduce los sonidos pop de forma muy sencilla.",
      "No requiere aprendizaje: lo colocas delante del micro y grabas.",
      "Me acompaña desde 2022 y sigue cumpliendo.",
      "Es una compra pequeña con bastante impacto si grabas voz."
    ],
    cons: [
      "El agarre puede balancearse si no lo ajustas bien.",
      "La pinza puede marcar o dañar la mesa si aprietas demasiado.",
      "No sustituye una buena técnica de micro ni una habitación decente.",
      "El enlace de compra concreto está pendiente."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    status: "importante",
    updatedAt: "2026-06-06",
    intro:
      "Si nunca has grabado un podcast, la primera vez que te escuches hay varias cosas que te van a sorprender. Una: lo desagradable que es oír tu propia voz al principio. Y dos: la cantidad de sonidos pop que vas a escuchar. Para lo segundo hay solución barata, y se llama filtro antipop.",
    whatItDoes:
      "El InnoGear que uso es un filtro antipop de doble capa para micrófono de estudio. Es esa pantalla, la Oreo gigante, que se coloca entre tu boca y el micrófono para frenar los golpes de aire antes de que lleguen a la cápsula. Se nota especialmente con explosivas como la p o la b.",
    howIUseIt:
      "Yo no descubrí el problema solo, porque mi oído es bastante limitado para estas cosas. Me lo señaló una compañía con la que colaboraba: me dijeron que sonaba con mucho pop y me recomendaron comprar un filtro. Lo compré en 2022 por unos 20 euros, lo coloqué delante del micro y desde entonces sigue ahí, haciendo su trabajo sin pedir protagonismo.",
    teacherUseCases: [
      "Grabar podcasts con una voz más limpia.",
      "Reducir golpes de aire en vídeos educativos.",
      "Mejorar audios para clases, cursos o materiales grabados.",
      "Montar un pequeño puesto de grabación sin gastar mucho.",
      "Evitar que una grabación casera suene más molesta de lo necesario."
    ],
    honestVerdict:
      "El filtro antipop es de esas mejoras pequeñas y baratas que dan un resultado desproporcionado para lo que cuestan. El mío, un InnoGear de unos 20 euros, lleva conmigo desde 2022 y cumple. Si grabas voz, te lo recomiendo sin dudar, con un único aviso: cuida el agarre, que la pinza puede balancearse y, si aprietas demasiado, hacerle pupa a tu escritorio.",
    importantNotice:
      "Ojo con dónde y con cuánta fuerza lo enganchas. A mí el agarre me ha dado algo de guerra y terminé haciendo una pequeña avería a mi standing desk por apretar demasiado la pinza.",
    metrics: [
      { label: "Uso desde", value: "2022" },
      { label: "Precio orientativo", value: "~20 €" },
      { label: "Capas", value: "Doble" }
    ],
    priceRows: [
      { label: "Tipo de compra", value: "Pago único" },
      { label: "Precio orientativo", value: "Alrededor de 20 €" },
      { label: "Producto", value: "InnoGear filtro antipop de doble capa" },
      { label: "Afiliación", value: "Pendiente de enlace" }
    ],
    priceNote:
      "El enlace de compra concreto está pendiente. Cuando esté, lo añadiré aquí. La referencia útil por ahora es la categoría: filtro antipop de doble capa para micrófono de estudio.",
    faqs: [
      {
        question: "¿Qué hace un filtro antipop?",
        answer:
          "Reduce los golpes de aire que llegan al micrófono cuando pronuncias sonidos explosivos como p o b. Eso evita esos pop desagradables en la grabación."
      },
      {
        question: "¿Merece la pena si grabo podcast o vídeos?",
        answer:
          "Sí. Si grabas voz con cierta frecuencia, por unos 20 euros es una mejora muy razonable."
      },
      {
        question: "¿El InnoGear es el mejor filtro antipop?",
        answer:
          "No puedo decir eso porque es el único que he probado. Lo que sí puedo decir es que el mío cumple y me quitó el problema que tenía."
      },
      {
        question: "¿Qué problema tiene?",
        answer:
          "El agarre. Puede balancearse si no lo ajustas bien y, si aprietas demasiado la pinza, puedes marcar o dañar el escritorio."
      }
    ]
  },
  {
    name: "Logitech C920",
    slug: "logitech-c920",
    title: "Logitech C920: la webcam que llevo más de 10 años usando (y sigue viva)",
    metaDescription:
      "Llevo más de diez años dando clases con la misma Logitech C920. Te cuento por qué sigo con ella, qué problemas me ha dado, su calidad real y cuándo tiene sentido comprarla.",
    keywords: [
      "Logitech C920",
      "webcam para clases online",
      "webcam para profesores",
      "mejor webcam duradera",
      "webcam 1080p",
      "cámara para dar clase online"
    ],
    tagline:
      "La webcam que uso desde 2016 para clases, videollamadas y entrevistas, y que sigue funcionando como el primer día.",
    category: "Equipo físico",
    subcategories: ["vídeo", "comunicación", "formación", "contenido", "webcam", "clases online"],
    pricing: "pago-unico",
    officialUrl: "https://www.logitech.com/es-es/shop/p/c920-pro-hd-webcam.960-001055",
    affiliateUrl: "https://amzn.to/4e2eGd0",
    hasAffiliate: true,
    myUseCase:
      "La uso desde 2016 como cámara principal para clases online, videollamadas y entrevistas. Para entrevistas suelo acompañarla de un micrófono externo.",
    bestFor: [
      "Profes online que quieren una webcam fiable para dar clase",
      "Quien busca calidad suficiente sin gastar una fortuna",
      "Profes que valoran más la durabilidad que tener la última cámara del mercado",
      "Quien quiere una webcam USB sencilla para clases, llamadas y entrevistas"
    ],
    notFor: [
      "Quien busca la mejor calidad de imagen posible en 2026",
      "Quien quiere una cámara 4K o con estética de producción avanzada",
      "Quien necesita resolver problemas de conexión: una webcam no arregla el ancho de banda",
      "Quien espera buen audio solo con el micrófono integrado de la cámara"
    ],
    pros: [
      "Me ha durado más de diez años funcionando a diario.",
      "La calidad 1080p es suficiente para clases, videollamadas y entrevistas.",
      "Se conecta por USB y no exige complicarse.",
      "El software de Logitech permite ajustar brillo y otros parámetros.",
      "Es una compra razonable si priorizas fiabilidad y duración."
    ],
    cons: [
      "Hoy hay webcams con mejor calidad de imagen.",
      "El conector USB puede acusar el paso de los años.",
      "A mí me dio una época de desconexiones por desgaste del cable o conector.",
      "El audio conviene resolverlo con un micrófono externo si vas a grabar o hacer entrevistas."
    ],
    alternatives: [],
    rating: 5,
    difficulty: "facil",
    status: "imprescindible",
    updatedAt: "2026-06-05",
    intro:
      "Cuando haya un apocalipsis nuclear van a sobrevivir dos cosas: las cucarachas y mi Logitech. La Logitech C920 es la webcam con la que doy clase desde 2016, y sigue funcionando como el primer día. Más de diez años, miles de clases, viajes interoceánicos e incluso un conejo que le pegó un mordisco al cable... y aquí sigue.",
    whatItDoes:
      "La Logitech C920 es una webcam externa USB para clases, videollamadas y entrevistas. Graba y transmite en Full HD 1080p a 30 fps, tiene campo de visión de 78° y corrección automática de iluminación. No es la cámara más moderna del mercado, pero hace su trabajo con una fiabilidad bastante seria.",
    howIUseIt:
      "La compré aproximadamente un año después de empezar a dar clases online. Antes daba clase con la cámara del portátil, y me da vergüenza solo de pensarlo. La compré en Nicaragua, para mi bolsillo de entonces fue cara aunque no un disparate, y desde aquel día la uso para todo: clases, videollamadas y entrevistas. Para las entrevistas le sumo un micrófono externo, porque el audio es otra historia.",
    teacherUseCases: [
      "Dar clases online con una imagen más limpia que la cámara del portátil.",
      "Hacer videollamadas profesionales con estudiantes o clientes.",
      "Grabar entrevistas sencillas acompañándola de un micrófono externo.",
      "Tener una cámara USB fiable para trabajar durante años.",
      "Evitar cambiar de webcam cada dos o tres temporadas."
    ],
    honestVerdict:
      "La Logitech C920 no es la webcam que elegirías si buscas la mejor imagen posible en 2026. Pero si quieres una cámara que dé buena calidad para clases y entrevistas, que se enchufe sin drama y que te dure media vida, es difícil discutir con una webcam que lleva más de diez años aguantándome el ritmo. Para profes online, sigue siendo una compra de las que no te arrepientes.",
    importantNotice:
      "La imagen borrosa en una videollamada no siempre es culpa de la cámara. Si tu conexión va mal, el ancho de banda puede hacer que te vean peor aunque la webcam sea decente.",
    metrics: [
      { label: "Uso desde", value: "2016" },
      { label: "Resolución", value: "1080p" },
      { label: "Campo de visión", value: "78°" }
    ],
    priceRows: [
      { label: "Tipo de compra", value: "Pago único" },
      { label: "Precio actual", value: "Variable según tienda" },
      { label: "Mi compra", value: "Nicaragua, hace más de 10 años" },
      { label: "Afiliación", value: "Sí, Amazon" }
    ],
    priceNote:
      "No recuerdo el precio exacto al que la compré. Para mi bolsillo de entonces, en Nicaragua, fue una compra cara, aunque no exagerada. Hoy suele moverse en una franja razonable para una webcam Full HD, pero conviene comprobar el precio actual antes de comprar.",
    faqs: [
      {
        question: "¿La Logitech C920 sigue mereciendo la pena?",
        answer:
          "Sí, si buscas una webcam fiable, duradera y suficiente para clases online. No es la opción más moderna, pero mi experiencia con ella ha sido excelente."
      },
      {
        question: "¿La C920 tiene la mejor imagen del mercado?",
        answer:
          "No. Hoy hay webcams con mejor imagen. La razón por la que la recomiendo no es ser la más moderna, sino la durabilidad y la calidad suficiente para trabajar."
      },
      {
        question: "¿Sirve para entrevistas?",
        answer:
          "Sí. Yo la uso para entrevistas, pero suelo añadir un micrófono externo porque el audio no debería depender de la webcam."
      },
      {
        question: "¿Qué problema técnico me ha dado?",
        answer:
          "Durante una época se desconectaba sola por desgaste del conector USB. Lo resolví dejando el cable lo más quieto posible y no he tenido que reemplazarla."
      }
    ]
  },
  {
    name: "Acer Nitro 5",
    slug: "acer-nitro-5",
    title: "Acer Nitro 5: mi portátil para dar clases, editar y jugar (y por qué no te lo recomiendo hoy)",
    metaDescription:
      "Doy clases, edito y juego con un Acer Nitro 5 desde 2022. Estoy contento, pero no te lo recomiendo comprar hoy. Te cuento mis criterios para elegir portátil y qué tendría de referencia.",
    keywords: [
      "Acer Nitro 5",
      "portátil para dar clases online",
      "portátil para profesores",
      "ordenador para editar vídeo",
      "portátil para profes y gaming",
      "qué portátil comprar"
    ],
    tagline:
      "Mi portátil principal desde 2022: útil para explicar qué miro al elegir ordenador, no para recomendarte comprar ese modelo hoy.",
    category: "Equipo físico",
    subcategories: ["productividad", "vídeo", "comunicación", "formación", "contenido", "portátil", "gaming"],
    pricing: "pago-unico",
    officialUrl: "https://store.acer.com/en-us/nitro-5-gaming-laptop-an515-44-r078",
    hasAffiliate: false,
    myUseCase:
      "Uso mi Acer Nitro 5 AN515-44 desde 2022 como ordenador principal para dar clases, editar vídeo y audio, tareas administrativas, grabar contenido y jugar.",
    bestFor: [
      "Profes que quieren pensar bien qué portátil necesitan",
      "Profes online que también editan vídeo o audio",
      "Creadores educativos que abren muchas pestañas y usan programas pesados",
      "Quien además de trabajar quiere jugar en el mismo equipo"
    ],
    notFor: [
      "Comprar este modelo concreto en 2026",
      "Quien no juega y puede ahorrar comprando un equipo menos gaming",
      "Quien busca una recomendación técnica cerrada de procesadores y gráficas",
      "Usuarios de Mac que quieren una recomendación dentro del ecosistema Apple"
    ],
    pros: [
      "Me ha servido para dar clases, editar, trabajar y jugar.",
      "Un portátil gaming suele ir sobrado para Zoom, edición ligera y mil pestañas.",
      "Me ha ayudado a definir criterios claros para comprar mi próximo equipo.",
      "Sigo contento con él después de varios años de uso real."
    ],
    cons: [
      "El modelo AN515-44 ya es antiguo para comprarlo nuevo en 2026.",
      "Posiblemente sea difícil de encontrar a la venta.",
      "No es una recomendación directa de compra actual.",
      "Si no juegas, pagar potencia gaming puede no tener sentido.",
      "Para afinar detalles técnicos conviene consultar a alguien que sepa de hardware."
    ],
    alternatives: ["ASUS TUF Gaming A16", "Lenovo gaming actual"],
    rating: 4,
    difficulty: "media",
    status: "imprescindible",
    updatedAt: "2026-06-05",
    intro:
      "Mi Acer Nitro 5, modelo AN515-44, es el portátil con el que hago literalmente todo mi trabajo desde 2022: clases, administración, edición de vídeo y audio, grabaciones, veinte pestañas abiertas y juegos. Estoy muy contento con él. Y, aun así, no te recomiendo comprarlo hoy.",
    whatItDoes:
      "El Acer Nitro 5 es un portátil gaming. En mi caso, eso significa que tiene potencia suficiente para dar clases online, mover programas de edición y aguantar un uso bastante intenso. Pero esta ficha no va de venderte este modelo: va de usar mi experiencia para explicar qué criterios miro al elegir un portátil para trabajar como profesor online.",
    howIUseIt:
      "Lo uso como ordenador principal para Zoom, grabar vídeos, editar, escribir, hacer tareas administrativas y jugar. También soy de tener muchas pestañas abiertas, y eso consume más recursos de lo que parece. Por eso uso el gaming como vara de medir: si un portátil puede con juegos actuales, normalmente va sobrado para clases, edición y trabajo diario.",
    teacherUseCases: [
      "Dar clases online con Zoom sin que el ordenador sufra.",
      "Editar vídeo y audio sin que el equipo se ahogue a la primera.",
      "Trabajar con muchas pestañas, documentos y programas abiertos.",
      "Grabar contenido educativo y gestionar un negocio online desde el mismo equipo.",
      "Elegir un portátil pensando en potencia real, no solo en precio."
    ],
    honestVerdict:
      "El Acer Nitro 5 ha sido un grandísimo compañero de trabajo, pero no compraría este modelo concreto en 2026. Lo importante no es copiar mi portátil, sino mis criterios: mínimo 16 GB de RAM, potencia suficiente para editar y margen para trabajar cómodo. Si juegas, sube presupuesto; si no juegas, probablemente con 800-1.000 euros tengas más que suficiente.",
    importantNotice:
      "Esta ficha no recomienda comprar el Acer Nitro 5 AN515-44 hoy. Es mi ordenador actual y me ha salido bueno, pero en 2026 lo usaría como referencia de criterios, no como compra directa.",
    metrics: [
      { label: "Uso desde", value: "2022" },
      { label: "RAM mínima futura", value: "16 GB" },
      { label: "Presupuesto gaming", value: "~1.200 €" }
    ],
    priceRows: [
      { label: "Mi Acer Nitro 5", value: "Comprado en 2022" },
      { label: "Si juegas", value: "Referencia alrededor de 1.200 €" },
      { label: "Si no juegas", value: "800-1.000 € puede bastar" },
      { label: "Afiliación", value: "Sí, solo en la referencia ASUS" }
    ],
    priceNote:
      "No pongo un precio actual del Nitro 5 porque este modelo ya no es una compra que recomendaría. Para mi próxima compra miro equipos actuales alrededor de 1.200 euros si incluyen gaming. Si no juegas, no pagues el sobreprecio de una gráfica que no vas a usar.",
    alternativeDetails: [
      {
        name: "ASUS TUF Gaming A16 FA608UM-RV005",
        url: "https://amzn.to/4ulS4Kt",
        description:
          "Es el portátil que tengo fichado como referencia futura, no un equipo que ya haya probado. Lo miro por sus 32 GB de RAM, 1 TB SSD, RTX 5060 y porque viene sin sistema operativo."
      },
      {
        name: "Lenovo gaming actual",
        description:
          "Lenovo es una de las marcas que miraría para mi próxima compra, siempre comparando ofertas y especificaciones reales en ese momento."
      },
      {
        name: "DaVinci Resolve",
        url: "/herramientas/davinci-resolve-editor-video-gratis-profesores",
        description:
          "No es alternativa de portátil, pero sí una de las razones por las que necesito margen de potencia: editar vídeo consume recursos."
      },
      {
        name: "Audacity",
        url: "/herramientas/audacity",
        description:
          "Para edición de audio no hace falta tanta máquina, pero forma parte de mi uso real del ordenador."
      }
    ],
    faqs: [
      {
        question: "¿Recomiendo comprar el Acer Nitro 5 en 2026?",
        answer:
          "No este modelo concreto. A mí me ha salido muy bueno, pero en 2026 lo usaría como referencia de criterios, no como compra directa."
      },
      {
        question: "¿Por qué uso un portátil gaming para dar clases?",
        answer:
          "Porque si un ordenador puede con juegos actuales, normalmente va sobrado para Zoom, edición, grabación y muchas pestañas abiertas."
      },
      {
        question: "¿Cuánta RAM pediría como mínimo?",
        answer:
          "Mínimo 16 GB. Por debajo de eso, yo no me lo plantearía para un equipo principal de trabajo."
      },
      {
        question: "¿Y si no juego?",
        answer:
          "Entonces probablemente no necesitas gastar tanto. Para clases, tareas normales y edición básica, una franja de 800 a 1.000 euros puede ser suficiente."
      }
    ]
  },
  {
    name: "Petit BamBou",
    slug: "petit-bambou",
    title: "Petit BamBou: la app con la que medito (y me relajo paseando a mi perra)",
    metaDescription:
      "Uso Petit BamBou para meditar a diario y para relajarme respirando al ritmo de sonidos cuando paseo a mi perra. Te cuento cómo la uso, qué incluye y sus planes.",
    keywords: [
      "Petit BamBou",
      "app de meditación",
      "meditación diaria",
      "meditar para desconectar",
      "aplicación para relajarse",
      "mindfulness"
    ],
    tagline:
      "La app de meditación que uso para bajar revoluciones, respirar y llegar con la cabeza más colocada al final del día.",
    category: "Bienestar",
    subcategories: ["bienestar", "productividad", "meditación", "mindfulness", "respiración"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://www.petitbambou.com/",
    hasAffiliate: false,
    myUseCase:
      "La uso para la meditación diaria y, últimamente, para meditar caminando con sonidos de respiración mientras paseo a Duna.",
    bestFor: [
      "Profes que quieren una rutina sencilla para parar un poco",
      "Quien necesita desconectar entre pantallas, clases y trabajo",
      "Personas que prefieren una meditación guiada o una propuesta diaria",
      "Quien quiere usar respiración y sonidos para relajarse caminando"
    ],
    notFor: [
      "Quien busca una solución mágica al estrés",
      "Quien no quiere crear ningún hábito, aunque sea pequeño",
      "Quien necesita apoyo terapéutico profesional",
      "Quien espera una herramienta directamente didáctica para sus alumnos"
    ],
    pros: [
      "Me aporta calma y buen rollo.",
      "La meditación diaria evita tener que decidir qué hacer.",
      "La meditación libre con sonidos funciona muy bien para pasear.",
      "Tiene catálogo amplio de programas y temas.",
      "Tiene versión gratuita sin límite de tiempo para probar."
    ],
    cons: [
      "No hace nada por sí sola si no la usas.",
      "Parte del catálogo está detrás de suscripción.",
      "No sustituye terapia ni ayuda profesional si la necesitas.",
      "Los precios pueden variar entre web, app y promociones."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    status: "importante",
    updatedAt: "2026-06-09",
    intro:
      "En el Laborjatorio no todo son micrófonos y plugins. Parte de hacer bien este trabajo es cuidar la cabeza del que lo hace, y para eso uso Petit BamBou, una app de meditación que tengo metida en la rutina. No te va a editar un vídeo ni a montarte una web, pero te ayuda a llegar a la clase con la cabeza en su sitio. No te voy a vender milagros: te cuento simplemente qué uso yo y por qué me aporta calma.",
    whatItDoes:
      "Petit BamBou es una aplicación de meditación, respiración y relajación. Cada día propone una meditación diaria, y además tiene un catálogo amplio con programas sobre sueño, estrés, relaciones familiares, autohipnosis, respiración y otros temas. Puedes seguir la propuesta del día o entrar al catálogo cuando quieras trabajar algo concreto.",
    howIUseIt:
      "Mi uso real es sencillo: sobre todo tiro de la meditación diaria. Generalmente voy con la del día y punto, que es lo que mantengo como hábito sin tener que decidir nada. De vez en cuando entro al catálogo, especialmente a programas de temas concretos como relaciones familiares. Pero mi descubrimiento reciente es la meditación libre: salgo a pasear con Duna, pongo un plan de unos ocho minutos con sonido rítmico y voy respirando al compás. Meditar no tiene por qué ser sentarse quieto en una habitación; también puede ser caminar y respirar.",
    teacherUseCases: [
      "Crear una rutina breve para desconectar entre clases.",
      "Bajar revoluciones después de muchas horas de pantalla.",
      "Usar respiración guiada para recuperar calma.",
      "Meditar caminando sin convertirlo en una ceremonia imposible.",
      "Cuidar la cabeza como parte del sistema de trabajo."
    ],
    honestVerdict:
      "Petit BamBou no es una herramienta de trabajo al uso, y por eso me parece importante que esté aquí: cuidar tu cabeza también forma parte de sostener un proyecto a largo plazo. A mí me da calma, la tengo integrada en el día a día y la combinación de meditar paseando con Duna me ha conquistado. Como apoyo para parar y respirar, sí la recomiendo. No esperes magia: espera una herramienta sencilla que, si la usas, te sienta bien.",
    importantNotice:
      "No es una herramienta terapéutica ni una solución mágica. Si estás mal de verdad, busca ayuda profesional. Petit BamBou me sirve como apoyo cotidiano para parar, respirar y volver con algo más de calma.",
    metrics: [
      { label: "Uso", value: "Diario" },
      { label: "Web oficial", value: "64,99 $/año" },
      { label: "Gratis", value: "Sin límite" }
    ],
    priceRows: [
      { label: "Versión gratuita", value: "Contenido y herramientas limitadas sin límite de tiempo" },
      { label: "Plan anual web", value: "64,99 $/año, verificado el 9 de junio de 2026" },
      { label: "Mi referencia", value: "Alrededor de 50 €/año según mi experiencia/oferta" },
      { label: "Acceso de por vida", value: "259,99 $ en la web internacional" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Yo tengo como referencia unos 50 euros al año, probablemente por oferta o condiciones de entrada. La web oficial muestra plan anual y acceso de por vida, y confirma una versión gratuita sin límite de tiempo. Confirma siempre el precio actual antes de suscribirte, porque puede variar según plataforma, país o promoción.",
    faqs: [
      {
        question: "¿Petit BamBou tiene versión gratis?",
        answer:
          "Sí. La web oficial indica que ofrece una versión gratuita sin límite de tiempo, con una selección de contenidos y herramientas."
      },
      {
        question: "¿Tengo que sentarme en silencio sí o sí?",
        answer:
          "No necesariamente. La modalidad de meditación libre la puedes hacer en movimiento: yo medito paseando con Duna, respirando al ritmo de los sonidos."
      },
      {
        question: "¿Cuánto dura una sesión?",
        answer:
          "Pueden ser pocos minutos. Yo tiro de planes de unos ocho minutos, que se integran sin esfuerzo en un paseo o en un hueco del día."
      },
      {
        question: "¿Está en español?",
        answer:
          "Sí, la app está disponible en español, así que no tienes barrera de idioma para seguir las meditaciones."
      }
    ]
  },
  {
    name: "f.lux",
    slug: "f-lux",
    title: "f.lux: la herramienta gratis que cuida tus ojos cuando trabajas de noche",
    metaDescription:
      "f.lux es una herramienta gratis que ajusta la luz de tu pantalla según la hora para reducir la fatiga visual. Te cuento cómo la uso, cuándo la apago y por qué deberías instalarla.",
    keywords: [
      "f.lux",
      "reducir fatiga visual",
      "luz de pantalla de noche",
      "filtro de luz azul",
      "cuidar la vista frente al ordenador",
      "temperatura de color pantalla"
    ],
    tagline:
      "Una herramienta gratuita y automática para que la pantalla canse menos cuando trabajas de noche.",
    category: "Bienestar",
    subcategories: ["bienestar", "ergonomía", "productividad", "pantalla"],
    pricing: "gratis",
    officialUrl: "https://justgetflux.com/",
    hasAffiliate: false,
    myUseCase:
      "La uso sobre todo en horarios nocturnos y en invierno, cuando la luz natural cae pronto y paso muchas horas delante del ordenador.",
    bestFor: [
      "Profes que trabajan de noche frente al ordenador",
      "Quien pasa muchas horas preparando clases o materiales",
      "Personas que quieren reducir fatiga visual sin complicarse",
      "Quien vive inviernos con poca luz natural"
    ],
    notFor: [
      "Tareas donde el color de pantalla debe ser fiel",
      "Ver series, películas o jugar si te molesta el tono cálido",
      "Quien ya usa un sistema equivalente y lo tiene bien configurado"
    ],
    pros: [
      "Es gratis.",
      "Funciona de forma automática según la hora.",
      "Es fácil de activar y desactivar desde la barra.",
      "Ayuda a que la pantalla canse menos por la noche."
    ],
    cons: [
      "El tono amarillento puede molestar para ocio o tareas visuales.",
      "Es fácil apagarla justo cuando llevas muchas horas de pantalla.",
      "No la uso tanto como debería."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    status: "opcional",
    updatedAt: "2026-06-07",
    publishedAt: "2026-06-07T12:30:00+02:00",
    intro:
      "f.lux es una herramientita pequeña, muy chula y que, te confieso, no uso tanto como debería. Su misión es sencilla: reducir la fatiga visual que te provoca la luz de la pantalla cuando trabajas hasta tarde. Profe, ya sabes que hay que cuidar la vista, y esta es de las formas más fáciles, y más baratas, porque es gratis, de empezar a hacerlo.",
    whatItDoes:
      "Lo que hace f.lux es ajustar automáticamente la temperatura de color de tu pantalla según la luz que hay fuera y el momento del año. La idea va por el rollo de los ritmos circadianos: a los humanos nos sienta bien la luz cálida, la del fuego, la luz rojiza, cuando cae el día, mientras que la luz fría y azulada de las pantallas nos espabila justo cuando el cuerpo querría ir bajando el ritmo. Según va anocheciendo, la pantalla se vuelve más amarillenta. Es bueno para tus ojos, aunque no siempre lo es para la estética, y ahí está su única trampa.",
    howIUseIt:
      "La uso sobre todo en horarios nocturnos y entre semana, cuando trabajo hasta tarde o cuando, en invierno, la luz empieza a caer a media tarde. En esos ratos, esa luz cálida descansa bastante la vista. La tengo siempre ahí, como un iconito en la barra de herramientas del escritorio, lista para activarla y desactivarla cuando me apetece. ¿Y cuándo la apago? Justo cuando el tono amarillo me molesta para lo que estoy haciendo. Estar viendo Stranger Things en tonos sepias, pues como que no, y para jugar a videojuegos, lo mismo.",
    teacherUseCases: [
      "Trabajar por la noche con una pantalla menos agresiva.",
      "Preparar clases, corregir o escribir cuando en invierno anochece pronto.",
      "Reducir la fatiga visual en sesiones largas de ordenador.",
      "Instalar una ayuda automática para cuidar la vista sin tener que pensar en ello."
    ],
    honestVerdict:
      "f.lux es una herramienta pequeña, con una función muy concreta, que la cumple bien y que encima es gratis. No es protagonista de nada, y precisamente por eso me parece importante que esté en el Laborjatorio: cuidar la vista también forma parte de sostener un proyecto a largo plazo. Mi único pero es contra mí mismo, que debería tenerla encendida más a menudo. La recomiendo justo por lo que cuesta, nada, y por lo poco que te pide a cambio.",
    importantNotice:
      "Ese pequeño tira y afloja entre cuidar la vista y ver bien los colores es lo único que tienes que negociar con esta herramienta. Para ocio, diseño o vídeo puede apetecerte apagarla, aunque sea justo cuando llevas horas de pantalla acumuladas.",
    metrics: [
      { label: "Precio", value: "Gratis" },
      { label: "Estado", value: "Opcional" },
      { label: "Uso", value: "Nocturno" }
    ],
    priceRows: [
      { label: "Precio", value: "Gratis" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Gratis. Es de esas cosas que no entiendes por qué no tienes ya instaladas.",
    faqs: [
      {
        question: "¿De verdad sirve para la vista?",
        answer:
          "La idea es reducir la luz azul de la pantalla cuando cae el día, que es la que más espabila. A mí me descansa los ojos cuando trabajo de noche. Pero bueno, es de esas cosas que pruebas y notas tú mismo si te sientan bien."
      },
      {
        question: "¿Afecta a los colores si edito imágenes o vídeo?",
        answer:
          "Sí. El tono amarillento altera cómo ves los colores, así que para cualquier tarea donde el color importe, como edición o diseño, o para ver series y jugar, conviene apagarla con el iconito."
      },
      {
        question: "¿Es complicada de configurar?",
        answer:
          "No. La instalas y funciona sola, ajustándose según la hora. Como mucho, tocas el iconito para encenderla o apagarla."
      },
      {
        question: "¿Hace falta pagar algo?",
        answer:
          "No. Es gratis, sin versión de pago que necesites para lo básico."
      }
    ]
  },
  {
    name: "Notion",
    slug: "notion",
    tagline: "Un espacio flexible para organizar recursos, proyectos, ideas y bases de conocimiento.",
    category: "Organización",
    subcategories: ["productividad", "bases de conocimiento", "planificación"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://www.notion.so/",
    hasAffiliate: false,
    myUseCase:
      "Lo usaría como centro de operaciones para guardar herramientas, ideas de clase, recursos propios, guiones y proyectos en marcha.",
    bestFor: [
      "Profes con muchos recursos dispersos",
      "Creadores que necesitan ordenar ideas",
      "Equipos pequeños que quieren una base común"
    ],
    notFor: [
      "Quien solo necesita una lista de tareas sencilla",
      "Quien se pierde ajustando sistemas en vez de usarlos"
    ],
    pros: [
      "Muy flexible",
      "Bueno para crear bibliotecas internas",
      "Permite conectar notas, tablas y documentos"
    ],
    cons: [
      "Puede volverse demasiado complejo",
      "Requiere disciplina para mantenerlo ordenado"
    ],
    alternatives: ["Obsidian", "Airtable", "Google Docs"],
    rating: 4,
    difficulty: "media",
    status: "probada",
    updatedAt: "2026-05-30",
    intro:
      "Notion puede ser un buen taller interno para profesores que acumulan ideas, materiales y proyectos en demasiados rincones digitales.",
    whatItDoes:
      "Combina documentos, bases de datos, listas, calendarios y páginas enlazadas en un espacio editable.",
    howIUseIt:
      "Lo usaría para construir una biblioteca viva: ideas de episodios, fichas de herramientas, secuencias de clase y recursos propios conectados.",
    teacherUseCases: [
      "Organizar una biblioteca de actividades por nivel y objetivo.",
      "Planificar una newsletter o calendario de contenidos.",
      "Centralizar enlaces, lecturas y recursos para alumnos.",
      "Documentar procesos repetibles del negocio educativo."
    ],
    honestVerdict:
      "Tiene mucho potencial si se usa con sobriedad. Si empiezas a diseñar el sistema perfecto, acabas construyendo una catedral para guardar tres notas y una lista de tareas."
  }
];
