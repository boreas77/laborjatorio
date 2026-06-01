import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/herramientas", "/sobre"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
