import Link from "next/link";
import { categories } from "@/data/categories";

const searchSuggestions = [
  "Crear materiales",
  "Grabar podcasts",
  "Editar vídeo",
  "Organizar proyectos",
  "Vender cursos"
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__image" aria-hidden="true" />
        <div className="home-intro home-intro--compact">
          <h1>Has entrado al laborjatorio</h1>
          <p>Un espacio para profes que enseñan online y no saben qué herramientas utilizar.</p>
        </div>
      </section>

      <section className="home-search" aria-label="Búsqueda guiada de herramientas">
        <form className="home-search__box" action="/herramientas">
          <label htmlFor="home-search-input">¿Qué estás buscando?</label>
          <div className="home-search__field">
            <input
              id="home-search-input"
              name="q"
              placeholder="Ej. subtítulos, IA, podcast, materiales..."
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

      <section className="home-categories" aria-label="Categorías de herramientas">
        <div className="home-categories__grid">
          {categories.map((category) => (
            <Link className="home-category" href={`/categorias/${category.slug}`} key={category.slug}>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-about">
        <div className="home-about__copy">
          <p className="eyebrow">Quién está detrás</p>
          <h2>Esto no lo escribe un comparador de herramientas</h2>
          <p>
            ¿Eres más analógico que un botijo de Badajoz? ¿O simplemente estás
            cansado de perder tiempo probando herramientas que no terminan de encajar
            en tu forma de trabajar?
          </p>
          <p>
            Aquí encontrarás las herramientas que utilizo de verdad en mi negocio.
            Las que me ayudan a crear contenido, gestionar estudiantes, grabar podcasts,
            organizar proyectos y ahorrar tiempo. Sin listas infinitas ni recomendaciones
            patrocinadas. Si algún día dejo de usar una, te explicaré por qué y qué la
            ha sustituido.
          </p>
          <p>
            La tecnología aquí no viene con bata blanca y cara de póster corporativo.
            Viene con criterio docente, pruebas reales y la pregunta que importa: ¿esto
            ayuda a enseñar mejor o solo hace ruido?
          </p>
          <Link className="button button--primary" href="/sobre">
            Sobre mí
          </Link>
        </div>
        <div className="home-about__portrait" aria-label="Espacio para foto de Borja">
          <span>B</span>
        </div>
      </section>
    </>
  );
}
