import { redirect } from "next/navigation";

type ToolsPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const params = await searchParams;
  const query = params?.q;

  redirect(query ? `/inventario?q=${encodeURIComponent(query)}` : "/inventario");
}
