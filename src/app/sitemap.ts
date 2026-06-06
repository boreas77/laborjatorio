import type { MetadataRoute } from "next";
import { needCategories } from "@/data/needs";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/inventario", "/sobre", ...needCategories.map((need) => `/${need.slug}`)].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
