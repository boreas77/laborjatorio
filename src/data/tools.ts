export type Pricing = "gratis" | "freemium" | "pago" | "pago-unico" | "suscripcion";
export type Difficulty = "facil" | "media" | "alta";
export type ToolStatus =
  | "uso-actual"
  | "probada"
  | "pendiente"
  | "descartada"
  | "imprescindible"
  | "importante"
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

export type Tool = {
  name: string;
  slug: string;
  title?: string;
  tagline: string;
  category: string;
  subcategories: string[];
  pricing: Pricing;
  officialUrl: string;
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
  status: ToolStatus;
  updatedAt: string;
  intro: string;
  whatItDoes: string;
  howIUseIt: string;
  teacherUseCases: string[];
  honestVerdict: string;
  importantNotice?: string;
  metrics?: ToolMetric[];
  priceRows?: ToolPriceRow[];
  priceNote?: string;
  alternativeDetails?: ToolAlternativeDetail[];
  cta?: string;
};

export const tools: Tool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "Asistente de IA para pensar, escribir, ordenar ideas y crear materiales.",
    category: "IA y agentes",
    subcategories: ["escritura", "automatización", "materiales"],
    pricing: "freemium",
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
    tagline: "Diseño rápido para materiales, portadas, recursos visuales y contenido en redes.",
    category: "Diseño e imagen",
    subcategories: ["diseño", "materiales", "redes sociales"],
    pricing: "freemium",
    officialUrl: "https://www.canva.com/",
    hasAffiliate: false,
    myUseCase:
      "Lo uso para montar portadas, recursos visuales, PDFs, miniaturas y materiales de clase sin meterme en programas de diseño complejos.",
    bestFor: [
      "Profes que necesitan materiales visuales",
      "Creadores de contenido educativo",
      "Profes que quieren una herramienta sencilla"
    ],
    notFor: ["Diseñadores que necesitan control profesional absoluto"],
    pros: [
      "Muy fácil de usar",
      "Tiene plantillas útiles",
      "Permite crear rápido sin saber diseño"
    ],
    cons: [
      "Es fácil acabar con diseños parecidos a los de todo el mundo",
      "Algunas funciones potentes están en el plan de pago"
    ],
    alternatives: ["Adobe Express", "Figma"],
    rating: 4,
    difficulty: "facil",
    status: "uso-actual",
    updatedAt: "2026-05-30",
    intro:
      "Canva es una buena puerta de entrada para crear materiales visuales sin convertir cada ficha en una peregrinación al monte del diseño.",
    whatItDoes:
      "Permite crear presentaciones, fichas, publicaciones, portadas, miniaturas, PDFs y recursos visuales a partir de plantillas.",
    howIUseIt:
      "Lo usaría para sacar rápido una versión visualmente digna de una idea docente: una ficha, un carrusel, una portada o un recurso para una formación.",
    teacherUseCases: [
      "Preparar una ficha descargable para clase.",
      "Crear una portada para un recurso de pago.",
      "Diseñar apoyos visuales para una explicación.",
      "Hacer miniaturas o imágenes para contenidos educativos."
    ],
    honestVerdict:
      "Muy útil para profes. La trampa es dejar que la plantilla mande más que la actividad. Primero va la idea didáctica; luego ya le ponemos zapatos bonitos."
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
    officialUrl: "https://www.opus.pro/",
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
    name: "Squoosh",
    slug: "squoosh",
    tagline: "Compresor de imágenes rápido, gratuito y privado para aligerar materiales y páginas web.",
    category: "Diseño e imagen",
    subcategories: ["imagen", "optimización", "web", "materiales"],
    pricing: "gratis",
    officialUrl: "https://squoosh.app/",
    hasAffiliate: false,
    myUseCase:
      "Lo usaría para comprimir imágenes antes de subirlas a la web, insertarlas en materiales descargables o preparar recursos visuales que no pesen como una mudanza.",
    bestFor: [
      "Profes que suben imágenes a su web",
      "Creadores de materiales descargables",
      "Quien quiere convertir imágenes a formatos más ligeros"
    ],
    notFor: [
      "Procesar muchas imágenes a la vez",
      "Editar diseños complejos",
      "Quien necesita una cadena automática de optimización"
    ],
    pros: [
      "Gratis y muy directo",
      "Funciona en el navegador",
      "Permite comparar la imagen original y la comprimida",
      "Las imágenes se procesan localmente en el dispositivo"
    ],
    cons: [
      "No está pensado para trabajo por lotes",
      "Puede requerir probar varios ajustes hasta encontrar el equilibrio",
      "No sustituye una estrategia completa de optimización web"
    ],
    alternatives: ["TinyPNG", "ImageOptim", "iLoveIMG"],
    rating: 4,
    difficulty: "facil",
    status: "probada",
    updatedAt: "2026-06-03",
    intro:
      "Squoosh es una de esas herramientas pequeñas que arreglan un problema muy concreto: imágenes demasiado pesadas para una web, una ficha o un recurso descargable.",
    whatItDoes:
      "Permite comprimir, redimensionar y convertir imágenes desde el navegador, con vista comparativa entre el original y el resultado final.",
    howIUseIt:
      "Lo usaría antes de publicar imágenes en WordPress, preparar miniaturas o reducir el peso de recursos visuales sin abrir un programa de diseño más grande.",
    teacherUseCases: [
      "Comprimir imágenes antes de subirlas a una entrada de blog.",
      "Reducir el peso de una ficha en PDF con muchas imágenes.",
      "Convertir una imagen a WebP para mejorar la carga de una página.",
      "Comparar calidad y tamaño antes de publicar un recurso visual."
    ],
    honestVerdict:
      "Muy recomendable como herramienta de paso final. No te organiza la biblioteca ni automatiza todo, pero para dejar una imagen ligera y decente en dos minutos cumple de maravilla."
  },
  {
    name: "LastPass",
    slug: "lastpass",
    title: "LastPass: 336 contraseñas guardadas y solo recuerdo una",
    tagline: "336 contraseñas guardadas. Solo recuerdo una.",
    category: "Productividad",
    subcategories: ["seguridad", "organización"],
    pricing: "freemium",
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
    name: "Notion",
    slug: "notion",
    tagline: "Un espacio flexible para organizar recursos, proyectos, ideas y bases de conocimiento.",
    category: "Organización",
    subcategories: ["productividad", "bases de conocimiento", "planificación"],
    pricing: "freemium",
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
