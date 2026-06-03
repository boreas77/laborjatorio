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
  description: string;
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
      "Quien necesita sincronización gratuita entre móvil, tablet y ordenador",
      "Quien prefiere una opción abierta y auditable por diseño"
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
      "Llevo cuatro o cinco años con LastPass y no lo he cambiado, incluso después del susto de 2022. Funciona y la versión gratuita es suficiente para trabajar desde un ordenador. No lo recomendaría sin mencionar la brecha, porque eso sería hacerte un flaco favor. Pero tampoco lo descarto por eso: ellos avisaron, yo reforcé mis hábitos y aquí seguimos. Si buscas algo más transparente por principio, Bitwarden es la respuesta. Si quieres algo que funcione sin pensar demasiado, LastPass cumple.",
    importantNotice:
      "Ojo antes de seguir: en 2022 LastPass sufrió una brecha de seguridad. Ellos mismos avisaron a todos los usuarios. Lo cuento aquí porque si no lo cuento, esta ficha miente por omisión. Sigo usándolo, pero con más criterio: contraseña maestra muy larga, vigilancia activa y autenticación de dos factores en las cuentas críticas con herramientas externas, no dentro de LastPass.",
    metrics: [
      { label: "contraseñas guardadas", value: "336" },
      { label: "años de uso continuo", value: "4-5" },
      { label: "coste en un dispositivo", value: "0 €" }
    ],
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
        description:
          "Código abierto, auditable públicamente y gratuito en varios dispositivos. Si la brecha de LastPass te incomoda, esta es la alternativa más seria. Menos pulida visualmente, pero más transparente por diseño."
      },
      {
        name: "1Password",
        description:
          "Muy bien integrado en el ecosistema Apple. Sin versión gratuita real. Más orientado a equipos o usuarios que ya pagan sin problema."
      },
      {
        name: "Dashlane",
        description:
          "Propuesta similar. Ha limitado bastante su versión gratuita en los últimos años. Menos razones para elegirla frente a Bitwarden si buscas algo sin coste."
      }
    ],
    cta:
      "Si te interesa organizar mejor tu vida digital como profesor, en borjaprofe.com cuento estas cosas con calma."
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
