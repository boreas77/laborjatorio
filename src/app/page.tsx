import Link from "next/link";
import { BrandName } from "@/components/BrandName";
import { categories } from "@/data/categories";

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

      <section className="home-categories" aria-labelledby="home-categories-title">
        <div className="home-categories__inner">
          <h2 id="home-categories-title">¿Qué estás buscando?</h2>
          <div className="category-grid">
            {categories.map((category) => (
              <Link
                className="category-card"
                href={`/buscar?q=${encodeURIComponent(category.name)}`}
                key={category.slug}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span>Entrar →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-borja-cta" aria-labelledby="home-borja-cta-title">
        <div className="home-borja-cta__inner">
          <h2 id="home-borja-cta-title">Y esas son las herramientas que utilizo en mi día a día.</h2>
          <div className="home-borja-cta__photo" aria-label="Foto de Borja pendiente" />
          <div className="home-borja-cta__body">
            <p>
              Si quieres ver <strong>cómo las uso para ayudar a estudiantes y a otros
              profes</strong>, puedes comprobarlo aquí.
            </p>
            <a className="button button--primary" href="https://borjaprofe.com">
              Ir a Borjaprofe.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
