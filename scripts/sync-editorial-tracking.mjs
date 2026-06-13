import fs from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const CHECK_MODE = process.argv.includes("--check");
const TRACKING_PATH = "docs/seguimiento-herramientas.md";
const TOOLS_PATH = "src/data/tools.ts";

function loadTools() {
  const source = fs.readFileSync(TOOLS_PATH, "utf8");
  const js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020
    }
  }).outputText;

  const sandbox = { exports: {}, require, console };
  vm.createContext(sandbox);
  vm.runInContext(js, sandbox, { filename: TOOLS_PATH });
  return sandbox.exports.tools;
}

function parseExistingRows(markdown) {
  const rows = new Map();
  const tableMatch = markdown.match(
    /\| Herramienta \| Ficha \| Versión \| Afiliado \|\r?\n\|---\|---\|---\|---\|\r?\n(?<rows>[\s\S]*?)\r?\n## Significado de las versiones/
  );

  if (!tableMatch?.groups?.rows) {
    throw new Error(`No se ha encontrado la tabla principal en ${TRACKING_PATH}`);
  }

  for (const line of tableMatch.groups.rows.trim().split(/\r?\n/)) {
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());

    if (cells.length === 4 && cells[0]) {
      rows.set(cells[0], {
        name: cells[0],
        ficha: cells[1],
        version: cells[2],
        afiliado: cells[3]
      });
    }
  }

  return rows;
}

function buildRows(tools, existingRows) {
  const toolRows = tools.map((tool) => ({
    name: tool.name,
    ficha: "Sí",
    version: tool.editorialVersion ?? "1.0",
    afiliado: tool.hasAffiliate ? "Sí" : "No"
  }));

  const toolNames = new Set(toolRows.map((row) => row.name));
  const pendingRows = [...existingRows.values()]
    .filter((row) => !toolNames.has(row.name))
    .map((row) => ({
      name: row.name,
      ficha: "No",
      version: "—",
      afiliado: "No"
    }));

  return [...toolRows, ...pendingRows];
}

function renderTable(rows) {
  return [
    "| Herramienta | Ficha | Versión | Afiliado |",
    "|---|---|---|---|",
    ...rows.map(
      (row) =>
        `| ${row.name} | ${row.ficha} | ${row.version} | ${row.afiliado} |`
    )
  ].join("\n");
}

function sync() {
  const markdown = fs.readFileSync(TRACKING_PATH, "utf8");
  const existingRows = parseExistingRows(markdown);
  const rows = buildRows(loadTools(), existingRows);
  const table = renderTable(rows);
  const nextMarkdown = markdown.replace(
    /\| Herramienta \| Ficha \| Versión \| Afiliado \|\r?\n\|---\|---\|---\|---\|\r?\n[\s\S]*?\r?\n(?=## Significado de las versiones)/,
    `${table}\n\n`
  );

  if (nextMarkdown === markdown) {
    console.log("Seguimiento editorial ya está sincronizado.");
    return;
  }

  if (CHECK_MODE) {
    console.error(
      "docs/seguimiento-herramientas.md no está sincronizado con src/data/tools.ts. Ejecuta npm run sync:editorial."
    );
    process.exit(1);
  }

  fs.writeFileSync(TRACKING_PATH, nextMarkdown);
  console.log("Seguimiento editorial sincronizado.");
}

sync();
