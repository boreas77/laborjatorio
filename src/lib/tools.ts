import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { slugify } from "@/lib/format";

export function getFeaturedTools() {
  return tools.filter((tool) => tool.status === "uso-actual").slice(0, 3);
}

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategorySlug(categorySlug: string) {
  const category = categories.find((item) => item.slug === categorySlug);

  if (!category) {
    return [];
  }

  return tools.filter((tool) => slugify(tool.category) === category.slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function searchTools(query: string) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return tools;
  }

  return tools.filter((tool) => {
    const haystack = [
      tool.name,
      tool.tagline,
      tool.category,
      tool.myUseCase,
      ...tool.subcategories,
      ...tool.bestFor,
      ...tool.teacherUseCases
    ]
      .join(" ");

    return normalizeSearchText(haystack).includes(normalizedQuery);
  });
}

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[\s._-]+/g, "");
}
