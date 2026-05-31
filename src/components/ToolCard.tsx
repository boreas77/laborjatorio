import Link from "next/link";
import type { Tool } from "@/data/tools";
import { labelFromPricing } from "@/lib/format";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="tool-card">
      <div className="tool-card__meta">
        <span>{tool.category}</span>
        <span>{labelFromPricing(tool.pricing)}</span>
      </div>
      <h3>
        <Link href={`/herramientas/${tool.slug}`}>{tool.name}</Link>
      </h3>
      <p>{tool.tagline}</p>
      <div className="tool-card__footer">
        <span>{labelFromPricing(tool.pricing)}</span>
      </div>
    </article>
  );
}
