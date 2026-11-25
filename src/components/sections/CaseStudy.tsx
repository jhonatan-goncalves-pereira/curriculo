"use client";

import type { CaseStudy as CaseStudyContent } from "@/content/types";
import { useT } from "@/lib/hooks";
import { Check } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/* Illustrated tablet ("totem") screen. The numbers are made up on purpose:
   no real production data, brand, order number or address may appear here
   (see CLAUDE.md, "Residência PNAAT"). */
function TabletMock({ m }: { m: CaseStudyContent["mock"] }) {
  const counters = [
    { label: m.produced, value: "48", color: "text-mint" },
    { label: m.scrap, value: "1", color: "text-[#D9434B]" },
    { label: m.quality, value: "98%", color: "text-fg" },
  ];
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[34rem] select-none">
      <div className="rounded-[2rem] border border-line bg-ink-3 p-3 shadow-[0_40px_100px_-40px_rgb(30_42_74/0.28)]">
        <div className="overflow-hidden rounded-[1.4rem] border border-line bg-ink/80">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
            <span className="text-[0.9rem] font-medium">{m.station}</span>
            <span className="flex items-center gap-2 rounded-full border border-[#C2410C]/40 bg-[#C2410C]/10 px-2.5 py-1 text-[0.7rem] text-[#C2410C]">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-[#C2410C]" />
              {m.offline}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-4">
            {counters.map((c) => (
              <div key={c.label} className="rounded-xl border border-line bg-fg/[0.02] px-2 py-3 text-center">
                <p className="text-[0.68rem] text-dim">{c.label}</p>
                <p className={`display mt-1 text-[1.7rem] ${c.color}`}>{c.value}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 px-4 pb-3">
            <span className="grid h-24 place-items-center rounded-2xl bg-mint text-[1rem] font-semibold text-ink">
              {m.good}
            </span>
            <span className="grid h-24 place-items-center rounded-2xl bg-[#D9434B] text-[1rem] font-semibold text-ink">
              {m.select}
            </span>
          </div>
          <div className="mx-4 mb-4 flex items-center justify-between rounded-xl border border-mint/30 bg-mint/10 px-3 py-2 text-[0.78rem] text-mint">
            <span className="font-medium">+12</span>
            <span>{m.undo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudy() {
  const t = useT();
  const c = t.caseStudy;

  return (
    <section id="case" data-scene="3" className="section-y relative">
      <div className="shell">
        <SectionHeading index="05" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <TabletMock m={c.mock} />
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-6">
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {c.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[0.85rem] text-dim">{f.label}</dt>
                  <dd className="mt-1 text-pretty leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
              {c.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-[0.8rem] leading-snug text-dim">{m.label}</dt>
                  <dd className="display text-[clamp(1.6rem,3vw,2.4rem)] text-fg">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-[1.5rem] font-medium tracking-tight">{c.problemTitle}</h3>
            <ul className="mt-5 grid gap-3">
              {c.problem.map((item) => (
                <li key={item} className="text-pretty border-l-2 border-[#D9434B]/60 pl-4 leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="text-[1.5rem] font-medium tracking-tight">{c.builtTitle}</h3>
            <dl className="mt-5 grid gap-4">
              {c.built.map((b) => (
                <div key={b.who} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="font-medium text-mint">{b.who}</dt>
                  <dd className="text-pretty leading-relaxed text-muted">{b.what}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="mt-20 text-[1.5rem] font-medium tracking-tight">{c.howTitle}</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.how.map((item) => (
              <li key={item.title} className="panel p-5">
                <p className="font-medium">{item.title}</p>
                <p className="mt-2 text-pretty text-[0.92rem] leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <h3 className="mt-20 text-[1.5rem] font-medium tracking-tight">{c.beforeAfterTitle}</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <div className="hidden bg-fg/[0.03] text-[0.85rem] text-dim md:grid md:grid-cols-3">
              {c.beforeAfterHead.map((h) => (
                <p key={h} className="px-5 py-3">
                  {h}
                </p>
              ))}
            </div>
            {c.beforeAfter.map((row) => (
              <div key={row[0]} className="grid border-t border-line first:border-t-0 md:grid-cols-3 md:first:border-t">
                {row.map((cell, i) => (
                  <div key={cell} className={`px-5 py-4 ${i === 2 ? "bg-mint/[0.05]" : ""}`}>
                    <p className="text-[0.75rem] text-dim md:hidden">{c.beforeAfterHead[i]}</p>
                    <p className={`text-pretty leading-relaxed ${i === 2 ? "text-fg" : "text-muted"}`}>{cell}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-[1.5rem] font-medium tracking-tight">{c.resultsTitle}</h3>
            <ul className="mt-5 grid gap-3">
              {c.results.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                    <Check className="text-[0.7rem]" />
                  </span>
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="text-[1.5rem] font-medium tracking-tight">{c.learningsTitle}</h3>
            <ul className="mt-5 grid gap-4">
              {c.learnings.map((item) => (
                <li key={item} className="text-pretty leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <ul className="mt-14 flex flex-wrap gap-1.5">
            {c.stack.map((tech) => (
              <li key={tech} className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-dim">
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[70ch] text-pretty text-[0.9rem] text-dim">{c.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
