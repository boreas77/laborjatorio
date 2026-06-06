"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Tool } from "@/data/tools";
import { labelFromStatus } from "@/lib/format";

type InventoryFeedProps = {
  initialQuery?: string;
  tools: Tool[];
};

const iconByCategory: Record<string, InventoryIconName> = {
  "Audio y vídeo": "video",
  Bienestar: "heart",
  "Diseño e imagen": "palette",
  "Equipo físico": "desk",
  "IA y agentes": "sparkles",
  "Marketing y ventas": "card",
  Organización: "folder",
  Productividad: "file",
  "Creación de materiales": "layers"
};

export function InventoryFeed({ initialQuery = "", tools }: InventoryFeedProps) {
  const [query, setQuery] = useState(initialQuery);
  const sortedTools = useMemo(
    () =>
      [...tools].sort(
        (first, second) =>
          new Date(second.updatedAt).getTime() - new Date(first.updatedAt).getTime()
      ),
    [tools]
  );

  const filteredTools = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query);

    if (!normalizedQuery) {
      return sortedTools;
    }

    return sortedTools.filter((tool) => {
      const haystack = [
        tool.name,
        tool.tagline,
        tool.category,
        tool.myUseCase,
        tool.status,
        ...tool.subcategories,
        ...tool.bestFor,
        ...tool.teacherUseCases
      ].join(" ");

      return normalizeSearchText(haystack).includes(normalizedQuery);
    });
  }, [query, sortedTools]);

  return (
    <section className="inventory-browser" aria-label="Inventario de herramientas">
      <label className="inventory-search">
        Buscar en el inventario
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar herramienta, problema o uso..."
          type="search"
        />
      </label>

      <p className="inventory-count">
        {filteredTools.length} herramienta{filteredTools.length === 1 ? "" : "s"} en el
        inventario
      </p>

      <div className="inventory-feed">
        {filteredTools.map((tool) => (
          <article className="inventory-entry" key={tool.slug}>
            <div className="inventory-entry__icon">
              <InventoryIcon name={iconByCategory[tool.category] ?? "tool"} />
            </div>
            <div className="inventory-entry__content">
              <time dateTime={tool.updatedAt}>{formatDate(tool.updatedAt)}</time>
              <h2>
                <Link href={`/herramientas/${tool.slug}`}>{tool.name}</Link>
              </h2>
              <div className="inventory-entry__meta">
                <span>{tool.category}</span>
                <span>{labelFromStatus(tool.status)}</span>
              </div>
              <p>{tool.tagline}</p>
              <Link className="inventory-entry__link" href={`/herramientas/${tool.slug}`}>
                Ver ficha →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredTools.length === 0 ? (
        <div className="empty-state">
          <p>No hay herramientas con esa búsqueda todavía.</p>
          <button type="button" onClick={() => setQuery("")}>
            Limpiar búsqueda
          </button>
        </div>
      ) : null}
    </section>
  );
}

type InventoryIconName =
  | "card"
  | "desk"
  | "file"
  | "folder"
  | "heart"
  | "layers"
  | "palette"
  | "sparkles"
  | "tool"
  | "video";

function InventoryIcon({ name }: { name: InventoryIconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
    viewBox: "0 0 24 24"
  };

  switch (name) {
    case "card":
      return (
        <svg {...commonProps}>
          <rect height="14" rx="2" width="20" x="2" y="5" />
          <path d="M2 10h20" />
          <path d="M7 15h3" />
        </svg>
      );
    case "desk":
      return (
        <svg {...commonProps}>
          <rect height="8" rx="1.5" width="14" x="5" y="4" />
          <path d="M3 16h18" />
          <path d="M7 16v4" />
          <path d="M17 16v4" />
          <path d="M12 12v4" />
        </svg>
      );
    case "file":
      return (
        <svg {...commonProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h5" />
        </svg>
      );
    case "folder":
      return (
        <svg {...commonProps}>
          <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...commonProps}>
          <path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6a5 5 0 1 1 7.5 6.6Z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...commonProps}>
          <path d="m12 3 9 5-9 5-9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      );
    case "palette":
      return (
        <svg {...commonProps}>
          <path d="M12 22a10 10 0 1 1 10-10 3 3 0 0 1-3 3h-2a2 2 0 0 0-2 2 2 2 0 0 1-2 2h-1Z" />
          <circle cx="7.5" cy="10.5" r=".5" />
          <circle cx="10.5" cy="7.5" r=".5" />
          <circle cx="14.5" cy="7.5" r=".5" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...commonProps}>
          <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
          <path d="M19 16v4" />
          <path d="M21 18h-4" />
          <path d="M5 3v4" />
          <path d="M7 5H3" />
        </svg>
      );
    case "video":
      return (
        <svg {...commonProps}>
          <rect height="12" rx="2" width="15" x="3" y="6" />
          <path d="m18 10 4-2v8l-4-2Z" />
        </svg>
      );
    case "tool":
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.1-2.1Z" />
        </svg>
      );
  }
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[\s._-]+/g, "");
}
