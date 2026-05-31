export type Pricing = "gratis" | "freemium" | "pago" | "pago-unico" | "suscripcion";
export type Difficulty = "facil" | "media" | "alta";
export type ToolStatus = "uso-actual" | "probada" | "pendiente" | "descartada";

export type Tool = {
  name: string;
  slug: string;
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
