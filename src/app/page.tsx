import Link from "next/link";
import { BrandName } from "@/components/BrandName";

const searchSuggestions = [
  "Crear materiales",
  "Grabar podcasts",
  "Editar vídeo",
  "Organizar proyectos",
  "Vender cursos"
];

const whatYouWillFind = [
  "— Las herramientas con las que creo cursos, materiales y contenido sin montar una feria de pestañas abiertas.",
  "— Lo que uso para grabar, editar vídeo, preparar podcasts y organizar proyectos sin que el software me mire por encima del hombro.",
  "— Cosas poco glamurosas pero importantes: desde el equipo físico hasta cuándo compensa pagar y cuándo no.",
  "— Y si dejo de usar algo, intento contar qué lo ha sustituido y por qué. Esto no es una lista congelada."
];

const faqs = [
  {
    question: "¿Hay enlaces de afiliado?",
    answer: [
      "Sí, puede haberlos. Si compras desde uno de esos enlaces, yo recibo una comisión pequeña. A ti te cuesta exactamente lo mismo.",
      "Lo que no cambia por eso: qué herramientas aparecen aquí. Primero uso una herramienta. Luego decido si merece estar en el Laborjatorio. Si tiene afiliado, bien. Si no lo tiene, también.",
      "No todas las herramientas tienen enlace de afiliado. Y hay herramientas sin afiliado que recomendaría antes que otras que sí lo tienen. El orden es ese: primero el criterio, luego la comisión.",
      "Los enlaces ayudan a sostener el proyecto. Pero no determinan el contenido."
    ]
  },
  {
    question: "¿Qué tipo de herramientas recomiendas?",
    answer: [
      "En realidad no recomiendo herramientas en abstracto. Comparto las que uso.",
      "Eso puede incluir inteligencia artificial, edición de vídeo y audio, diseño, automatización, email marketing, creación de materiales didácticos o hardware: pantallas, micrófonos, sillas, lo que sea.",
      "Si forma parte de mi trabajo y considero que merece la pena, puede acabar apareciendo aquí. No hay una lista cerrada de categorías. Hay un criterio: si lo uso y me sirve, tiene un sitio."
    ]
  },
  {
    question: "¿Cómo encuentro una herramienta concreta?",
    answer: [
      "Puedes buscar por nombre directamente en el buscador, o navegar por categorías si todavía no tienes una en mente.",
      "Las categorías también sirven para descubrir herramientas que quizá no conocías pero que hacen algo parecido a lo que estás buscando. La idea es que encontrar lo que necesitas no requiera más de dos clics."
    ]
  },
  {
    question: "¿Seguro que estas herramientas me van a funcionar?",
    answer: [
      "No.",
      "Cada persona trabaja de una forma diferente. Lo que me funciona a mí puede no funcionarte a ti, y lo que yo descarté igual es exactamente lo que tú necesitas.",
      "Muchas de las herramientas que uso hoy las descubrí después de probar otras que no me convencieron. Ese proceso de ensayo y error es inevitable. Lo que el Laborjatorio puede hacer es ahorrarte parte del camino: saber qué usa alguien que trabaja de una forma parecida a la tuya, por qué lo usa y qué limitaciones tiene.",
      "Certezas, ninguna. Referencias basadas en experiencia real, esas sí."
    ]
  }
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__image" aria-hidden="true" />
        <div className="home-intro home-intro--compact">
          <h1>
            Has entrado al <BrandName />
          </h1>
        </div>
      </section>

      <section className="home-lede" aria-label="Introducción al Laborjatorio">
        <div className="home-lede__inner">
          <p>
            Aquí documento las herramientas que uso para <strong>enseñar español, crear
            contenido y gestionar mi negocio online</strong>. No las mejores del mercado
            según ningún ranking. Las mías. <strong>Las que me rodean mientras escribo
            esto</strong>.
          </p>
          <p>
            Algunas son imprescindibles. Otras son un experimento. Alguna la sigo usando
            aunque no te la recomendaría.
          </p>
          <p>
            Te lo cuento todo aquí abajo. Aunque si tienes prisa, puedes empezar a buscar
            tu herramienta.
          </p>
        </div>
      </section>

      <section className="home-search" aria-label="Búsqueda guiada de herramientas">
        <form className="home-search__box" action="/herramientas">
          <label htmlFor="home-search-input">¿Qué estás buscando?</label>
          <div className="home-search__field">
            <input
              id="home-search-input"
              name="q"
              placeholder="Ej. subtítulos, IA, podcast, materiales, caos administrativo..."
              type="search"
            />
            <button type="submit">Buscar</button>
          </div>
          <div className="home-search__suggestions" aria-label="Sugerencias de búsqueda">
            {searchSuggestions.map((suggestion) => (
              <Link href={`/herramientas?q=${encodeURIComponent(suggestion)}`} key={suggestion}>
                {suggestion}
              </Link>
            ))}
          </div>
        </form>
      </section>

      <section className="home-intent" aria-labelledby="home-intent-title">
        <div className="home-intent__inner">
          <p className="eyebrow">Lo que vas a encontrar</p>
          <h2 id="home-intent-title">
            No vengo a decirte cuáles son las mejores herramientas del universo.
          </h2>
          <p>
            Vengo a enseñarte las que uso yo, para qué las uso y qué hostias me han
            evitado —o provocado— por el camino.
          </p>
          <p>Eso incluye:</p>
          <ul>
            {whatYouWillFind.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="button button--primary" href="/herramientas">
            Ver herramientas →
          </Link>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="home-faq-title">
        <div className="home-faq__inner">
          <div className="home-faq__header">
            <h2 id="home-faq-title">Antes de que esto se llene de tornillos</h2>
          </div>
          <div className="home-faq__list">
            {faqs.map((faq) => (
              <article className="home-faq__item" key={faq.question}>
                <h3>{faq.question}</h3>
                {faq.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
