import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InventoryFeed } from "@/components/InventoryFeed";
import { needCategories, getNeedCategoryBySlug } from "@/data/needs";
import { tools } from "@/data/tools";

type NeedPageProps = {
  params: Promise<{
    needSlug: string;
  }>;
};

export function generateStaticParams() {
  return needCategories.map((need) => ({
    needSlug: need.slug
  }));
}

export async function generateMetadata({ params }: NeedPageProps): Promise<Metadata> {
  const { needSlug } = await params;
  const need = getNeedCategoryBySlug(needSlug);

  if (!need) {
    return {};
  }

  return {
    title: need.title,
    description: `${need.description} Herramientas del Laborjatorio relacionadas con esta necesidad.`
  };
}

export default async function NeedPage({ params }: NeedPageProps) {
  const { needSlug } = await params;
  const need = getNeedCategoryBySlug(needSlug);

  if (!need) {
    notFound();
  }

  const relatedTools = tools.filter((tool) => need.toolSlugs.includes(tool.slug));

  return (
    <section className="page-shell inventory-page need-page">
      <div className="page-heading inventory-heading">
        <p className="eyebrow">Necesidad</p>
        <h1>{need.title}</h1>
        <p>{need.description}</p>
        <p>
          De momento, mientras preparo el artículo largo de esta categoría, aquí tienes
          las fichas de herramientas del Laborjatorio que encajan con esta necesidad.
        </p>
      </div>
      <InventoryFeed
        tools={relatedTools}
        countLabel="en esta categoría"
        emptyLabel="Todavía no hay herramientas en esta categoría."
        searchLabel="Buscar dentro de esta categoría"
      />
    </section>
  );
}
