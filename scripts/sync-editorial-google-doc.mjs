import fs from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
import { google } from "googleapis";
import ts from "typescript";

const require = createRequire(import.meta.url);

const TRACKING_PATH = "docs/seguimiento-herramientas.md";
const NEEDS_PATH = "src/data/needs.ts";
const DEFAULT_DOCUMENT_ID = "1XYhGTqgE8Idl04eGzm0PM1gPvVgHHprlvL_er3vy8Q8";
const DEFAULT_VERSION_COLUMNS = ["1.0", "2.0", "3.0", "4.0"];

function loadTsExport(filePath, exportName) {
  const source = fs.readFileSync(filePath, "utf8");
  const js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020
    }
  }).outputText;

  const sandbox = { exports: {}, require, console };
  vm.createContext(sandbox);
  vm.runInContext(js, sandbox, { filename: filePath });
  return sandbox.exports[exportName];
}

function parseMarkdownTable(markdown) {
  const lines = markdown.split(/\r?\n/);
  const headerIndex = lines.findIndex(
    (line) =>
      line.includes("| Herramienta |") &&
      line.includes("| Ficha |") &&
      line.includes("| Afiliado |")
  );

  if (headerIndex === -1) {
    throw new Error(`No se ha encontrado la tabla principal en ${TRACKING_PATH}`);
  }

  const rows = [];
  for (const line of lines.slice(headerIndex + 2)) {
    if (!line.trim().startsWith("|")) {
      break;
    }

    const cells = line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());

    if (cells.length === 4 && cells[0]) {
      rows.push({
        name: cells[0],
        ficha: cells[1],
        version: cells[2],
        afiliado: cells[3]
      });
    }
  }

  return rows;
}

function collectVersionColumns(rows) {
  const columns = new Set(DEFAULT_VERSION_COLUMNS);
  for (const row of rows) {
    if (row.version && row.version !== "—") {
      columns.add(row.version);
    }
  }
  return [...columns].sort((a, b) => Number.parseFloat(a) - Number.parseFloat(b));
}

function hasLongCategoryArticle(category) {
  return Boolean(
    category.narrativeIntro?.length ||
      category.narrativeSections?.length ||
      category.narrativeOutro?.length
  );
}

function buildToolsTable() {
  const markdown = fs.readFileSync(TRACKING_PATH, "utf8");
  const rows = parseMarkdownTable(markdown);
  const versionColumns = collectVersionColumns(rows);

  return {
    headers: ["Herramienta", "Ficha", ...versionColumns, "Versión actual", "Afiliado"],
    rows: rows.map((row) => [
      row.name,
      row.ficha === "Sí" ? "✓" : "",
      ...versionColumns.map((version) => (row.version === version ? "✓" : "")),
      row.version,
      row.afiliado
    ])
  };
}

function buildCategoriesTable() {
  const categories = loadTsExport(NEEDS_PATH, "needCategories");
  const rows = categories.map((category) => {
    const hasArticle = hasLongCategoryArticle(category);
    return {
      name: category.title,
      version: category.editorialVersion ?? (hasArticle ? "2.0" : "1.0"),
      article: hasArticle ? "Sí" : "No"
    };
  });
  const versionColumns = collectVersionColumns(rows);

  return {
    headers: ["Categoría", ...versionColumns, "Versión actual", "Artículo largo"],
    rows: rows.map((row) => [
      row.name,
      ...versionColumns.map((version) => (row.version === version ? "✓" : "")),
      row.version,
      row.article
    ])
  };
}

function getAuth() {
  const email =
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");

  if (!email || !privateKey) {
    throw new Error(
      "Faltan GOOGLE_SERVICE_ACCOUNT_EMAIL y GOOGLE_PRIVATE_KEY. Crea los secretos en GitHub y comparte el Google Doc con ese email."
    );
  }

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/documents"]
  });
}

async function clearDocument(docs, documentId) {
  const document = await docs.documents.get({ documentId });
  const content = document.data.body?.content ?? [];
  const endIndex = content.at(-1)?.endIndex;

  if (endIndex && endIndex > 2) {
    await docs.documents.batchUpdate({
      documentId,
      requestBody: {
        requests: [
          {
            deleteContentRange: {
              range: {
                startIndex: 1,
                endIndex: endIndex - 1
              }
            }
          }
        ]
      }
    });
  }
}

