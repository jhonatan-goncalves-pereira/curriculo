"use client";

import type { CourseItem } from "@/content/types";
import { useT } from "@/lib/hooks";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function List({ title, items }: { title: string; items: CourseItem[] }) {
  return (
    <div>
      <Reveal>
        <h3 className="eyebrow">{title}</h3>
      </Reveal>
      <ul className="mt-5 border-t border-line">
        {items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 0.04}>
              <div className="group flex items-baseline justify-between gap-6 border-b border-line py-4 transition-colors hover:border-white/25">
                <div>
                  <p className="font-medium tracking-tight transition-colors group-hover:text-mint">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[0.86rem] text-dim">{item.issuer}</p>
                </div>
                {item.year && (
                  <span className="shrink-0 font-mono text-[0.76rem] text-dim">{item.year}</span>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Education() {
  const t = useT();
  const e = t.education;

  return (
    <section id="education" className="relative pb-[clamp(6rem,13vw,11rem)]">
      <div className="shell">
        <SectionHeading index="07" eyebrow={e.eyebrow} title={e.title} />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {e.degrees.map((degree, i) => (
            <Reveal key={degree.title} delay={i * 0.08} className="h-full">
              <article className="spot panel flex h-full flex-col p-7 md:p-9">
                <span className="font-mono text-[0.76rem] text-mint">{degree.period}</span>
                <h3 className="mt-8 text-balance text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-[1.1] tracking-tight">
                  {degree.title}
                </h3>
                <p className="mt-2 text-muted">{degree.school}</p>
                {degree.note && (
                  <p className="mt-6 border-t border-line pt-5 text-[0.94rem] leading-relaxed text-dim">
                    {degree.note}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
          <List title={e.coursesTitle} items={e.courses} />
          <List title={e.certsTitle} items={e.certs} />
        </div>
      </div>
    </section>
  );
}
