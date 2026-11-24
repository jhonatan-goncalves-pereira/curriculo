"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";
import type { ExperienceItem } from "@/content/types";
import { useT } from "@/lib/hooks";
import { Download, Plus } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const EXPO = [0.16, 1, 0.3, 1] as const;
/** Roles shown before the reader asks for the full history. */
const VISIBLE = 4;

function Entry({ item, now }: { item: ExperienceItem; now: string }) {
  return (
    <article className="group relative grid gap-x-8 gap-y-4 py-9 md:grid-cols-[150px_1fr] md:py-11">
      {/* Timeline node, sits on the rail drawn by the parent list. */}
      <span
        aria-hidden
        className={`absolute -left-[calc(1.75rem+4.5px)] top-[3.05rem] hidden size-[9px] rounded-full border md:block ${
          item.current
            ? "animate-pulse-dot border-mint bg-mint"
            : "border-white/25 bg-ink transition-colors group-hover:border-mint"
        }`}
      />

      <div className="eyebrow flex items-center gap-3 md:flex-col md:items-start md:gap-2 md:pt-2">
        <span className="text-muted">{item.period}</span>
        <span className="md:text-[0.66rem]">{item.location}</span>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-ink-3 font-mono text-[0.72rem] font-semibold tracking-wide text-muted transition-colors group-hover:border-mint/40 group-hover:text-mint">
            {item.mark}
          </span>
          <p className="text-[0.95rem] text-muted">{item.company}</p>
          {item.current && (
            <span className="rounded-full border border-mint/25 bg-mint/[0.08] px-2.5 py-0.5 font-mono text-[0.66rem] uppercase tracking-widest text-mint">
              {now}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-balance text-[clamp(1.3rem,2.3vw,1.75rem)] font-medium leading-tight tracking-tight">
          {item.role}
        </h3>

        <ul className="mt-5 space-y-2.5">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3 text-pretty leading-relaxed text-muted">
              <span aria-hidden className="mt-[0.72em] h-px w-3 shrink-0 bg-mint/70" />
              {point}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-dim"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Experience() {
  const t = useT();
  const e = t.experience;
  const [expanded, setExpanded] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: rail, offset: ["start 0.7", "end 0.6"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const head = e.items.slice(0, VISIBLE);
  const tail = e.items.slice(VISIBLE);

  return (
    <section id="experience" data-scene="2" className="section-y relative">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index="03" eyebrow={e.eyebrow} title={e.title} lead={e.lead} />
            <Reveal delay={0.18}>
              <a
                href={t.meta.cv}
                download
                className="mt-8 inline-flex items-center gap-2 border-b border-white/20 pb-1 text-[0.95rem] transition-colors hover:border-mint hover:text-mint"
              >
                {t.nav.cta}
                <Download />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8 lg:pl-6">
          <div ref={rail} className="relative md:pl-7">
            <span aria-hidden className="absolute bottom-0 left-0 top-0 hidden w-px bg-line md:block" />
            <motion.span
              aria-hidden
              className="absolute bottom-0 left-0 top-0 hidden w-px origin-top bg-gradient-to-b from-mint via-mint to-violet md:block"
              style={{ scaleY: progress }}
            />

            <ol className="divide-y divide-line border-y border-line">
              {head.map((item, i) => (
                <li key={`${item.company}-${item.period}`}>
                  <Reveal delay={i * 0.05}>
                    <Entry item={item} now={e.now} />
                  </Reveal>
                </li>
              ))}
              <AnimatePresence initial={false}>
                {expanded &&
                  tail.map((item, i) => (
                    <motion.li
                      key={`${item.company}-${item.period}`}
                      className="overflow-x-visible overflow-y-clip"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.7, delay: i * 0.04, ease: EXPO }}
                    >
                      <Entry item={item} now={e.now} />
                    </motion.li>
                  ))}
              </AnimatePresence>
            </ol>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="group mt-8 flex items-center gap-3 rounded-full border border-line bg-ink-2/70 py-2 pl-5 pr-2 text-[0.92rem] transition-colors hover:border-white/25 md:ml-7"
          >
            {expanded ? e.less : `${e.more} (+${tail.length})`}
            <span className="grid size-8 place-items-center rounded-full bg-white/[0.07] transition-colors group-hover:bg-mint group-hover:text-ink">
              <Plus
                className={`transition-transform duration-500 ${expanded ? "rotate-[135deg]" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
