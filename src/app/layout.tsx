import type { Metadata, Viewport } from "next";
import { Geist_Mono, Kalam, Schibsted_Grotesk } from "next/font/google";
import { pt } from "@/content/pt";
import { BASE_PATH, SITE } from "@/lib/site";
import "./globals.css";

// Texto e interface: grotesca firme, de jornal. As variáveis CSS mantêm os nomes
// antigos (--font-geist, --font-instrument) para não mexer nos tokens.
const sans = Schibsted_Grotesk({ variable: "--font-geist", subsets: ["latin"], display: "swap" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Anotações à caneta: segunda parte dos títulos, rótulos de seção e a nota do topo.
const hand = Kalam({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Suba o ?v= quando trocar a imagem: WhatsApp e LinkedIn guardam a antiga em cache.
const OG_IMAGE = `${BASE_PATH}/og.jpg?v=2`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  // <title> is rendered by AppController so it can follow the PT/EN toggle.
  description: pt.meta.description,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "Jhonatan Gonçalves Pereira",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Node.js",
    "Proxmox",
    "QA Automation",
    "Power BI",
    "Edge AI",
    "Cariri",
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "profile",
    url: SITE.url,
    siteName: SITE.shortName,
    title: pt.meta.title,
    description: pt.meta.description,
    locale: "pt_BR",
    alternateLocale: "en_US",
    firstName: "Jhonatan",
    lastName: "Gonçalves Pereira",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: pt.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: pt.meta.title,
    description: pt.meta.description,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fcfcf8",
  colorScheme: "light",
};

/* Structured data so search engines can show a rich profile result. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.origin}${OG_IMAGE}`,
    email: `mailto:${SITE.email}`,
    jobTitle: "Full Stack Developer · Systems & Infrastructure Analyst",
    description: pt.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Juazeiro do Norte",
      addressRegion: "CE",
      addressCountry: "BR",
    },
    worksFor: { "@type": "CollegeOrUniversity", name: "Universidade Regional do Cariri (URCA)" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Instituto Federal do Ceará (IFCE) · Campus Crato",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Proxmox",
      "Test automation",
      "Power BI",
      "Machine Learning",
      "Embedded systems",
    ],
    sameAs: [SITE.github, SITE.linkedin],
  },
};

/* Runs before first paint: returning visitors in this session skip the intro curtain. */
const SEEN_SCRIPT = `try{if(sessionStorage.getItem("jg-seen"))document.documentElement.classList.add("seen")}catch(e){}`;

/* The intro is CSS and needs no script; scroll reveals do, so without JS show them as-is. */
const NO_JS_STYLE = `[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${geistMono.variable} ${hand.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SEEN_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{NO_JS_STYLE}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
