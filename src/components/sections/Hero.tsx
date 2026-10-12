"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type CSSProperties } from "react";
import { useLocalTime, useT } from "@/lib/hooks";
import { SITE } from "@/lib/site";
import { appReady, useStore } from "@/lib/store";
import { ArrowDown, Download, GitHub, LinkedIn, MapPin } from "../ui/Icons";
import { Magnetic } from "../ui/Interactive";
import { Rise } from "../ui/Reveal";

const EXPO = [0.16, 1, 0.3, 1] as const;

/** Stagger for `.intro-fade`, in seconds after the intro curtain starts lifting. */
const after = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

function RotatingRole({ roles, start }: { roles: string[]; start: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!start) return;
    const id = window.setInterval(() => setIndex((i) => i + 1), 3000);
    return () => window.clearInterval(id);
  }, [start]);

  const role = roles[index % roles.length];

  return (
    <span className="relative inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={role}
          className="accent gradient-text inline-block whitespace-nowrap pr-[0.1em] text-[1.18em]"
          initial={{ y: "70%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-70%", opacity: 0, filter: "blur(6px)", transition: { duration: 0.22 } }}
          transition={{ duration: 0.5, ease: EXPO }}
        >
          {role}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* The entrance is CSS-only (`.rise`, `.intro-fade`): it is in the server HTML
   and plays on first paint, so the largest text never waits for hydration. */
export function Hero() {
  const t = useT();
  const ready = useStore(appReady);
  const time = useLocalTime();

  return (
    <section
      id="home"
      data-scene="0"
      className="relative flex min-h-svh flex-col justify-end pb-28 pt-32 md:justify-center md:pb-24"
    >
      <div className="shell">
        <div className="max-w-[820px]">
          <p
            style={after(0.05)}
            className="intro-fade inline-flex items-center gap-2.5 rounded-full border border-mint/25 bg-[#07130f]/80 px-4 py-2 text-[0.8rem] font-medium text-mint backdrop-blur-md"
          >
            <span className="size-1.5 animate-pulse-dot rounded-full bg-mint" />
            {t.hero.status}
          </p>

          <h1 className="display mt-7 text-[clamp(3.4rem,12.5vw,9.75rem)]">
            <Rise text="Jhonatan" delay={0.05} className="block" />
            <Rise
              text="Gonçalves"
              delay={0.22}
              by="word"
              className="accent block text-[1.04em] leading-[0.95]"
              glyphClassName="gradient-text -mb-[0.22em] pb-[0.22em] pr-[0.06em]"
            />
          </h1>

          <p
            style={after(0.5)}
            className="intro-fade mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[clamp(1.05rem,2.1vw,1.5rem)] font-medium tracking-tight"
          >
            {t.hero.rolesPrefix}
            <span aria-hidden className="h-px w-8 bg-white/30" />
            <RotatingRole roles={t.hero.roles} start={ready} />
          </p>

          <p
            style={after(0.62)}
            className="intro-fade mt-5 max-w-[52ch] text-pretty text-[1.02rem] leading-relaxed text-muted md:text-[1.1rem]"
          >
            {t.hero.lead}
          </p>

          <div style={after(0.74)} className="intro-fade mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group flex h-13 items-center gap-3 rounded-full bg-fg pl-6 pr-2 text-[0.95rem] font-medium text-ink"
              >
                {t.hero.primary}
                <span className="grid size-9 place-items-center rounded-full bg-ink text-fg transition-transform duration-500 group-hover:rotate-[-90deg]">
                  <ArrowDown />
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={SITE.cv}
                download
                className="flex h-13 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-6 text-[0.95rem] font-medium backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/[0.07]"
              >
                {t.hero.secondary}
                <Download className="text-[1.05rem]" />
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid size-11 place-items-center rounded-full text-[1.15rem] text-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
              >
                <GitHub />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-11 place-items-center rounded-full text-[1.15rem] text-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={after(0.95)}
        className="intro-fade shell absolute inset-x-0 bottom-7 flex items-end justify-between gap-6"
      >
        <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="flex items-center gap-1.5">
            <MapPin className="text-[0.9rem] text-mint" />
            {t.hero.location}
          </span>
          {time && (
            <span className="hidden items-center gap-3 sm:flex">
              <span aria-hidden className="size-1 rounded-full bg-white/25" />
              {t.hero.localTime} {time}
            </span>
          )}
        </p>
        <a href="#about" className="eyebrow group hidden items-center gap-3 sm:flex">
          {t.hero.scroll}
          <span className="relative block h-10 w-px overflow-hidden bg-white/15">
            <span className="absolute inset-0 animate-scroll-cue bg-mint" />
          </span>
        </a>
      </div>
    </section>
  );
}
