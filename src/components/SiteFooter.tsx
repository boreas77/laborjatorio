import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{siteConfig.affiliateDisclosure}</p>
      <p>Herramientas probadas con criterio de profe. Sin solemnidad innecesaria.</p>
    </footer>
  );
}
