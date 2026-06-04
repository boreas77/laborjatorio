import Link from "next/link";
import { BrandName } from "@/components/BrandName";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/">
        <BrandName casing="upper" />
      </Link>
      <nav aria-label="Navegacion principal">
        <Link href="/herramientas">Herramientas</Link>
        <Link href="/sobre">Sobre mí</Link>
      </nav>
    </header>
  );
}
