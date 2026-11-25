// Gera os PDFs do currículo a partir de cv/pt.html e cv/en.html e a imagem de
// compartilhamento (public/og.jpg, 1200×630) a partir de cv/og.html.
// Uso: npm run cv  (precisa do Microsoft Edge ou do Google Chrome instalado;
// para outro navegador, defina a variável BROWSER com o caminho do executável).

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
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

// O orçamento de tempo dá folga para as fontes de cv/fonts carregarem antes da foto.
const common = [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  "--virtual-time-budget=4000",
  `--user-data-dir=${profile}`,
];

const report = (target) =>
  console.log(`ok  ${target}  (${Math.round(statSync(path.join(root, target)).size / 1024)} KB)`);

try {
  for (const [source, target] of jobs) {
    const output = path.join(root, target);
    execFileSync(
      browser,
      [
        ...common,
        "--no-pdf-header-footer",
        `--print-to-pdf=${output}`,
        pathToFileURL(path.join(root, source)).href,
      ],
      { stdio: "ignore" },
    );
    report(target);
  }

  // Imagem de compartilhamento: o navegador fotografa em PNG e o sharp
  // (que já vem com o Next) converte para JPEG, bem mais leve para o WhatsApp.
  const png = path.join(profile, "og.png");
  execFileSync(
    browser,
    [
      ...common,
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--window-size=1200,630",
      `--screenshot=${png}`,
      pathToFileURL(path.join(root, "cv/og.html")).href,
    ],
    { stdio: "ignore" },
  );
  const { default: sharp } = await import("sharp");
  const og = path.join(root, "public/og.jpg");
  const jpg = await sharp(readFileSync(png))
    .resize(1200, 630, { fit: "cover", position: "left top" })
    .jpeg({ quality: 86, progressive: true, mozjpeg: true })
    .toBuffer();
  writeFileSync(og, jpg);
  report("public/og.jpg");
} finally {
  rmSync(profile, { recursive: true, force: true });
}
