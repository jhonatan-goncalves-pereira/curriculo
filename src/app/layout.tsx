import type { Metadata } from "next";
import { DM_Sans, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jhonatan Gonçalves | FullStack Developer & QA",
  description: "FullStack Developer | QA | Analista Power BI - Transformando ideias em soluções inovadoras",
  keywords: ["FullStack Developer", "QA", "Power BI", "Java", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Jhonatan Gonçalves Pereira" }],
  openGraph: {
    title: "Jhonatan Gonçalves | FullStack Developer & QA",
    description: "FullStack Developer | QA | Analista Power BI - Transformando ideias em soluções inovadoras",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}