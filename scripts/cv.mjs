// Gera os PDFs do currículo a partir de cv/pt.html e cv/en.html.
// Uso: npm run cv  (precisa do Microsoft Edge ou do Google Chrome instalado;
// para outro navegador, defina a variável BROWSER com o caminho do executável).

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const browser = [
  process.env.BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((candidate) => candidate && existsSync(candidate));

if (!browser) {
  console.error("Nenhum Edge ou Chrome encontrado. Defina BROWSER com o caminho do navegador.");
  process.exit(1);
}

const jobs = [
  ["cv/pt.html", "public/cv-jhonatan-goncalves-pereira.pdf"],
  ["cv/en.html", "public/cv-jhonatan-goncalves-pereira-en.pdf"],
];

// Perfil temporário: evita conflito com o navegador aberto do usuário.
const profile = mkdtempSync(path.join(tmpdir(), "cv-browser-"));

try {
  for (const [source, target] of jobs) {
    const output = path.join(root, target);
    execFileSync(
      browser,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-pdf-header-footer",
        `--user-data-dir=${profile}`,
        `--print-to-pdf=${output}`,
        pathToFileURL(path.join(root, source)).href,
      ],
      { stdio: "ignore" },
    );
    console.log(`ok  ${target}  (${Math.round(statSync(output).size / 1024)} KB)`);
  }
} finally {
  rmSync(profile, { recursive: true, force: true });
}
