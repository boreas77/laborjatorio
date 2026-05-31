import { spawn } from "node:child_process";
import { createWriteStream, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const logsDir = resolve(root, "logs");
const logPath = resolve(root, "logs", "dev-supervisor.log");
const pidPath = resolve(root, "logs", "dev-supervisor.pid");

mkdirSync(logsDir, { recursive: true });

const log = createWriteStream(logPath, { flags: "a" });

writeFileSync(pidPath, `${process.pid}\n`);

function cleanWindowsEnv(env) {
  const result = {};
  const seen = new Set();

  for (const [key, value] of Object.entries(env)) {
    const normalized = key.toLowerCase();

    if (seen.has(normalized)) {
      continue;
    }

    seen.add(normalized);
    result[key] = value;
  }

  return result;
}

function write(message) {
  log.write(`[${new Date().toISOString()}] ${message}\n`);
}

function start() {
  write("Starting Next dev server on 0.0.0.0:3000");

  const child = spawn(
    "cmd.exe",
    ["/d", "/s", "/c", "npm.cmd run dev -- --hostname 0.0.0.0 --port 3000"],
    {
      cwd: root,
      env: cleanWindowsEnv(process.env),
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true
    }
  );

  child.stdout.on("data", (chunk) => log.write(chunk));
  child.stderr.on("data", (chunk) => log.write(chunk));

  child.on("exit", (code, signal) => {
    write(`Next dev server exited with code=${code} signal=${signal}. Restarting in 2s.`);
    setTimeout(start, 2000);
  });
}

start();
setInterval(() => {}, 60_000);
