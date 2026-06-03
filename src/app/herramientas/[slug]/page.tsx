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

  const title = tool.title || `${tool.name} para profesores`;

  return {
    title,
    description: tool.tagline,
    alternates: {
      canonical: `/herramientas/${tool.slug}`
    },
    openGraph: {
      title,
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
  const title = tool.title || `${tool.name} para profesores`;
  const hasRichEditorialBlocks =
    Boolean(tool.importantNotice) ||
    Boolean(tool.metrics?.length) ||
    Boolean(tool.priceRows?.length) ||
    Boolean(tool.alternativeDetails?.length);

  return (
    <article className="page-shell tool-page">
      <div className="tool-hero">
        <div>
          <Link className="back-link" href="/herramientas">
            Volver al directorio
          </Link>
          <p className="eyebrow">Ficha de laboratorio / {tool.category}</p>
          <h1>{title}</h1>
          {!hasRichEditorialBlocks ? <p>{tool.tagline}</p> : null}
          <div className="lab-notes lab-notes--dark" aria-label="Resumen editorial">
            <span>{labelFromPricing(tool.pricing)}</span>
            <span>Dificultad {labelFromDifficulty(tool.difficulty)}</span>
            <span>{labelFromStatus(tool.status)}</span>
          </div>
        </div>
        {!hasRichEditorialBlocks ? (
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
        ) : null}
      </div>

      <div className={hasRichEditorialBlocks ? "tool-single-column" : "content-grid"}>
        <div className="prose">
          {tool.importantNotice ? (
            <aside className="tool-alert">
              <p>{tool.importantNotice}</p>
            </aside>
          ) : null}

          {!hasRichEditorialBlocks ? (
            <section>
              <h2>La respuesta corta</h2>
              <p>{tool.honestVerdict}</p>
            </section>
          ) : null}

          <section>
            <h2>{hasRichEditorialBlocks ? "Qué es y para qué sirve" : "Para qué sirve"}</h2>
            <p>{tool.whatItDoes}</p>
          </section>

          {tool.metrics?.length ? (
            <section>
              <div className="tool-metrics" aria-label="Estadísticas reales">
                {tool.metrics.map((metric) => (
                  <div className="tool-metric" key={`${metric.value}-${metric.label}`}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <h2>{hasRichEditorialBlocks ? "Cómo lo uso yo" : "Cómo la llevaría a mi mesa de trabajo"}</h2>
            <p>{tool.howIUseIt}</p>
          </section>

          {hasRichEditorialBlocks ? (
            <section>
              <h2>Ventajas e inconvenientes</h2>
              <div className="tool-pros-cons">
                <div>
                  <h3>Lo que funciona bien</h3>
                  <ul className="tool-pros">
                    {tool.pros.map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Lo que hay que saber</h3>
                  <ul>
                    {tool.cons.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ) : (
            <>
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
            </>
          )}

          {hasRichEditorialBlocks ? (
            <>
              <section>
                <h2>Precio</h2>
                {tool.priceRows?.length ? (
                  <div className="tool-price-table">
                    {tool.priceRows.map((row) => (
                      <div key={row.label}>
                        <span>{row.label}</span>
                        <strong>{row.value}</strong>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{labelFromPricing(tool.pricing)}</p>
                )}
                {tool.priceNote ? <p>{tool.priceNote}</p> : null}
              </section>
              <section>
                <h2>Para quién tiene sentido</h2>
                <ul>
                  {tool.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>No la usaría para...</h2>
                <ul>
                  {tool.notFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <div className="tool-verdict">
                  <p className="tool-verdict__label">Veredicto honesto</p>
                  <p>{tool.honestVerdict}</p>
                </div>
              </section>
              <section>
                <h2>Alternativas</h2>
                {tool.alternativeDetails?.length ? (
                  <ul className="tool-alternative-links">
                    {tool.alternativeDetails.map((alternative) => (
                      <li key={alternative.name}>
                        {alternative.url ? (
                          <a href={alternative.url} target="_blank" rel="noopener noreferrer">
                            {alternative.name}
                          </a>
                        ) : (
                          alternative.name
                        )}
                        {alternative.description ? <span>{alternative.description}</span> : null}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul>
                    {tool.alternatives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
              {tool.cta ? (
                <section className="tool-cta">
                  <p>
                    Si te interesa organizar mejor tu vida digital como profesor, en{" "}
                    <a href="https://borjaprofe.com" target="_blank" rel="noopener noreferrer">
                      borjaprofe.com
                    </a>{" "}
                    cuento estas cosas con calma.
                  </p>
                </section>
              ) : null}
            </>
          ) : null}
        </div>

        {!hasRichEditorialBlocks ? (
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
        ) : null}
      </div>
    </article>
  );
}
