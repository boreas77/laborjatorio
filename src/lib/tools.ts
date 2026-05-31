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
  const normalizedQuery = query.trim().toLowerCase();

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
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}
