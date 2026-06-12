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
    toolSlugs: [
      "happyscribe",
      "davinci-resolve-editor-video-gratis-profesores",
      "opusclip",
      "soundmadeseen",
      "kommodo",
      "audacity",
      "canva",
      "chatgpt",
      "ilovepdf"
    ],
    articleTitle: "Crear materiales didácticos: cómo produzco recursos en vídeo, audio y texto sin complicarme",
    metaDescription:
      "Cómo creo materiales didácticos en vídeo, audio y texto sin complicarme: herramientas, criterios y qué haría si empezara hoy.",
    narrativeIntro: [
      "Cuando empecé a crear materiales para mis clases, me compliqué la vida. Me metí en herramientas con una curva de aprendizaje enorme, convencido de que cuanto más potente fuera el programa, mejores serían mis recursos. Con los años he aprendido justo lo contrario: lo que de verdad importa no es dominar el software más complejo, sino elegir herramientas sencillas y específicas que hagan exactamente lo que necesito, y dejar que la tecnología me multiplique sin quitarme el control.",
      "Y es que, si lo piensas, crear materiales, vídeos, audios, textos, es una de las cosas que más hacemos los profes online. Esos materiales acaban yendo, sobre todo, a tres sitios: a [tus clases](/dar-clases-online), a tus cursos o a conseguir visibilidad. Y lo interesante es que muchas veces el mismo recurso te sirve para varias cosas a la vez: el vídeo que preparas para una clase puede acabar dentro de un curso, o convertirse en algo que publicas para que te descubran nuevos estudiantes.",
      "Esta página no es una lista de programas. Es cómo decido qué usar para producir esos recursos sin que la parte técnica se coma a la parte humana, que es la que de verdad enseña.",
      "Antes de seguir, una distinción que conviene tener clara, porque se mezclan constantemente. Una cosa es crear materiales, los recursos didácticos en sí, y otra crear contenido, lo que publicas para que te encuentren. Se tocan, pero no son lo mismo. De la visibilidad hablo en [Crear contenido](/crear-contenido). Aquí me centro en fabricar los recursos."
    ],
    narrativeSections: [
      {
        title: "Por qué crear materiales importa, y qué pasa si te complicas",
        paragraphs: [
          "Para un profe online, los materiales son media vida: son lo que enseñas en clase, lo que entregas en una asesoría, lo que vendes, y muchas veces lo que te da visibilidad. No es un añadido, es parte del trabajo.",
          "El problema no suele ser la falta de ganas, sino complicarse. Y cuando te complicas, pasa una de dos cosas. O no produces, porque cada recurso te cuesta un mundo y acabas dejándolo para nunca. O produces, pero inviertes tantísimo tiempo peleándote con la herramienta que te queda poco para lo importante: pensar bien el material, la explicación, la experiencia del estudiante.",
          "El objetivo nunca fue tener el vídeo más espectacular del mundo. El objetivo es que el estudiante aprenda. La herramienta está al servicio de eso, no al revés."
        ]
      },
      {
        title: "Mi experiencia: la tecnología multiplica, no sustituye",
        paragraphs: [
          "Si tuviera que resumir cómo entiendo esto en una sola idea, sería esta: la tecnología es un medio para multiplicar la humanidad del profe, no un piloto automático que lo sustituya.",
          "Mi evolución ha ido en esa dirección. Empecé con herramientas que pedían mucha sintonía técnica y mucha paciencia, y poco a poco me he ido quedando con las que me dan exactamente lo que necesito, sin ruido ni funciones de adorno. He notado, además, que algunas herramientas que antes consideraba indispensables están siendo superadas por opciones más simples o más concretas, sobre todo gracias a la IA.",
          "Un ejemplo claro que tengo entre manos: en lugar de montar actividades interactivas a mano, estoy explorando herramientas de IA que me las generen, en vez de armarlas pieza a pieza.",
          "Eso sí, hay una línea que no cruzo. La IA la uso como un aliado, como un segundo cerebro que potencia mi criterio, mi creatividad y mi eficiencia, pero el control y la voz se quedan conmigo. No automatizo para delegar las decisiones, automatizo para no perder el tiempo en lo que no aporta, y así tener más tiempo para lo que sí."
        ]
      },
      {
        title: "Lo que he aprendido: mis criterios para elegir",
        paragraphs: [
          "Con el tiempo he destilado unos cuantos criterios que aplico casi sin pensar. El primero, y el más importante, es el de la curva de aprendizaje: el tiempo que inviertes en aprender una herramienta no debería superar al que te ahorra. Si para dominar un programa necesito tres fines de semana y luego me ahorra diez minutos al mes, no me compensa.",
          "El segundo es que prefiero herramientas específicas a aplicaciones genéricas que lo hacen todo regular. Una herramienta que resuelve una cosa muy bien suele ganarle a la suite enorme que hace de todo a medias. Y el tercero es el de la IA como segundo cerebro: la uso para amplificar lo que ya sé y lo que ya soy, no para sustituirlo. En el momento en que un material deja de sonar a mí, algo he hecho mal."
        ]
      },
      {
        title: "Las herramientas que uso, por función",
        paragraphs: [
          "No te voy a dar fichitas aquí, que para eso cada herramienta tiene la suya. Te las agrupo por lo que hago con ellas.",
          "Para convertir audio en texto uso [HappyScribe](/herramientas/happyscribe): transcribo podcasts y clases y reaprovecho ese texto como material escrito. Para editar vídeo voy con [DaVinci Resolve](/herramientas/davinci-resolve), y cuando quiero sacar clips a partir de lo que ya tengo, tiro de [OpusClip](/herramientas/opus-clip) o, si parto de audio, de [SoundMadeSeen](/herramientas/soundmadeseen). Para grabar algún vídeo formativo puntual está [Kommodo](/herramientas/kommodo).",
          "Para editar audio, mi viejo fiel [Audacity](/herramientas/audacity). Para el diseño visual de los materiales, [Canva](/herramientas/canva). Para generar ideas, redactar o plantear un material, [ChatGPT](/herramientas/chatgpt) como ese segundo cerebro del que te hablaba. Para interactividad, [H5P](/buscar?q=H5P), aunque es justo donde más estoy mirando alternativas de IA. Y para los arreglos de PDF, unir, extraer páginas, comprimir, [iLovePDF](/herramientas/ilovepdf).",
          "Si te fijas, casi todas comparten el mismo ADN: hacen una cosa concreta y la hacen sin marearte."
        ]
      },
      {
        title: "Si empezara de cero hoy",
        paragraphs: [
          "Haría dos cosas distintas. Me apoyaría mucho más en la IA desde el primer día, sin tanto proceso manual heredado de cuando no existía. Y, antes de sentarme a aprender una herramienta compleja, me preguntaría si la IA ya me resuelve eso. El caso de la interactividad es el más claro: en vez de montar actividades a mano en H5P, hoy arrancaría probando lo que la IA es capaz de generar.",
          "Lo que no cambiaría es la filosofía: pocas herramientas, sencillas y específicas, y mi criterio y mi voz siempre por delante de la automatización."
        ]
      },
      {
        title: "Índice rápido",
        paragraphs: [
          "Para que lo tengas a mano:"
        ],
        bullets: [
          "Transcribir audio a texto: [HappyScribe](/herramientas/happyscribe) (Imprescindible)",
          "Editar vídeo: [DaVinci Resolve](/herramientas/davinci-resolve) (Importante)",
          "Clips con IA: [OpusClip](/herramientas/opus-clip) (Importante), [SoundMadeSeen](/herramientas/soundmadeseen) (Opcional)",
          "Grabar vídeo puntual: [Kommodo](/herramientas/kommodo) (Opcional)",
          "Editar audio: [Audacity](/herramientas/audacity) (Imprescindible)",
          "Diseño visual: [Canva](/herramientas/canva) (Importante)",
          "Ideas y textos con IA: [ChatGPT](/herramientas/chatgpt) (Imprescindible)",
          "Interactividad: [H5P](/buscar?q=H5P) (Importante)",
          "Arreglos de PDF: [iLovePDF](/herramientas/ilovepdf) (Opcional)",
          "Y si quieres seguir tirando del hilo, esta categoría se da la mano con [Crear contenido](/crear-contenido), [Automatización](/categorias/automatizacion), [Audio y vídeo](/categorias/audio-y-video) y [Diseño e imagen](/categorias/diseno-e-imagen). Y si lo que buscas es producir más en menos tiempo, pásate por [Ahorrar tiempo](/ahorrar-tiempo)."
        ]
      },
      {
        title: "Conclusión",
        paragraphs: [
          "Crear materiales no va de tener el arsenal más potente, sino de elegir bien y de no perder de vista quién manda. Las herramientas cambian, y cada vez más rápido con la IA de por medio, pero el criterio es lo que se queda: producir recursos que de verdad ayuden a tu estudiante, en el formato que toque, sin enterrarte en lo técnico y sin dejar de sonar a ti.",
          "Si quieres que te cuente con calma cómo uso todo esto en mi día a día como profe, y sobre todo qué hago con ello, te lo cuento en [borjaprofe.com](https://borjaprofe.com). Y si tienes dudas o quieres contarme tu caso, me escribes a hola@borjaprofe.com y hablamos."
        ]
      }
    ]
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
          "Lo que uso para mi aula online:"
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
