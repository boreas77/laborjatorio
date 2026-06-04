export type Pricing = "gratis" | "freemium" | "pago" | "pago-unico" | "suscripcion";
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
    pricing: "freemium",
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
        url: "https://www.audacityteam.org/",
        description:
          "Juega en otra parte del proceso: editar audio. No sustituye a HappyScribe, pero puede ir antes si necesitas limpiar o preparar el archivo."
      },
      {
        name: "Spotify for Podcasters",
        url: "https://podcasters.spotify.com/",
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