async function insertTextAtEnd(docs, documentId, text) {
  const document = await docs.documents.get({ documentId });
  const endIndex = document.data.body?.content?.at(-1)?.endIndex ?? 1;
  const index = Math.max(1, endIndex - 1);

  await docs.documents.batchUpdate({
    documentId,
    requestBody: {
      requests: [
        {
          insertText: {
            location: { index },
            text
          }
        }
      ]
    }
  });

  return index + text.length;
}

async function insertTableAtEnd(docs, documentId, table) {
  const document = await docs.documents.get({ documentId });
  const endIndex = document.data.body?.content?.at(-1)?.endIndex ?? 1;
  const index = Math.max(1, endIndex - 1);

  await docs.documents.batchUpdate({
    documentId,
    requestBody: {
      requests: [
        {
          insertTable: {
            rows: table.rows.length + 1,
            columns: table.headers.length,
            location: { index }
          }
        }
      ]
    }
  });
}

function findTables(document) {
  return (document.data.body?.content ?? [])
    .filter((element) => element.table)
    .map((element) => element.table);
}

function cellInsertIndex(cell) {
  const firstParagraph = cell.content?.find((element) => element.paragraph);
  const firstElement = firstParagraph?.paragraph?.elements?.[0];
  return firstElement?.startIndex;
}

async function populateTable(docs, documentId, tableIndex, table) {
  const document = await docs.documents.get({ documentId });
  const targetTable = findTables(document)[tableIndex];

  if (!targetTable) {
    throw new Error(`No se ha encontrado la tabla ${tableIndex + 1} en el Google Doc.`);
  }

  const values = [table.headers, ...table.rows];
  const requests = [];

  values.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      const cell = targetTable.tableRows?.[rowIndex]?.tableCells?.[columnIndex];
      const index = cell ? cellInsertIndex(cell) : undefined;

      if (!index) {
        throw new Error(
          `No se ha podido localizar la celda ${rowIndex + 1}, ${columnIndex + 1}.`
        );
      }

      if (value) {
        requests.push({
          insertText: {
            location: { index },
            text: String(value)
          }
        });
      }
    });
  });

  requests.sort(
    (a, b) => b.insertText.location.index - a.insertText.location.index
  );

  for (let index = 0; index < requests.length; index += 80) {
    await docs.documents.batchUpdate({
      documentId,
      requestBody: {
        requests: requests.slice(index, index + 80)
      }
    });
  }
}

async function syncGoogleDoc() {
  const documentId = process.env.GOOGLE_DOC_ID || DEFAULT_DOCUMENT_ID;
  const docs = google.docs({ version: "v1", auth: getAuth() });
  const toolsTable = buildToolsTable();
  const categoriesTable = buildCategoriesTable();

  await clearDocument(docs, documentId);

  await insertTextAtEnd(
    docs,
    documentId,
    [
      "Seguimiento editorial de herramientas - Laborjatorio",
      "",
      "Documento interno. No es público y no forma parte del contenido mostrado a los usuarios.",
      "",
      "Herramientas",
      ""
    ].join("\n")
  );
  await insertTableAtEnd(docs, documentId, toolsTable);
  await populateTable(docs, documentId, 0, toolsTable);

  await insertTextAtEnd(
    docs,
    documentId,
    [
      "",
      "",
      "Categorías",
      "",
      "Versión 1.0: aparecen las fichas correspondientes a la categoría.",
      "Versión 2.0: existe artículo largo de categoría con lista final de herramientas.",
      "Versiones 3.0 y 4.0: reservadas para revisiones editoriales profundas futuras.",
      ""
    ].join("\n")
  );
  await insertTableAtEnd(docs, documentId, categoriesTable);
  await populateTable(docs, documentId, 1, categoriesTable);

  await insertTextAtEnd(
    docs,
    documentId,
    [
      "",
      "",
      "Mantenimiento futuro",
      "",
      "Cada vez que se publique o reescriba de forma importante una ficha, la fuente real debe actualizarse en src/data/tools.ts.",
      "El seguimiento interno y este Google Doc se sincronizan desde esa fuente.",
      "No se debe subir de versión por erratas, enlaces, precios, imágenes o retoques menores."
    ].join("\n")
  );

  console.log("Google Doc de seguimiento editorial sincronizado.");
}

syncGoogleDoc().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
