import Link from "next/link";
import { BrandName } from "@/components/BrandName";
import { HeaderSearch } from "@/components/HeaderSearch";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/">
        <BrandName casing="upper" />
      </Link>
      <nav aria-label="Navegación principal">
        <Link href="/inventario">Inventario</Link>
        <Link href="/sobre">Sobre mí</Link>
        <HeaderSearch />
      </nav>
    </header>
  );
}
