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
        <Link href="/categorias">Categorías</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
