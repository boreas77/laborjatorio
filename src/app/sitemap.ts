import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/site";
import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/herramientas", "/categorias", "/sobre", "/afiliacion"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));

  const toolRoutes = tools.map((tool) => ({
    url: `${siteConfig.url}/herramientas/${tool.slug}`,
    lastModified: new Date(tool.updatedAt)
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/categorias/${category.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...toolRoutes, ...categoryRoutes];
}
