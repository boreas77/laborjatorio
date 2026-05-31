import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre el proyecto",
  description:
    "LABORJATORIO nace para recomendar herramientas desde la experiencia real de un profesor."
};

export default function AboutPage() {
  return (
    <section className="page-shell narrow">
      <div className="page-heading">
        <p className="eyebrow">Sobre el proyecto</p>
        <h1>Una caja de herramientas con criterio, polvo de tiza y algún cable suelto</h1>
        <p>
          LABORJATORIO nace de probar herramientas en el trabajo real de profesor,
          creador de materiales y productor de contenido.
        </p>
      </div>
      <div className="prose">
        <p>
          La web no intenta perseguir cada herramienta nueva. Su objetivo es separar lo
          útil de lo ruidoso y explicar cómo puede usarlo un profesor en situaciones
          concretas.
        </p>
        <p>
          Aquí importan las preguntas prácticas: qué problema resuelve, cuándo merece
          pagar, dónde está la trampa y qué alternativa tiene sentido si esta herramienta
          no encaja.
        </p>
        <p>
          La idea no es sonar tecnológico por deporte. Una herramienta solo entra en este
          laboratorio si ayuda a enseñar mejor, crear experiencias más memorables o ahorrar
          tiempo sin arrancarle el alma al trabajo.
        </p>
        <p>
          También puede haber enlaces de afiliado. Eso no cambia el criterio editorial:
          una comisión no convierte una mala herramienta en recomendable.
        </p>
        <Link className="button button--primary" href="/herramientas">
          Explorar herramientas
        </Link>
      </div>
    </section>
  );
}
