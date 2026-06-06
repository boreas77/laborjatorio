import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export type SearchResult = {
  description: string;
  href: string;
  kind: "Herramienta" | "Categoría" | "Página";
  title: string;
};

const sitePages: SearchResult[] = [
  {
    title: "Inventario",
    description: "Todas las herramientas registradas en el Laborjatorio.",
    href: "/inventario",
    kind: "Página"
  },
  {
    title: "Sobre mí",
    description: "La relación entre Laborjatorio y el trabajo de Borja.",
    href: "/sobre",
    kind: "Página"
  },
  {
    title: "Inicio",
    description: "Entrada principal al Laborjatorio.",
    href: "/",
    kind: "Página"
  }
];

export function searchLaborjatorio(query: string) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return {
      categories: [],
      pages: [],
      tools: []
    };
  }

  const toolResults: SearchResult[] = tools
    .filter((tool) =>
      includesQuery(
        [
          tool.name,
          tool.title,
          tool.metaDescription,
          tool.tagline,
          tool.category,
          tool.myUseCase,
          tool.whatItDoes,
          tool.howIUseIt,
          tool.honestVerdict,
          ...tool.subcategories,
          ...tool.bestFor,
          ...tool.notFor,
          ...tool.pros,
          ...tool.cons,
          ...tool.alternatives,
          ...tool.teacherUseCases,
          ...(tool.keywords ?? [])
        ],
        normalizedQuery
      )
    )
    .map((tool) => ({
      title: tool.name,
      description: tool.tagline,
      href: `/herramientas/${tool.slug}`,
      kind: "Herramienta" as const
    }));

  const categoryResults: SearchResult[] = categories
    .filter((category) =>
      includesQuery([category.name, category.slug, category.description], normalizedQuery)
    )
    .map((category) => ({
      title: category.name,
      description: category.description,
      href: `/buscar?q=${encodeURIComponent(category.name)}`,
      kind: "Categoría" as const
    }));

  const pageResults = sitePages.filter((page) =>
    includesQuery([page.title, page.description, page.href], normalizedQuery)
  );

  return {
    categories: categoryResults,
    pages: pageResults,
    tools: toolResults
  };
}

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function includesQuery(values: Array<string | undefined>, normalizedQuery: string) {
  return normalizeSearchText(values.filter(Boolean).join(" ")).includes(normalizedQuery);
}
