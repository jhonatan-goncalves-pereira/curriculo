"use client";

import Image from "next/image";
import avatar from "@/assets/avatar.webp";
import { useT } from "@/lib/hooks";
import { TiltCard } from "../ui/Interactive";
import { CountUp, Reveal, WordScrub } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  const t = useT();
  const a = t.about;

  return (
    <section id="about" data-scene="1" className="section-y relative">
      <div className="shell">
        <SectionHeading index="01" eyebrow={a.eyebrow} />

        <WordScrub
          text={a.statement}
          className="mt-8 max-w-[24ch] text-balance text-[clamp(1.75rem,4.3vw,3.9rem)] font-medium leading-[1.08] tracking-[-0.035em] md:max-w-[26ch]"
        />

        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <TiltCard className="mx-auto max-w-[340px] lg:mx-0" max={8}>
              <figure className="relative">
                <Image
                  src={avatar}
                  alt={a.photoAlt}
                  sizes="(min-width: 1024px) 340px, 80vw"
                  placeholder="blur"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <span>
                    <span className="block text-[1.05rem] font-medium tracking-tight">
                      Jhonatan Gonçalves
                    </span>
                    <span className="eyebrow mt-1 block">{a.photoCaption}</span>
                  </span>
                  <span className="grid size-9 place-items-center rounded-full border border-mint/30 bg-mint/10">
                    <span className="size-1.5 animate-pulse-dot rounded-full bg-mint" />
                  </span>
                </figcaption>
              </figure>
            </TiltCard>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              {a.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-pretty text-[1.05rem] leading-[1.75] text-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
              {/* A dl allows exactly one wrapper level around each dt/dd pair. */}
              {a.stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 0.07}
                  className="flex flex-col-reverse justify-end gap-3 border-b border-r border-line p-5 md:p-6"
                >
                  <dt className="text-[0.84rem] leading-snug text-dim">{s.label}</dt>
                  <dd className="display gradient-text text-[clamp(2.6rem,5vw,4.2rem)]">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20 lg:mt-28">
          <Reveal>
            <h3 className="eyebrow">{a.principlesTitle}</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {a.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <article className="spot panel group h-full p-7">
                  <span className="font-mono text-[0.75rem] text-mint">0{i + 1}</span>
                  <h4 className="mt-10 text-[1.5rem] font-medium tracking-tight">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-pretty leading-relaxed text-muted">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
