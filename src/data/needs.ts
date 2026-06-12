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
