"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Category } from "@/data/categories";
import type { Tool } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { slugify } from "@/lib/format";

type ToolFiltersProps = {
  tools: Tool[];
  categories: Category[];
  initialQuery?: string;
};

export function ToolFilters({ tools, categories, initialQuery = "" }: ToolFiltersProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("todas");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = category === "todas" || slugify(tool.category) === category;
      const haystack = [
        tool.name,
        tool.tagline,
        tool.category,
        tool.myUseCase,
        ...tool.subcategories,
        ...tool.bestFor,
        ...tool.teacherUseCases
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && haystack.includes(query.trim().toLowerCase());
    });
  }, [category, query, tools]);

  return (
    <section className="tool-browser" aria-label="Buscador de herramientas">
      <div className="filters">
        <label>
          Buscar
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ej. subtítulos, materiales, IA..."
            type="search"
          />
        </label>
        <label>
          Categoría
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="todas">Todas</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="result-count">
        {filteredTools.length} herramienta{filteredTools.length === 1 ? "" : "s"}
      </div>

      <div className="tool-grid">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {filteredTools.length === 0 ? (
        <div className="empty-state">
          <p>No hay herramientas con esos filtros todavia.</p>
          <Link href="/herramientas">Limpiar busqueda</Link>
        </div>
      ) : null}
    </section>
  );
}
