"use client";

import Image, { type StaticImageData } from "next/image";
import cmsShot from "@/assets/products/cms-digital.jpg";
import sesauShot from "@/assets/products/sesau-digital.jpg";
import sisagendaShot from "@/assets/products/sisagenda.jpg";
import siseventosShot from "@/assets/products/siseventos.jpg";
import type { ProductId, ProductItem } from "@/content/types";
import { useT } from "@/lib/hooks";
import { ArrowUpRight, Check } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/* Screenshots of the public home pages. Retake them with Edge headless at
   1440×900 when the products change (see CLAUDE.md). */
const SHOTS: Record<ProductId, StaticImageData> = {
  sesau: sesauShot,
  cms: cmsShot,
  siseventos: siseventosShot,
  sisagenda: sisagendaShot,
};

function ProductCard({ product, visit, flip }: { product: ProductItem; visit: string; flip: boolean }) {
  return (
    <article className="panel grid overflow-hidden lg:grid-cols-12">
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${visit} ${product.name}`}
        className={`group relative block border-b border-line bg-ink/40 p-4 md:p-6 lg:col-span-7 lg:flex lg:items-center lg:border-b-0 ${
          flip ? "lg:order-2 lg:border-l" : "lg:border-r"
        }`}
      >
        <div className="w-full overflow-hidden rounded-xl border border-line bg-ink-3 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)]">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
            <span aria-hidden className="size-2 rounded-full bg-white/15" />
            <span aria-hidden className="size-2 rounded-full bg-white/15" />
            <span aria-hidden className="size-2 rounded-full bg-white/15" />
            <span className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[0.68rem] text-dim">
              <span aria-hidden className="size-1.5 shrink-0 animate-pulse-dot rounded-full bg-mint" />
              <span className="truncate">{product.domain}</span>
            </span>
          </div>
          <div className="overflow-hidden">
            <Image
              src={SHOTS[product.id]}
              alt={product.imageAlt}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </a>

      <div className="flex flex-col p-7 md:p-9 lg:col-span-5">
        <p className="eyebrow text-mint">{product.kicker}</p>
        <h3 className="mt-3 text-[clamp(2rem,3.4vw,2.8rem)] font-medium leading-none tracking-tight">
          {product.name}
        </h3>
        <p className="mt-4 text-pretty text-[1.02rem] leading-relaxed text-muted">{product.description}</p>

        <ul className="mt-5 grid gap-2.5 text-[0.94rem] leading-relaxed">
          {product.highlights.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                <Check className="text-[0.62rem]" />
              </span>
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>

        <dl
          className={`mt-6 grid gap-4 border-y border-line py-5 ${
            product.metrics.length === 2 ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {product.metrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse gap-1">
              <dt className="text-[0.78rem] leading-snug text-dim">{m.label}</dt>
              <dd className="display text-[clamp(1.4rem,2.6vw,2rem)] text-fg">{m.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {product.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-dim">
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-8 flex h-12 w-fit items-center gap-2.5 rounded-full bg-fg px-6 text-[0.95rem] font-medium text-ink transition-colors hover:bg-mint"
        >
          {visit} {product.name}
          <ArrowUpRight className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export function Products() {
  const t = useT();
  const p = t.products;

  return (
    <section id="products" data-scene="3" className="section-y relative">
      <div className="shell">
        <SectionHeading index="01" eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

        <div className="mt-14 grid gap-6">
          {p.items.map((product, i) => (
            <Reveal key={product.id} delay={0.05}>
              <ProductCard product={product} visit={p.visit} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-10">
            <h3 className="text-[1.35rem] font-medium tracking-tight">{p.dataTitle}</h3>
            <p className="mt-2 max-w-[60ch] text-pretty text-muted">{p.dataLead}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {p.data.map((item, i) => (
                <li key={item.title} className="panel flex flex-col gap-2 p-5">
                  <span className="font-mono text-[0.7rem] text-mint">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-pretty text-[0.9rem] leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
