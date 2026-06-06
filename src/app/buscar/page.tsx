import type { Metadata } from "next";
import Link from "next/link";
import { searchLaborjatorio, type SearchResult } from "@/lib/search";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Busca herramientas, categorías y páginas dentro del Laborjatorio."
};

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params?.q ?? "").trim();
  const results = searchLaborjatorio(query);
  const resultCount =
    results.tools.length + results.categories.length + results.pages.length;

  return (
    <section className="page-shell search-page">
      <div className="page-heading search-heading">
        <p className="eyebrow">Buscar</p>
        <h1>{query ? `Resultados para “${query}”` : "Buscar en el Laborjatorio"}</h1>
        <form action="/buscar" className="search-page__form" role="search">
          <label className="sr-only" htmlFor="search-page-input">
            Buscar en Laborjatorio
          </label>
          <input
            defaultValue={query}
            id="search-page-input"
            name="q"
            placeholder="Herramienta, categoría o problema..."
            type="search"
          />
          <button type="submit">Buscar</button>
        </form>
        {query ? (
          <p className="result-count">
            {resultCount} resultado{resultCount === 1 ? "" : "s"}
          </p>
        ) : null}
      </div>

      {!query ? (
        <div className="empty-state">
          <p>Escribe una herramienta, una categoría o un problema que quieras resolver.</p>
        </div>
      ) : null}

      {query && resultCount === 0 ? (
        <div className="empty-state">
          <p>No hay resultados con esa búsqueda todavía.</p>
          <Link href="/inventario">Ver inventario completo</Link>
        </div>
      ) : null}

      {results.tools.length ? (
        <SearchSection title="Herramientas" results={results.tools} />
      ) : null}

      {results.categories.length ? (
        <SearchSection title="Categorías" results={results.categories} />
      ) : null}

      {results.pages.length ? (
        <SearchSection title="Contenido relacionado" results={results.pages} />
      ) : null}
    </section>
  );
}

function SearchSection({ results, title }: { results: SearchResult[]; title: string }) {
  return (
    <section className="search-results" aria-labelledby={`search-${slugifyTitle(title)}`}>
      <h2 id={`search-${slugifyTitle(title)}`}>{title}</h2>
      <div className="search-results__grid">
        {results.map((result) => (
          <article className="search-result-card" key={`${result.kind}-${result.href}`}>
            <span>{result.kind}</span>
            <h3>
              <Link href={result.href}>{result.title}</Link>
            </h3>
            <p>{result.description}</p>
            <Link className="search-result-card__link" href={result.href}>
              Abrir →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function slugifyTitle(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
