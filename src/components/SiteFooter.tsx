import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{siteConfig.affiliateDisclosure}</p>
    </footer>
  );
}
