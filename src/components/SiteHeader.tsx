import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/">
        {siteConfig.name}
      </Link>
      <nav aria-label="Navegacion principal">
        <Link href="/herramientas">Herramientas</Link>
        <Link href="/categorias">Categorías</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
