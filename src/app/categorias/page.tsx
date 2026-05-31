import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { slugify } from "@/lib/format";

export const metadata: Metadata = {
  title: "Categorías",
  description:
    "Categorías de herramientas para profesores: IA, materiales, diseño, organización, automatización, marketing, audio y vídeo."
};

export default function CategoriesPage() {
  return (
    <section className="page-shell">
      <div className="page-heading">
        <p className="eyebrow">Mapa del taller</p>
        <h1>Categorías</h1>
        <p>
          Cada categoría agrupa herramientas por problemas reales del trabajo docente y
          creativo.
        </p>
      </div>
      <div className="category-grid">
        {categories.map((category) => {
          const count = tools.filter((tool) => slugify(tool.category) === category.slug).length;

          return (
            <Link className="category-card" href={`/categorias/${category.slug}`} key={category.slug}>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <span>{count} herramienta{count === 1 ? "" : "s"}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
