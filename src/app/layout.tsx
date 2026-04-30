import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
