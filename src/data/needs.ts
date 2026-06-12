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
    toolSlugs: [],
    articleTitle: "Vender y cobrar siendo profe online: cómo gestiono el dinero de mi negocio (y duermo tranquilo)",
    metaDescription:
      "Cómo gestiono el dinero de mi negocio como profe online para ganar tranquilidad y control: cobros, tienda propia, fiscalidad y herramientas.",
    narrativeIntro: [
      "Durante cuatro años viví en Nicaragua. Me planteé establecerme allí legalmente, pero nunca conseguí un permiso de trabajo, así que no podía cotizar. Y en España, estando fuera, tampoco. Cobraba por transferencia de una academia de California, aunque el dueño era de Guatemala, de modo que el dinero me llegaba desde otra cuenta distinta. Todo era enormemente precario, y yo seguía adelante confiando en que la cosa funcionaría y en que, al final del mes, me pagarían.",
      "Te cuento esto porque explica todo lo demás. Cuando has vivido sin red, sin poder cotizar en ningún sitio y dependiendo de que un tercero te haga una transferencia, aprendes a valorar dos cosas por encima de cualquier otra: la tranquilidad y el control.",
      "Esta página va justo de eso, de cómo gestiono hoy el dinero de mi negocio como profe online para no volver a sentir aquella inseguridad. Porque el dinero, en la enseñanza, no es un tabú ni tiene por qué darte ansiedad. Es una parte más del trabajo, y se puede llevar con honestidad y criterio."
    ],
    narrativeSections: [
      {
        title: "Por qué gestionar bien el dinero importa más de lo que parece",
        paragraphs: [
          "El problema de cobrar y vender no es solo técnico, no va únicamente de qué plataforma usas. Es también mental. A muchos profes nos cuesta hablar de dinero, nos incomoda ponerle precio a lo nuestro, y esa incomodidad se acaba pagando: en márgenes que regalas, en tiempo que pierdes, en una sensación constante de no llevar tú el timón.",
          "Si no ordenas esta parte, pasa lo que me pasaba a mí. Dependes de terceros, no generas un excedente, no puedes ahorrar ni invertir, y la cabeza se te va al dinero justo cuando debería estar en enseñar y crear. Gestionar bien esto no es avaricia ni obsesión. Es quitarte un peso de encima para poder dedicarte a lo tuyo con la mente despejada."
        ]
      },
      {
        title: "Mi forma de verlo: tranquilidad y control",
        paragraphs: [
          "Si tuviera que resumir mi filosofía en dos palabras, serían esas: tranquilidad y control. No me interesa montar sistemas financieros complicadísimos ni exprimir cada céntimo a costa de pasarme la vida metido en hojas de cálculo. Me interesa que el dinero entre de forma segura, que yo controle el proceso y que me robe el menor tiempo posible. Tengo clarísimo que se puede ganar dinero sin volverse loco con tecnicismos."
        ]
      },
      {
        title: "Lo que he aprendido: mis criterios",
        paragraphs: [
          "Con el tiempo he destilado un puñado de criterios. El primero ya lo conoces: la tranquilidad manda. De hecho, hay casos en los que podría no importarme que una plataforma se quede un porcentaje, si a cambio me ahorra líos. Pero hay algo que valoro casi tanto como la tranquilidad, y es la libertad de hacer las cosas a mi gusto. No me importa dedicar un poco de tiempo a configurar una herramienta para que funcione exactamente como yo quiero.",
          "El mejor ejemplo es mi propia tienda. Con [WooCommerce](/buscar?q=WooCommerce) pasé mucho tiempo al principio, porque no soy particularmente habilidoso y me costó configurarlo. Pero el resultado mereció la pena: hoy tengo una plataforma donde vendo lo que da la gana, a mi manera, sin pagarle comisiones a terceros. Esa es mi regla de fondo. Cuando puedo controlar el proceso yo mismo y quedarme el margen, lo hago, aunque me cueste un rato montarlo. Y cuando no, no me cierro a una plataforma con comisión, siempre que lo que me quita de encima compense lo que se lleva.",
          "Y luego está lo fiscal, que es donde más fácil resulta agobiarse. Ahí mi criterio es muy claro: rodearme de profesionales. Lo que busco en una gestoría es, otra vez, tranquilidad, no navegar solo en los temas fiscales y administrativos. Y junto a eso, un software que me ponga fácil emitir las facturas y llevar el día a día, aunque no sea exactamente como a mí me gustaría. Entre el acompañamiento de la gestoría y la comodidad del software, me quito de la cabeza justo lo que no quiero que esté ahí."
        ]
      },
      {
        title: "Las herramientas y los sistemas que uso",
        paragraphs: [
          "No te voy a detallar aquí cada herramienta, que para eso está su ficha y esto es la categoría. Te las dejo agrupadas por lo que hago con cada una.",
          "Para vender y cobrar sin intermediarios, mi tienda propia montada con [WooCommerce](/buscar?q=WooCommerce), con [Stripe](/buscar?q=Stripe) y [PayPal](/buscar?q=PayPal) como formas de pago. Para la facturación y la administración del día a día, un software que me lo pone fácil, [Tukonta](/buscar?q=Tukonta). Para lo fiscal, una buena gestoría que me acompañe y no me deje solo. Y si en algún momento sobra dinero, procuro no dejarlo parado: ahí asoma [MyInvestor](/buscar?q=MyInvestor), aunque eso ya es otra conversación y no el foco de esta."
        ]
      },
      {
        title: "Si empezara de cero hoy",
        paragraphs: [
          "Haría tres cosas desde el primer día. Montaría mi propia forma de cobrar para no depender de terceros ni regalar comisiones, asumiendo que dejarla a mi gusto me llevará un rato. Me buscaría una gestoría desde el principio, sin esperar a tener un lío fiscal encima del que salir corriendo. Y trataría el dinero sin tabú, poniéndole precio a mi trabajo sin pedir perdón por ello.",
          "Lo que no haría es obsesionarme con optimizar cada céntimo. El equilibrio entre margen, facilidad y control vale mucho más que exprimir el último euro a costa de tu tiempo y de tu tranquilidad."
        ]
      },
      {
        title: "Índice rápido",
        paragraphs: [
          "Para que lo tengas a mano:"
        ],
        bullets: [
          "Tienda propia y cobros sin comisión: [WooCommerce](/buscar?q=WooCommerce) (Imprescindible)",
          "Formas de pago: [Stripe](/buscar?q=Stripe) (Imprescindible), [PayPal](/buscar?q=PayPal) (Importante)",
          "Facturación y administración: [Tukonta](/buscar?q=Tukonta) (Imprescindible)",
          "Acompañamiento fiscal: una buena gestoría (servicio profesional, no una herramienta)",
          "Qué hacer con el excedente: [MyInvestor](/buscar?q=MyInvestor) (Importante)",
          "Y si quieres seguir tirando del hilo, esta categoría se da la mano con [Ahorrar tiempo](/ahorrar-tiempo), [Mi escritorio](/mi-escritorio) y [Construir mi web](/construir-mi-web), porque tu propia web es el sitio desde el que vendes sin depender de nadie."
        ]
      },
      {
        title: "Conclusión",
        paragraphs: [
          "Vender y cobrar no va de montar la ingeniería financiera más sofisticada del mundo. Va de dormir tranquilo. Vengo de la precariedad absoluta, de cobrar por transferencias desde la otra punta del mundo y de no poder cotizar en ningún sitio, y por eso hoy lo tengo claro: tranquilidad y control, el dinero sin tabú, y rodearte de quien sabe para que tú puedas dedicarte a lo que de verdad importa, que es enseñar.",
          "Si quieres que te cuente con calma cómo aplico todo esto en mi día a día, y lo que he ido aprendiendo por el camino, te espero en [borjaprofe.com](https://borjaprofe.com). Y si tienes una duda concreta o quieres contarme tu situación, escríbeme a hola@borjaprofe.com, que de esto se habla mucho mejor sin tabúes."
        ]
      }
    ]
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
    ],
    articleTitle: "Ahorrar tiempo siendo profe online: qué automatizo, qué no, y por qué",
    metaDescription:
      "Cómo ahorro tiempo como profe online: qué automatizo, qué elimino y qué reservo para mi voz y mi criterio.",
    narrativeIntro: [
      "Cuando empiezas por tu cuenta online, la prioridad absoluta es ahorrar dinero. Es normal, vas con lo justo y cada euro cuenta. Pero con el tiempo te das cuenta de una cosa: hay un recurso mucho más valioso que el dinero, y es el tiempo. El dinero, dentro de lo que cabe, se recupera. Las horas, no.",
      "Esta página va de eso, de cómo intento que las mil tareas que rodean a la enseñanza no me roben las horas que debería dedicar a enseñar. Y te aviso ya de mi postura, para que no te lleves a engaño: no soy ningún gurú de la automatización, estoy bastante verde en lo de la IA, y aun así he aprendido lo suficiente como para ganar tiempo cada semana sin perder lo que me hace a mí."
    ],
    narrativeSections: [
      {
        title: "Por qué ahorrar tiempo es el problema de verdad",
        paragraphs: [
          "Cuando das clases online por tu cuenta, lo fácil de ver es la clase. Lo que no se ve son todas esas tareas que poco a poco van cubriendo todo el tiempo que no dedicas a las clases: preparar materiales, darte visibilidad, vender, contestar mensajes, montar y publicar contenido. Cada una parece pequeña, pero juntas se comen el calendario.",
          "¿Y qué pasa si no le pones remedio? Te lo cuento desde mi propia experiencia: antes, crear contenido me llevaba tanto tiempo y esfuerzo que he pasado temporadas muy largas sin publicar nada. No por falta de ganas, sino porque el proceso era tan pesado que lo iba dejando. Ese es el precio real de no cuidar tu tiempo: no es solo cansancio, es que dejas de hacer cosas que importan para tu negocio."
        ]
      },
      {
        title: "Mi experiencia: del ahorrar dinero al proteger el tiempo",
        paragraphs: [
          "Mi evolución ha sido justo esa, pasar de proteger el dinero a proteger el tiempo. Y lo bonito es para qué sirve ese tiempo que rescatas. Estoy creando algunas automatizaciones súper chulas que me hacen ganar tiempo cada día, tiempo que puedo dedicar a cosas más importantes, como meter mis servicios, pasear a mi perra o meter los pies en el agua paseando por la playa.",
          "No te lo cuento como una frase bonita. Lo cuento porque ese es el objetivo de verdad. No automatizo por el gusto de automatizar ni por parecer moderno. Automatizo para recuperar trozos de vida, unos para el negocio y otros, sencillamente, para vivir."
        ]
      },
      {
        title: "Lo que he aprendido: automatiza, pero con criterio",
        paragraphs: [
          "Aquí está la parte importante, la que de verdad quiero que te lleves, porque es donde casi todo el mundo se equivoca. Antes de pensar en automatizar nada, es importante valorar cada cierto tiempo las tareas que estamos haciendo cada semana y ver cuáles realmente tienen un impacto y cuáles no. Automatizar eso que no nos aporta nada no es la solución. Si una tarea no sirve para nada, no la automatices: elimínala. Automatizar una tontería solo te da una tontería más rápida.",
          "Y hay una segunda regla que para mí es sagrada: no automatices ni delegues lo que te hace único. Los guiones no los delego, los newsletters los escribo yo. Eso es mi voz, mi criterio, mi valor, y ahí no entra ninguna máquina. Pero si puedes crear las portadas de esos contenidos más rápido, pues genial. La frontera está clara: lo repetitivo y sin alma, fuera de tu mesa. Lo que solo puedes hacer tú, se queda contigo.",
          "Lo tercero es honestidad sobre mí mismo. Estoy muy verde todavía en automatizaciones con IA. No te voy a vender que tengo un sistema perfecto, porque sigo experimentando y metiendo la pata. Pero precisamente por eso lo cuento, porque puede que tú estés en el mismo punto."
        ]
      },
      {
        title: "Las herramientas y automatizaciones que uso",
        paragraphs: [
          "No te voy a detallar cada herramienta, que para eso está su ficha. Te cuento dónde me ahorran tiempo de verdad.",
          "Mi caso estrella ahora mismo es [OpusClip](/herramientas/opus-clip): cojo contenido de vídeo que ya tengo y lo convierto en clips listos para redes en un momento, cuando antes eso me llevaba un mundo. También estoy experimentando con [Codex](/buscar?q=Codex) para crear resúmenes diarios y automatizar parte de la gestión de mis tareas de preparación, aunque te aviso de que esto lo tengo todavía en fase muy de pruebas.",
          "Para lo demás, las piezas de siempre cumplen su papel sin que les dé mucha vuelta: [Google Calendar](/buscar?q=Google%20Calendar) y [Google Drive](/buscar?q=Google%20Drive) para tener el tiempo y los recursos a mano, [ChatGPT](/herramientas/chatgpt) como segundo cerebro para filtrar ideas y ordenar, [Canva](/herramientas/canva) para sacar diseños rápidos como esas portadas, [MailPoet](/herramientas/mailpoet) para los emails y [Metricool](/herramientas/metricool) para no perder tiempo planificando redes a mano. Cada una me quita un poco de fricción de encima. Sumadas, me devuelven horas."
        ]
      },
      {
        title: "Consejos para quien empieza",
        paragraphs: [
          "Si estás arrancando, no te lances a automatizarlo todo el primer día. Empieza por lo aburrido pero esencial: siéntate y mira en qué se te va la semana. Detecta lo que repites una y otra vez y lo que no te aporta nada. Lo segundo, elimínalo. Lo primero, mira si una herramienta puede hacerlo por ti.",
          "No te obsesiones con tener el sistema más sofisticado, y sobre todo no toques lo que te hace especial. El objetivo no es trabajar como una máquina, es liberar tiempo para enseñar mejor y, de paso, para vivir. Y no te agobies si vas lento con la IA: yo también, y no pasa nada."
        ]
      },
      {
        title: "Índice rápido",
        paragraphs: [
          "Las herramientas que más tiempo me ahorran:"
        ],
        bullets: [
          "Clips para redes desde vídeo: [OpusClip](/herramientas/opus-clip) (Importante)",
          "Gestión de tareas y automatizaciones, en pruebas: [Codex](/buscar?q=Codex) (Importante)",
          "Organización del tiempo y los recursos: [Google Calendar](/buscar?q=Google%20Calendar) (Imprescindible), [Google Drive](/buscar?q=Google%20Drive) (Imprescindible)",
          "Segundo cerebro para ideas y orden: [ChatGPT](/herramientas/chatgpt) (Imprescindible)",
          "Diseño rápido: [Canva](/herramientas/canva) (Importante)",
          "Emails: [MailPoet](/herramientas/mailpoet) (Imprescindible)",
          "Planificación de redes: [Metricool](/herramientas/metricool) (Importante)",
          "Y si quieres seguir tirando del hilo, esto se da la mano con [Crear contenido](/crear-contenido), [Crear materiales](/crear-materiales), [Automatización](/categorias/automatizacion) y, aunque no lo parezca, con [Mi escritorio](/mi-escritorio): ganar tiempo también es una forma de cuidarte y no quemarte."
        ]
      },
      {
        title: "Conclusión",
        paragraphs: [
          "Ahorrar tiempo no va de automatizar todo lo que se mueve. Va de tener claro qué te aporta valor y proteger ese tiempo con uñas y dientes. Automatiza lo repetitivo, elimina lo inútil, y guárdate para ti lo que solo tú puedes hacer: tu voz, tu criterio, tu manera de enseñar. Todo lo demás es negociable.",
          "Si quieres que te cuente con calma cómo voy montando estas automatizaciones y qué aprendo por el camino, incluidos los tropiezos, te lo cuento en [borjaprofe.com](https://borjaprofe.com). Y si tienes una duda o quieres contarme en qué se te va el tiempo a ti, escríbeme a hola@borjaprofe.com y le buscamos solución."
        ]
      }
    ]
  },
  {
    title: "Construir mi web",
    slug: "construir-mi-web",
    description: "Páginas, presencia online, analítica y estructura digital.",
    icon: "browser",
    toolSlugs: ["wordpress", "webempresa", "mailpoet", "metricool", "squoosh", "lastpass", "canva"],
    articleTitle: "Construir tu web siendo profe online: tu fortaleza en internet (no territorio alquilado)",
    metaDescription:
      "Por qué un profe online necesita su propia web y cómo decido yo qué herramientas usar para construirla y mantenerla sin depender de redes sociales.",
    narrativeIntro: [
      "Te lo digo sin rodeos desde el principio: si todo tu negocio está en redes sociales, estás construyendo tu negocio sobre territorio alquilado. Un cambio de algoritmo, una cuenta suspendida sin avisar, una red que pasa de moda, y te quedas sin nada de un día para otro. Tu web, en cambio, es tu propia fortaleza en internet. Es el castillo que sí es tuyo.",
      "Esta página va de eso, de mi experiencia construyendo y manteniendo mi web a lo largo de los años, con los aciertos y, sobre todo, con los errores. No es un tutorial de botones. Es cómo entiendo yo este problema y qué decisiones he ido tomando, para que tú tomes las tuyas con algo más de criterio."
    ],
    narrativeSections: [
      {
        title: "Por qué necesitas una web propia",
        paragraphs: [
          "Un profe online con un negocio propio no puede prescindir de tener un dominio y un hosting propios. Esa es la base. Las redes son estupendas para que te encuentren, pero son la casa de otro: tú pones el contenido y ellos ponen las reglas, que cambian cuando quieren.",
          "Tu web es lo único de tu presencia digital que controlas de verdad. Ahí mandas tú: el diseño, la estructura, lo que ofreces, cómo lo cobras, cómo te comunicas. Si te tomas en serio vivir de esto, tarde o temprano necesitas tu propia fortaleza. No para abandonar las redes, sino para no depender solo de ellas."
        ]
      },
      {
        title: "Mi experiencia: una web de 2017 que ya pesa",
        paragraphs: [
          "Mi web principal, borjaprofe.com, la creé en 2017 con [WordPress](/herramientas/wordpress). Y esa decisión, tantos años después, todavía condiciona mi forma de ver todo esto. Con el tiempo he acumulado muchísimos recursos ahí dentro, y eso tiene una cara buena y una mala. La buena es que es sólida y es mía. La mala es que cambiar cosas importantes me da vértigo, porque sé la de cosas que hay montadas encima.",
          "En paralelo, sí me he soltado la melena con proyectos secundarios y experimentos. Este mismo Laborjatorio, por ejemplo, lo he construido con tecnologías más nuevas, con [Codex](/buscar?q=Codex), [GitHub](/buscar?q=GitHub) y [Vercel](/buscar?q=Vercel), e incluso generando buena parte de los textos por voz con inteligencia artificial. Ahí me permito probar, porque si algo sale mal no se cae mi negocio entero. En la web principal, en cambio, voy con mucho más cuidado."
        ]
      },
      {
        title: "Los errores que he cometido, para que tú no los repitas",
        paragraphs: [
          "El primero y más importante: copiar webs ajenas sin entender por qué están hechas así. Yo lo he hecho, construir páginas imitando otras, y es un error. No tiene sentido copiar a ciegas, porque ni tú ni la otra persona sabéis por qué se hace la web de esa manera. Inspírate, claro, pero entiende siempre el porqué de cada decisión antes de copiarla.",
          "El segundo error tiene que ver con el diseño. Para mi web principal uso Divi, un editor visual, y hoy no te lo recomendaría. El problema es de los que enganchan: una vez que usas [Divi](/buscar?q=Divi) para tu web, es una especie de trampa mortal. Si la quitas, te da problemas, porque tu web entera queda amarrada a esa herramienta. Lo sigo usando precisamente por eso, porque desengancharme ahora sería un lío, pero si empezara hoy no entraría por ahí.",
          "Y el tercero, más sutil, es el miedo a cambiar. Ese vértigo del que te hablaba puede dejarte con una web anticuada solo por no atreverte a tocarla. Y eso también es un error."
        ]
      },
      {
        title: "Mi filosofía: la casa se adapta a ti, no al revés",
        paragraphs: [
          "Si algo tengo claro es esto: todas las casas necesitan remodelaciones cada cierto tiempo, y es importante que tú no tengas que adaptarte a la casa, sino que la casa se adapte a ti. Tu web tiene que servir a tus necesidades reales, no a una idea abstracta de cómo debería ser una web.",
          "En mi caso, eso se ha traducido en reducir de forma radical. He pasado de tener un montón de pestañas a quedarme con tres o cuatro, y he eliminado canales que no me aportaban, como la página de contacto directa, concentrando la comunicación por otras vías. Menos puertas, pero mejores. Una web no mejora por tener más cosas, mejora por tener las que importan y quitar el ruido."
        ]
      },
      {
        title: "Las herramientas que he usado y para qué",
        paragraphs: [
          "No te voy a detallar cada herramienta, que para eso está su ficha. Te cuento el mapa.",
          "Para mi web principal, la casa estable, [WordPress](/herramientas/wordpress) sobre el hosting de [Webempresa](/herramientas/webempresa), que es donde vive y donde tengo el dominio. El diseño lo llevo con Divi, con la advertencia que ya te he dado. Y para los proyectos nuevos y experimentales, me muevo con [Codex](/buscar?q=Codex), [GitHub](/buscar?q=GitHub) y [Vercel](/buscar?q=Vercel), apoyándome en la IA.",
          "Porque esa es la otra pata de todo esto: con la inteligencia artificial puedes crear una web con tu voz, y eso es un lujazo, aunque todavía es algo nuevo. Las herramientas de IA para montar webs son muy prometedoras y muy fáciles para quien empieza, pero siguen siendo experimentales y con poca documentación. Yo las uso para probar, no todavía para sostener lo importante."
        ]
      },
      {
        title: "Consejos para quien empieza hoy",
        paragraphs: [
          "Lo primero, mentalidad: no te desanimes, no tengas miedo a la curva de aprendizaje. Es mucho más duro el trabajo que haces día a día como profe que aprender a montar una web. Si puedes con un aula, puedes con esto.",
          "Lo segundo, decisiones. Móntate tu propia casa cuanto antes, con dominio y hosting propios, aunque empieces pequeño. Diséñala para lo que tú necesitas, no copiando a nadie a ciegas. Y elige tus herramientas pensando en el futuro: huye de las que te dejan atrapado. Si te atrae lo nuevo y lo de la IA, perfecto para experimentar, pero para tu proyecto principal prioriza la simplicidad y el control por encima de lo más moderno pero inmaduro."
        ]
      },
      {
        title: "Índice rápido",
        paragraphs: [
          "Las herramientas de este viaje:"
        ],
        bullets: [
          "Plataforma de tu web, la casa estable: [WordPress](/herramientas/wordpress) (Imprescindible)",
          "Hosting y dominio: [Webempresa](/herramientas/webempresa) (Importante)",
          "Diseño de la web, con advertencia: [Divi](/buscar?q=Divi) (Importante, no recomendado para empezar hoy)",
          "Proyectos nuevos y experimentos con IA: [Codex](/buscar?q=Codex) (Importante), [GitHub](/buscar?q=GitHub) (Importante), [Vercel](/buscar?q=Vercel) (Importante)",
          "Recursos y documentos: [Google Drive](/buscar?q=Google%20Drive) (Imprescindible)",
          "Y si quieres seguir tirando del hilo, esto se da la mano con [Crear contenido](/crear-contenido), [Vender y cobrar](/vender-y-cobrar), porque tu web es donde vendes, y [Ahorrar tiempo](/ahorrar-tiempo)."
        ]
      },
      {
        title: "Conclusión y mirada al futuro",
        paragraphs: [
          "Construir tu web no va de tener la página más bonita ni la tecnología más moderna. Va de tener un sitio que sea tuyo de verdad, hecho a tu medida, que puedas cambiar cuando lo necesites sin pedirle permiso a nadie. Las herramientas cambiarán, y con la IA van a cambiar rápido, pero el principio se queda: ten tu propia fortaleza y haz que se adapte a ti.",
          "Si quieres que te cuente con calma cómo está montada la mía y qué voy probando con lo nuevo, te lo cuento en [borjaprofe.com](https://borjaprofe.com). Y si estás dándole vueltas a tu web y tienes una duda, escríbeme a hola@borjaprofe.com, que de esto hablo encantado."
        ]
      }
    ]
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
    ],
    articleTitle: "Mi escritorio: qué equipo necesita de verdad un profesor online, o no",
    metaDescription:
      "El equipo físico que de verdad me ayuda a dar clase online sin fricción: ordenador, webcam, silla, mesa y esos pequeños cacharros que te salvan la jornada.",
    narrativeIntro: [
      "Durante una temporada di clases desde la cama. Literal. El portátil encima de las piernas y, debajo, una maleta para subirlo a la altura de la cámara. Funcionaba: daba clases, cobraba, los alumnos volvían. Pero al rato tenía la espalda hecha un cromo y la sensación de estar haciendo malabares para algo que debería ser lo más simple del mundo, que es sentarme a trabajar.",
      "Te cuento esto porque Mi escritorio es, probablemente, la categoría menos importante del Laborjatorio. Y aun así es la que tienes delante cada día, la que te acompaña hora tras hora. Aquí no hay software que te cambie la vida ni una IA que te ahorre media jornada. Hay una silla, un ordenador, una webcam y cuatro cacharros. Cosas que no lucen, que nadie pregunta y que, cuando fallan, te amargan la mañana.",
      "La tesis es sencilla: el equipo físico de un profesor online no va de tener lo mejor ni lo más caro. Va de quitar fricción y de aguantar el cuerpo durante las muchas horas que pasas sentado. Nada más. Y, sobre todo, nada menos."
    ],
    narrativeSections: [
      {
        title: "Por qué importa, aunque parezca lo que menos",
        paragraphs: [
          "Piensa en las horas. Si das clases online, vives sentado. Y no es solo dar clase: es preparar, grabar, editar, responder correos, montar materiales. Todo en la misma silla, delante de la misma pantalla. El cuerpo lo nota. Yo lo noté.",
          "Lo que pasa cuando ignoras esto es que la fricción se acumula sin que te des cuenta. Una silla mala no te rompe la espalda en un día, te la rompe en seis meses. Un ratón incómodo no te molesta en una clase, te molesta en la número doscientos. Un ordenador que va lento no te arruina una grabación, te roba diez minutos cada vez, hasta que has perdido tardes enteras. Son micropérdidas. Y las micropérdidas, repetidas mil veces, son lo que de verdad te desgasta.",
          "Por eso esta categoría, siendo la menos glamurosa, es la que más se nota a largo plazo. No te va a dar un superpoder. Te va a quitar un montón de pequeñas molestias que, sumadas, marcan la diferencia entre acabar el día entero o acabar molido."
        ]
      },
      {
        title: "Cómo lo enfoco yo",
        paragraphs: [
          "Aquí voy a justificarte siempre por qué he elegido cada cosa. No porque sea la mejor del mundo, sino porque resolvió algo que yo necesitaba resolver. Es muy probable que tú conozcas opciones mejores o más cómodas. Yo te cuento lo que he descubierto y por qué me está funcionando, y tú valoras lo tuyo.",
          "El principio que lo ordena todo es este: lo importante no es encontrar el setup perfecto ni la herramienta ideal, es encontrar una que cumpla con tu trabajo. Que cumpla con tus necesidades. Punto.",
          "Eso significa que no hace falta convertirse en el típico youtuber con luces de neón y una silla que parece del Fórmula 1, sacada de una nave espacial. No necesitas eso. Necesitas tu microespacio, uno que se adecue a cómo trabajas tú, porque ya sabes la cantidad de horas que pasas ahí sentado. La diferencia entre un setup de revista y uno que funciona no es el dinero. Es saber qué necesitas de verdad."
        ]
      },
      {
        title: "Las cuatro maneras de tirar el dinero en hardware",
        paragraphs: [
          "Comprar hardware siempre duele. Es un desembolso, y encima en algo que no produce nada por sí mismo: una silla no te trae alumnos. Por eso conviene gastar con cabeza. Con los años he identificado cuatro formas clásicas de tirar el dinero:"
        ],
        bullets: [
          "Lo barato que se rompe rápido. Compras lo más económico, dura cuatro meses y acabas comprándolo otra vez. Te ha salido caro lo barato.",
          "Lo demasiado profesional para lo que de verdad haces. El micro de estudio de mil euros para grabar un podcast que, de momento, escuchan cuatro gatos. Sobra equipo por todas partes.",
          "Lo que compras y no usas. El cacharro que parecía imprescindible en el vídeo de un influencer y que lleva en un cajón desde que llegó.",
          "El impulso que, a veces, acierta. Este es el tramposo: a veces compras por capricho y resulta que era justo lo que te faltaba. Pasa. Pero no construyas tu escritorio a base de impulsos y rezando para tener suerte.",
          "El truco está en gastar en lo que usas todos los días y ser tacaño con lo que usarás una vez al mes. Una silla y un ordenador los tocas cada día, ahí merece la pena. Un trípode que sacas para una grabación al trimestre, ahí, lo justo."
        ]
      },
      {
        title: "Qué hay en mi escritorio",
        paragraphs: [
          "Te lo agrupo por la función que cumple cada cosa, que es como tiene sentido pensarlo.",
          "Lo que hace el trabajo. El [Acer Nitro 5](/herramientas/acer-nitro-5) es mi ordenador. No es una máquina de diseñador ni de gamer hardcore, es un portátil que aguanta bien dar clase, grabar, editar vídeo ligero y tener mil pestañas abiertas sin morirse. Y la [Logitech C920](/herramientas/logitech-c920) es la webcam con la que me ven los alumnos. Estos dos son los imprescindibles de verdad: sin ordenador y sin cámara no hay clase online que valga.",
          "La postura y el cuerpo. Aquí entran la [mesa elevable Maidesite](/herramientas/standing-desk-maidesite) y la [silla de oficina de malla](/herramientas/silla-oficina-malla). La mesa me deja alternar entre estar sentado y de pie, que para las jornadas largas es oro. Y la silla de malla respira, que cuando pasas seis horas pegado a ella se agradece más de lo que parece. Las dos son importantes: no salvan la vida, pero salvan la espalda.",
          "Los que quitan fricción. Y luego están los pequeños. El [ratón Inphic PM6](/herramientas/inphic-pm6), silencioso y cómodo, de esos que no notas hasta que vuelves a uno malo. El [filtro antipop InnoGear](/herramientas/filtro-antipop-innogear), que es una tontería de cuatro euros que mejora cómo suenas al grabar. Y un [ventilador recargable silencioso](/herramientas/ventilador-recargable-silencioso) para el verano, porque dar clase sudando es más regular. Este último es opcional, claro, es comodidad pura. Pero la comodidad, en jornadas largas, también es productividad."
        ]
      },
      {
        title: "Si tuviera que montarlo hoy desde cero",
        paragraphs: [
          "Empezaría por lo que toco cada día y dejaría lo demás para después. Primero, un ordenador que aguante y una webcam decente, que es lo mínimo para trabajar. Después, la silla, porque tu espalda te lo va a agradecer antes que ninguna otra cosa. Y la mesa, si puedes.",
          "Lo pequeño, el ratón, el filtro, el ventilador, lo iría sumando sobre la marcha, según notara la molestia que cada cosa resuelve. No me lanzaría a comprarlo todo de golpe el primer día. El escritorio bueno no se compra, se va afinando. Vas detectando qué te molesta y le pones remedio. Esa es la única lista de la compra que de verdad funciona."
        ]
      },
      {
        title: "El escritorio, de un vistazo",
        paragraphs: [
          "Si quieres ir directo a una herramienta concreta, aquí tienes todo mi escritorio ordenado por la función que cumple. Entre paréntesis, el peso que tiene cada cosa para mí: no todo importa igual."
        ],
        bullets: [
          "Lo que hace el trabajo: [Acer Nitro 5](/herramientas/acer-nitro-5), ordenador (Imprescindible), y [Logitech C920](/herramientas/logitech-c920), webcam (Imprescindible)",
          "La postura y el cuerpo: [Mesa elevable Maidesite](/herramientas/standing-desk-maidesite), escritorio (Importante), y [Silla de oficina de malla](/herramientas/silla-oficina-malla), silla (Importante)",
          "Los pequeños que quitan fricción: [Ratón Inphic PM6](/herramientas/inphic-pm6), ratón (Importante), [Filtro antipop InnoGear](/herramientas/filtro-antipop-innogear), accesorio de grabación (Importante), y [Ventilador recargable silencioso](/herramientas/ventilador-recargable-silencioso), ventilador (Opcional)"
        ]
      },
      {
        title: "En resumen",
        paragraphs: [
          "Mi escritorio no es un escaparate. Es un sitio que funciona, montado para aguantar muchas horas sin que el cuerpo proteste y sin que los cacharros me hagan perder el tiempo. Eso es todo lo que le pido, y eso es justo lo que te recomendaría buscar a ti: no el setup de revista, sino el que te deja trabajar a gusto.",
          "Seguramente tú tengas cosas mejores que las mías, o al menos distintas. Si has dado con algo que te funciona y te apetece contármelo, escríbeme a hola@borjaprofe.com, que de esto se aprende un montón entre profes. Y si quieres que te cuente estas movidas con más calma, te espero en [borjaprofe.com](https://borjaprofe.com)."
        ]
      }
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
      "f-lux",
      "ventilador-recargable-silencioso",
      "inphic-pm6"
    ],
    articleTitle: "Cuidarme siendo profe online: cómo dejé de trabajar como un animal",
    metaDescription:
      "Cómo aprendí a cuidarme como profe online para no quemarme: moverme más, poner límites y apoyarme en herramientas que lo hacen más fácil.",
    narrativeIntro: [
      "Te lo confieso de entrada: soy bastante bruto y he tenido épocas de trabajar sin parar. Durante la pandemia llegué a pasar hasta doce horas seguidas delante del ordenador creando materiales. Y aprendí, tarde, que eso no solo es insostenible, es que tiene luego serias secuelas, para el cuerpo y para la cabeza.",
      "Esta página va de lo que vino después: de cómo he ido aprendiendo a cuidarme para poder seguir haciendo este trabajo durante muchos años sin quemarme por el camino. Porque cuidar el cuerpo y la mente no es un lujo ni un capricho, es imprescindible para sostener la labor docente a largo plazo. Y te adelanto la idea principal: el cambio de verdad no vino de comprar objetos, vino de cambiar hábitos y de aprender a poner límites."
    ],
    narrativeSections: [
      {
        title: "Por qué cuidarte importa, y qué pasa si no lo haces",
        paragraphs: [
          "Los profes nos movemos poco. Como tantos otros trabajos, este te tiene atado a una silla, mirando una pantalla, horas y horas. Y cuando además trabajas desde casa, donde no hay un horario que te eche ni compañeros que se vayan a comer, es facilísimo encadenar jornadas maratonianas sin darte cuenta.",
          "El problema es que es muy fácil quemarse si no nos cuidamos. No es solo cansancio puntual: es dolor de cuello y espalda, es fatiga mental, es ese desgaste que se va acumulando hasta que un día no puedes más. Y aquí está la trampa: cuando te quemas, no es que trabajes peor un rato, es que pones en riesgo tu capacidad de seguir enseñando. Cuidarte, por tanto, no es lo contrario de trabajar. Es lo que te permite seguir haciéndolo."
        ]
      },
      {
        title: "Mi gran error",
        paragraphs: [
          "Si tengo que señalar un error por encima de todos, es este: el gran error que he cometido en mi rutina es pensar que podía ponerme a trabajar como un animal sin que eso tuviera consecuencias. Creía que aguantar más horas era ser más productivo, y resulta que era justo lo contrario, porque lo pagaba después en cuerpo y en ánimo.",
          "Tardé en entenderlo. Venía de esa idea, muy metida, de que parar es perder el tiempo. Y no. Parar, moverte y desconectar no son el premio que te das cuando acabas todo. Son parte del trabajo, porque sin ellos no hay un tú en condiciones de hacer el resto."
        ]
      },
      {
        title: "Los cambios que hice, y el que más me costó",
        paragraphs: [
          "Gran parte de mi cambio ha venido de un sitio muy concreto: del hecho de moverme más, de no estar sentado todo el día delante del ordenador. Suena simple, y lo es, pero para alguien que se clavaba a la silla doce horas fue una pequeña revolución. Hacer pausas para levantarme, moverme un poco, cambiar de postura. No es gran cosa cada vez, pero sumado a lo largo del día lo cambia todo.",
          "El segundo cambio fue mental: aprender a poner límites y a aceptar que no voy a dejarlo todo perfecto. Y aquí va el spoiler más honesto de esta página: sigo teniendo la sensación de que todo está inacabado, pero estoy aprendiendo a vivir con ello. Esa sensación probablemente no se va nunca del todo. La diferencia es dejar de pelearte con ella y entender que cerrar el ordenador con tareas pendientes no te convierte en mal profesional, te convierte en una persona que también quiere llegar entera a mañana.",
          "Y el tercero, la meditación, que me ayuda mucho a desconectar. Es mi forma de bajar revoluciones y de sacar la cabeza del trabajo aunque sea un rato."
        ]
      },
      {
        title: "Las herramientas que me ayudan a cuidarme",
        paragraphs: [
          "Una cosa antes de nombrarte nada: las herramientas físicas y digitales son apoyos, no soluciones mágicas. Ninguna te va a cuidar por ti si no cambias los hábitos. Dicho esto, sí hay unas cuantas que me lo ponen más fácil, y te las cuento por para qué las uso.",
          "Para la cabeza, [Petit BamBou](/herramientas/petit-bambou), mi app de meditación. Tiro de la meditación diaria como hábito, y mi favorita es la meditación libre paseando con mi perra Duna, respirando al ritmo de unos sonidos. Mato dos pájaros de un tiro: muevo el cuerpo y desconecto la mente.",
          "Para moverme y no estar clavado, mi [escritorio elevable Maidesite](/herramientas/standing-desk-maidesite), que me deja alternar entre estar sentado y de pie sin tener que parar de trabajar. Y para las horas que sí paso sentado, una [silla de malla](/herramientas/silla-oficina-malla) decente, que al menos no me machaca la espalda y es fresca. Para la vista, que también se cansa de tanta pantalla, [f.lux](/herramientas/f-lux). Y para estar a gusto cuando aprieta el calor y no acabar de mal humor, hasta un simple [ventilador](/herramientas/ventilador-recargable-silencioso) cumple su papel.",
          "Fíjate en que ninguna es milagrosa. Son piezas que acompañan un cambio que, en el fondo, es de actitud."
        ]
      },
      {
        title: "Recomendaciones para quien empieza a cuidarse",
        paragraphs: [
          "Si te reconoces en lo del animal de trabajo, empieza por lo más barato y lo más difícil a la vez: muévete. Levántate cada cierto tiempo, da una vuelta, cambia de postura, sal a la calle aunque sea diez minutos. No hace falta que montes un plan de gimnasio, basta con romper esas horas seguidas de silla.",
          "Después, ponte límites de verdad, con horario de cierre incluido, y haz las paces con lo inacabado: cerrar con cosas pendientes está bien si a cambio descansas. Busca tu manera de desconectar la cabeza, sea meditar, pasear o lo que te funcione. Y recuerda que los objetos ayudan, pero no hacen el trabajo por ti. El cambio lo haces tú."
        ]
      },
      {
        title: "Índice rápido",
        paragraphs: [
          "Lo que uso para cuidarme, por función y con su estado entre paréntesis:"
        ],
        bullets: [
          "Meditar y desconectar: [Petit BamBou](/herramientas/petit-bambou) (Importante)",
          "Moverte y alternar postura: [Standing Desk Maidesite](/herramientas/standing-desk-maidesite) (Importante)",
          "Sentarte mejor las horas que toca: [Silla de oficina de malla](/herramientas/silla-oficina-malla) (Importante)",
          "Cuidar la vista: [f.lux](/herramientas/f-lux) (Opcional)",
          "Estar a gusto con el calor: [Ventilador recargable y silencioso](/herramientas/ventilador-recargable-silencioso) (Opcional)",
          "Y si quieres seguir tirando del hilo, esto se da la mano con [Mi escritorio](/mi-escritorio), donde te cuento el montaje físico con más detalle, y con [Ahorrar tiempo](/ahorrar-tiempo), porque trabajar de forma más sostenible también es cuidarse."
        ]
      },
      {
        title: "Conclusión",
        paragraphs: [
          "Cuidarte no es lo que haces cuando te sobra tiempo. Es lo que te permite seguir teniendo tiempo, energía y ganas de enseñar dentro de cinco años. Yo aprendí por las malas que trabajar como un animal se paga, y que moverme, poner límites y aprender a convivir con lo inacabado me han hecho, además de estar mejor, ser mejor profe.",
          "Si quieres que te cuente con calma cómo voy ajustando todo esto en mi día a día, te lo cuento en [borjaprofe.com](https://borjaprofe.com). Y si estás en esa fase de no parar y quieres contármelo o pedirme ideas, escríbeme a hola@borjaprofe.com, que de cuidarse también se habla mejor acompañado."
        ]
      }
    ]
  }
];

export function getNeedCategoryBySlug(slug: string) {
  return needCategories.find((need) => need.slug === slug);
}
