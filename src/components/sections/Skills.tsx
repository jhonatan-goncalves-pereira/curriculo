"use client";

import { useT } from "@/lib/hooks";
import { TECH_CLOUD } from "@/lib/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TechSphere } from "../ui/TechSphere";

export function Skills() {
  const t = useT();
  const s = t.skills;

  return (
    <section id="skills" data-scene="4" className="section-y relative">
      <div className="shell">
        <SectionHeading index="04" eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <TechSphere items={TECH_CLOUD} hint={s.hint} />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {s.groups.map((group, i) => (
              <Reveal key={group.label} delay={(i % 2) * 0.08} className="h-full">
                <article className="spot panel h-full p-6">
                  <header className="flex items-center justify-between">
                    <h3 className="text-[1.08rem] font-medium tracking-tight">{group.label}</h3>
                    <span className="font-mono text-[0.7rem] text-dim">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </header>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-[0.84rem] text-muted transition-colors hover:border-mint/40 hover:text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
