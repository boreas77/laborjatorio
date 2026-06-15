import type { MetadataRoute } from "next";
import { needCategories } from "@/data/needs";
import { siteConfig } from "@/data/site";
import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/inventario", "/sobre"];
  const needRoutes = needCategories.map((need) => `/${need.slug}`);
  const toolRoutes = tools.map((tool) => `/herramientas/${tool.slug}`);

  return [...staticRoutes, ...needRoutes, ...toolRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
