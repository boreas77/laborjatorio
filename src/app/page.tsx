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
  "Las herramientas que uso ahora mismo para crear cursos, clases, materiales y contenido sin montar una feria de pestañas.",
  "Mis opciones para grabar, editar vídeos, preparar podcasts, organizar proyectos y automatizar tareas repetitivas.",
  "Cosas muy poco glamurosas pero importantes: desde el equipo con el que trabajo hasta la silla en la que me siento.",
  "Notas honestas sobre por qué uso cada cosa, cuándo me compensa pagar y cuándo creo que puedes pasar sin ella.",
  "Cambios cuando cambie mi flujo de trabajo: si dejo de usar algo, intentaré contar qué lo ha sustituido y por qué."
];

const faqs = [
  {
    question: "¿Cómo sé que una herramienta me va a funcionar?",
    answer:
      "No lo sabes. Y yo tampoco puedo prometerlo. Te cuento lo que uso a día de hoy porque, para mi caso, es la mejor opción que he encontrado. Ojalá también lo sea para el tuyo. Si no, investigas, pruebas otra y me la recomiendas."
  },
  {
    question: "¿Esto es una lista de herramientas con ranking y medallitas?",
    answer:
      "No va de coronar a la herramienta definitiva. Va de explicar qué uso, para qué lo uso y qué problema me resuelve en una semana normal de trabajo."
  },
  {
    question: "¿Recomiendas herramientas que no usas?",
    answer:
      "La idea es que no. Puede que mencione alternativas, pero el corazón del Laborjatorio son las herramientas que han pasado por mi mesa, mis clases, mis cursos o mis pequeñas crisis de calendario."
  },
  {
    question: "¿Hay enlaces de afiliado?",
    answer:
      "Puede haberlos. Si comprobara que una herramienta no merece la pena, no entraría aquí por mucho enlace bonito que tuviera. El criterio editorial va antes que la comisión."
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
          <p>
            Un espacio para profes que enseñan online y quieren elegir herramientas
            sin perder media vida probando botones.
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
          <h2 id="home-intent-title">No te voy a recomendar cualquier herramienta</h2>
          <p>
            Te voy a enseñar las que uso yo: las que me ayudan a crear, vender,
            organizar, grabar, editar y sentarme a trabajar sin sentir que el software
            me está mirando por encima del hombro.
          </p>
          <ul>
            {whatYouWillFind.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="button button--primary" href="/herramientas">
            Ver herramientas
          </Link>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="home-faq-title">
        <div className="home-faq__inner">
          <div className="home-faq__header">
            <p className="eyebrow">Preguntas provisionales</p>
            <h2 id="home-faq-title">Antes de que esto se llene de tornillos</h2>
          </div>
          <div className="home-faq__list">
            {faqs.map((faq) => (
              <article className="home-faq__item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
