import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { labelFromDifficulty, labelFromPricing, labelFromStatus } from "@/lib/format";
import { getToolBySlug } from "@/lib/tools";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {};
  }

  return {
    title: `${tool.name} para profesores`,
    description: tool.tagline,
    alternates: {
      canonical: `/herramientas/${tool.slug}`
    },
    openGraph: {
      title: `${tool.name} para profesores`,
      description: tool.tagline,
      type: "article"
    }
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const primaryUrl = tool.affiliateUrl || tool.officialUrl;

  return (
    <article className="page-shell">
      <div className="tool-hero">
        <div>
          <Link className="back-link" href="/herramientas">
            Volver al directorio
          </Link>
          <p className="eyebrow">Ficha de laboratorio / {tool.category}</p>
          <h1>{tool.name} para profesores</h1>
          <p>{tool.tagline}</p>
          <div className="lab-notes lab-notes--dark" aria-label="Resumen editorial">
            <span>{labelFromPricing(tool.pricing)}</span>
            <span>Dificultad {labelFromDifficulty(tool.difficulty)}</span>
            <span>{labelFromStatus(tool.status)}</span>
          </div>
        </div>
        <aside className="tool-summary" aria-label="Resumen rápido">
          <p className="tool-summary__label">Veredicto corto</p>
          <p className="tool-summary__verdict">{tool.honestVerdict}</p>
          <dl>
            <div>
              <dt>Precio</dt>
              <dd>{labelFromPricing(tool.pricing)}</dd>
            </div>
            <div>
              <dt>Dificultad</dt>
              <dd>{labelFromDifficulty(tool.difficulty)}</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd>{labelFromStatus(tool.status)}</dd>
            </div>
            <div>
              <dt>Valoración</dt>
              <dd>{tool.rating}/5</dd>
            </div>
          </dl>
          <a className="button button--primary" href={primaryUrl} rel="nofollow sponsored noopener" target="_blank">
            Ir a {tool.name}
          </a>
          {tool.hasAffiliate ? <p className="affiliate-note">Este enlace puede ser de afiliado.</p> : null}
        </aside>
      </div>

      <div className="content-grid">
        <div className="prose">
          <section>
            <h2>La respuesta corta</h2>
            <p>{tool.honestVerdict}</p>
          </section>
          <section>
            <h2>Para qué sirve</h2>
            <p>{tool.whatItDoes}</p>
          </section>
          <section>
            <h2>Cómo la llevaría a mi mesa de trabajo</h2>
            <p>{tool.howIUseIt}</p>
          </section>
          <section>
            <h2>Casos de uso para profes</h2>
            <ul>
              {tool.teacherUseCases.map((useCase) => (
                <li key={useCase}>{useCase}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Ventajas reales</h2>
            <ul>
              {tool.pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Limitaciones</h2>
            <ul>
              {tool.cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="side-panel">
          <h2>Te interesa si...</h2>
          <ul>
            {tool.bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>No la usaría para...</h2>
          <ul>
            {tool.notFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Alternativas</h2>
          <ul>
            {tool.alternatives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
