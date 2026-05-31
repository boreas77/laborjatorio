import type { Metadata } from "next";
import { ToolFilters } from "@/components/ToolFilters";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Herramientas",
  description:
    "Directorio de herramientas para profesores de español: IA, diseño, organización, automatización, audio, vídeo y materiales."
};

type ToolsPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const params = await searchParams;
  const initialQuery = params?.q ?? "";

  return (
    <section className="page-shell">
      <div className="page-heading">
        <p className="eyebrow">Directorio</p>
        <h1>Herramientas para profesores</h1>
        <p>
          Busca por nombre, categoría o problema. La idea no es acumular software,
          sino encontrar herramientas que ayuden de verdad a trabajar mejor.
        </p>
      </div>
      <ToolFilters tools={tools} categories={categories} initialQuery={initialQuery} />
    </section>
  );
}
