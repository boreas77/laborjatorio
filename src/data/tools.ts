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

export type ToolPurchaseLink = {
  label: string;
  url: string;
};

export type ToolNarrativeAction = {
  label: string;
  url: string;
};

export type ToolFaq = {
  question: string;
  answer: string;
};

export type ToolNarrativeSection = {
  title: string;
  paragraphs: string[];
  actions?: ToolNarrativeAction[];
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
  purchaseLinks?: ToolPurchaseLink[];
  relatedLinks?: ToolRelatedLink[];
  alternativeDetails?: ToolAlternativeDetail[];
  faqs?: ToolFaq[];
  narrativeIntro?: string[];
  narrativeSections?: ToolNarrativeSection[];
  narrativeOutro?: string[];
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
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-12",
    publishedAt: "2026-06-07T11:00:00+02:00",
    intro:
      "Canva es una herramienta compleja, compleja de la que hablar. Y no porque sea difícil de usar —al revés—, sino porque mi relación con ella ha cambiado mucho. Llevo utilizándola por lo menos ocho años, y hasta hace muy poco te habría dicho, sin pestañear, que es un imprescindible para un profe que tiene un negocio propio. Hoy ya no lo tengo tan claro, y de eso va esta ficha.",
    narrativeIntro: [
      "Canva es una herramienta compleja, compleja de la que hablar. Y no porque sea difícil de usar, al revés, sino porque mi relación con ella ha cambiado mucho. Llevo utilizándola por lo menos ocho años, y hasta hace muy poco te habría dicho, sin pestañear, que es un imprescindible para un profe que tiene un negocio propio. Hoy ya no lo tengo tan claro, y de eso va esta ficha.",
      "La pregunta que de verdad te interesa no es qué es Canva, eso ya lo sabes, sino si merece la pena pagarla. Te respondo con mi experiencia real, con sus matices, y con un aviso de honestidad importante sobre mi propia situación."
    ],
    narrativeSections: [
      {
        title: "Qué es Canva",
        paragraphs: [
          "Canva es una herramienta de diseño online para crear casi cualquier cosa visual: portadas, posts para redes, presentaciones, materiales, documentos. Funciona con plantillas y un catálogo enorme de imágenes, de forma que no necesitas saber diseño para sacar algo decente. Una navaja suiza, vamos."
        ],
        actions: [
          {
            label: "Ver Canva",
            url: "https://www.canva.com/"
          }
        ]
      },
      {
        title: "Mi relación con Canva, y por qué ha cambiado",
        paragraphs: [
          "Durante años fue una de mis herramientas estrella, pero ha pasado algo: la IA generativa. Uno de los grandes valores de Canva era ese catálogo gigante de imágenes para buscar y usar. Y claro, ¿para qué estar buscando una imagen de un chimpancé cabalgando sobre un velociraptor cuando puedes generarla en segundos con IA?",
          "He generado muchas imágenes con ChatGPT, como todo el mundo, y eso le ha quitado a Canva una de sus grandes bazas para mí. Así que mi uso ha bajado bastante: no la he abandonado, pero ya no es el centro de nada."
        ]
      },
      {
        title: "Cómo la uso ahora",
        paragraphs: [
          "Hoy la utilizo principalmente para una cosa, mantener la coherencia visual, y en concreto para las portadas de los episodios de mi podcast Gramaticón y para algún material de redes.",
          "Y lo hago de la forma más vaga y eficiente posible: tengo un archivo con todo montado, la fuente, el fondo, etcétera, y lo único que hago cada semana es sustituir la imagen principal y el título. Cinco minutos y la portada está lista, siempre con el mismo estilo. Para eso, Canva sigue siendo comodísima. Los clips del podcast, por cierto, ya no los toco aquí: esos los hago con OpusClip."
        ],
        actions: [
          {
            label: "Entrar en Canva",
            url: "https://www.canva.com/"
          }
        ]
      },
      {
        title: "Para qué la usé antes: materiales didácticos",
        paragraphs: [
          "Hubo una época en la que creaba unidades didácticas y materiales de pago con Canva. Funcionaba, pero te seré sincero: no era el método más fluido, era trabajo bastante artesanal.",
          "Hoy ya no lo haría así. Buscaría una herramienta más específica, a poder ser de pago único o mensual, que convierta un documento, tipo Word, en un material con formato visual. No he probado ninguna en concreto todavía, pero es por ahí por donde miraría."
        ]
      },
      {
        title: "El aviso honesto: mi cuenta EDU",
        paragraphs: [
          "Antes de que te fíes de mi opinión sobre el precio, tienes que saber esto: yo tengo la suerte de acceder a una cuenta EDU compartida en la que, además, conseguí acceso de por vida. Eso significa que mi experiencia con el coste no es la tuya.",
          "Te lo digo claro: ahora mismo, que no hago materiales, creo que me habría dado de baja si no tuviera acceso a esa cuenta con tan buenas condiciones. Así que cuando leas más abajo mi merece la pena, ten presente este matiz."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo mejor de Canva, y lo que la mantiene en mi rutina, son las plantillas y la coherencia visual: montas un estilo una vez y lo reutilizas en segundos sin saber nada de diseño. Esa accesibilidad, sumada a su versatilidad de navaja suiza, es lo que la hizo tan valiosa durante años. El catálogo de imágenes era otra de sus grandes bazas, aunque ya te he contado que la IA le ha comido bastante terreno ahí.",
          "¿Y lo que menos? Para empezar, el plan gratuito es muy limitado, con acceso restringido a imágenes y funciones, así que para sacarle jugo de verdad toca pagar. Además, para crear materiales el flujo es artesanal: funciona, pero no es ágil. Y varios de sus extras no me convencen: los documentos inteligentes a mí no me han terminado de funcionar, el editor de vídeo se queda corto frente a DaVinci Resolve, gratis y mejor, y para quitar fondos hay herramientas especializadas que lo hacen mejor."
        ]
      },
      {
        title: "Precio: ¿merece la pena pagarla?",
        paragraphs: [
          "Aquí va la respuesta a la pregunta del título, y es el clásico depende: depende del uso y del valor que te aporte. Si creas materiales con Canva de forma habitual, sí, merece la pena. Cuando yo hacía materiales didácticos, desde luego amortizaba la suscripción cada mes. Pero si solo la usas para algún diseño suelto, probablemente no te compense un pago anual, y menos ahora que la IA te resuelve buena parte de las imágenes.",
          "Mi consejo es el mismo que me daría a mí mismo: Canva es una buena navaja suiza, pero analiza cuáles son tus necesidades exactas antes de meterte en una herramienta de pago recurrente en la que posiblemente acabes pagando por todo un año de golpe. Y si puedes entrar en algún plan especial, EDU, cuentas compartidas, mejor que mejor."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "No tengo una alternativa única, sino una por cada cosa que antes hacía con Canva. Para imágenes, la IA generativa tipo ChatGPT me ha sustituido buena parte del catálogo. Para vídeo, DaVinci Resolve, gratis y mejor que el editor de Canva. Para quitar fondos hay herramientas especializadas que lo bordan, aunque dejo pendiente detallar cuáles uso en una ficha futura. Y para crear materiales a partir de un documento, lo dejo también como pendiente: es justo lo que buscaría hoy, pero aún no he probado ninguna que pueda recomendarte por experiencia."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "Canva sigue siendo una herramienta estupenda y versátil, pero su trono de imprescindible se ha tambaleado en mi caso por culpa de la IA. Hoy la uso para coherencia visual, mis portadas, y poco más, y soy consciente de que solo sigo dentro porque tengo una cuenta en condiciones muy buenas.",
          "¿Merece la pena pagarla? Si vives de crear contenido visual y materiales, sí, sin duda. Si tu uso es ocasional, piénsatelo dos veces antes del pago anual: analiza tus necesidades reales y mira si la IA y otras herramientas gratuitas no te cubren ya buena parte.",
          "Resumen para profes ocupados: gran navaja suiza, pero ya no es el imprescindible de antes. Paga solo si creas materiales a menudo, y antes mira si la IA no te resuelve ya lo que buscas."
        ]
      }
    ],
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
    purchaseLinks: [
      {
        label: "Ir a Canva",
        url: "https://www.canva.com/"
      }
    ],
    relatedLinks: [
      {
        label: "DaVinci Resolve",
        url: "/herramientas/davinci-resolve-editor-video-gratis-profesores"
      },
      {
        label: "OpusClip",
        url: "/herramientas/opusclip"
      },
      {
        label: "ChatGPT",
        url: "/herramientas/chatgpt"
      }
    ],
    narrativeOutro: [
      "Enlace oficial: canva.com."
    ],
    cta:
      "Aquí te enseño las herramientas. Lo que hago con ellas está en borjaprofe.com.",
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
    title: "OpusClip: c\u00f3mo creo clips para redes desde mis v\u00eddeos largos (y cu\u00e1ndo merece la pena)",
    metaDescription:
      "Uso OpusClip para sacar clips de mis episodios de Gramatic\u00f3n. Es una inversi\u00f3n que solo merece la pena con volumen y estrategia. Te cuento c\u00f3mo lo uso, sus condiciones y alternativas.",
    keywords: [
      "OpusClip",
      "crear clips para redes",
      "clips autom\u00e1ticos con IA",
      "clips desde v\u00eddeos largos",
      "herramienta para shorts y reels",
      "repurposing de v\u00eddeo"
    ],
    tagline:
      "La herramienta que uso para convertir v\u00eddeos largos en clips cortos para redes cuando ya hay volumen y estrategia.",
    category: "Audio y v\u00eddeo",
    subcategories: ["video", "redes sociales", "contenido", "ia", "podcast"],
    pricing: "suscripcion",
    officialUrl: "https://www.opus.pro/",
    affiliateUrl: "https://www.opus.pro/?via=laborjatorio",
    hasAffiliate: true,
    myUseCase:
      "Lo uso sobre todo para convertir episodios largos de Gramatic\u00f3n en clips cortos para redes sin tener que montarlos a mano uno por uno.",
    bestFor: [
      "Profes que ya graban v\u00eddeos largos, clases, episodios o tutoriales",
      "Creadores educativos que quieren reutilizar contenido en formato corto",
      "Quien publica con cierta constancia y tiene estrategia de distribuci\u00f3n",
      "Quien entiende los clips como una inversi\u00f3n de visibilidad"
    ],
    notFor: [
      "Quien publica v\u00eddeos largos solo de vez en cuando",
      "Quien no tiene una estrategia clara de distribuci\u00f3n",
      "Quien busca una herramienta barata para usar una vez al mes",
      "Quien espera que la IA sustituya su criterio editorial"
    ],
    pros: [
      "Convierte v\u00eddeos largos en clips sin montar cada pieza a mano.",
      "Me ha hecho empezar a publicar clips, cuando antes ni lo hac\u00eda.",
      "Ahorra muchas horas si ya tienes contenido largo y volumen.",
      "El formato vertical y los subt\u00edtulos salen bastante encaminados.",
      "Facilita reutilizar en redes contenido que ya existe."
    ],
    cons: [
      "Es una inversi\u00f3n considerable.",
      "Solo compensa si tienes volumen de contenido o constancia real.",
      "Sin estrategia de publicaci\u00f3n, pierde bastante sentido.",
      "No lo recomendar\u00eda como compra impulsiva."
    ],
    alternatives: ["CapCut", "SoundMadeSeen", "Descript"],
    rating: 4,
    difficulty: "facil",
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-13",
    intro:
      "OpusClip es la herramienta con la que convierto mis v\u00eddeos largos en clips cortos para redes. Antes de OpusClip, la verdad es que no publicaba clips. As\u00ed que para m\u00ed ha sido la pieza que me ha abierto esa puerta.",
    narrativeIntro: [
      "OpusClip es la herramienta con la que convierto mis v\u00eddeos largos en clips cortos para redes. Y te lo digo ya: antes de OpusClip, la verdad es que no publicaba clips. As\u00ed que para m\u00ed ha sido la pieza que me ha abierto esa puerta. Pero ojo, no es una compra que le recomiende a cualquiera sin m\u00e1s, porque tiene una condici\u00f3n importante que te cuento enseguida.",
      "Esta ficha es para profes y creadores que se preguntan c\u00f3mo sacar clips para redes sin pasarse horas mont\u00e1ndolos. Te cuento para qu\u00e9 lo uso, cu\u00e1ndo sale a cuenta de verdad y cu\u00e1ndo no."
    ],
    narrativeSections: [
      {
        title: "Qu\u00e9 es OpusClip",
        paragraphs: [
          "OpusClip es una herramienta que, con ayuda de IA, crea clips cortos autom\u00e1ticamente a partir de tus v\u00eddeos largos. Le das un v\u00eddeo de varios minutos y te devuelve fragmentos listos para publicar en redes, recortados, en vertical y con subt\u00edtulos.",
          "La idea es aprovechar contenido que ya tienes para multiplicarlo en formato corto sin rehacer nada."
        ],
        actions: [
          {
            label: "Probar OpusClip",
            url: "https://www.opus.pro/?via=laborjatorio"
          }
        ]
      },
      {
        title: "C\u00f3mo lo uso yo",
        paragraphs: [
          "Lo utilizo en tan solo un par de proyectos, sobre todo en mis nuevos episodios de Gramatic\u00f3n. Cojo el episodio largo y, en lugar de quedarme solo con \u00e9l, saco varios clips para ir publicando en redes. Esa misma l\u00f3gica la puedes aplicar a cualquier contenido largo: haces una pieza potente y luego la repartes en p\u00edldoras peque\u00f1as.",
          "Antes de probar OpusClip, traste\u00e9 un poquito con CapCut, pero se me hac\u00eda un poco liosa y no ten\u00eda claro c\u00f3mo encajarla en mi plan de publicaci\u00f3n. OpusClip me result\u00f3 m\u00e1s claro y directo para lo que yo quer\u00eda."
        ]
      },
      {
        title: "Lo importante: cu\u00e1ndo merece la pena de verdad",
        paragraphs: [
          "Aqu\u00ed est\u00e1 la clave de toda la ficha, as\u00ed que presta atenci\u00f3n antes de sacar la tarjeta. OpusClip no me parece caro si le vas a sacar provecho, pero s\u00ed es una inversi\u00f3n considerable. Y esa frase tiene truco: la palabra importante es provecho.",
          "Merece la pena si ya tienes un cat\u00e1logo abultado de v\u00eddeos o si planeas publicar de manera constante. Si cada semana haces uno o dos v\u00eddeos largos, eso quiere decir que cada semana vas a tener varios clips que publicar. Ah\u00ed la herramienta vuela y se amortiza sola.",
          "Pero si no tienes ese volumen ni esa intenci\u00f3n, la cosa cambia. Porque todo esto funciona si hay una estrategia detr\u00e1s. Sin un plan de publicaci\u00f3n, por muy buena que sea la herramienta, no le vas a sacar el jugo que justifica lo que cuesta."
        ],
        actions: [
          {
            label: "Ver OpusClip",
            url: "https://www.opus.pro/?via=laborjatorio"
          }
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Es un producto de pago. No te doy aqu\u00ed una cifra cerrada porque este tipo de herramientas cambian precios y planes con facilidad, y prefiero no dejarte un n\u00famero que ma\u00f1ana no valga.",
          "Lo que s\u00ed te traslado es c\u00f3mo lo veo yo: no es caro en relaci\u00f3n a lo que te ahorra, pero s\u00ed supone una inversi\u00f3n considerable, as\u00ed que solo tiene sentido si vas a usarlo con cierta intensidad."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "La alternativa que prob\u00e9 es CapCut, que descart\u00e9 porque se me hizo liosa, aunque es una opci\u00f3n popular y m\u00e1s econ\u00f3mica que quiz\u00e1 a ti te encaje.",
          "Y si tu contenido es sobre todo de audio en lugar de v\u00eddeo, \u00e9chale un ojo a [SoundMadeSeen](/herramientas/soundmadeseen), que hace algo parecido partiendo de episodios solo de audio. Cada una tiene su terreno: OpusClip y CapCut parten de v\u00eddeo, SoundMadeSeen de audio."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "OpusClip es una herramienta estupenda para una cosa muy concreta: exprimir tus v\u00eddeos largos convirti\u00e9ndolos en clips para redes sin pasarte la vida editando. A m\u00ed me ha hecho empezar a publicar clips, que antes ni tocaba.",
          "Pero no es para todo el mundo, y prefiero dec\u00edrtelo claro: solo le sacar\u00e1s partido si tienes volumen de contenido y una estrategia detr\u00e1s. Si publicas de forma constante, es una gran inversi\u00f3n. Si vas a usarlo de vez en cuando, probablemente no lo amortices.",
          "Resumen para profes y creadores ocupados: convierte tus v\u00eddeos largos en clips para redes con IA. Es una inversi\u00f3n que merece la pena solo si tienes cat\u00e1logo o publicas de forma constante, y siempre con una estrategia detr\u00e1s."
        ]
      }
    ],
    whatItDoes:
      "OpusClip analiza un v\u00eddeo largo con inteligencia artificial, detecta momentos que pueden funcionar como clips y los convierte en piezas verticales preparadas para redes sociales.",
    howIUseIt:
      "Lo uso sobre todo con episodios largos de Gramatic\u00f3n. Subo el contenido, reviso las propuestas y me quedo con los fragmentos que s\u00ed encajan con lo que quiero publicar.",
    teacherUseCases: [
      "Convertir una clase grabada en varios clips breves para redes.",
      "Sacar fragmentos did\u00e1cticos de un episodio largo de YouTube.",
      "Reutilizar entrevistas o podcasts educativos en formato vertical.",
      "Crear piezas cortas para atraer alumnos hacia contenidos m\u00e1s largos.",
      "Mantener presencia en redes sin dedicar horas a edici\u00f3n manual."
    ],
    honestVerdict:
      "OpusClip merece la pena si ya produces v\u00eddeos largos y quieres distribuirlos mejor. Para m\u00ed ha sido la diferencia entre publicar clips y no publicarlos. No lo recomendar\u00eda como capricho aislado: necesita volumen, estrategia y continuidad.",
    metrics: [
      { label: "A\u00f1o en que empec\u00e9 a usarlo", value: "2026" },
      { label: "Afiliaci\u00f3n", value: "S\u00ed" },
      { label: "Modelo", value: "Suscripci\u00f3n" }
    ],
    priceRows: [
      { label: "Precio exacto", value: "Conviene confirmarlo en la web oficial" },
      { label: "Tipo de gasto", value: "Inversi\u00f3n considerable" },
      { label: "Cu\u00e1ndo compensa", value: "Con volumen y estrategia" },
      { label: "Afiliaci\u00f3n", value: "S\u00ed" }
    ],
    priceNote:
      "Si entras desde mi enlace y acabas contratando, yo puedo llevarme una peque\u00f1a comisi\u00f3n sin coste extra para ti. Pero de verdad creo que solo tiene sentido si vas a usarlo con bastante regularidad.",
    purchaseLinks: [
      {
        label: "Probar OpusClip",
        url: "https://www.opus.pro/?via=laborjatorio"
      }
    ],
    alternativeDetails: [
      {
        name: "CapCut",
        description:
          "La prob\u00e9 brevemente, pero se me hizo algo liosa y no vi claro c\u00f3mo encajarla en mi flujo. Aun as\u00ed, puede encajarte si buscas algo m\u00e1s econ\u00f3mico."
      },
      {
        name: "SoundMadeSeen",
        description:
          "La tendr\u00eda m\u00e1s en cuenta si tu contenido parte de audio y no de v\u00eddeo."
      },
      {
        name: "Descript"
      }
    ],
    cta:
      "Si quieres ver c\u00f3mo convierto contenido largo en piezas m\u00e1s peque\u00f1as para redes, en borjaprofe.com voy contando estas pruebas con calma."
  },
  {
    name: "DaVinci Resolve",
    slug: "davinci-resolve-editor-video-gratis-profesores",
    title: "DaVinci Resolve: el editor de v\u00eddeo gratis con el que edito (y por qu\u00e9 dej\u00e9 Premiere)",
    metaDescription:
      "DaVinci Resolve es mi editor de v\u00eddeo, y es gratis. Te cuento por qu\u00e9 dej\u00e9 Premiere, qu\u00e9 hago con \u00e9l siendo un profe sin nivel t\u00e9cnico, su \u00fanica pega y cu\u00e1ndo pagar\u00eda.",
    keywords: [
      "DaVinci Resolve",
      "editor de v\u00eddeo gratis",
      "editar v\u00eddeo para clases",
      "DaVinci Resolve para principiantes",
      "alternativa gratis a Premiere",
      "editar audio y v\u00eddeo"
    ],
    tagline:
      "El editor de v\u00eddeo gratis que uso para montar v\u00eddeos y mejorar audio sin pagar otra suscripci\u00f3n.",
    category: "Audio y v\u00eddeo",
    subcategories: ["v\u00eddeo", "audio", "contenido", "editor de v\u00eddeo", "software gratuito"],
    pricing: "gratis",
    officialUrl: "https://www.blackmagicdesign.com/products/davinciresolve",
    hasAffiliate: false,
    myUseCase:
      "Lo uso desde al menos 2020 para editar v\u00eddeos y audio de clase, materiales y contenido sin pagar una suscripci\u00f3n ni depender de Premiere.",
    bestFor: [
      "Profes online que necesitan editar v\u00eddeos sin pagar una suscripci\u00f3n",
      "Profes que quieren cuidar el audio de sus materiales",
      "Profes que graban explicaciones, clases o contenido",
      "Creadores educativos que quieren una herramienta seria, gratis y legal"
    ],
    notFor: [
      "Quien busca el editor m\u00e1s ligero para un ordenador modesto",
      "Quien solo necesita cortar un v\u00eddeo muy simple una vez al a\u00f1o",
      "Quien quiere comparar editores profesionales en profundidad"
    ],
    pros: [
      "La versi\u00f3n gratuita es complet\u00edsima.",
      "Incluye recursos para editar v\u00eddeo y audio sin comprar extras.",
      "Permite hacer bastante con el audio aunque no seas t\u00e9cnico.",
      "Evita pagar otra suscripci\u00f3n mensual.",
      "Me hizo dejar Premiere porque cubr\u00eda mis necesidades igual o mejor."
    ],
    cons: [
      "Al principio puede resultar un poco abrumador.",
      "Consume bastantes recursos del ordenador.",
      "Si tienes muchas pesta\u00f1as y programas abiertos, se nota.",
      "No he probado la versi\u00f3n Studio, as\u00ed que no comparo desde experiencia propia."
    ],
    alternatives: ["Adobe Premiere Pro", "CapCut", "Final Cut Pro"],
    rating: 5,
    difficulty: "media",
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-13",
    intro:
      "DaVinci Resolve es mi editor de v\u00eddeo, y lo primero que tienes que saber es que es gratis. Pero no gratis de versi\u00f3n recortada para que acabes pagando, sino gratis con una cantidad de recursos incorporados que, sinceramente, es incre\u00edble.",
    narrativeIntro: [
      "DaVinci Resolve es mi editor de v\u00eddeo, y lo primero que tienes que saber es que es gratis. Pero no gratis de versi\u00f3n recortada para que acabes pagando, sino gratis con una cantidad de recursos incorporados que, sinceramente, es incre\u00edble. Transiciones, efectos, mejoras de audio. Todo dentro, sin soltar un euro.",
      "Esta ficha es para profes que se preguntan con qu\u00e9 editar sus v\u00eddeos sin gastarse un dineral ni ser un experto. Te lo cuento desde mi experiencia real, que incluye una peque\u00f1a confesi\u00f3n sobre mi pasado con Premiere."
    ],
    narrativeSections: [
      {
        title: "Qu\u00e9 es DaVinci Resolve",
        paragraphs: [
          "DaVinci Resolve es un programa profesional para editar v\u00eddeo y audio. Lo usan en producciones serias, pero tiene una versi\u00f3n gratuita tan completa que a la mayor\u00eda nos sobra con ella.",
          "Para que te hagas una idea: es de esas herramientas en las que la versi\u00f3n de pago existe, pero la gratis ya hace tant\u00edsimo que ni te planteas la otra."
        ],
        actions: [
          {
            label: "Ver DaVinci Resolve",
            url: "https://www.blackmagicdesign.com/products/davinciresolve"
          }
        ]
      },
      {
        title: "C\u00f3mo funciona desde el punto de vista de un no experto",
        paragraphs: [
          "Yo no s\u00e9 mucho a nivel t\u00e9cnico. Y aun as\u00ed, me apa\u00f1o de sobra. A pesar de que al principio puede resultar un poco abrumador, sobre todo si vienes de otros programas, en realidad es bastante intuitivo y te viene ya con muchos recursos dentro de su plan gratuito.",
          "Su interfaz es muy visual, y eso ayuda mucho a alguien como yo. Lo que m\u00e1s me sorprende es el audio: no s\u00e9 apenas de esto y, aun as\u00ed, puedes hacer virguer\u00edas con el audio dentro del propio programa, sin necesitar nada m\u00e1s. Para editar tus v\u00eddeos y dejarlos con buen sonido, va sobrad\u00edsimo."
        ]
      },
      {
        title: "De Premiere, pirata, a DaVinci",
        paragraphs: [
          "Aqu\u00ed va la confesi\u00f3n. Antes de DaVinci Resolve, yo utilic\u00e9 Premiere en una versi\u00f3n pirateada. Era pobre, no me juzgues. Cuando pude, di el salto a DaVinci Resolve por una raz\u00f3n muy simple: es gratis y cumple mis necesidades igual o mejor que lo que ten\u00eda antes.",
          "Y esa es la clave de por qu\u00e9 me funciona: como profe, tampoco necesito hacer ediciones s\u00faper complejas. No estoy montando una pel\u00edcula. Estoy editando v\u00eddeos para mis estudiantes y para mi contenido, y para eso DaVinci me da todo lo que necesito y m\u00e1s. Si tu caso se parece al m\u00edo, te va a pasar lo mismo."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo que m\u00e1s me gusta ya lo has ido viendo: que sea gratis y, aun as\u00ed, venga tan completo, con efectos, transiciones y todo ese trabajo de audio incluido. Y que, pese a su fama de program\u00f3n, sea manejable para alguien sin nivel t\u00e9cnico. Esa combinaci\u00f3n de potente y accesible es justo lo que necesita un profe.",
          "Y lo que menos es una sola cosa, y m\u00e1s bien una irritaci\u00f3n que un problema serio: consume muchos recursos del ordenador. Si tengo el proyecto abierto y luego me pongo con otra cosa, lo noto, el equipo va un poquito m\u00e1s lento. No hay ninguna otra limitaci\u00f3n que me moleste de verdad, pero esta la tienes que tener en cuenta sobre todo si tu ordenador no va muy sobrado."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Gratis en su versi\u00f3n completa, que es la que uso. Existe una versi\u00f3n de pago, que me imagino que ser\u00e1 mucho m\u00e1s potente, pero por ahora no me planteo pagarla, sencillamente porque no me hace falta.",
          "Eso s\u00ed, si en el futuro necesitara alguna funci\u00f3n m\u00e1s espec\u00edfica, posiblemente invertir\u00eda, sobre todo si fuera de pago \u00fanico en lugar de una suscripci\u00f3n."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "La alternativa que conozco de primera mano es Premiere, que es la que usaba antes y que es de pago. La cambi\u00e9 por DaVinci y no he echado nada de menos.",
          "M\u00e1s all\u00e1 de esa, no he probado otros editores a fondo, as\u00ed que el resto lo dejo como pendiente en vez de inventarme comparaciones."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "DaVinci Resolve es de esas herramientas que te hacen pensar si esto en serio es gratis. Para un profe que necesita editar v\u00eddeo y audio con buen resultado, sin ser un experto y sin gastar, es de lo mejor que puedes tener.",
          "Su \u00fanica pega real es que pide un ordenador con cierto fuelle, pero a cambio te da un editor potent\u00edsimo a coste cero. Lo recomiendo mucho. Es la prueba de que no necesitas software caro para hacer las cosas bien.",
          "Resumen para profes ocupados: editor de v\u00eddeo y audio gratis, complet\u00edsimo y manejable aunque no seas experto. La \u00fanica pega es que consume bastantes recursos del ordenador."
        ]
      }
    ],
    whatItDoes:
      "DaVinci Resolve es un programa de Blackmagic Design para editar v\u00eddeo, audio, color y posproducci\u00f3n. En el mundo profesional se usa para trabajos muy serios, pero su versi\u00f3n gratuita ya es m\u00e1s que suficiente para un profesor que necesita montar v\u00eddeos claros y mejorar audio sin entrar en una cadena de plugins y pagos extra.",
    howIUseIt:
      "Lo uso siendo profe, no t\u00e9cnico. Para m\u00ed la clave es que puedo editar un v\u00eddeo, limpiar el audio y dejar una pieza decente sin sentir que estoy delante de un programa reservado a especialistas. Cambi\u00e9 desde Premiere porque DaVinci era gratis, legal y cubr\u00eda mis necesidades igual o mejor.",
    teacherUseCases: [
      "Editar tutoriales, explicaciones grabadas o clases as\u00edncronas.",
      "Mejorar el audio de materiales donde la pronunciaci\u00f3n y la escucha importan.",
      "Montar v\u00eddeos para alumnos sin pagar una suscripci\u00f3n mensual.",
      "Preparar contenido para YouTube, cursos o redes a partir de grabaciones propias.",
      "Trabajar v\u00eddeo y audio en el mismo programa sin saltar entre cinco herramientas."
    ],
    honestVerdict:
      "DaVinci Resolve cumple lo que necesito como profe, que no es edici\u00f3n de cine: v\u00eddeo y audio limpios, sin complicaciones absurdas, sin pagar y sin depender de una suscripci\u00f3n. Me hizo dejar Premiere y solo me pide a cambio que mi ordenador respire un poco. Para m\u00ed, ese trato es just\u00edsimo.",
    importantNotice:
      "Esta ficha habla desde el uso de la versi\u00f3n gratuita. No he probado DaVinci Resolve Studio, as\u00ed que cualquier comentario sobre la versi\u00f3n de pago queda como posibilidad, no como experiencia real.",
    metrics: [
      { label: "A\u00f1o aproximado desde el que lo uso", value: "2020" },
      { label: "Coste de la versi\u00f3n que uso", value: "0 \u20ac" },
      { label: "Afiliaci\u00f3n", value: "No" }
    ],
    priceRows: [
      { label: "DaVinci Resolve", value: "Gratis" },
      { label: "DaVinci Resolve Studio", value: "Versi\u00f3n de pago" },
      { label: "Cu\u00e1ndo pagar\u00eda", value: "Si necesitara una funci\u00f3n concreta y fuera pago \u00fanico" }
    ],
    priceNote:
      "La versi\u00f3n gratuita me cubre. Si alg\u00fan d\u00eda necesitara algo m\u00e1s espec\u00edfico, posiblemente invertir\u00eda, sobre todo si fuera de pago \u00fanico. Una suscripci\u00f3n mensual m\u00e1s me da pereza; un pago \u00fanico \u00fatil lo puedo entender.",
    purchaseLinks: [
      {
        label: "Ver DaVinci Resolve",
        url: "https://www.blackmagicdesign.com/products/davinciresolve"
      }
    ],
    alternativeDetails: [
      {
        name: "Adobe Premiere Pro",
        description:
          "Es la alternativa que usaba antes. Cambi\u00e9 porque DaVinci era gratis, legal y suficiente para mi forma de editar."
      },
      {
        name: "CapCut",
        description:
          "Puede servir para ediciones sencillas o contenido social, pero esta ficha no nace de una comparaci\u00f3n profunda con CapCut."
      },
      {
        name: "Final Cut Pro",
        description:
          "Otra opci\u00f3n conocida en edici\u00f3n de v\u00eddeo, especialmente en Mac, pero no es una alternativa que valore aqu\u00ed desde experiencia propia."
      }
    ],
    faqs: [
      {
        question: "\u00bfDe verdad es gratis?",
        answer:
          "S\u00ed. La versi\u00f3n gratuita es complet\u00edsima e incluye efectos, transiciones y herramientas de audio. Hay una versi\u00f3n de pago m\u00e1s avanzada, pero para el uso de un profe la gratis sobra."
      },
      {
        question: "\u00bfNecesito un ordenador potente?",
        answer:
          "Conviene. Consume bastantes recursos, as\u00ed que si tu equipo va justo, lo vas a notar m\u00e1s lento, sobre todo con varias cosas abiertas a la vez."
      },
      {
        question: "\u00bfSirve si no tengo ni idea de edici\u00f3n?",
        answer:
          "S\u00ed. Al principio puede abrumar un poco, pero es bastante intuitivo y visual. Yo no tengo nivel t\u00e9cnico y me apa\u00f1o perfectamente, incluso con el audio."
      }
    ],
    cta:
      "Si quieres que te cuente estas movidas de herramientas con m\u00e1s calma, te las cuento en borjaprofe.com."
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
    editorialVersion: "3.0",
    status: "opcional",
    updatedAt: "2026-06-12",
    intro:
      "iLovePDF es una maravilla porque tiene una función muy específica: modificar PDFs rápido. No la uso todos los días, pero el día que la necesito me salva en dos minutos. Es de esas herramientas que conviene tener guardadas para cuando aparece el marrón.",
    narrativeIntro: [
      "iLovePDF es una maravilla porque tiene una función muy específica, modificar PDFs, y porque además tiene una versión gratuita que para lo habitual da muchísimo juego. No la uso todos los días, pero el día que la necesito me salva en dos minutos. Es de esas herramientas que conviene tener guardadas para cuando aparece el marrón.",
      "Esta ficha es para profes que se preguntan cómo arreglar un PDF sin instalar nada ni pelearse con programas caros. Es una herramienta secundaria en mi flujo, pero cuando toca, es justo lo que necesitas."
    ],
    narrativeSections: [
      {
        title: "Qué es iLovePDF",
        paragraphs: [
          "iLovePDF es una herramienta online para modificar archivos PDF. Hace cosas muy concretas y muy útiles: extraer páginas, unir varios documentos en uno, comprimir el archivo para que pese menos o añadir firmas. Todo desde el navegador, sin instalar nada.",
          "No es un editor de diseño ni pretende serlo. Es la navaja suiza para esos arreglos rápidos de PDF que de otra forma te harían perder el rato."
        ],
        actions: [
          {
            label: "Abrir iLovePDF",
            url: "https://www.ilovepdf.com"
          }
        ]
      },
      {
        title: "Cómo funciona lo básico",
        paragraphs: [
          "El funcionamiento no tiene misterio: entras, eliges la función que necesitas y subes tu archivo. Las que más se usan son unir varios PDF en uno solo, extraer o eliminar páginas, comprimir el documento para que pese menos y firmar.",
          "Arrastras el PDF, le das un par de clics y tienes el resultado listo para descargar. Así de simple."
        ]
      },
      {
        title: "Cómo la uso yo",
        paragraphs: [
          "Te cuento un caso real y reciente, que es la mejor forma de explicarlo: justo la semana pasada me tocó corregir una presentación de un curso, un PDF que tenía páginas de más, y con iLovePDF lo hice rapidísimo. Ese tipo de cosa, arreglos puntuales que aparecen sin avisar.",
          "No la abro a diario. La uso un par de veces al mes, cuando surge algo concreto con un PDF. Por eso te recomiendo lo mismo que hago yo: tenla por ahí guardada en tu barra de navegación, o simplemente busca iLovePDF cuando la necesites.",
          "No es una herramienta de vivir dentro de ella, es de tenerla a mano."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo que más me gusta es lo cómoda y directa que es. Mucho de esto lo puedes hacer también desde tu programa de diseño tipo Canva o desde Adobe Acrobat, pero iLovePDF va al grano: es rápida y no instalas absolutamente nada, todo ocurre en el navegador.",
          "¿Y lo que menos? Pues poco, precisamente porque le pido poco. Es una herramienta secundaria y puntual, no el centro de nada. Si buscas un editor de PDF potente para trabajo avanzado y constante, esto se queda en lo básico. Pero para lo básico, cumple de sobra."
        ]
      },
      {
        title: "Precio",
        paragraphs: [
          "Tiene versión gratuita, que es la que yo uso, y también planes de pago. En la página oficial aparecen un plan Basic gratis, un Premium y un Business.",
          "Para las funciones que le doy yo, no he necesitado pagar nada. Si lo tuyo es un apaño rápido de PDF de vez en cuando, la gratuita te puede sobrar perfectamente."
        ]
      },
      {
        title: "Cuándo merece la pena usarla",
        paragraphs: [
          "Siempre que tengas un apaño rápido de PDF: juntar dos documentos, quitar una página, bajar el peso de un archivo para enviarlo por correo o firmar algo. Para eso es ideal.",
          "Si tu trabajo gira en torno a la edición intensiva de documentos, quizá quieras algo más completo y de pago. Para el resto de los mortales, iLovePDF sobra."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "Las que yo sí ubico aquí son Canva y Adobe Acrobat, porque hacen parte de estas cosas. Canva si ya lo usas para diseño, y Adobe Acrobat si necesitas la artillería pesada del PDF.",
          "Aun así, para arreglos rápidos yo me quedo con iLovePDF por pura comodidad. Más allá de esas, no he probado otras a fondo."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "iLovePDF no es una herramienta protagonista, y no pasa nada. Es una secundaria que cumple un papel muy concreto y lo borda: gratis para lo habitual, rápida y sin complicaciones. De esas que no recuerdas que tienes hasta que las necesitas, y entonces las bendices.",
          "Resumen para profes ocupados: sencilla y para arreglos puntuales de PDF. Tenla guardada en marcadores y tira de ella el día que la necesites."
        ]
      }
    ],
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
      { label: "Premium", value: "$5/mes con facturación anual o $9/mes mensual" },
      { label: "Business", value: "Precio personalizado" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Para mi uso puntual, el plan gratuito me basta. La página oficial muestra un plan Premium y uno Business, así que conviene confirmar el precio actual antes de pagar.",
    purchaseLinks: [
      {
        label: "Abrir iLovePDF",
        url: "https://www.ilovepdf.com"
      }
    ],
    relatedLinks: [
      {
        label: "Canva",
        url: "/herramientas/canva"
      },
      {
        label: "Squoosh",
        url: "/herramientas/squoosh"
      },
      {
        label: "Google Docs",
        url: "/herramientas/google-docs"
      }
    ],
    narrativeOutro: ["Enlace oficial: ilovepdf.com."],
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
      "Uso Kommodo (antes Komodo Decks) para grabar tutoriales, explicar a mis estudiantes cómo entrar en mis cursos y alojar algún vídeo. Te cuento para qué me sirve, qué me chirría y cuándo merece la pena.",
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
      "La herramienta que uso para grabar tutoriales rápidos, alojar vídeos puntuales y compartirlos sin pasar por YouTube.",
    category: "Audio y vídeo",
    subcategories: ["vídeo", "contenido", "educación", "formación", "tutoriales", "grabación"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://kommodo.ai",
    affiliateUrl: "https://kommodo.ai/?via=borja",
    hasAffiliate: true,
    myUseCase:
      "La uso de forma ocasional para grabar tutoriales, explicar a estudiantes cómo entrar en mis cursos y alojar algún vídeo fuera de YouTube.",
    bestFor: [
      "Profes que necesitan grabar tutoriales rápidos para estudiantes",
      "Quien quiere enseñar pantalla y cámara sin complicarse",
      "Quien necesita compartir vídeos privados fuera de YouTube",
      "Quien quiere montar una landing sencilla con vídeo, texto y contraseña"
    ],
    notFor: [
      "Quien busca un almacén principal y definitivo para sus vídeos",
      "Quien necesita una plataforma de vídeo muy fiable para piezas importantes",
      "Quien quiere editar a fondo dentro de la propia herramienta",
      "Quien solo va a grabar algo muy de vez en cuando y no aprovecharía un plan de pago"
    ],
    pros: [
      "Graba pantalla, cámara o ambas cosas a la vez.",
      "Aloja el vídeo y lo comparte por enlace sin pasar por YouTube.",
      "Permite proteger vídeos con contraseña y añadir botones o texto.",
      "Sirve para grabar una vez algo que repetirías por email muchas veces.",
      "El plan gratuito parece suficiente para pruebas y usos puntuales."
    ],
    cons: [
      "El editor interno me parece solo para salir del paso.",
      "Me apareció una marca de tiempo junto a la cámara que no he conseguido quitar.",
      "Tuve un fallo en el que un vídeo dejó de mostrarse y tuve que volver a subirlo.",
      "No me fiaría de ella como único almacén de vídeos importantes.",
      "No he explorado sus funciones nuevas de IA, así que no las valoro."
    ],
    alternatives: ["Vimeo", "YouTube", "DaVinci Resolve"],
    rating: 3,
    difficulty: "facil",
    editorialVersion: "3.0",
    status: "opcional",
    updatedAt: "2026-06-13",
    intro:
      "Si das clases online, tarde o temprano te toca grabarte la pantalla para explicarle a un estudiante cómo entrar en tu plataforma, para montar un mini tutorial o para dejar grabada esa cosa que repites por decimoquinta vez por email.",
    narrativeIntro: [
      "Si das clases online, tarde o temprano te toca grabarte la pantalla, para explicarle a un estudiante cómo entrar en tu plataforma, para montar un mini tutorial o para dejar grabada esa cosa que repites por decimoquinta vez por email. Kommodo es la herramienta que tengo en el cajón justo para eso: grabar pantalla y cámara, y dejar el vídeo alojado en algún sitio sin tener que pasar por YouTube.",
      "Un apunte de nombre, porque hay lío: yo la compré cuando se llamaba Komodo Decks, y hoy el producto es Kommodo. Es la misma herramienta, así que si la conociste con el nombre viejo, hablamos de lo mismo. La pillé en su momento como oferta de pago único en AppSumo. Aquello era un pago único, pero hoy Kommodo funciona con planes recurrentes, así que mi situación de partida y la tuya probablemente no sean iguales.",
      "Esta ficha es para profes que se preguntan con qué grabar un tutorial rápido y dónde dejarlo para que su estudiante lo vea sin líos. Kommodo es una respuesta posible. No la única, y no para todo."
    ],
    narrativeSections: [
      {
        title: "Qué es Kommodo",
        paragraphs: [
          "Kommodo es una herramienta de captura de pantalla y vídeo. Te grabas a ti, grabas lo que pasa en la pantalla, o las dos cosas a la vez, esa cajita de tu cara en una esquina mientras enseñas algo.",
          "Hasta aquí, lo de siempre. Lo que la hace interesante es lo que viene después de grabar."
        ],
        actions: [
          {
            label: "Probar Kommodo",
            url: "https://kommodo.ai/?via=borja"
          }
        ]
      },
      {
        title: "Cómo la uso",
        paragraphs: [
          "Yo la he usado a veces con estudiantes para explicarles cómo acceder a cierta plataforma o a mis cursos. Para eso puede ser súper súper práctica, igual que para grabar tutoriales o pequeños cursos. Grabas una vez lo que repetirías mil, y se lo pasas.",
          "Una de las cosas que más me gustaron de origen es que tiene almacenamiento infinito para los vídeos que grabas dentro: grabas algo y se queda ahí, sin que se te agote el espacio. Además puedes subir vídeos grabados en otro sitio, no solo los que haces dentro de la herramienta.",
          "Trae un editor sencillo, pero no te lo recomiendo para la edición principal. Para cortar y montar en serio, yo me iría a algo como [DaVinci Resolve](/herramientas/davinci-resolve-editor-video-gratis-profesores). El editor de Kommodo te saca de un apuro y poco más.",
          "Y aquí está lo que de verdad le da gracia: puedes mostrar los vídeos protegidos con contraseña, añadirles botones y texto, y montar una landing muy sencilla con ellos. He alojado así algunos vídeos de mis cursos. Si quieres dejar algo fuera de YouTube, sin que esté en abierto, es una opción la mar de cómoda."
        ],
        actions: [
          {
            label: "Ver Kommodo",
            url: "https://kommodo.ai/?via=borja"
          }
        ]
      },
      {
        title: "Lo que menos me gusta",
        paragraphs: [
          "La primera pega es pequeña pero molesta: al grabar con la cámara visible, a veces aparece una marca del tiempo cerca de la cámara que no consigo quitar. Me imagino que será configurable, pero yo no he dado con la tecla.",
          "La segunda es más seria y tiene que ver con la fiabilidad. Tuve un problema en el que un vídeo dejó de mostrarse, sin más, y no supe por qué. Tuve que volver a subirlo. Por eso no te recomiendo confiar ciegamente en Kommodo como tu único sitio de almacenamiento, porque no es lo mismo que tener tus vídeos en plataformas más serias como Vimeo o [YouTube](/herramientas/youtube). Para vídeos importantes, ten siempre una copia en otro lado.",
          "Kommodo ha ido añadiendo funciones nuevas, incluida bastante IA, que yo no he explorado. No te puedo hablar de ellas desde la experiencia, así que esta ficha cubre lo que de verdad utilizo, no el folleto completo."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Tiene un plan gratuito con un límite que creo que es de unos 15 vídeos. Si solo lo necesitas para algo puntual, te vale de sobra. Lo mío fue un pago único de AppSumo que ya no existe, y hoy la herramienta va por planes recurrentes.",
          "Como estas cosas cambian, confirma siempre el precio actualizado en kommodo.ai. Y si al final te decides por un plan de pago, puedes entrar por mi enlace de afiliado: a ti te cuesta exactamente lo mismo y a mí me cae una pequeña comisión que ayuda a mantener el Laborjatorio."
        ]
      },
      {
        title: "Cuándo merece la pena",
        paragraphs: [
          "Si vas a grabar cuatro vídeos al trimestre, no le veo sentido al plan recurrente: te quedas en el gratis y listo. Y si lo que buscas es un sitio donde alojar los vídeos de tus cursos con total tranquilidad, ahí yo no apostaría todo a Kommodo, porque para eso hay opciones más fiables.",
          "Donde sí brilla es en el combo de grabar rápido, alojar y compartir con un enlace privado o una landing sencilla."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "Para el alojamiento serio de vídeos, las referencias son Vimeo y [YouTube](/herramientas/youtube), como ya te he dicho. Para grabar pantalla hay otras herramientas conocidas en el mercado, pero no las he metido en mi flujo, así que prefiero no recomendártelas como si las usara.",
          "Y para editar de verdad, me sigo yendo a [DaVinci Resolve](/herramientas/davinci-resolve-editor-video-gratis-profesores)."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "Kommodo, la antigua Komodo Decks, es una herramienta útil para usos concretos: grabar tutoriales, explicarle cosas a tus estudiantes, alojar algún vídeo fuera de YouTube y montar una landing rápida sin complicarte. Comprada en su día como pago único, me ha dado buen servicio para eso.",
          "Para esos usos puntuales, sí la recomiendo, sobre todo si cazas una buena oferta. Lo que no haría es confiarle el alojamiento de todos mis vídeos importantes, porque la fiabilidad no está a la altura de plataformas más serias. Úsala para lo que es buena y guarda copia de lo que importe.",
          "Resumen para profes ocupados: graba pantalla y cámara, aloja vídeos y te deja montar una landing sencilla con contraseña. Genial para tutoriales puntuales, pero no me fiaría de ella como único almacén de vídeos."
        ]
      }
    ],
    whatItDoes:
      "Kommodo graba pantalla, cámara o ambas cosas a la vez, aloja los vídeos en su propia plataforma y permite compartirlos por enlace o integrarlos en páginas sencillas con texto, botones y contraseña.",
    howIUseIt:
      "La uso de forma ocasional para grabar tutoriales para estudiantes, explicarles cómo entrar en plataformas o cursos y alojar algunos vídeos fuera de YouTube cuando quiero compartirlos de forma más privada.",
    teacherUseCases: [
      "Grabar un tutorial para explicar cómo entrar en un curso o plataforma.",
      "Resolver por vídeo una duda que se repite muchas veces por email.",
      "Compartir una explicación con pantalla y cámara por enlace privado.",
      "Alojar algún vídeo formativo fuera de YouTube.",
      "Montar una landing sencilla con vídeo, texto y contraseña."
    ],
    honestVerdict:
      "Kommodo me parece útil para grabar y compartir rápido, pero no la usaría como único almacén de vídeo importante. El plan gratuito puede valer para uso puntual; el pago solo lo miraría si de verdad fueras a usarla mucho.",
    importantNotice:
      "Esta ficha incluye enlace de afiliado. Si entras desde él y acabas pagando, a ti te cuesta lo mismo y a mí me llega una pequeña comisión. Y, más importante todavía, yo no confiaría a Kommodo el único original de un vídeo importante: guarda siempre copia en otro sitio.",
    metrics: [
      { label: "Uso actual", value: "Ocasional" },
      { label: "Plan gratis", value: "Aproximadamente 15 vídeos" },
      { label: "Estado", value: "Opcional" }
    ],
    priceRows: [
      { label: "Plan gratuito", value: "Sí" },
      { label: "Pago antiguo", value: "Yo entré por AppSumo" },
      { label: "Planes actuales", value: "Confirmar en la web oficial" },
      { label: "Afiliación", value: "Sí" }
    ],
    priceNote:
      "No fijo aquí el precio de los planes recurrentes porque cambia y prefiero no inventarlo. La referencia útil es esta: el gratis sirve para algo puntual y el pago solo tiene sentido si vas a usarlo de verdad.",
    purchaseLinks: [
      {
        label: "Probar Kommodo",
        url: "https://kommodo.ai/?via=borja"
      }
    ],
    relatedLinks: [
      {
        label: "DaVinci Resolve",
        url: "/herramientas/davinci-resolve-editor-video-gratis-profesores"
      },
      {
        label: "YouTube",
        url: "/herramientas/youtube"
      },
      {
        label: "LearnDash",
        url: "/herramientas/learndash"
      }
    ],
    faqs: [
      {
        question: "¿Kommodo es lo mismo que Komodo Decks?",
        answer:
          "Sí. Yo la compré cuando se llamaba Komodo Decks y hoy el producto se llama Kommodo. Si conocías el nombre viejo, estamos hablando de la misma herramienta."
      },
      {
        question: "¿Sirve para alojar vídeos de cursos?",
        answer:
          "Puede servir para algunos vídeos o para piezas puntuales, pero no la usaría como único almacén de vídeos importantes. Ahí prefiero tener copia y no depender solo de Kommodo."
      },
      {
        question: "¿Merece la pena pagar Kommodo?",
        answer:
          "Solo si vas a usarla de forma habitual. Si tu uso es ocasional, el plan gratuito probablemente te baste."
      },
      {
        question: "¿Puedo editar dentro de Kommodo?",
        answer:
          "Sí, pero yo lo dejaría para apaños rápidos. Para editar en serio, me iría a una herramienta específica como DaVinci Resolve."
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
    editorialVersion: "3.0",
    status: "opcional",
    updatedAt: "2026-06-12",
    publishedAt: "2026-06-08T09:00:00+02:00",
    intro:
      "Esta es una herramienta que he comprado hace poco. Y sí, comprado, porque es de pago único. Tiene un objetivo muy específico: convertir episodios de podcast en solo audio en clips cortos para redes sociales. Si tienes un catálogo de episodios viejos que solo existen en audio, SoundMadeSeen es una forma rápida de darles una segunda vida en vídeo.",
    narrativeIntro: [
      "Esta es una herramienta que he comprado hace poco. Y sí, comprado, porque es de pago único. Tiene un objetivo muy específico: convertir episodios de podcast en solo audio en clips cortos para redes sociales. Si tienes un catálogo de episodios viejos que solo existen en audio, SoundMadeSeen es una forma rápida de darles una segunda vida en vídeo.",
      "Esta ficha es para profes y podcasters que se preguntan cómo sacar clips para redes de episodios que nunca grabaron en vídeo. Te cuento cómo funciona, lo que pago y para quién tiene sentido de verdad."
    ],
    narrativeSections: [
      {
        title: "Qué es SoundMadeSeen",
        paragraphs: [
          "SoundMadeSeen es una herramienta que coge un episodio de audio y lo transforma en clips cortos y visuales, listos para publicar en redes. Su gracia está en que no necesitas haber grabado vídeo: parte del audio y le pone una capa visual encima, fondo, subtítulos y ondas de sonido, para que funcione en Instagram, TikTok y compañía.",
          "Es muy de una sola cosa, pero esa cosa la resuelve bien."
        ],
        actions: [
          {
            label: "Ver SoundMadeSeen en AppSumo",
            url: "https://appsumo.8odi.net/ZdZDO0"
          }
        ]
      },
      {
        title: "Cómo funciona",
        paragraphs: [
          "El proceso es sencillo y rápido. Subes uno de tus episodios a la plataforma y SoundMadeSeen identifica, a su criterio, cuáles son los mejores momentos, ofreciéndote una serie de clips cortos ya recortados. Puedes quedarte con los que te sugiere o hacerte uno a medida desde un editor sencillo pero relativamente completo.",
          "A partir de ahí, lo vistes. Puedes elegir un fondo visual y añadir imágenes desde su banco o subiendo las tuyas propias, que en mi caso suelo preparar en Canva. Genera subtítulos automáticamente, y los puedes editar, que esto es un puntazo, y le añades una de esas ondas de sonido que se mueven sincronizadas con el audio.",
          "Le das a exportar y listo. Cada clip tarda literalmente un par de minutos en generarse.",
          "Tiene además una función para generar historias con imágenes mediante IA, pero ahí mi experiencia no queda muy bien. Es mejorable, así que de momento no es lo que me lleva a usarla."
        ]
      },
      {
        title: "Cómo lo uso yo",
        paragraphs: [
          "No la uso todo el tiempo, porque ahora mismo estoy dando prioridad a los episodios que grabo con vídeo. SoundMadeSeen la saco de vez en cuando, un par de veces al mes, para ir rescatando episodios buenos que solo tienen audio y convertirlos en material para redes. Para eso me parece especialmente útil: cuando tienes un catálogo grande de episodios solo en audio, es una mina.",
          "Te doy mis números para que te hagas una idea. Mis episodios duran de media unos 20 y pico minutos, así que con mi plan puedo procesar unos cuatro episodios al mes, y de esos cuatro saco a lo mejor entre 15 y 20 clips. Para mi caso, no está nada mal.",
          "Y si te preocupa la dificultad, tranquilo: si ya tienes un podcast, esto es pan comido en comparación."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo mejor es la automatización: que te detecte los mejores momentos y te genere el clip en un par de minutos ahorra muchísimo tiempo. Los subtítulos automáticos y editables son un puntazo, la edición visual es sencilla y el conjunto es muy fácil de usar. Para revivir un catálogo de audio, cumple de sobra.",
          "¿Lo menos bueno? El límite mensual de minutos, que te marca cuántos episodios puedes procesar. En mi plan, esos cuatro al mes. Y la función de generar historias con IA, que de momento no me convence y deja un resultado mejorable. Más que un defecto grave, es una parte que todavía le falta pulir."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Pagué 39 dólares como pago único, y con eso tengo 100 minutos de audio o vídeo al mes, con la opción de pagar más para ampliar minutos. El deal visible actual en AppSumo sigue arrancando en 39, pero estas cosas pueden cambiar.",
          "Existe la posibilidad de que en algún momento cambie el modelo o cambien los tiers, así que mi situación de partida quizá no sea la tuya. Para el precio que tiene en este momento, a mí al menos me ha merecido la pena.",
          "Confirma el plan actual antes de comprar. Y si decides hacerte con él, puedes usar mi enlace de afiliado: a ti te cuesta exactamente lo mismo y a mí me cae una pequeña comisión que ayuda a mantener el Laborjatorio."
        ],
        actions: [
          {
            label: "Comprar SoundMadeSeen",
            url: "https://appsumo.8odi.net/ZdZDO0"
          }
        ]
      },
      {
        title: "A quién le interesa",
        paragraphs: [
          "Sobre todo a podcasters con un catálogo de episodios solo en audio que quieren aprovecharlos en redes sin tener que regrabar nada en vídeo. Si ese es tu caso, le vas a sacar mucho partido.",
          "Si grabas siempre en vídeo, probablemente tengas otras vías más directas."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "La comparación natural es OpusClip, que también genera clips cortos automáticamente, aunque parte de vídeo. La diferencia está justo ahí: OpusClip brilla cuando ya tienes vídeo, y SoundMadeSeen es la opción cuando lo que tienes es solo audio.",
          "En mi flujo conviven las dos, cada una para lo suyo. Más allá de eso, no he probado otras herramientas equivalentes a fondo."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "SoundMadeSeen hace una cosa muy concreta y la hace bien: convertir tu audio en clips visuales para redes en un par de clics. No es una herramienta para todo, ni la uso a diario, pero para rescatar episodios antiguos que se merecían más vida tiene un valor claro, y por el precio de pago único que pagué me ha salido a cuenta.",
          "¿La recomiendo? Si tienes podcast en audio y quieres llevarlo a redes sin complicarte, sí. Si no haces clips o ya trabajas en vídeo, probablemente no la necesites. La función de historias con IA, por ahora, la dejaría aparcada.",
          "Resumen para profes y creadores ocupados: ideal para convertir episodios solo de audio en clips para redes. Automática, rápida y con subtítulos, aunque limitada por los minutos del plan."
        ]
      }
    ],
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
      { label: "AppSumo", value: "39 $ pago único, verificado el 12 de junio de 2026" },
      { label: "Límite", value: "100 minutos de generación de vídeo al mes" },
      { label: "Ampliación", value: "Más códigos aumentan límites, según AppSumo" },
      { label: "Afiliación", value: "Sí, AppSumo vía Impact" }
    ],
    priceNote:
      "Pagué 39 dólares como pago único. AppSumo sigue mostrando un arranque de 39 dólares con tiers superiores disponibles, pero confirma siempre el plan actual antes de comprar, porque estas ofertas pueden cambiar.",
    purchaseLinks: [
      {
        label: "Comprar SoundMadeSeen en AppSumo",
        url: "https://appsumo.8odi.net/ZdZDO0"
      }
    ],
    relatedLinks: [
      {
        label: "OpusClip",
        url: "/herramientas/opus-clip"
      },
      {
        label: "Canva",
        url: "/herramientas/canva"
      },
      {
        label: "Spotify for Podcasters",
        url: "/herramientas/spotify-for-podcasters"
      }
    ],
    narrativeOutro: ["Enlace oficial: deal de SoundMadeSeen en AppSumo."],
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
    editorialVersion: "3.0",
    status: "opcional",
    updatedAt: "2026-06-12",
    publishedAt: "2026-06-07T10:00:00+02:00",
    intro:
      "Es una herramienta estupenda para algo muy concreto: que tu audiencia te envíe audios. SpeakPipe permite que tus oyentes o estudiantes te dejen un mensaje de voz, y eso, bien usado, da mucho juego. Yo la usé en mi podcast ¡Palabras! para que estudiantes y profesores me mandaran palabras para episodios futuros.",
    narrativeIntro: [
      "Es una herramienta estupenda para algo muy concreto: que tu audiencia te envíe audios. SpeakPipe permite que tus oyentes o estudiantes te dejen un mensaje de voz, y eso, bien usado, da mucho juego.",
      "Yo la usé en mi podcast ¡Palabras! para que estudiantes y profesores me mandaran palabras para episodios futuros. Esta ficha es para profes y creadores que se preguntan cómo conseguir esa participación sin montar un lío técnico."
    ],
    narrativeSections: [
      {
        title: "Qué es SpeakPipe",
        paragraphs: [
          "SpeakPipe es una herramienta que permite a tu audiencia enviarte mensajes de audio, normalmente pensada para podcasts. La gente graba desde una página y a ti te llega ese audio para hacer con él lo que quieras: usarlo en un episodio, responderlo, lo que sea.",
          "Es de uso muy específico, eso te lo digo ya: no es una navaja suiza, es una herramienta para una cosa. Pero esa cosa la hace muy bien."
        ],
        actions: [
          {
            label: "Probar SpeakPipe",
            url: "https://www.speakpipe.com/"
          }
        ]
      },
      {
        title: "Cómo funciona",
        paragraphs: [
          "El funcionamiento es sencillo y sin tecnicismos. Creas tu cuenta y SpeakPipe te genera una página donde la gente puede grabar directamente, o si lo prefieres embebes esa interfaz en tu WordPress.",
          "Tu audiencia graba su audio, hasta 90 segundos en la versión gratuita, a ti te llega un correo con el mensaje y desde ahí decides qué hacer con él. Hay un detalle que para un profe es oro: puedes pedir el email de quien envía el audio, una forma estupenda de ir reuniendo direcciones de potenciales estudiantes.",
          "La personalización es mínima, por ejemplo el texto que ve la persona tras enviar su audio, pero suficiente para empezar. Y esos 90 segundos del plan gratis, para mis objetivos, son más que de sobra, y posiblemente para ti también."
        ]
      },
      {
        title: "Cómo lo usé yo",
        paragraphs: [
          "Cuando tenía el podcast de ¡Palabras! activo, usaba SpeakPipe cada semana: los oyentes me mandaban palabras en audio y yo las llevaba a episodios futuros. Una forma muy directa de que la comunidad formara parte del programa.",
          "Ahora mismo lo tengo parado, pero sí tengo a la vista un proyecto en el que voy a volver a utilizarlo. Si tienes curiosidad por saber cuál, apúntate en borjaprofe.com, que te lo contaré por ahí.",
          "Para gestionar los episodios en sí uso otra herramienta más amplia, Spotify for Podcasters. SpeakPipe es solo la pieza de recoger las voces."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo que más valoro es que es gratis y suficiente: no he pagado nunca la versión Pro y no me ha hecho falta. Es sencilla, no necesitas configuraciones complejas para arrancar, y la puedes integrar en tu WordPress o usar su página propia, como prefieras.",
          "Pero, sobre todo, está la captación de emails: pedir el correo de quien participa te va construyendo una lista de potenciales estudiantes, y para un profe eso vale mucho.",
          "¿Lo menos bueno? Los topes del plan gratuito, que conviene conocer. Cada audio dura un máximo de 90 segundos, perfecto para mensajes cortos pero justo si los quieres largos. Solo puedes tener un micrófono o proyecto activo, aunque hay truco: creas varias cuentas con correos distintos si necesitas más.",
          "El botón es naranja y no se puede cambiar de color en la versión gratis, así que tendrás que vivir con ello. Y hay un límite de almacenamiento que te obliga a ir borrando los audios que ya has descargado para liberar espacio. Ninguno de estos me ha supuesto un drama, pero mejor que los sepas de antemano."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Tiene versión gratuita y versión de pago. Mi recomendación honesta: con la gratuita sobra para el uso típico de un profe o podcaster que empieza.",
          "Yo no he necesitado pagar, así que no te voy a empujar a hacerlo."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "SpeakPipe no es una herramienta que vayas a usar para todo, pero para lo suyo, recibir audios de tu audiencia, es estupenda, sencilla y gratis. A mí me funcionó muy bien con ¡Palabras!, y pienso recuperarla para un proyecto futuro.",
          "Si tienes podcast o quieres una interacción más directa con tu audiencia mediante la voz, puede ser una gran idea. Si no, probablemente no la necesites. Tan claro como eso.",
          "Resumen para profes y creadores ocupados: gratis y sencilla para que tu audiencia te mande audios. Ideal si tienes podcast, y de paso te ayuda a captar emails."
        ]
      }
    ],
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
      "SpeakPipe no es una herramienta que vayas a usar para todo, pero para lo suyo, recibir audios de tu audiencia, es estupenda, sencilla y gratis. A mí me funcionó muy bien con ¡Palabras!, y pienso recuperarla para un proyecto futuro. Si tienes podcast o quieres una interacción más directa con tu audiencia mediante la voz, puede ser una gran idea. Si no, probablemente no la necesites. Tan claro como eso.",
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
    purchaseLinks: [
      {
        label: "Ir a SpeakPipe",
        url: "https://www.speakpipe.com/"
      }
    ],
    relatedLinks: [
      {
        label: "Spotify for Podcasters",
        url: "/herramientas/spotify-for-podcasters"
      },
      {
        label: "WordPress",
        url: "/herramientas/wordpress"
      },
      {
        label: "MailPoet",
        url: "/herramientas/mailpoet"
      }
    ],
    narrativeOutro: ["Enlace oficial: speakpipe.com."],
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
    title: "Metricool: con qu\u00e9 veo las m\u00e9tricas de mi web y programo redes sin entrar en ellas",
    metaDescription:
      "Llevo m\u00e1s de seis a\u00f1os con Metricool para ver las m\u00e9tricas de mi web y programar redes sin tener que entrar en ellas. Te cuento c\u00f3mo lo uso, su plan gratis y cu\u00e1ndo compensa pagar.",
    keywords: [
      "Metricool",
      "m\u00e9tricas de web sencillas",
      "programar publicaciones en redes",
      "alternativa a Google Analytics",
      "programar Instagram y TikTok",
      "centralizar redes sociales"
    ],
    tagline:
      "La herramienta que uso para ver las m\u00e9tricas de mi web y programar redes sin tener que entrar en ellas.",
    category: "Marketing y ventas",
    subcategories: ["anal\u00edtica", "redes sociales", "productividad", "contenido", "programaci\u00f3n"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://metricool.com",
    affiliateUrl: "https://f.mtr.cool/laborjatorio",
    hasAffiliate: true,
    myUseCase:
      "La uso desde hace m\u00e1s de seis a\u00f1os para consultar m\u00e9tricas b\u00e1sicas de mi web y programar publicaciones en redes sin tener que entrar en ellas.",
    bestFor: [
      "Profes que quieren ver m\u00e9tricas web sencillas sin pelearse con Google Analytics",
      "Creadores educativos que programan contenido en varias redes",
      "Quien quiere publicar en redes sin tener que entrar en ellas cada d\u00eda",
      "Profes con una marca o proyecto que necesitan un panel claro para redes y m\u00e9tricas"
    ],
    notFor: [
      "Quien necesita anal\u00edtica web profunda y muy t\u00e9cnica",
      "Quien ya programa publicaciones desde otra herramienta que paga y le cubre",
      "Quien publica muy poco y no supera los l\u00edmites del plan gratuito",
      "Quien necesita LinkedIn o X dentro del plan gratis"
    ],
    pros: [
      "El plan gratuito es muy generoso para empezar.",
      "La interfaz es mucho m\u00e1s amable que Google Analytics para mirar lo b\u00e1sico.",
      "Centraliza m\u00e9tricas y programaci\u00f3n en un solo sitio.",
      "Permite programar sin tener que entrar en cada red social.",
      "Los informes son personalizables y m\u00e1s amigables para la vista."
    ],
    cons: [
      "El plan gratuito tiene l\u00edmite de 20 publicaciones programadas al mes.",
      "Facebook, LinkedIn y otras redes tienen l\u00edmites seg\u00fan el plan.",
      "Solo permite una marca en el plan gratis.",
      "Las autolistas existen, pero apenas las he explorado.",
      "En mi caso actual no pagar\u00eda la mensualidad."
    ],
    alternatives: ["OpusClip", "Google Analytics"],
    rating: 4,
    difficulty: "facil",
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-13",
    intro:
      "Metricool es una pedazo de herramienta que llevo utilizando desde hace m\u00e1s de seis a\u00f1os. Y la uso para dos cosas que parecen distintas pero que a m\u00ed me sirven juntas: ver las m\u00e9tricas de mi web de forma sencilla y programar mis publicaciones en redes sin tener que entrar en ellas.",
    narrativeIntro: [
      "Metricool es una pedazo de herramienta que llevo utilizando desde hace m\u00e1s de seis a\u00f1os. Y la uso para dos cosas que parecen distintas pero que a m\u00ed me sirven juntas: ver las m\u00e9tricas de mi web de forma sencilla y programar mis publicaciones en redes sin tener que entrar en ellas. Esto \u00faltimo, para alguien al que las redes le dan un poco de alergia como a m\u00ed, vale oro.",
      "Esta ficha es para profes que se preguntan c\u00f3mo controlar sus n\u00fameros y publicar en redes sin que se les vaya el d\u00eda en ello. Te cuento mi uso real, sus l\u00edmites y por qu\u00e9, aun queri\u00e9ndola, hoy no pagar\u00eda su mensualidad."
    ],
    narrativeSections: [
      {
        title: "Qu\u00e9 es Metricool",
        paragraphs: [
          "Metricool es una herramienta que junta dos mundos: la anal\u00edtica, es decir, las m\u00e9tricas de tu web y de tus redes, y la programaci\u00f3n de publicaciones en redes sociales.",
          "La gracia est\u00e1 en tenerlo todo centralizado en un mismo sitio, con una interfaz visual y amigable, sin volverte loco."
        ],
        actions: [
          {
            label: "Probar Metricool",
            url: "https://f.mtr.cool/laborjatorio"
          }
        ]
      },
      {
        title: "C\u00f3mo la uso para las m\u00e9tricas de mi web",
        paragraphs: [
          "Empec\u00e9 a usarla por aqu\u00ed. Antes no usaba ninguna herramienta de m\u00e9tricas, hasta que prob\u00e9 Google Analytics y acab\u00e9 tan horrorizado que no lo he vuelto a abrir. Siempre me ha parecido muy lioso y que da demasiada informaci\u00f3n para lo que yo necesito.",
          "Y lo que yo necesito es sencillo: ver mis visitas mensuales, semanales y en tiempo real, y poco m\u00e1s. Metricool me lo da as\u00ed de claro, adem\u00e1s de permitirme generar informes personalizables que me gustan mucho m\u00e1s que los de Google Analytics, y que son mucho m\u00e1s amigables para la vista. Para un profe que quiere enterarse de c\u00f3mo va su web sin un m\u00e1ster en anal\u00edtica, es ideal."
        ]
      },
      {
        title: "C\u00f3mo la uso para programar redes",
        paragraphs: [
          "La otra gran pata es la programaci\u00f3n. Desde Metricool programo mis publicaciones en Instagram, en TikTok, en Shorts y en Reels, con plantillas que se adaptan a cada red. S\u00e9 que hay muchas herramientas que permiten programar en redes, pero a m\u00ed me gusta tenerlo todo centralizado aqu\u00ed.",
          "Y aqu\u00ed est\u00e1 la clave de por qu\u00e9 me encaja tanto. Metricool es ideal si quieres ganar tiempo con las publicaciones y, sobre todo, si te pasa como a m\u00ed y te dan un poquito de alergia las redes y quieres entrar en ellas lo menos posible. El mejor ejemplo: no entro nunca a Facebook, pero publico ah\u00ed regularmente. Programar sin estar ah\u00ed es justo lo que buscaba.",
          "Te ser\u00e9 sincero en una cosa, eso s\u00ed: soy un poquito anal\u00f3gico para esto. Hay una funci\u00f3n llamada autolistas, para republicar autom\u00e1ticamente el contenido que funcion\u00f3, que no he explorado apenas. Est\u00e1 ah\u00ed para quien quiera afinar m\u00e1s que yo."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo que m\u00e1s valoro ya lo has ido viendo: que su plan gratuito sea tremendamente generoso, que centralice m\u00e9tricas y programaci\u00f3n en un solo sitio, que sea sencillo y amigable a la vista, y que me deje publicar en redes sin tener que pisarlas. Para mi forma de trabajar, encaja como un guante.",
          "Y los l\u00edmites est\u00e1n sobre todo en el plan gratuito, y conviene que los conozcas. La cuenta gratis te limita las publicaciones programadas al mes y el n\u00famero de marcas. Si necesitas m\u00e1s, el primer plan de pago sube bastante el techo. As\u00ed que la gratis cunde much\u00edsimo para empezar, pero tiene su tope si vas en serio con varias redes."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "El plan gratuito es muy generoso, de los que de verdad te sirven para arrancar. Yo, en su momento, compr\u00e9 una oferta de pago \u00fanico que ya no est\u00e1 disponible, y es la versi\u00f3n que sigo usando.",
          "Y aqu\u00ed viene mi matiz honesto: hoy, sinceramente, no pagar\u00eda cada mes por Metricool. No porque no lo valga, sino por mi caso concreto: desde [OpusClip](/herramientas/opusclip), que es una herramienta que s\u00ed pago mensualmente, ya tengo tambi\u00e9n la opci\u00f3n de programar mis publicaciones. As\u00ed que Metricool ha dejado de ser mi \u00fanica v\u00eda para eso.",
          "Como los precios y los planes cambian, confirma siempre el actual en metricool.com. Y si a ti te encaja un plan de pago, puedes entrar por mi enlace de afiliado: a ti te cuesta exactamente lo mismo y a m\u00ed me cae una peque\u00f1a comisi\u00f3n que ayuda a mantener el Laborjatorio."
        ],
        actions: [
          {
            label: "Ver Metricool",
            url: "https://f.mtr.cool/laborjatorio"
          }
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "Para las m\u00e9tricas, la alternativa de manual es Google Analytics, que para m\u00ed es justo lo contrario de lo que busco: potente, s\u00ed, pero liosa y con demasiada informaci\u00f3n.",
          "Para programar, mi propia alternativa actual es [OpusClip](/herramientas/opusclip), desde donde tambi\u00e9n publico. M\u00e1s all\u00e1 de eso, hay muchas herramientas de programaci\u00f3n en el mercado, pero no las he probado a fondo, as\u00ed que no te las vendo como recomendaci\u00f3n."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "Metricool es una gran herramienta y por algo lleva conmigo m\u00e1s de seis a\u00f1os. Para ver las m\u00e9tricas de tu web sin agobiarte y para programar tus redes sin tener que vivir dentro de ellas, es de lo m\u00e1s c\u00f3modo y sencillo que vas a encontrar, y encima su plan gratis da much\u00edsimo de s\u00ed.",
          "La recomiendo mucho, sobre todo si eres de los que prefieren publicar sin entrar en las redes. Lo \u00fanico que te digo con la mano en el coraz\u00f3n es que valores bien si te compensa el plan mensual o si, como en mi caso, con la versi\u00f3n gratis o con otra herramienta que ya pagues tienes de sobra.",
          "Resumen para profes ocupados: m\u00e9tricas de web sencillas y programaci\u00f3n de redes centralizada, ideal si quieres publicar sin entrar en las redes. Plan gratis muy generoso. La mensualidad, val\u00f3rala seg\u00fan tu caso."
        ]
      }
    ],
    whatItDoes:
      "Metricool muestra m\u00e9tricas de web y redes sociales, genera informes y permite programar publicaciones desde un solo panel.",
    howIUseIt:
      "La uso para mirar m\u00e9tricas web sencillas y para programar publicaciones en varias redes sin tener que abrir cada una por separado.",
    teacherUseCases: [
      "Consultar visitas mensuales, semanales y en tiempo real sin entrar en Google Analytics.",
      "Programar publicaciones educativas en varias redes desde un solo panel.",
      "Publicar en Facebook u otras redes sin tener que entrar a distraerse.",
      "Preparar informes sencillos de evoluci\u00f3n del contenido.",
      "Centralizar redes y m\u00e9tricas si tienes una marca educativa online."
    ],
    honestVerdict:
      "Metricool me acompa\u00f1a desde hace m\u00e1s de seis a\u00f1os, y eso ya dice bastante. Me parece comod\u00edsima para ver m\u00e9tricas sencillas y programar redes sin entrar en ellas. Mi matiz honesto es que hoy yo no pagar\u00eda la mensualidad en mi caso concreto.",
    importantNotice:
      "Mi situaci\u00f3n no es la habitual: compr\u00e9 en su d\u00eda una oferta de pago \u00fanico que ya no est\u00e1 disponible. Hoy Metricool funciona con planes recurrentes, as\u00ed que mi coste real y el de alguien que entre ahora no son el mismo.",
    metrics: [
      { label: "Tiempo us\u00e1ndola", value: "+6 a\u00f1os" },
      { label: "Plan gratis", value: "Muy generoso" },
      { label: "Afiliaci\u00f3n", value: "S\u00ed" }
    ],
    priceRows: [
      { label: "Plan gratis", value: "Suficiente para arrancar" },
      { label: "Pago mensual", value: "Val\u00f3ralo seg\u00fan tu caso" },
      { label: "Mi caso", value: "Pago \u00fanico antiguo, ya no disponible" },
      { label: "Afiliaci\u00f3n", value: "S\u00ed" }
    ],
    priceNote:
      "Si entras desde mi enlace y acabas contratando, yo puedo llevarme una peque\u00f1a comisi\u00f3n sin coste extra para ti. Pero confirma siempre los precios y planes actuales en la web oficial, porque cambian.",
    purchaseLinks: [
      {
        label: "Probar Metricool",
        url: "https://f.mtr.cool/laborjatorio"
      }
    ],
    alternativeDetails: [
      {
        name: "OpusClip",
        url: "/herramientas/opusclip",
        description:
          "Hoy tambi\u00e9n me cubre parte de la programaci\u00f3n, as\u00ed que para m\u00ed se ha convertido en una alternativa real en ese terreno."
      },
      {
        name: "Google Analytics",
        url: "https://analytics.google.com/",
        description:
          "Es el est\u00e1ndar para anal\u00edtica web profunda, pero a m\u00ed me resulta demasiado lioso para mirar lo b\u00e1sico que necesito."
      }
    ],
    faqs: [
      {
        question: "\u00bfMetricool sirve como alternativa a Google Analytics?",
        answer:
          "Para m\u00e9tricas sencillas, s\u00ed. Si quieres ver visitas y evoluci\u00f3n sin entrar en un panel complejo, Metricool puede ser mucho m\u00e1s amable. Para anal\u00edtica profunda, Google Analytics sigue siendo otra cosa."
      },
      {
        question: "\u00bfEl plan gratuito de Metricool merece la pena?",
        answer:
          "S\u00ed, sobre todo si tienes una sola marca y un volumen moderado de publicaciones. Para empezar, da bastante de s\u00ed."
      },
      {
        question: "\u00bfPagar\u00eda Metricool hoy?",
        answer:
          "En mi caso concreto, no pagar\u00eda la mensualidad porque tengo una licencia antigua y otra herramienta que ya cubre parte de la programaci\u00f3n. Pero para alguien que empieza de cero y publica mucho, el pago puede tener sentido."
      },
      {
        question: "\u00bfUso mucho las autolistas?",
        answer:
          "No demasiado. S\u00e9 que existen y pueden ser \u00fatiles para republicar contenido que funcion\u00f3, pero yo sigo siendo un poquito anal\u00f3gico para esa parte."
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
    editorialVersion: "3.0",
    status: "imprescindible",
    updatedAt: "2026-06-12",
    publishedAt: "2026-06-08T10:00:00+02:00",
    intro:
      "Empecemos deshaciendo un malentendido muy común. Si alguna vez te han dicho que WordPress es de pago, no: posiblemente hayas mirado WordPress.com. Yo la que utilizo es la punto org, WordPress.org, que es gratuita y abierta. Y es la herramienta sobre la que he construido toda mi web. Ha sido mi fiel compañero durante casi diez años, y siempre la he defendido a muerte.",
    narrativeIntro: [
      "Empecemos deshaciendo un malentendido muy común. Si alguna vez te han dicho que WordPress es de pago, no: posiblemente hayas mirado WordPress.com. Yo la que utilizo es la punto org, WordPress.org, que es gratuita y abierta. Y es la herramienta sobre la que he construido toda mi web. Para que te hagas una idea de lo que la valoro: ha sido mi fiel compañero durante casi diez años, y siempre la he defendido a muerte.",
      "Esta ficha es para profes que se preguntan algo más de fondo que qué CMS uso: por qué deberían montar su propia web en lugar de vivir solo en redes sociales. Te lo cuento desde la experiencia, con una advertencia importante al final, porque internet está cambiando rápido."
    ],
    narrativeSections: [
      {
        title: "Qué es WordPress.org",
        paragraphs: [
          "WordPress.org es una plataforma de código abierto para crear y gestionar tu web. La mejor forma de explicarlo es con una imagen: si tu web es tu casa de internet, hay diferentes formas de fabricarla. Puedes tener casas prefabricadas, con un número de habitaciones ya determinado, o puedes elegir construírtela tú poco a poco, módulo a módulo. WordPress es justo lo segundo: te permite construirte algo a la medida de tus necesidades.",
          "Esa es su gran baza. Puedes elegir el diseño que quieras, ponerle tus cajetillas de suscripción, montar membresías, vender, añadir funciones avanzadas con plugins. Todo lo que se te ocurra que pueda tener una web, lo puedes combinar e introducir en WordPress."
        ],
        actions: [
          {
            label: "Ir a WordPress.org",
            url: "https://wordpress.org"
          }
        ]
      },
      {
        title: "Cómo funciona lo básico",
        paragraphs: [
          "Tiene fama de tener cierta curva de aprendizaje, y algo hay, pero la buena noticia es que tampoco es para tanto, y cada vez menos, porque cada vez es más fácil instalarla automáticamente. Con un hosting adecuado, montarla es cuestión de unos clics.",
          "Mi hosting es Webempresa, que te instala WordPress prácticamente de la mano. A partir de ahí, gestionas todo desde su panel."
        ]
      },
      {
        title: "Mi experiencia: casi diez años y la importancia de tener casa propia",
        paragraphs: [
          "WordPress es la base de mi proyecto desde hace casi diez años, y aquí va la parte que de verdad quiero que te lleves. Antes de tener WordPress, yo solo tenía redes sociales. Y eso tiene un peligro tremendo: si solo estás en redes y no tienes tu propia casa en internet, dependes de algoritmos y de decisiones que no controlas.",
          "Un cambio de las reglas ajenas y te quedas sin tu audiencia de un día para otro. Montarte tu propia casa en internet es muy importante, y WordPress es una excelente forma de hacerlo. Esa web es tuya, vive en tu hosting, y nadie te la puede apagar por un cambio de política.",
          "Para un profe que quiere construir algo a largo plazo, esa diferencia lo es todo."
        ]
      },
      {
        title: "El giro honesto: la IA está cambiando el tablero",
        paragraphs: [
          "Y ahora la parte que no te contaría un folleto de WordPress. Sí, es una opción sólida, pero ten en cuenta que WordPress lleva existiendo cerca de veinte años, e internet está cambiando muy rápido.",
          "Con la llegada de la inteligencia artificial hemos llegado a un punto en el que es posible explicarle a una IA cómo quieres que sea tu web, mandarle pantallazos de referencia de lo que te gusta y lo que no, e ir creándola sobre la marcha.",
          "Te pongo un ejemplo cercano: esta misma web, el Laborjatorio, no está hecha con WordPress, sino con una combinación de GitHub, Vercel e instrucciones a través de Codex. Suena muy marciano todo, lo sé, pero ya te lo contaré otro día. Lo cuento solo para que veas que yo mismo, defensor de WordPress a muerte, estoy explorando otras formas de construir webs."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "El software de WordPress.org es gratuito. Lo que pagas son las piezas que lo rodean: el dominio y el hosting, que son costes inevitables, y a veces algún plugin. Los hay gratuitos y de pago, según lo que necesites.",
          "Es decir, puedes tener una web profesional pagando, como mínimo, solo dominio y hosting."
        ]
      },
      {
        title: "Cuándo merece la pena",
        paragraphs: [
          "Si quieres una casa en internet de verdad tuya, con control total y posibilidad de crecer, vender, membresías, lo que sea, WordPress sigue siendo una apuesta sólida y probadísima.",
          "Si en cambio buscas algo más sencillo y ágil, y no te asusta lo nuevo, hoy quizá también te plantearía montar algo con inteligencia artificial. No hay una única respuesta correcta: depende de cuánto quieras construir y de cuánto quieras complicarte."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "Más allá de la mención general a herramientas de IA para crear webs, no tengo todavía una alternativa concreta que recomendarte por experiencia propia.",
          "De hecho, este mismo Laborjatorio es una de esas alternativas más técnicas. Estoy explorando ese terreno y, cuando tenga algo que pueda contarte de primera mano, lo traeré aquí."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "WordPress.org ha sido mi fiel compañero durante casi diez años y lo he defendido a muerte, y lo sigo haciendo: para montarte tu propia casa en internet, con control y sin depender de los algoritmos de nadie, es una opción sólida, abierta y probada.",
          "Mi único matiz añadido es que internet se mueve rápido y que yo mismo ya estoy mirando qué traen las herramientas de IA. Pero el consejo de fondo no cambia: ten tu propia casa en internet. Lo demás es secundario.",
          "Resumen para profes ocupados: WordPress.org, la gratis, no la .com, es de lo más sólido para tener tu propia web sin depender de redes. Tiene algo de curva, cada vez menos, y hoy conviene echar un ojo también a lo que llega con la IA."
        ]
      }
    ],
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
    purchaseLinks: [
      {
        label: "Ir a WordPress.org",
        url: "https://wordpress.org"
      }
    ],
    relatedLinks: [
      {
        label: "Webempresa",
        url: "/herramientas/webempresa"
      },
      {
        label: "MailPoet",
        url: "/herramientas/mailpoet"
      },
      {
        label: "WooCommerce",
        url: "/herramientas/woocommerce"
      },
      {
        label: "LearnDash",
        url: "/herramientas/learndash"
      }
    ],
    narrativeOutro: ["Enlace oficial: wordpress.org."],
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
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-12",
    publishedAt: "2026-06-06T23:59:00+02:00",
    intro:
      "Toda web necesita un sitio donde vivir, y ese sitio es el hosting. El mío es Webempresa, un hosting español, y ahí es donde tengo alojada mi web y también mis dominios. La verdad es que solo tengo cosas buenas que decir.",
    narrativeIntro: [
      "Toda web necesita un sitio donde vivir, y ese sitio es el hosting. El mío es Webempresa, un hosting español, y ahí es donde tengo alojada mi web y también mi dominio. La verdad es que solo tengo cosas buenas que decir.",
      "Esta ficha es para profes que se preguntan: ¿dónde alojo mi web sin acabar peleándome con soporte en inglés ni con sorpresas en la factura? Te cuento mi experiencia real, lo que pago y a quién se lo recomendaría."
    ],
    narrativeSections: [
      {
        title: "Qué es Webempresa",
        paragraphs: [
          "Webempresa es una empresa española de hosting, alojamiento web, y registro de dominios. En cristiano: es donde guardas tu web para que esté disponible en internet, y donde puedes registrar el nombre de tu dominio, eso de tuweb.com. Lo de que sea española no es un detalle menor, y ahora te cuento por qué."
        ],
        actions: [
          {
            label: "Ver Webempresa",
            url: "https://clientes.webempresa.com/europa/gestion/aff.php?aff=6200"
          }
        ]
      },
      {
        title: "Por qué la elegí, y de dónde venía",
        paragraphs: [
          "Antes usaba otro hosting cuyo nombre, sinceramente, ni recuerdo. Funcionaba bien, pero tuve una mala experiencia con el precio de renovación, de esas que te dejan mal cuerpo. Y eso me empujó a buscar algo distinto.",
          "Con Webempresa estoy contento por varias razones, y la primera es justo esa: son muy honestos con el precio. Tú eliges un plan y no te van a hacer trampas. Al menos yo no me he sentido engañado nunca con el precio, y después de venir de un susto en la renovación, esa tranquilidad vale mucho."
        ]
      },
      {
        title: "El soporte y la facilidad: en español y de la mano",
        paragraphs: [
          "Aquí es donde más se nota que sea una empresa española. El soporte es excelente y en tu idioma: las pocas veces que les he pedido ayuda con algún problema, escribes y en poco tiempo te responden, y comunicarte en español lo hace todo más fácil.",
          "Además, te acompañan desde el principio. El proceso para contratar y configurar es sencillo, y cuando vas a instalar tu WordPress te ayudan a hacerlo desde el primer paso, algo que para alguien sin experiencia técnica es oro. Tienen también una base de documentación enorme, con un montón de artículos que explican cómo funciona todo. Te seré sincero: a veces da pereza ponerse a leerla y, para respuestas rápidas, yo acabo tirando de ChatGPT, pero ahí está si la quieres. Y para los correos de tu dominio tienes un panel bastante visual y nada recargado."
        ],
        actions: [
          {
            label: "Ver planes de Webempresa",
            url: "https://clientes.webempresa.com/europa/gestion/aff.php?aff=6200"
          }
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Estos son mis números reales: pago 19 euros al año por dominio, tengo dos registrados, y 126 euros al año por el hosting, en pago anual.",
          "Sé que a alguien que empieza, soltar 100 y pico euros al año por un hosting le puede parecer mucho, así que te lo pongo en perspectiva, que es como lo veo yo: es la base física de tu negocio. Piensa cuánto te costaría el alquiler de un local en un negocio físico. Pagar poco más de 10 euros al mes por el alojamiento de tu negocio online es, sinceramente, un lujo.",
          "Y un apunte: si estás arrancando, seguro que tienen algún plan un poquito más asequible que el mío. Conviene confirmar los planes actuales en su web, porque estas cosas cambian."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Resumiendo lo bueno: es honesto con el precio, sin trampas ni sustos en la renovación; el soporte en español es rápido y bueno; te acompañan para instalar WordPress y arrancar sin saber; y el panel de correos es visual y sencillo.",
          "¿Y lo malo? Pues mira, desde que estoy con ellos no me he planteado cambiarme a ningún otro, así que no te puedo señalar grandes problemas. El precio es muy similar al de cualquier otro hosting y sé que funcionan bien, conque estoy a gusto. Si le pongo un pero, es que la documentación es tan extensa que da pereza leerla, pero para eso ya tengo mis atajos."
        ]
      },
      {
        title: "Para quién tiene sentido",
        paragraphs: [
          "No te voy a dar una recomendación absoluta, porque hay muchos hostings buenos. Pero si vives en España, échale un vistazo: el soporte en tu idioma y el acompañamiento marcan la diferencia, sobre todo si estás empezando y no quieres pelearte con tecnicismos."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "Vengo de otro hosting, cuyo nombre ni recuerdo, y desde que estoy en Webempresa no he probado otras opciones, así que dejo las alternativas como pendiente en lugar de inventarme comparaciones. Hay muchos hostings solventes, pero yo solo te puedo hablar bien del que uso."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "Webempresa hace su trabajo y me da algo que valoro mucho después de un mal susto con otro proveedor: tranquilidad. Precios honestos, soporte en español y la mano tendida para arrancar. Para mí, la base sobre la que se sostiene todo lo demás.",
          "¿Lo recomiendo? Si estás en España y quieres alojar tu web sin dolores de cabeza, sí, échale un ojo. No es una decisión para angustiarse: es elegir una base fiable y olvidarte.",
          "Resumen para profes ocupados: hosting español, honesto con el precio y con soporte excelente en tu idioma. Ideal si empiezas y no quieres complicaciones."
        ]
      }
    ],
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
    purchaseLinks: [
      {
        label: "Ver Webempresa",
        url: "https://clientes.webempresa.com/europa/gestion/aff.php?aff=6200"
      }
    ],
    relatedLinks: [
      {
        label: "WordPress",
        url: "/herramientas/wordpress"
      },
      {
        label: "ChatGPT",
        url: "/herramientas/chatgpt"
      }
    ],
    narrativeOutro: [
      "Enlace oficial: webempresa.com."
    ],
    cta:
      "Aquí te enseño las herramientas. Lo que hago con ellas está en borjaprofe.com.",
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
    editorialVersion: "3.0",
    status: "imprescindible",
    updatedAt: "2026-06-12",
    intro:
      "Si tienes un podcast o planes de crearlo, necesitas un sitio desde el que subir los episodios y gestionar la publicación. Spotify for Podcasters, lo que antes se llamaba Anchor y que ahora vive bajo Spotify for Creators, es justo eso. Lo uso desde 2022 y para mí es fantástico porque funciona como panel de control del podcast.",
    narrativeIntro: [
      "Si tienes un podcast o planes de crearlo, necesitas un sitio desde el que subir los episodios y repartirlos por las plataformas. Spotify for Podcasters, lo que antes se llamaba Anchor y que hoy vive bajo Spotify for Creators, es justo eso, y es lo que uso desde 2022.",
      "Esta ficha es para profes y creadores que se preguntan dónde subir un podcast para que llegue a la gente sin volverse locos. Mi respuesta lleva años siendo la misma, y encima es gratis."
    ],
    narrativeSections: [
      {
        title: "Qué es Spotify for Podcasters",
        paragraphs: [
          "Es la plataforma de Spotify para creadores de podcast. Desde ahí subes tus episodios, ves estadísticas de tus oyentes y conectas con el resto de plataformas de podcasting. En la práctica, es tu centro de control: no vas a pasar mucho tiempo en él, pero es una pieza importante.",
          "Un apunte de nombres, porque aquí ha habido lío: antes se llamaba Anchor, luego Spotify for Podcasters, y ahora la capa oficial de marca es Spotify for Creators. La herramienta de fondo es la misma idea."
        ],
        actions: [
          {
            label: "Abrir Spotify for Podcasters",
            url: "https://podcasters.spotify.com/"
          }
        ]
      },
      {
        title: "Cómo funciona lo básico",
        paragraphs: [
          "El flujo es directo. Subes tu episodio, en audio o en vídeo, consultas las estadísticas de tus oyentes y conectas el resto de plataformas para que el podcast se distribuya también fuera de Spotify.",
          "Aquí va el matiz importante: si alojas el podcast ahí, en Spotify se publica automático. Para Apple Podcasts, iVoox y demás, tienes que activar el RSS y configurarlas la primera vez. Eso puede llevarte una hora o un par de horas al principio, pero luego los episodios nuevos se actualizan a través de ese feed y te olvidas.",
          "Otro detalle útil: permite subir episodios en vídeo, y en las plataformas que no admiten vídeo se sirven como audio. Así cubres ambos mundos desde un mismo sitio."
        ]
      },
      {
        title: "Cómo lo uso yo",
        paragraphs: [
          "Te cuento mi flujo real, que para eso está el Laborjatorio. No grabo dentro de Spotify for Podcasters, llego ahí con el episodio ya hecho. Primero escribo el guion en Notion, luego grabo, el audio con Audacity o el vídeo con DaVinci Resolve, y por último subo el resultado a Spotify for Podcasters, desde donde se reparte.",
          "Así es como saco adelante mis podcasts ¡Palabras! y Gramaticón: el trabajo creativo pasa fuera, y esta herramienta es la última pieza, la que publica y distribuye."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo que más me gusta es que te resuelve la publicación desde un único panel: episodios, estadísticas y distribución en un mismo sitio. También suma poder subir en vídeo y no quedarte fuera de las plataformas que solo aceptan audio. Y, por supuesto, que sea gratis.",
          "¿Y lo que menos? Para el uso que le doy no he encontrado limitaciones importantes. Lo único un poco pesado es la configuración inicial de las plataformas externas y el RSS. Una vez hecho, te olvidas."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Gratis, sin planes de pago conocidos para este uso. Y si te preguntas dónde está la trampa, no la veo como trampa sino como lógica de plataforma: a Spotify le interesa tener a muchos creadores subiendo contenido para alimentar su ecosistema.",
          "A ti, como creador, el panel te sale gratis. A mí me parece un trato bastante razonable."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "Spotify for Podcasters hace una cosa y la hace muy bien: ser el centro desde el que subes y repartes tu podcast. Es gratis, es sencillo y, salvo la pereza de la configuración inicial, no me ha dado problemas en años.",
          "¿Lo recomiendo? Sin dudarlo, para cualquiera que tenga o quiera tener un podcast. No es la parte glamurosa del proceso, porque el alma está en el contenido, pero sí es la pieza que hace que ese contenido llegue a la gente.",
          "Resumen para profes y creadores ocupados: gratis y sencillo. Subes una vez, configuras bien el arranque, y desde ahí tu podcast sale al mundo sin demasiada fricción."
        ]
      }
    ],
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
    purchaseLinks: [
      {
        label: "Abrir Spotify for Podcasters",
        url: "https://podcasters.spotify.com/"
      }
    ],
    relatedLinks: [
      {
        label: "Audacity",
        url: "/herramientas/audacity"
      },
      {
        label: "DaVinci Resolve",
        url: "/herramientas/davinci-resolve"
      },
      {
        label: "Notion",
        url: "/herramientas/notion"
      },
      {
        label: "HappyScribe",
        url: "/herramientas/happyscribe"
      }
    ],
    narrativeOutro: ["Enlace oficial: podcasters.spotify.com."],
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
    affiliateUrl: "https://amzn.to/4eqeGoy",
    hasAffiliate: true,
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
      { label: "Afiliación", value: "Sí, Amazon" }
    ],
    priceNote:
      "El enlace de Amazon corresponde al standing desk Maidesite. No fijo un precio aquí porque depende del modelo, país y tienda.",
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
      "La silla de malla ligera y fresca que uso para dar clases, con el protector de suelo que evita disgustos en la madera.",
    category: "Equipo físico",
    subcategories: ["ergonomía", "productividad", "hardware", "silla", "teletrabajo"],
    pricing: "pago-unico",
    officialUrl: "https://www.amazon.es/",
    affiliateUrl: "https://amzn.to/4vJQDa0",
    hasAffiliate: true,
    myUseCase:
      "La uso a diario para dar clases y trabajar desde casa. Y debajo tengo un protector de suelo de PVC porque las ruedas y la madera no siempre se llevan bien.",
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
      "Sobre alfombra no desliza demasiado bien."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-11",
    intro:
      "Cuando empecé a dar clases online en Nicaragua, usaba una silla de plástico cutre, no muy diferente de la de la portada del último disco de Bad Bunny. Para salir del paso valía, pero en cuanto volví a España y quise montarme un setup más permanente, di el salto a una silla de oficina de malla de las de verdad. No es la silla de mis sueños, pero es la que uso cada día y me sirve.",
    narrativeIntro: [
      "Cuando empecé a dar clases online en Nicaragua, usaba una silla de plástico cutre, no muy diferente de la de la portada del último disco de Bad Bunny. Para salir del paso valía, pero en cuanto volví a España y quise montarme un setup más permanente, di el salto a una silla de oficina de malla de las de verdad. No es la silla de mis sueños, pero es la que uso cada día y me sirve.",
      "Esta ficha es para profes que se preguntan: ¿qué silla compro para pasar horas dando clase sin arruinarme ni acabar con la espalda pegada? Y, de paso, te aviso de algo que casi nadie te cuenta: el problema que estas sillas le pueden hacer a tu suelo."
    ],
    narrativeSections: [
      {
        title: "Qué es y por qué la elegí",
        paragraphs: [
          "Es una silla de oficina giratoria, con ruedas, regulable en altura y con respaldo y asiento de malla transpirable. Nada de gama alta, no puedo decirte que sea de una calidad excelente, porque hay otras de gama mucho más alta. Pero es cómoda y, sobre todo, es fresca. No te pega la espalda en verano, que para quien pasa horas sentado es un detalle enorme.",
          "Para mí era importante que fuera ligera. No quería el típico trasto pesado como el que tenía en casa de mis padres. Esta la mueves con un dedo, la giras, ajustas la altura y listo. Eso sí, te tocará montarla, aunque no tiene mayor complicación: un rato de tornillos y a rodar."
        ],
        actions: [
          {
            label: "Ver silla en Amazon",
            url: "https://amzn.to/4vJQDa0"
          }
        ]
      },
      {
        title: "Mi experiencia",
        paragraphs: [
          "La uso a diario y cumple. La mejor prueba de que está bien es algo que ha pasado con tantos otros objetos de mi setup: mi novia la probó y terminó comprándose una igual. Cuando alguien que te ve usar algo va y se lo compra, mala no es.",
          "No te voy a vender humo. No te digo que compres esta silla y vayas a llorar de felicidad. Está bien y a mí me sirve, y para el precio que tiene me parece una compra muy sensata."
        ]
      },
      {
        title: "El aviso que casi nadie te da: cuidado con el suelo",
        paragraphs: [
          "Aquí viene lo importante, y es justo lo que no te cuentan en la descripción del producto: estas sillas con ruedas y tu suelo no siempre se llevan bien. Si tienes alfombra, no va a deslizar demasiado bien, porque las ruedas y la alfombra no son muy amigas. Y si tienes suelo de madera, cuidadito, porque puede dejar marcas.",
          "A mí esto me llevó a comprar un complemento casi obligatorio: un protector de suelo de PVC transparente, antideslizante, de 120x90 cm. Es lo más feo que existe, te aviso, pero prefiero tener una superficie antiestética debajo de los pies que rayar la madera de casa. Si vas a poner una silla con ruedas sobre parqué o tarima, este protector, o cualquiera equivalente, te va a ahorrar disgustos. No es glamuroso, pero hace su trabajo."
        ],
        actions: [
          {
            label: "Ver protector de suelo en Amazon",
            url: "https://amzn.to/4uw6DeQ"
          }
        ]
      },
      {
        title: "Precio",
        paragraphs: [
          "La silla ronda los 50-60 euros. El protector de suelo es un extra barato. Ambos se compran en Amazon."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo que más me gusta es que es fresca: la malla transpirable evita el sudor de espalda en verano, que para quien pasa horas sentado es un puntazo. Además es ligera y ajustable, la mueves, la giras y la pones a tu altura sin pelearte, el montaje es sencillo y el precio, de 50-60 euros, la convierte en una silla digna para trabajar sin arruinarte.",
          "¿Y lo que menos? Pues que no es premium. Es cómoda y cumple, pero hay sillas de gama alta muy superiores si tu prioridad es la ergonomía seria y el presupuesto da para ello. Y el tema del suelo que ya te he contado, que entre la alfombra y la madera casi te obliga a sumar el protector aparte."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "No he probado otras sillas para compararlas con esta, así que dejo las alternativas como pendiente en lugar de inventarme una comparativa. Si en algún momento pruebo otra, lo contaré.",
          "Lo que sí te digo es que, si vas a pasar muchas horas sentado y te lo puedes permitir, mirar una silla ergonómica de gama más alta es una inversión razonable. Esta es la opción sensata y económica, no la definitiva."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "Esta silla de malla no te va a cambiar la vida, pero por 50-60 euros es una compra muy sensata para dar clases o teletrabajar: ligera, fresca y ajustable. Eso sí, no te olvides del protector de suelo si tienes madera, porque ahí sí te puede dar un disgusto.",
          "Resumen para profes ocupados: silla fresca, ligera y barata que cumple. Suma el protector de suelo si tienes parqué y no quieres rayarlo."
        ]
      }
    ],
    whatItDoes:
      "Es una silla de oficina giratoria, con ruedas, regulable en altura y con respaldo y asiento de malla transpirable. No puedo decirte que sea de una calidad excelente, porque hay otras de gama mucho más alta, pero es cómoda y, sobre todo, fresca. No te deja la espalda pegada en verano, que para quien pasa horas sentado es un detalle enorme. Y aquí entra también el otro protagonista de esta ficha: el protector de suelo de PVC transparente y antideslizante que pongo debajo para no rayar la madera.",
    howIUseIt:
      "La uso a diario para dar clases, escribir, preparar materiales y trabajar en el ordenador. Para mí era importante que fuera ligera. No quería el típico trasto pesado como el que tenía en casa de mis padres. Esta la mueves con un dedo, la giras, ajustas la altura y listo. La mejor prueba de que cumple es que mi novia la probó y terminó comprándose una igual. No te voy a vender humo: no es una silla premium ni una epifanía ergonómica, pero para el precio que tiene me parece una compra muy sensata. Y debajo tengo el protector de suelo de 120x90 cm: es feo, sí, pero prefiero una superficie antiestética bajo los pies antes que rayar la madera de casa.",
    teacherUseCases: [
      "Dar clases online durante varias horas con una silla cómoda y fresca.",
      "Teletrabajar sin gastar en una silla premium.",
      "Moverte con facilidad en un puesto de trabajo pequeño.",
      "Proteger parqué o tarima de las ruedas de la silla.",
      "Montar un setup de profe online sensato sin convertirlo en showroom."
    ],
    honestVerdict:
      "Esta silla de malla no te va a cambiar la vida, pero por 50-60 euros me parece una compra muy sensata para dar clases o teletrabajar: ligera, fresca y ajustable. Eso sí, no te olvides del protector de suelo si tienes madera, porque ahí sí te puede dar un disgusto. Es la opción sensata y económica, no la silla definitiva.",
    importantNotice:
      "Aquí está el aviso que casi nadie te da: si tienes suelo de madera, cuidadito, porque las ruedas pueden dejar marcas. Y si tienes alfombra, probablemente no va a deslizar demasiado bien. El protector de suelo no es bonito, pero puede ahorrarte un disgusto bastante más feo.",
    metrics: [
      { label: "Precio silla", value: "50-60 €" },
      { label: "Protector", value: "120x90 cm" },
      { label: "Material clave", value: "Malla" }
    ],
    priceRows: [
      { label: "Silla", value: "50-60 € aprox." },
      { label: "Protector de suelo", value: "Extra barato, PVC transparente 120x90 cm" },
      { label: "Dónde", value: "Amazon" },
      { label: "Afiliación", value: "Sí, Amazon" }
    ],
    priceNote:
      "La silla ronda los 50-60 euros y el protector de suelo es un extra barato. Ya he dejado enlazados los dos productos en Amazon: la silla por un lado y el protector por otro, para que no tengas que buscarlos.",
    purchaseLinks: [
      {
        label: "Ver silla en Amazon",
        url: "https://amzn.to/4vJQDa0"
      },
      {
        label: "Ver protector de suelo en Amazon",
        url: "https://amzn.to/4uw6DeQ"
      }
    ],
    relatedLinks: [
      {
        label: "Standing Desk Maidesite",
        url: "/herramientas/standing-desk-maidesite"
      },
      {
        label: "Ventilador recargable silencioso",
        url: "/herramientas/ventilador-recargable-silencioso"
      },
      {
        label: "Inphic PM6",
        url: "/herramientas/inphic-pm6"
      }
    ],
    narrativeOutro: [
      "Si te interesa montar el mismo dúo, te dejo enlazados la silla y el protector de suelo por separado para que veas exactamente cuáles son."
    ],
    cta:
      "Aquí te enseño las herramientas. Lo que hago con ellas está en borjaprofe.com."
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
    officialUrl: "https://www.amazon.es/",
    affiliateUrl: "https://amzn.to/4as6XDV",
    hasAffiliate: true,
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
      "No tiene mucho misterio: es un ventilador pequeño con varias velocidades.",
      "La marca no tiene una página oficial clara de referencia."
    ],
    alternatives: [],
    rating: 4,
    difficulty: "facil",
    hideDifficulty: true,
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
      { label: "Afiliación", value: "Sí, Amazon" }
    ],
    priceNote:
      "El enlace de Amazon corresponde al ventilador de escritorio silencioso, recargable, pequeño y con potencia ajustable que uso.",
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
    officialUrl: "https://www.amazon.es/",
    affiliateUrl: "https://amzn.to/4o9rJhj",
    hasAffiliate: true,
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
      "Hay que cuidar el agarre para no marcar el escritorio."
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
      { label: "Afiliación", value: "Sí, Amazon" }
    ],
    priceNote:
      "El enlace de Amazon corresponde al filtro antipop InnoGear de doble capa. La referencia útil es esa: filtro antipop de doble capa para micrófono de estudio.",
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
    title: "Logitech C920: la webcam que llevo m\u00e1s de 10 a\u00f1os usando (y por qu\u00e9 no la cambio)",
    metaDescription:
      "Llevo m\u00e1s de diez a\u00f1os con la misma webcam, la Logitech C920. No es la mejor en calidad, pero es indestructible y me sobra para clases y entrevistas. Te cuento mi experiencia real.",
    keywords: [
      "Logitech C920",
      "webcam para clases online",
      "webcam para dar clases",
      "mejor webcam duradera",
      "webcam 1080p para profesores",
      "c\u00e1mara para videollamadas"
    ],
    tagline:
      "La webcam que sigo usando m\u00e1s de diez a\u00f1os despu\u00e9s porque cumple, aguanta y no me da motivos para cambiarla.",
    category: "Equipo f\u00edsico",
    subcategories: ["v\u00eddeo", "comunicaci\u00f3n", "formaci\u00f3n", "contenido", "webcam", "clases online"],
    pricing: "pago-unico",
    officialUrl: "https://www.logitech.com/es-es/shop/p/c920-pro-hd-webcam.960-001055",
    affiliateUrl: "https://amzn.to/4e2eGd0",
    hasAffiliate: true,
    myUseCase:
      "La uso desde 2016 como c\u00e1mara principal para clases online, videollamadas y entrevistas. Para entrevistas suelo acompa\u00f1arla de un micr\u00f3fono externo.",
    bestFor: [
      "Profes online que quieren una webcam fiable para dar clase",
      "Quien busca calidad suficiente sin gastar una fortuna",
      "Profes que valoran m\u00e1s la durabilidad que tener la \u00faltima c\u00e1mara del mercado",
      "Quien quiere una webcam USB sencilla para clases, llamadas y entrevistas"
    ],
    notFor: [
      "Quien busca la mejor calidad de imagen posible hoy",
      "Quien quiere una c\u00e1mara 4K o con est\u00e9tica de producci\u00f3n avanzada",
      "Quien necesita resolver problemas de conexi\u00f3n: una webcam no arregla el ancho de banda",
      "Quien espera buen audio solo con el micr\u00f3fono integrado de la c\u00e1mara"
    ],
    pros: [
      "Me ha durado m\u00e1s de diez a\u00f1os funcionando a diario.",
      "La calidad 1080p es suficiente para clases, videollamadas y entrevistas.",
      "Se conecta por USB y no exige complicarse.",
      "El software de Logitech permite ajustar brillo y otros par\u00e1metros.",
      "Es una compra razonable si priorizas fiabilidad y duraci\u00f3n."
    ],
    cons: [
      "Hoy hay webcams con mejor calidad de imagen.",
      "El conector USB puede acusar el paso de los a\u00f1os.",
      "Me dio una \u00e9poca de desconexiones por desgaste del cable o conector.",
      "El audio conviene resolverlo con un micr\u00f3fono externo si vas a grabar o hacer entrevistas."
    ],
    alternatives: [],
    rating: 5,
    difficulty: "facil",
    editorialVersion: "3.0",
    status: "imprescindible",
    updatedAt: "2026-06-13",
    intro:
      "Te voy a resumir mi relaci\u00f3n con esta webcam en una frase que dije una vez y que sigo defendiendo: cuando haya un apocalipsis nuclear van a sobrevivir dos cosas, las cucarachas y mi Logitech.",
    narrativeIntro: [
      "Te voy a resumir mi relaci\u00f3n con esta webcam en una frase que dije una vez y que sigo defendiendo: cuando haya un apocalipsis nuclear van a sobrevivir dos cosas, las cucarachas y mi Logitech. La Logitech C920 la compr\u00e9 en 2016 y, m\u00e1s de diez a\u00f1os despu\u00e9s, sigue siendo la c\u00e1mara con la que doy mis clases y hago mis entrevistas. Esta ficha no va de la mejor webcam del mundo. Va de la m\u00e1s resistente que he tenido.",
      "Esta ficha es para profes que se preguntan qu\u00e9 c\u00e1mara comprar para dar clases sin gastarse un dineral ni cambiarla cada dos a\u00f1os. Mi respuesta es poco moderna, pero muy honesta."
    ],
    narrativeSections: [
      {
        title: "Qu\u00e9 es la Logitech C920",
        paragraphs: [
          "Es una webcam externa que graba en 1080p, sencilla de poner y de usar. La conectas por USB, instalas su software y a funcionar.",
          "No tiene m\u00e1s misterio, y precisamente esa sencillez es parte de su gracia."
        ],
        actions: [
          {
            label: "Ver la Logitech C920 en Amazon",
            url: "https://amzn.to/4e2eGd0"
          }
        ]
      },
      {
        title: "C\u00f3mo y desde cu\u00e1ndo la uso",
        paragraphs: [
          "La compr\u00e9 aproximadamente un a\u00f1o despu\u00e9s de empezar a dar clases online, estando en Nicaragua. Antes de tenerla, las primeras clases las daba con la c\u00e1mara del port\u00e1til, y me da verg\u00fcenza solo de pensarlo. La C920 fue mi primer salto a algo decente.",
          "Desde entonces ha aguantado de todo: miles de clases, viajes de un lado al otro del oc\u00e9ano y hasta da\u00f1os f\u00edsicos, porque en alg\u00fan momento un conejo le peg\u00f3 un mordisco al cable. Y sigue ah\u00ed, dando guerra.",
          "Para entrevistas, eso s\u00ed, a veces le sumo un micr\u00f3fono externo como mi [Audio-Technica ATR2100x-USB](/herramientas/audio-technica-atr2100x-usb), pero la imagen sigue saliendo de esta veterana."
        ]
      },
      {
        title: "Calidad: suficiente, que no es poco",
        paragraphs: [
          "Voy a ser justo. Si la comparas con cualquier otra webcam actual, estoy seguro de que habr\u00e1 opciones objetivamente mejores que la m\u00eda. La tecnolog\u00eda ha avanzado y hoy hay c\u00e1maras con m\u00e1s calidad. Pero aqu\u00ed est\u00e1 la clave: para mi caso, es suficiente. Para dar clases y hacer entrevistas, el 1080p cumple de sobra.",
          "Y un apunte importante que mucha gente no tiene en cuenta: la calidad que se ve en una videollamada no depende solo de la c\u00e1mara. Si tienes mala conexi\u00f3n, posiblemente te vean borroso, pero eso no es por la c\u00e1mara en s\u00ed. Antes de culpar al equipo, mira la conexi\u00f3n.",
          "Por cierto, la c\u00e1mara viene con un software que se actualiza y que te permite ir ajustando cosas como el brillo y otros factores, as\u00ed que tienes margen para dejar la imagen a tu gusto."
        ]
      },
      {
        title: "La durabilidad y el efecto Lindy",
        paragraphs: [
          "Si la mantengo no es por cabezoner\u00eda, es por estrategia. Hay un concepto, el efecto Lindy, que dice que aquello que ha durado mucho tiempo probablemente dure todav\u00eda m\u00e1s.",
          "Pues esto es justo eso: la Logitech me ha durado diez a\u00f1os, estoy bastante convencido de que podr\u00e1 aguantar otros diez, y estoy contento con su calidad. No he probado ninguna alternativa, sencillamente porque lo que m\u00e1s me gusta de ella es precisamente su durabilidad, y no quiero renunciar a eso por unos p\u00edxeles de m\u00e1s."
        ],
        actions: [
          {
            label: "Comprar la Logitech C920",
            url: "https://amzn.to/4e2eGd0"
          }
        ]
      },
      {
        title: "Lo que menos me gusta",
        paragraphs: [
          "Para que veas que no te vendo humo, s\u00ed tuvo su momento delicado. Hubo una \u00e9poca en la que de repente se desconectaba sola, por el desgaste del conector USB. La buena noticia es que se solucion\u00f3 m\u00e1gicamente y no he vuelto a tener problemas.",
          "El truco que aprend\u00ed es sencillo: tienes que encontrar la forma de que el cable se mueva lo menos posible una vez conectada. Si la dejas quieta, no da guerra.",
          "Y la otra pega, que ya te he contado, es que hoy hay webcams con mejor calidad de imagen. Si para ti la calidad es la prioridad absoluta, lo m\u00edo no te servir\u00e1. Si lo que buscas es algo que cumpla y no muera nunca, atenci\u00f3n a esta."
        ]
      },
      {
        title: "Precio",
        paragraphs: [
          "No recuerdo el precio exacto al que la compr\u00e9. Para mi bolsillo de aquel entonces, en Nicaragua, fue una compra cara, aunque no exagerada. Hoy es una webcam con un precio moderado y muy razonable para lo que ofrece y, sobre todo, para lo que dura.",
          "Y si te animas a comprarla, puedes hacerlo desde mi enlace de afiliado de Amazon: a ti te cuesta exactamente lo mismo y a m\u00ed me cae una peque\u00f1a comisi\u00f3n que ayuda a mantener el Laborjatorio. Como siempre con Amazon, el precio y la disponibilidad pueden cambiar."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "No he probado otras webcams, porque mi prioridad es la durabilidad y esta no me ha dado motivos para cambiar. As\u00ed que dejo las alternativas como pendiente en lugar de inventarme comparaciones.",
          "Lo \u00fanico que te digo es que hoy las hay con mejor imagen, por si ese es tu criterio principal."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "La Logitech C920 no es la webcam con mejor calidad que puedes comprar hoy, y no te voy a decir lo contrario. Pero es, con diferencia, la m\u00e1s resistente que he tenido, y su 1080p me sobra para dar clases y hacer entrevistas.",
          "Por durabilidad, por relaci\u00f3n calidad-precio y por las pocas alegr\u00edas negativas que me ha dado en diez a\u00f1os, para m\u00ed es una compra redonda.",
          "Si priorizas que algo cumpla y te dure media vida, la recomiendo sin dudarlo. Si lo tuyo es la m\u00e1xima calidad de imagen, mira opciones m\u00e1s nuevas. Yo, mientras siga viva, no la cambio.",
          "Resumen para profes ocupados: webcam 1080p indestructible, suficiente para clases y entrevistas. No es la mejor en calidad, pero le sobra durabilidad. Cuida que el cable no se mueva y listo."
        ]
      }
    ],
    whatItDoes:
      "La Logitech C920 es una webcam externa USB para clases, videollamadas y entrevistas. Graba y transmite en Full HD 1080p y no tiene m\u00e1s misterio que conectarla y usarla.",
    howIUseIt:
      "La compr\u00e9 un a\u00f1o despu\u00e9s de empezar a dar clases online y desde entonces la uso para clases, videollamadas y entrevistas. Para entrevistas le sumo un micr\u00f3fono externo, pero la imagen sigue saliendo de ella.",
    teacherUseCases: [
      "Dar clases online con una imagen m\u00e1s limpia que la c\u00e1mara del port\u00e1til.",
      "Hacer videollamadas profesionales con estudiantes o clientes.",
      "Grabar entrevistas sencillas acompa\u00f1\u00e1ndola de un micr\u00f3fono externo.",
      "Tener una c\u00e1mara USB fiable para trabajar durante a\u00f1os.",
      "Evitar cambiar de webcam cada dos o tres temporadas."
    ],
    honestVerdict:
      "La Logitech C920 no es la webcam que elegir\u00edas si buscas la mejor imagen posible hoy. Pero si quieres una c\u00e1mara que d\u00e9 buena calidad para clases y entrevistas, que se enchufe sin drama y que te dure media vida, es dif\u00edcil discutir con una webcam que lleva m\u00e1s de diez a\u00f1os aguant\u00e1ndome el ritmo.",
    importantNotice:
      "Esta ficha incluye enlace de afiliado de Amazon. Si compras desde \u00e9l, a ti te cuesta lo mismo y a m\u00ed me llega una peque\u00f1a comisi\u00f3n. Y recuerda: si te ven borroso en videollamada, antes de culpar a la webcam revisa tu conexi\u00f3n.",
    metrics: [
      { label: "Uso desde", value: "2016" },
      { label: "Resoluci\u00f3n", value: "1080p" },
      { label: "Estado", value: "Imprescindible" }
    ],
    priceRows: [
      { label: "Tipo de compra", value: "Pago \u00fanico" },
      { label: "Precio actual", value: "Variable seg\u00fan tienda" },
      { label: "Afiliaci\u00f3n", value: "S\u00ed, Amazon" }
    ],
    priceNote:
      "El precio exacto lo dejo abierto porque cambia seg\u00fan el momento. Si te cuadra, el enlace principal de esta ficha es mi enlace de afiliado de Amazon.",
    purchaseLinks: [
      {
        label: "Ver Logitech C920 en Amazon",
        url: "https://amzn.to/4e2eGd0"
      }
    ],
    faqs: [
      {
        question: "\u00bfLa calidad de imagen es buena para dar clases?",
        answer:
          "Para clases y entrevistas, s\u00ed, el 1080p cumple de sobra. Hay c\u00e1maras mejores hoy, pero para ense\u00f1ar online esto basta. Y recuerda que parte de lo borroso suele venir de la conexi\u00f3n, no de la c\u00e1mara."
      },
      {
        question: "\u00bfQu\u00e9 hago si se desconecta sola?",
        answer:
          "A m\u00ed me pas\u00f3 por el desgaste del USB y se arregl\u00f3 solo. El truco es colocar el cable de forma que se mueva lo menos posible una vez conectada."
      },
      {
        question: "\u00bfNecesito un micr\u00f3fono aparte?",
        answer:
          "Para clases normales, la c\u00e1mara te vale. Para entrevistas o contenido donde el audio importe m\u00e1s, yo le sumo un micr\u00f3fono externo."
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
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-12",
    intro:
      "En el Laborjatorio no todo son micrófonos y plugins. Parte de hacer bien este trabajo es cuidar la cabeza del que lo hace, y para eso uso Petit BamBou, una app de meditación que tengo metida en la rutina. No te va a editar un vídeo ni a montarte una web, pero te ayuda a llegar a la clase con la cabeza en su sitio. No te voy a vender milagros: te cuento simplemente qué uso yo y por qué me aporta calma.",
    narrativeIntro: [
      "En el Laborjatorio no todo son micrófonos y plugins. Parte de hacer bien este trabajo es cuidar la cabeza del que lo hace, y para eso uso Petit BamBou, una app de meditación que tengo metida en la rutina. No te va a editar un vídeo ni a montarte una web, pero te ayuda a llegar a la clase con la cabeza en su sitio.",
      "Esta ficha es para profes que se preguntan cómo desconectar un poco entre tanta pantalla. No te voy a vender milagros, te cuento simplemente qué uso yo y por qué me aporta calma."
    ],
    narrativeSections: [
      {
        title: "Qué es Petit BamBou",
        paragraphs: [
          "Petit BamBou es una aplicación de meditación. Cada día te sugiere una meditación diaria, pero además tiene un catálogo amplio con planes para temas concretos: dormir, relaciones familiares, autohipnosis y más.",
          "Tú vas a tu ritmo, puedes seguir la del día o explorar lo que te apetezca del catálogo."
        ],
        actions: [
          {
            label: "Ver Petit BamBou",
            url: "https://www.petitbambou.com/"
          }
        ]
      },
      {
        title: "Cómo la uso yo",
        paragraphs: [
          "Te cuento mi uso real, sin adornos. Sobre todo tiro de la meditación diaria: generalmente voy con la del día y punto, que es lo que mantengo como hábito sin tener que decidir nada. De vez en cuando me meto en el catálogo, y he usado bastante los planes de temas concretos, como el de relaciones familiares. La autohipnosis, por ejemplo, la tengo pendiente.",
          "Pero mi descubrimiento reciente, y lo que más me ha enganchado, es la meditación libre. Esta está muy chula: mientras salgo a pasear con mi perrita Duna, me pongo un plan de, por ejemplo, ocho minutos, con un sonido rítmico para ajustar las respiraciones. Voy respirando al ritmo de esos sonidos y me relaja mogollón.",
          "Porque meditar no tiene por qué ser sentarse quieto en una habitación. También puede ser caminar y respirar."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo que más valoro es lo más simple: me aporta calma, me transmite buen rollo y me deja más tranquilo. La meditación diaria me quita la pereza de decidir qué hacer, la meditación libre con sonidos es perfecta para combinar con un paseo, y el catálogo es lo bastante variado como para no aburrirme con lo mismo.",
          "¿Y lo que menos? No puedo hablarte de limitaciones ni de problemas. Para el uso que le doy, no me he topado con nada que me moleste. No es que sea perfecta y yo lo sepa todo de ella, es que le pido una cosa muy concreta, ayudarme a parar y respirar, y eso lo cumple."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Lo que yo pago son 50 euros al año. También existe la opción de acceso de por vida por 200 euros. Y me suena que en algún momento pillé alguna oferta, no sé si por ser la primera vez te dan un cupón o algo así, conque echa un ojo por si hay promoción al empezar.",
          "¿Anual o vitalicio? Es una cuenta sencilla. Si crees que vas a seguir meditando muchos años, el vitalicio se amortiza. Si todavía estás probando si el hábito te cuaja, mejor el anual. Yo, de momento, voy con el anual."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "Petit BamBou no es una herramienta de trabajo al uso, y por eso me parece importante que esté aquí: cuidar tu cabeza también forma parte de sostener un proyecto a largo plazo. A mí me da calma, la tengo integrada en el día a día y la combinación de meditar paseando con Duna me ha conquistado.",
          "¿La recomiendo? Como apoyo para parar y respirar, sí. No esperes magia: espera una herramienta sencilla que, si la usas, te sienta bien.",
          "Resumen para profes ocupados: no edita vídeos ni vende cursos, pero te ayuda a llegar entero al final del día. Meditación diaria sencilla y una modalidad libre estupenda para pasear."
        ]
      }
    ],
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
      { label: "Plan anual", value: "50 €/año en mi caso" },
      { label: "Acceso de por vida", value: "200 €" },
      { label: "Afiliación", value: "No" }
    ],
    priceNote:
      "Yo tengo como referencia 50 euros al año y un vitalicio de 200 euros. Aun así, conviene mirar el precio actual antes de suscribirte, porque puede variar según plataforma o promoción.",
    purchaseLinks: [
      {
        label: "Ver Petit BamBou",
        url: "https://www.petitbambou.com/"
      }
    ],
    relatedLinks: [
      {
        label: "Standing Desk Maidesite",
        url: "/herramientas/standing-desk-maidesite"
      },
      {
        label: "Ventilador recargable y silencioso",
        url: "/herramientas/ventilador-recargable-silencioso"
      },
      {
        label: "f.lux",
        url: "/herramientas/f-lux"
      }
    ],
    narrativeOutro: ["Enlace oficial: petitbambou.com."],
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
    editorialVersion: "3.0",
    status: "opcional",
    updatedAt: "2026-06-12",
    publishedAt: "2026-06-07T12:30:00+02:00",
    intro:
      "f.lux es una herramientita pequeña, muy chula y que, te confieso, no uso tanto como debería. Su misión es sencilla: reducir la fatiga visual que te provoca la luz de la pantalla cuando trabajas hasta tarde. Profe, ya sabes que hay que cuidar la vista, y esta es de las formas más fáciles, y más baratas, porque es gratis, de empezar a hacerlo.",
    narrativeIntro: [
      "f.lux es una herramientita pequeña, muy chula y que, te confieso, no uso tanto como debería. Su misión es sencilla: reducir la fatiga visual que te provoca la luz de la pantalla cuando trabajas hasta tarde. Profe, ya sabes que hay que cuidar la vista, y esta es de las formas más fáciles, y más baratas, porque es gratis, de empezar a hacerlo.",
      "Si pasas muchas horas delante del ordenador, sobre todo de noche o en esos inviernos en que la luz natural se va prontísimo, sigue leyendo."
    ],
    narrativeSections: [
      {
        title: "Qué hace y por qué",
        paragraphs: [
          "Lo que hace f.lux es ajustar automáticamente la temperatura de color de tu pantalla según la luz que hay fuera y el momento del año. La idea va por el rollo de los ritmos circadianos: a los humanos nos sienta bien la luz cálida, la del fuego, la luz rojiza, cuando cae el día, mientras que la luz fría y azulada de las pantallas nos espabila justo cuando el cuerpo querría ir bajando el ritmo.",
          "Así que la herramienta sigue el momento del año y el tipo de luz que toca, e intenta reproducirlo en tu monitor: según va anocheciendo, la pantalla se vuelve más amarillenta. Es bueno para tus ojos, aunque, ya te aviso, no siempre lo es para la estética, y ahí está su única trampa."
        ],
        actions: [
          {
            label: "Ver f.lux",
            url: "https://justgetflux.com/"
          }
        ]
      },
      {
        title: "Cómo la uso y cuándo la apago",
        paragraphs: [
          "La uso sobre todo en horarios nocturnos y entre semana, cuando trabajo hasta tarde o cuando, en invierno, la luz empieza a caer a media tarde. En esos ratos, esa luz cálida descansa bastante la vista. La tengo siempre ahí, como un iconito en la barra de herramientas del escritorio, lista para activarla y desactivarla cuando me apetece.",
          "¿Y cuándo la apago? Justo cuando el tono amarillo me molesta para lo que estoy haciendo. Estar viendo Stranger Things en tonos sepias, pues como que no, y para jugar a videojuegos, lo mismo. Te confieso que apagarla para el ocio es malísimo para mi fatiga visual, es precisamente cuando llevo horas de pantalla acumuladas, pero hay momentos en que la estética manda. Ese pequeño tira y afloja entre cuidar la vista y ver bien los colores es, en el fondo, lo único que tienes que negociar con esta herramienta."
        ]
      },
      {
        title: "Por qué deberías instalarla",
        paragraphs: [
          "No le voy a buscar tres pies al gato: f.lux es gratis, se aplica sola y, una vez instalada, no tienes que tocar nada. Para algo que te cuida la vista en segundo plano, eso es exactamente lo que quieres. La instalas, te aparece el iconito y te olvidas. Ella sola va calentando la pantalla a medida que cae la tarde.",
          "Por eso se la recomendaría sin pensarlo a cualquier profe que trabaje mucho de noche o que viva donde el invierno se traga la luz pronto. Realmente no cuesta nada y se aplica automáticamente, así que no instalarla es casi pereza. Cuida esos ojos, profe."
        ],
        actions: [
          {
            label: "Instalar f.lux",
            url: "https://justgetflux.com/"
          }
        ]
      },
      {
        title: "Precio",
        paragraphs: [
          "Gratis. Es de esas cosas que no entiendes por qué no tienes ya instaladas."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "No he probado ninguna alternativa, así que lo dejo como pendiente en lugar de inventarme comparaciones. Nunca busqué otra cosa, sencillamente porque f.lux me cumple lo que le pido y, cuando algo me funciona, no le doy más vueltas."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "f.lux es una herramienta pequeña, con una función muy concreta, que la cumple bien y que encima es gratis. No es protagonista de nada, y precisamente por eso me parece importante que esté en el Laborjatorio: cuidar la vista también forma parte de sostener un proyecto a largo plazo. Mi único pero es contra mí mismo, que debería tenerla encendida más a menudo. La recomiendo justo por lo que cuesta, nada, y por lo poco que te pide a cambio.",
          "Resumen para profes ocupados: gratis y automática para descansar la vista de noche. El único pero es el tono amarillo, que tendrás que apagar para series y juegos."
        ]
      }
    ],
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
    purchaseLinks: [
      {
        label: "Ir a f.lux",
        url: "https://justgetflux.com/"
      }
    ],
    relatedLinks: [
      {
        label: "Petit BamBou",
        url: "/herramientas/petit-bambou"
      },
      {
        label: "Standing Desk Maidesite",
        url: "/herramientas/standing-desk-maidesite"
      },
      {
        label: "Ventilador recargable silencioso",
        url: "/herramientas/ventilador-recargable-silencioso"
      }
    ],
    narrativeOutro: [
      "Enlace oficial: justgetflux.com."
    ],
    cta:
      "Aquí te enseño las herramientas. Lo que hago con ellas está en borjaprofe.com.",
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
    title: "Notion: cómo organizo mis textos y mis podcasts (y publico webs en un clic)",
    metaDescription:
      "Uso Notion por su claridad para organizar textos y montar la estructura de mis episodios con botones. Te cuento qué me encanta, sus límites y por qué lo prefiero a Airtable.",
    keywords: [
      "Notion",
      "Notion para profesores",
      "organizar con Notion",
      "Notion para texto",
      "publicar página web con Notion",
      "plantillas y botones en Notion"
    ],
    tagline:
      "La herramienta que uso para organizar textos, montar la estructura de mis podcasts y publicar páginas web en un clic.",
    category: "Productividad",
    subcategories: ["productividad", "documentación", "organización", "texto", "podcast"],
    pricing: "gratis-con-plan-pago",
    officialUrl: "https://www.notion.so/",
    hasAffiliate: false,
    myUseCase:
      "Lo uso para organizar y escribir, sobre todo textos y estructuras de episodios de podcast con botones que me ahorran empezar de cero cada vez.",
    bestFor: [
      "Profes que trabajan mucho con texto y documentación",
      "Creadores que quieren ordenar ideas, guiones y proyectos",
      "Quien busca claridad antes que efectos y decoración",
      "Personas que quieren publicar una página web rápida sin complicarse"
    ],
    notFor: [
      "Quien quiere una herramienta muy visual y decorativa",
      "Quien necesita bases de datos más potentes que textuales",
      "Quien solo quiere una lista de tareas mínima",
      "Quien se pierde montando sistemas y nunca se pone a usarlos"
    ],
    pros: [
      "Su diseño minimalista da mucha claridad.",
      "Funciona muy bien para escribir y organizar textos.",
      "Los botones ahorran repetir estructuras una y otra vez.",
      "Puedes publicar páginas como web en un clic.",
      "El plan gratuito da bastante de sí para uso individual."
    ],
    cons: [
      "Si buscas algo muy visual, se te puede quedar seco.",
      "El plan gratuito limita la colaboración con más gente.",
      "La IA integrada no me aporta mucho frente a otras herramientas.",
      "Si te lías montando sistemas, puedes perderte en vez de trabajar."
    ],
    alternatives: ["Airtable", "ChatGPT"],
    rating: 4,
    difficulty: "media",
    editorialVersion: "3.0",
    status: "importante",
    updatedAt: "2026-06-13",
    intro:
      "Notion es mi herramienta para organizar y escribir, y lo primero que tienes que saber es que apuesta por la claridad por encima de todo.",
    narrativeIntro: [
      "Notion es mi herramienta para organizar y escribir, y lo primero que tienes que saber es que apuesta por la claridad por encima de todo. Si te gustan mucho los colorinchis y llenarlo todo de efectos, imágenes y tal, te aviso: no está pensado para eso. Es bastante minimalista, precisamente para dar prioridad a la claridad. Y para mí, eso es una virtud, no un defecto.",
      "Esta ficha es para profes que se preguntan dónde ordenar sus ideas, sus textos y sus proyectos sin perderse. Te cuento para qué lo uso, las dos funciones que me tienen enamorado y dónde están sus límites."
    ],
    narrativeSections: [
      {
        title: "Qué es Notion",
        paragraphs: [
          "Notion es una plataforma de productividad y documentación. Te permite crear páginas, bases de datos y todo tipo de contenido, con un enfoque muy centrado en el texto.",
          "Puedes montar tablas si quieres, pero su terreno natural, al menos para mí, es escribir y organizar."
        ],
        actions: [
          {
            label: "Ir a Notion",
            url: "https://www.notion.so/"
          }
        ]
      },
      {
        title: "Por qué Notion y no Airtable",
        paragraphs: [
          "Antes había probado Airtable, que está más centrado en tablas inteligentes que en otra cosa. Y aunque no es mala herramienta, me quedé con Notion por una razón muy concreta: funciona mejor con texto que con tablas.",
          "Si lo tuyo son las bases de datos potentes, quizá Airtable te encaje más. Si lo tuyo es escribir, ordenar ideas y documentar, Notion gana."
        ]
      },
      {
        title: "Las dos funciones que me encantan",
        paragraphs: [
          "Aquí está lo que de verdad quería contarte, porque son dos cosas que no todo el mundo conoce.",
          "La primera son los botones. Hay una función que me encanta, que es la de crear botones: tú creas un botón y dentro le añades una serie de bloques, textos y contenidos que se manifiestan cada vez que lo presionas. Te pongo mi ejemplo real: tengo una estructura que utilizo siempre en los episodios de mi podcast, así que cuando voy a crear un episodio nuevo, hago clic en el botón y se me genera una página nueva con los bloques básicos que tengo que ir completando para hacer el guion. Cero pereza, cero empezar de cero cada vez. Puede sonar un poco lioso, pero es cuestión de ponerte a trastear. Ya verás que es una gozada.",
          "La segunda es que puedes publicar tus páginas como páginas web. Es decir, compartes una página con un enlace y eso queda publicado, accesible para cualquiera. Esto abre una posibilidad muy chula: si estás pensando en lanzar tu web y te da miedo toda la parte técnica, que sepas que puedes tener una hoy mismo en Notion, al menos de manera temporal, mientras te montas algo más serio. Para profundizar en ese paso, te dejo la categoría de [Construir mi web](/construir-mi-web)."
        ],
        actions: [
          {
            label: "Probar Notion",
            url: "https://www.notion.so/"
          }
        ]
      },
      {
        title: "La IA de Notion (que yo no uso)",
        paragraphs: [
          "Como todas las herramientas hoy en día, Notion tiene una inteligencia artificial integrada que te asiste con los textos, te revisa cosas y demás. En la versión gratuita es muy limitada, así que eso ya cada uno que valore si lo necesita.",
          "En mi caso, no me hace falta, porque ya tengo otras historias para eso, como [ChatGPT](/herramientas/chatgpt). Te lo cuento para que sepas que existe, pero no es lo que me lleva a usar Notion."
        ]
      },
      {
        title: "Lo que me gusta y lo que no",
        paragraphs: [
          "Lo que más valoro ya lo has visto: la claridad de su diseño minimalista, lo bien que va para el texto, y esas dos funciones, los botones y la publicación de páginas como web. Para organizar el trabajo de un profe sin marearte, encaja de maravilla.",
          "¿Y los límites? El primero es justo su minimalismo: si buscas algo muy visual y lleno de adornos, Notion no es para ti. Y el segundo está en el plan gratuito, que solo te permite compartir tu Notion con un número limitado de personas. Si necesitas colaborar con mucha gente, ahí te empuja al plan de pago."
        ]
      },
      {
        title: "Precio y modelo",
        paragraphs: [
          "Tiene plan gratuito y plan de pago. La diferencia principal, por lo que a mí me afecta, está en cuánta gente puede compartir tu espacio y en el acceso a esa IA integrada con más capacidad.",
          "El precio exacto lo dejo como pendiente para no darte una cifra que cambie, así que confírmalo en notion.so. Para un uso individual como el mío, el plan gratuito da mucho de sí."
        ]
      },
      {
        title: "Alternativas",
        paragraphs: [
          "La alternativa que conozco de primera mano es Airtable, que ya te he comentado: mejor si lo tuyo son las tablas inteligentes, peor si lo tuyo es el texto.",
          "Para la parte de IA, yo tiro de otras herramientas como ChatGPT en lugar de la de Notion. Más allá de eso, no he probado otras a fondo, así que el resto lo dejo como pendiente."
        ]
      },
      {
        title: "Veredicto",
        paragraphs: [
          "Notion es una gran herramienta si valoras la claridad y trabajas mucho con texto. A mí me ha conquistado sobre todo por los botones, que me ahorran montar la misma estructura una y otra vez, y por poder publicar páginas como web en un momento. No es para quien quiere algo muy decorado y visual, pero si lo que buscas es orden y foco, es de lo mejor que hay.",
          "Lo recomiendo mucho, sobre todo a profes que escriben y organizan bastante. Eso sí, dale un rato de trasteo al principio, porque su potencial no se ve hasta que te pones a juguetear con él.",
          "Resumen para profes ocupados: plataforma minimalista ideal para organizar y escribir, con dos joyas, botones para contenido repetible y publicar páginas como web. No es para amantes de lo muy visual."
        ]
      }
    ],
    whatItDoes:
      "Notion combina documentos, bases de datos, botones, listas y páginas enlazadas en un espacio editable muy centrado en el texto y la organización.",
    howIUseIt:
      "Lo uso sobre todo para organizar textos y para montar la estructura repetible de mis episodios de podcast con botones que me generan páginas y bloques base.",
    teacherUseCases: [
      "Organizar guiones, textos y recursos de trabajo.",
      "Montar plantillas repetibles para episodios, clases o procesos.",
      "Publicar una página web simple mientras montas algo más serio.",
      "Documentar proyectos y materiales sin perder claridad."
    ],
    honestVerdict:
      "Notion es una gran herramienta si valoras la claridad y trabajas mucho con texto. No es para quien quiere algo muy visual, pero si buscas orden, foco y un sistema cómodo para escribir y organizar, funciona de maravilla.",
    importantNotice:
      "El plan gratuito da mucho de sí para uso individual, pero si necesitas colaborar con más personas o te interesa la IA integrada con más capacidad, conviene revisar los planes actuales en su web oficial.",
    metrics: [
      { label: "Enfoque", value: "Texto y organización" },
      { label: "Plan base", value: "Gratis" },
      { label: "Estado", value: "Importante" }
    ],
    priceRows: [
      { label: "Plan gratuito", value: "Sí" },
      { label: "Plan de pago", value: "Sí" },
      { label: "Precio exacto", value: "Confirmar en la web oficial" }
    ],
    priceNote:
      "No fijo aquí una cifra porque puede cambiar. Para mi uso, la referencia importante es que el plan gratuito me parece suficiente si trabajas por tu cuenta.",
    purchaseLinks: [
      {
        label: "Ir a Notion",
        url: "https://www.notion.so/"
      }
    ],
    relatedLinks: [
      {
        label: "ChatGPT",
        url: "/herramientas/chatgpt"
      },
      {
        label: "Spotify for Podcasters",
        url: "/herramientas/spotify-for-podcasters"
      },
      {
        label: "Construir mi web",
        url: "/construir-mi-web"
      }
    ],
    faqs: [
      {
        question: "¿Me vale el plan gratuito?",
        answer:
          "Para un uso individual, da mucho de sí. El plan de pago entra en juego sobre todo si necesitas compartir tu espacio con mucha gente o quieres la IA integrada con más capacidad."
      },
      {
        question: "¿De verdad puedo montar una web con Notion?",
        answer:
          "Puedes publicar tus páginas como web mediante un enlace. No es una web profesional al uso, pero para empezar rápido o salir del paso mientras montas algo más serio, va estupendamente."
      },
      {
        question: "¿Notion o Airtable?",
        answer:
          "Si trabajas sobre todo con texto y documentación, Notion. Si lo tuyo son las tablas y bases de datos potentes, mira Airtable."
      }
    ]
  }
];
