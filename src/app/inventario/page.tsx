import type { Metadata } from "next";
import { InventoryFeed } from "@/components/InventoryFeed";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Inventario",
  description:
    "Inventario vivo de herramientas que Borja usa, prueba, mantiene o descarta para enseñar español, crear contenido y trabajar online."
};

type InventoryPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function InventoryPage({ searchParams }: InventoryPageProps) {
  const params = await searchParams;
  const initialQuery = params?.q ?? "";

  return (
    <section className="page-shell inventory-page">
      <div className="page-heading inventory-heading">
        <p className="eyebrow">Inventario</p>
        <h1>Lo último que ha entrado en el Laborjatorio</h1>
        <p>
          Aquí puedes encontrar todas las herramientas que uso. A medida que pruebo,
          cambio o actualizo alguna, siempre encontrarás lo más reciente arriba.
        </p>
      </div>
      <InventoryFeed tools={tools} initialQuery={initialQuery} />
    </section>
  );
}
