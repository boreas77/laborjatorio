import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso de afiliación",
  description: "Aviso honesto sobre enlaces de afiliado en LABORJATORIO."
};

export default function AffiliatePage() {
  return (
    <section className="page-shell narrow">
      <div className="page-heading">
        <p className="eyebrow">Transparencia</p>
        <h1>Aviso de afiliación</h1>
      </div>
      <div className="prose">
        <p>{siteConfig.affiliateDisclosure}</p>
        <p>
          La afiliación ayuda a sostener el proyecto, pero no debe mandar sobre el
          criterio. Las recomendaciones tienen que ser útiles para profesores reales.
        </p>
      </div>
    </section>
  );
}
