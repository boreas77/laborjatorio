import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { InventoryFeed } from "@/components/InventoryFeed";
import { needCategories, getNeedCategoryBySlug } from "@/data/needs";
import { tools } from "@/data/tools";

type NeedPageProps = {
  params: Promise<{
    needSlug: string;
  }>;
};

export function generateStaticParams() {
  return needCategories.map((need) => ({
    needSlug: need.slug
  }));
}

export async function generateMetadata({ params }: NeedPageProps): Promise<Metadata> {
  const { needSlug } = await params;
  const need = getNeedCategoryBySlug(needSlug);

  if (!need) {
    return {};
  }

  return {
    title: need.articleTitle || need.title,
    description:
      need.metaDescription || `${need.description} Herramientas del Laborjatorio relacionadas con esta necesidad.`,
    keywords: [
      need.title,
      "herramientas para profesores",
      "negocio online para profesores",
      "recursos para profes"
    ],
    alternates: {
      canonical: `/${need.slug}`
    },
    openGraph: {
      title: need.articleTitle || need.title,
      description:
        need.metaDescription || `${need.description} Herramientas del Laborjatorio relacionadas con esta necesidad.`,
      type: "article",
      url: `/${need.slug}`
    }
  };
}

export default async function NeedPage({ params }: NeedPageProps) {
  const { needSlug } = await params;
  const need = getNeedCategoryBySlug(needSlug);

  if (!need) {
    notFound();
  }

  const relatedTools = tools.filter((tool) => need.toolSlugs.includes(tool.slug));
  const hasNarrativeSections = Boolean(need.narrativeSections?.length);

  return (
    <article className="page-shell tool-page need-page">
      <div className="tool-hero">
        <div>
          <Link className="back-link" href="/">
            Volver a la home
          </Link>
          <p className="eyebrow">Categoría de laboratorio</p>
          <h1>{need.articleTitle || need.title}</h1>
          {!hasNarrativeSections ? <p>{need.description}</p> : null}
        </div>
      </div>

      {hasNarrativeSections ? (
        <div className="tool-single-column">
          <div className="prose">
            <div className="need-article-body">
              {(need.narrativeIntro || []).map((paragraph) => (
                <p key={paragraph}>{renderInlineMarkdown(paragraph)}</p>
              ))}

              {need.narrativeSections?.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{renderInlineMarkdown(paragraph)}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{renderInlineMarkdown(bullet)}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              {need.narrativeOutro?.map((paragraph) => (
                <p key={paragraph}>{renderInlineMarkdown(paragraph)}</p>
              ))}
            </div>

            {["crear-contenido", "crear-materiales"].includes(need.slug) ? (
              <CreateContentSalesCta />
            ) : null}

            <section>
              <h2>Herramientas relacionadas</h2>
              <InventoryFeed
                tools={relatedTools}
                countLabel="en esta categoría"
                emptyLabel="Todavía no hay herramientas en esta categoría."
                searchLabel="Buscar dentro de esta categoría"
              />
            </section>
          </div>
        </div>
      ) : (
        <section className="inventory-page need-page">
          <div className="page-heading inventory-heading">
            <p>{need.description}</p>
            <p>
              De momento, mientras preparo el artículo largo de esta categoría, aquí tienes
              las fichas de herramientas del Laborjatorio que encajan con esta necesidad.
            </p>
          </div>
          <InventoryFeed
            tools={relatedTools}
            countLabel="en esta categoría"
            emptyLabel="Todavía no hay herramientas en esta categoría."
            searchLabel="Buscar dentro de esta categoría"
          />
        </section>
      )}
    </article>
  );
}

function CreateContentSalesCta() {
  return (
    <section className="need-sales-cta" aria-labelledby="need-sales-cta-title">
      <h2 id="need-sales-cta-title">
        Crear materiales está muy bien, pero que te los compren es todavía mejor
      </h2>
      <p>
        Muchos profes dedican infinitas horas a crear cursos y formaciones, pero luego se
        topan con dos problemas:
      </p>
      <ul>
        <li>Les da miedito venderlas.</li>
        <li>Lo intentan, pero los estudiantes pasan en moto (y vuelta al problema 1).</li>
      </ul>
      <p>
        Si quieres que los estudiantes te persigan a ti y no al revés, esto igual te
        interesa.
      </p>
      <div className="need-sales-cta__actions">
        <a
          className="need-sales-cta__button"
          href="https://borjaprofe.com/escritura-persuasiva-para-profes/"
        >
          Escritura persuasiva para profes
        </a>
      </div>
    </section>
  );
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(<strong key={`${match.index}-strong`}>{token.slice(2, -2)}</strong>);
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        if (href.startsWith("/")) {
          nodes.push(
            <Link key={`${match.index}-link`} href={href}>
              {label}
            </Link>
          );
        } else {
          nodes.push(
            <a key={`${match.index}-link`} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
      } else {
        nodes.push(token);
      }
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
