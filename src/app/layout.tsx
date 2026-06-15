import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "herramientas para profes",
    "herramientas para profesores online",
    "negocio online para profesores",
    "crear materiales didacticos",
    "crear contenido para profes",
    "automatizaciones para profesores",
    "apps para profes de espanol",
    "recursos para profesores de idiomas"
  ],
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/images/laborjatorio-borja-avatar.jpg",
    apple: "/images/laborjatorio-borja-avatar.jpg"
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: "/images/laborjatorio-borja-avatar.jpg",
        width: 512,
        height: 512,
        alt: "Borja en el Laborjatorio"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/laborjatorio-borja-avatar.jpg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <img
          src="https://tracker.metricool.com/c3po.jpg?hash=797c2f69c1499494f4c8714d8313dc60"
          alt=""
          aria-hidden="true"
          width="1"
          height="1"
          loading="eager"
          style={{
            height: 1,
            opacity: 0,
            pointerEvents: "none",
            position: "absolute",
            width: 1
          }}
        />
      </body>
    </html>
  );
}
