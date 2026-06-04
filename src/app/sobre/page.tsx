import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Por qué el Laborjatorio documenta herramientas desde el criterio de Borja, profe de español online."
};

export default function AboutPage() {
  return (
    <section className="page-shell narrow about-page-shell">
      <div className="page-heading about-page__heading">
        <h1>Las herramientas no son importantes</h1>
      </div>
      <div className="prose about-page">
        <p className="about-page__lede">
          Igual te suena raro en una web dedicada precisamente a hablar de herramientas,
          pero tiene una explicación. Te cuento.
        </p>
        <p>
          Durante la pandemia de 2020, muchísimos profesores me escribieron con la misma
          pregunta:
        </p>
        <p>—Borja, ¿me echas una mano con esto de enseñar online?</p>
        <p>
          Muchos llevaban más años dando clase que yo, pero yo llevaba más tiempo
          viviendo de internet. El caso es que de repente todos estos profes se
          encontraron grabando vídeos, dando clases por Zoom, creando materiales
          digitales, mandando newsletters e intentando vender cursos por internet.
        </p>
        <p>
          Y claro, me preguntaban por las herramientas. Qué programa usaba para grabar.
          Qué plataforma para vender. Qué aplicación para organizarme. Qué herramienta
          para enviar correos.
        </p>
        <p>Yo les respondía encantado. Pero siempre acababa diciéndoles lo mismo.</p>
        <p>
          Las herramientas ayudan, sí. Las herramientas son necesarias, es verdad. Pero
          las herramientas son un medio, no el fin.
        </p>
        <p className="about-page__pullquote">Son el martillo. No la casa.</p>
        <p>
          Te lo digo porque he visto a profes hacer cosas increíbles con herramientas
          sencillas. También he visto a muchos (pero muchísimos) profes acumulando
          aplicaciones, suscripciones y cacharros sin que su trabajo mejorara ni un poco.
          (Yo también he sido uno de ellos.)
        </p>
        <p>Por eso nació el Laborjatorio.</p>
        <p>
          Aquí voy documentando las herramientas que uso para enseñar español, crear
          contenido y gestionar mi negocio online. Lo que me gusta y lo que no. Lo que me
          parece brillante y lo que me parece una pérdida de tiempo.
        </p>
        <p>Pero hay otra idea detrás de todo esto, y es la importante.</p>
        <p className="about-page__highlight">
          Mi objetivo no es ampliar el catálogo. Es reducirlo.
        </p>
        <p>
          Siempre intento usar las menos herramientas posibles. Cada vez que una sustituye
          a tres, me llevo una alegría. Cada vez que cancelo una suscripción o simplifico
          un proceso, mejor.
        </p>
        <p>
          Así que no te extrañe si dentro de unos meses desaparecen herramientas de esta
          web.
        </p>
        <p>
          Porque el Laborjatorio no aspira a ser la mejor colección de herramientas de
          internet. Aspira a encontrar las pocas herramientas que de verdad merecen la
          pena. Al menos para mí. Espero que para ti también.
        </p>
        <p>
          Por cierto, no me he presentado.{" "}
          <strong>Me llamo Borja y soy profe de español online.</strong>
        </p>
        <p>
          Llevo más de diez años usando internet para enseñar, crear materiales, ayudar a
          otros profes y montar proyectos que a veces salen bien y otras más regular.
        </p>
        <p>
          El Laborjatorio nació como un experimento: una forma de ayudar a otros a hacer
          realidad sus proyectos con la herramienta adecuada.
        </p>
        <p>
          Eso es lo que vas a encontrar aquí. Un taller/laboratorio/catálogo con todas las
          herramientas que uso, ordenadas con el único criterio que tengo: el mío.
        </p>
        <p>
          Espero que te funcionen. Pero, de verdad, recuerda que lo importante no es la
          herramienta. Es la mano que la empuña. (Qué cursi me ha quedado.)
        </p>
        <p>
          Si quieres que estemos en contacto y ver en qué otras mandangas ando metido, te
          recomiendo darte una vuelta por aquí:
        </p>
        <div className="about-page__cta">
          <a className="button button--primary" href="https://borjaprofe.com">
            borjaprofe.com
          </a>
        </div>
        <div className="about-page__photo" aria-label="Foto de Borja pendiente" />
      </div>
    </section>
  );
}
