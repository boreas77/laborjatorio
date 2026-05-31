import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolCard } from "@/components/ToolCard";
import { categories } from "@/data/categories";
import { getCategoryBySlug, getToolsByCategorySlug } from "@/lib/tools";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} para profesores`,
    description: category.description,
    alternates: {
      canonical: `/categorias/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategorySlug(slug);

  return (
    <section className="page-shell">
      <div className="page-heading">
        <Link className="back-link" href="/categorias">
          Volver a categorías
        </Link>
        <p className="eyebrow">Categoría</p>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
      {categoryTools.length > 0 ? (
        <div className="tool-grid">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Todavía no hay herramientas publicadas en esta categoría.</p>
          <Link href="/herramientas">Ver todo el directorio</Link>
        </div>
      )}
    </section>
  );
}
