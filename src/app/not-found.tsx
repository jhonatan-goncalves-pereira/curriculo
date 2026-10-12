import type { Metadata } from "next";
import Link from "next/link";
import { pt } from "@/content/pt";

export const metadata: Metadata = { title: `404 · ${pt.notFound.title}`, robots: { index: false } };

export default function NotFound() {
  const t = pt.notFound;
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden px-6 text-center">
      <div aria-hidden className="backdrop" />
      <div className="relative z-10">
        <p className="display gradient-text text-[clamp(7rem,28vw,18rem)]">404</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight">{t.title}</h1>
        <p className="mx-auto mt-3 max-w-[38ch] text-muted">{t.body}</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-fg px-6 text-sm font-medium text-ink"
        >
          {t.back}
        </Link>
      </div>
    </main>
  );
}
