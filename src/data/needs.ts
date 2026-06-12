export type NeedCategoryIcon =
  | "browser"
  | "card"
  | "clock"
  | "desk"
  | "heart"
  | "layers"
  | "pen"
  | "screen";

export type NeedNarrativeSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type NeedCategory = {
  title: string;
  slug: string;
  description: string;
  icon: NeedCategoryIcon;
  toolSlugs: string[];
  articleTitle?: string;
  metaDescription?: string;
  narrativeIntro?: string[];
  narrativeSections?: NeedNarrativeSection[];
  narrativeOutro?: string[];
};

export const needCategories: NeedCategory[] = [
  {
    title: "Crear contenido",
    slug: "crear-contenido",
    description: "Ideas, guiones, vídeos, podcasts y publicaciones que salen del cajón.",
    icon: "pen",
    toolSlugs: [
      "chatgpt",
      "opusclip",
      "davinci-resolve-editor-video-gratis-profesores",
      "kommodo",
      "happyscribe",
      "metricool",
      "audacity",
      "spotify-for-podcasters",
      "squoosh",
      "filtro-antipop-innogear",
      "logitech-c920",
      "acer-nitro-5"
    ]
  },
  {
    title: "Crear materiales",
    slug: "crear-materiales",
    description: "Fichas, PDFs, presentaciones y recursos que pueden entrar en clase.",
    icon: "layers",
    toolSlugs: ["chatgpt", "canva", "ilovepdf", "happyscribe", "squoosh", "notion"]
  },
  {
    title: "Dar clases online",
    slug: "dar-clases-online",
    description: "Herramientas para explicar, grabar, acompañar y estar presente a distancia.",
    icon: "screen",
    toolSlugs: [
      "logitech-c920",
      "acer-nitro-5",
      "standing-desk-maidesite",
      "silla-oficina-malla",
      "notion",
      "speakpipe"
    ],
    articleTitle: "Dar clases online: cómo monto mi aula virtual sin obsesionarme con la tecnología",
    metaDescription:
      "Cómo monto mi aula virtual para dar clases online sin obsesionarme con la tecnología: herramientas, experiencia real y qué usaría si empezara hoy.",
    narrativeIntro: [
      "Te voy a quitar un peso de encima desde el principio: dar clases online es más sencillo de lo que parece. En el fondo, lo que tratamos de hacer es reproducir la experiencia del aula y, si podemos, enriquecerla. Y para eso lo esencial es poco: un buen programa de videollamada y un sistema para tomar apuntes y llevar el registro de tus clases. El resto son mejoras.",
      "Esta página va de cómo resuelvo yo esto, después de unos cuantos años y de empezar en condiciones bastante peores que las de ahora. Pero más que una lista de programas, lo que quiero dejarte es una idea: no te enamores de ninguna herramienta. Son medios para enseñar mejor, nada más."
    ],
    narrativeSections: [
      {
        title: "Por qué dar clases online parece más difícil de lo que es",
        paragraphs: [
          "El lío no suele estar en la enseñanza, sino en la sensación de estar perdido entre mil herramientas. Te agobias pensando en si tu cámara es lo bastante buena, en qué programa es el mejor, en qué plataforma deberías usar, y se te va la energía en lo técnico cuando debería ir a lo importante.",
          "Y lo importante es esto: realmente hay tantas formas de enseñar, y lo que de verdad cuenta es lo que tú tienes que enseñar, no con qué lo haces. La tecnología es el vehículo. La clase la haces tú. Cuando interiorizas eso, casi todo el agobio técnico se desinfla."
        ]
      },
      {
        title: "Mi experiencia: de la mosquitera a un aula cómoda",
        paragraphs: [
          "Yo no empecé en un setup bonito, ni mucho menos. Cuando arranqué daba clases a treinta y pico grados bajo una mosquitera, con el portátil encima de una maleta. Te lo cuento para que veas que se puede empezar con lo que tengas y que la comodidad llega con el tiempo. Hoy me siento muy cómodo, desde luego muchísimo más que entonces.",
          "Por el camino he cambiado de herramientas sin dramatizar. Durante años usé Skype, hasta que un buen día anunció que cerraba. Pues bueno, no fue ningún drama, la verdad, siempre vas a tener alternativas. Me pasé a [Zoom](/buscar?q=Zoom) y a seguir. Esa es justo la actitud que defiendo: si una herramienta desaparece o deja de servirte, cambias y ya está. Por eso insisto tanto en no encariñarte con ninguna."
        ]
      },
      {
        title: "Mi forma de verlo: vieja escuela y tecnología, a partes iguales",
        paragraphs: [
          "Igual te sorprende, pero en esto soy bastante vieja escuela. Sigo teniendo apuntado todo en una agenda física. Y no te voy a poner el enlace, porque no creo que te quieras venir al bazar de mi pueblo a comprarla. Esa agenda convive sin problema con lo digital: para el registro y la organización de las clases tiro de [Notion](/herramientas/notion), y entre el papel y la pantalla me apaño de maravilla.",
          "No hay contradicción ahí. Uso lo tradicional donde me funciona y lo digital donde me funciona, sin obsesionarme con tener lo último. La importancia está en no enamorarte de ninguna herramienta, porque son eso, herramientas, y están ahí para hacerte la vida más fácil y para ayudar mejor a tus estudiantes."
        ]
      },
      {
        title: "Las herramientas y los objetos que uso",
        paragraphs: [
          "No te voy a detallar cada cosa, que para eso está su ficha. Te cuento mi aula por piezas.",
          "El centro es el programa de videollamada, en mi caso [Zoom](/buscar?q=Zoom), por donde pasa la clase. Para el registro y la organización, [Notion](/herramientas/notion) y mi agenda de papel, cada uno en lo suyo. Para que tus estudiantes te vean y te oigan bien, una cámara decente como mi [Logitech C920](/herramientas/logitech-c920) y un micrófono como mi [Audio-Technica ATR2100x-USB](/buscar?q=Audio-Technica%20ATR2100x-USB), aunque de este último ya te cuento en su ficha que tengo mis peros.",
          "Y luego está el aula física, que también cuenta más de lo que crees. Uso un [escritorio elevable](/herramientas/standing-desk-maidesite) para alternar postura sin parar de dar clase, y una segunda pantalla que me permite ver bien a mis estudiantes mientras tengo los materiales delante. Para los documentos y la agenda compartida, [Google Drive](/buscar?q=Google%20Drive) y [Google Calendar](/buscar?q=Google%20Calendar). Y si en algún momento quiero que mis estudiantes me manden audios, ahí está [SpeakPipe](/herramientas/speakpipe), aunque ahora mismo lo tengo en pausa."
        ]
      },
      {
        title: "Qué haría si empezara hoy",
        paragraphs: [
          "Lo mismo que te aconsejo a ti: empezar simple. Un programa de videollamada y una forma de llevar el registro, y a dar clase. No te montes un estudio de televisión el primer día ni te gastes el sueldo en equipo. Da clases, ve viendo qué te falta de verdad, y mejora poco a poco, como hice yo pasando de la maleta y la mosquitera a lo de ahora.",
          "Y un criterio para el futuro: adopta una herramienta nueva cuando te resuelva un problema real, y no te dé miedo descartarla o volver a algo más tradicional si te funciona mejor. La agenda de papel es la prueba de que lo viejo, cuando sirve, se queda."
        ]
      },
      {
        title: "Índice rápido",
        paragraphs: [
          "Lo que uso para mi aula online, por función y con su estado entre paréntesis:"
        ],
        bullets: [
          "Videollamada, el centro de la clase: [Zoom](/buscar?q=Zoom) (Imprescindible)",
          "Registro y organización: [Notion](/herramientas/notion) (Importante) y una agenda física",
          "Cámara: [Logitech C920](/herramientas/logitech-c920) (Imprescindible)",
          "Micrófono: [Audio-Technica ATR2100x-USB](/buscar?q=Audio-Technica%20ATR2100x-USB) (Imprescindible, con peros)",
          "Aula física: [escritorio elevable Maidesite](/herramientas/standing-desk-maidesite) (Importante) y una segunda pantalla",
          "Documentos y calendario: [Google Drive](/buscar?q=Google%20Drive) (Imprescindible), [Google Calendar](/buscar?q=Google%20Calendar) (Imprescindible)",
          "Recibir audios de estudiantes, en pausa: [SpeakPipe](/herramientas/speakpipe) (Opcional)",
          "Y si quieres seguir tirando del hilo, esto se da la mano con [Mi escritorio](/mi-escritorio), [Crear materiales](/crear-materiales) y [Cuidarme](/cuidarme), porque dar clase cómodo también es cuidarte."
        ]
      },
      {
        title: "Conclusión",
        paragraphs: [
          "Dar clases online no va de tener el aula virtual más sofisticada, va de poder enseñar con naturalidad y con la cabeza tranquila. Consigue un buen programa de videollamada, una forma de organizarte que te encaje, un equipo que te haga sentir cómodo, y a partir de ahí olvídate de la tecnología y céntrate en lo tuyo, que es enseñar. Las herramientas irán y vendrán, tú quédate con lo que funcione.",
          "Si quieres que te cuente cómo tengo montada mi aula con más detalle, te lo cuento en [borjaprofe.com](https://borjaprofe.com). Y si tienes dudas o quieres enseñarme tu montaje, escríbeme a hola@borjaprofe.com. Lo único que espero es que tú estés dando tus clases con el mismo nivel de paz."
        ]
      }
    ]
  },
  {
    title: "Vender y cobrar",
    slug: "vender-y-cobrar",
    description: "Cursos, pagos, correos, productos y ventas sin montar un circo técnico.",
    icon: "card",
    toolSlugs: []
  },
  {
    title: "Ahorrar tiempo",
    slug: "ahorrar-tiempo",
    description: "Automatizar, ordenar y quitarte tareas repetitivas de encima.",
    icon: "clock",
    toolSlugs: [
      "chatgpt",
      "ilovepdf",
      "happyscribe",
      "metricool",
      "mailpoet",
      "lastpass",
      "notion",
      "squoosh"
    ]
  },
  {
    title: "Construir mi web",
    slug: "construir-mi-web",
    description: "Páginas, presencia online, analítica y estructura digital.",
    icon: "browser",
    toolSlugs: ["mailpoet", "metricool", "squoosh", "lastpass", "ilovepdf", "canva"]
  },
  {
    title: "Mi escritorio",
    slug: "mi-escritorio",
    description: "Equipo físico, cámara, sonido, pantalla y entorno de trabajo.",
    icon: "desk",
    toolSlugs: [
      "standing-desk-maidesite",
      "silla-oficina-malla",
      "inphic-pm6",
      "ventilador-recargable-silencioso",
      "filtro-antipop-innogear",
      "logitech-c920",
      "acer-nitro-5"
    ]
  },
  {
    title: "Cuidarme",
    slug: "cuidarme",
    description: "Ergonomía, foco, pausas y cosas que ayudan a seguir trabajando.",
    icon: "heart",
    toolSlugs: [
      "petit-bambou",
      "standing-desk-maidesite",
      "silla-oficina-malla",
      "ventilador-recargable-silencioso",
      "inphic-pm6"
    ]
  }
];

export function getNeedCategoryBySlug(slug: string) {
  return needCategories.find((need) => need.slug === slug);
}
