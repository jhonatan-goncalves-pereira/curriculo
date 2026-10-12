/** Must match `basePath` in next.config.ts (GitHub Pages project site). */
export const BASE_PATH = "/curriculo";

export const SITE = {
  name: "Jhonatan Gonçalves Pereira",
  shortName: "Jhonatan Gonçalves",
  url: "https://jhonatan-goncalves-pereira.github.io/curriculo/",
  origin: "https://jhonatan-goncalves-pereira.github.io",
  email: "jhonatangoncalves2002@gmail.com",
  github: "https://github.com/jhonatan-goncalves-pereira",
  linkedin: "https://www.linkedin.com/in/jhonatan-goncalves-pereira",
  cv: `${BASE_PATH}/cv-jhonatan-goncalves-pereira.pdf`,
  timeZone: "America/Fortaleza",
} as const;

/** Order drives the 3D tag sphere in the skills section. */
export const TECH_CLOUD = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Java",
  "Spring Boot",
  "Express",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "Prisma",
  "Docker",
  "Linux",
  "Proxmox",
  "NGINX",
  "AWS",
  "GitHub Actions",
  "Cypress",
  "Selenium",
  "Pytest",
  "REST Assured",
  "Python",
  "scikit-learn",
  "DistilBERT",
  "Power BI",
  "ESP32",
  "MQTT",
  "Grafana",
  "Tailwind",
  "Git",
] as const;

export const MARQUEE = [
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Proxmox",
  "Cypress",
  "Python",
  "Power BI",
  "Edge AI",
] as const;
