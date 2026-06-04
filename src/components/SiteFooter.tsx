import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="site-footer__notice">{siteConfig.affiliateDisclosure}</p>
    </footer>
  );
}
