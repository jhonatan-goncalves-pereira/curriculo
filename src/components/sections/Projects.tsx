"use client";

import type { ProjectItem } from "@/content/types";
import { useT } from "@/lib/hooks";
import { SITE } from "@/lib/site";
import { ArrowDown, ArrowUpRight, GitHub } from "../ui/Icons";
import { TiltCard } from "../ui/Interactive";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectVisual } from "./ProjectVisual";

function Card({ project, featured }: { project: ProjectItem; featured: boolean }) {
  return (
    <TiltCard className="h-full" max={featured ? 3.5 : 6}>
      <article className="flex h-full flex-col">
        <div
          className={`relative border-b border-line bg-ink/40 ${
            featured ? "min-h-[230px] flex-1 lg:min-h-[300px]" : "h-[172px]"
          }`}
        >
          <ProjectVisual id={project.id} />
        </div>

        <div className={`relative z-[3] flex flex-col ${featured ? "p-7 md:p-9" : "flex-1 p-6"}`}>
          <p className="eyebrow text-mint">{project.kicker}</p>
          <h3
            className={`mt-3 font-medium tracking-tight ${
              featured ? "text-[clamp(1.9rem,3.4vw,2.9rem)] leading-none" : "text-[1.4rem] leading-tight"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-3 text-pretty leading-relaxed text-muted ${
              featured ? "max-w-[62ch] text-[1.02rem]" : "text-[0.94rem]"
            }`}
          >
            {project.description}
          </p>

          {project.metrics && (
            <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-line py-5">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-[0.78rem] leading-snug text-dim">{m.label}</dt>
                  <dd className="display text-[clamp(1.4rem,2.6vw,2.1rem)] text-fg">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-dim"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            {project.links.map((link, i) => {
              // "#..." links jump to a section of this page (e.g. the case study).
              const internal = link.href.startsWith("#");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={`${link.label}: ${project.title}`}
                  className={`group/link flex h-10 items-center gap-2 rounded-full px-4 text-[0.86rem] font-medium transition-colors ${
                    i === 0
                      ? "bg-fg text-ink hover:bg-mint"
                      : "border border-line text-fg hover:border-white/30"
                  }`}
                >
                  {link.href.includes("github.com") && <GitHub />}
                  {link.label}
                  {internal ? (
                    <ArrowDown className="transition-transform duration-300 group-hover/link:translate-y-0.5" />
                  ) : (
                    <ArrowUpRight className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  )}
                </a>
              );
            })}
            {project.note && (
              <span className="flex h-10 items-center gap-2 rounded-full border border-dashed border-line px-4 font-mono text-[0.72rem] text-dim">
                <span aria-hidden className="size-1 rounded-full bg-dim" />
                {project.note}
              </span>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}

export function Projects() {
  const t = useT();
  const p = t.projects;

  return (
    <section id="projects" data-scene="3" className="section-y relative">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading index="04" eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
          <Reveal delay={0.15}>
            <a
              href={`${SITE.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border-b border-white/20 pb-1 text-[0.95rem] transition-colors hover:border-mint hover:text-mint"
            >
              {p.all}
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {p.items.map((project, i) => {
            const featured = i === 0;
            const n = p.items.length;
            // Desktop: the featured card fills 2 rows next to 2 cards, then rows of 3.
            // Cards of an incomplete last row stretch so the grid never leaves a hole.
            const lastRow = Math.max(0, n - 3) % 3;
            const inLastRow = i >= n - lastRow && i >= 3;
            const lgSpan = inLastRow ? (lastRow === 1 ? "lg:col-span-6" : "lg:col-span-3") : "lg:col-span-2";
            // Tablet: pairs after the featured card; a lone last card takes the full row.
            const mdSpan = (n - 1) % 2 === 1 && i === n - 1 ? "md:col-span-2" : "";
            return (
              <Reveal
                key={project.id}
                delay={(i % 3) * 0.07}
                className={
                  featured ? "md:col-span-2 lg:col-span-4 lg:row-span-2" : `${lgSpan} ${mdSpan}`.trim()
                }
              >
                <Card project={project} featured={featured} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
