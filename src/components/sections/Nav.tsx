"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { toggleLang, useLang, useT } from "@/lib/hooks";
import { lockScroll, scrollToId } from "@/lib/scroll";
import { SITE } from "@/lib/site";
import { activeSection, paletteOpen, useStore } from "@/lib/store";
import { Download, GitHub, LinkedIn, Search } from "../ui/Icons";

const EXPO = [0.16, 1, 0.3, 1] as const;

function LangToggle({ className = "" }: { className?: string }) {
  const lang = useLang();
  return (
    <button
      type="button"
      onClick={toggleLang}
      title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
      className={`flex h-10 items-center gap-1.5 rounded-full border border-line px-3.5 font-mono text-[0.72rem] tracking-wider transition-colors hover:border-white/25 ${className}`}
    >
      <span className="sr-only">{lang === "pt" ? "Idioma:" : "Language:"}</span>
      <span className={lang === "pt" ? "text-fg" : "text-dim"}>PT</span>
      <span aria-hidden className="text-dim">
        /
      </span>
      <span className={lang === "en" ? "text-fg" : "text-dim"}>EN</span>
    </button>
  );
}

export function Nav() {
  const t = useT();
  const active = useStore(activeSection);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    if (!menu) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[90] -translate-y-24 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-ink transition-transform focus-visible:translate-y-0"
      >
        {t.nav.skip}
      </a>

      <header className="fixed inset-x-0 top-0 z-50">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink via-ink/75 to-transparent backdrop-blur-md transition-opacity duration-500 [mask-image:linear-gradient(#000_45%,transparent)] ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="shell relative flex items-center justify-between gap-4 py-4">
          <a href="#home" className="group flex items-center gap-3">
            <span
              aria-hidden
              className="grid size-10 place-items-center rounded-xl border border-line bg-ink-2/80 font-mono text-[0.8rem] font-semibold tracking-tight backdrop-blur-md transition-colors group-hover:border-mint/50"
            >
              <span>
                J<span className="text-mint">G</span>
              </span>
            </span>
            <span className="sr-only lg:hidden">{SITE.shortName}</span>
            <span className="hidden text-[0.92rem] font-medium tracking-tight lg:block">
              Jhonatan <span className="accent text-[1.12em] text-muted">Gonçalves</span>
            </span>
          </a>

          <nav
            aria-label="Principal"
            className={`hidden items-center rounded-full border p-1 transition-[background-color,border-color] duration-500 md:flex ${
              scrolled
                ? "border-line bg-ink-2/75 backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            {t.nav.items.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[0.86rem] transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-fg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => paletteOpen.set(true)}
              className="hidden h-10 items-center gap-2 rounded-full border border-line bg-ink-2/60 px-3.5 text-dim backdrop-blur-md transition-colors hover:border-white/25 hover:text-fg md:flex"
            >
              <Search className="text-[0.95rem]" />
              <span className="sr-only">{t.nav.search}</span>
              <kbd className="font-mono text-[0.68rem] tracking-wider">Ctrl K</kbd>
            </button>
            <LangToggle className="hidden bg-ink-2/60 backdrop-blur-md sm:flex" />
            <a
              href={t.meta.cv}
              download
              className="hidden h-10 items-center gap-2 rounded-full bg-fg px-4 text-[0.86rem] font-medium text-ink transition-transform hover:scale-[1.03] active:scale-95 sm:flex"
            >
              {t.nav.cta}
              <Download className="text-[0.95rem]" />
            </a>

            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-expanded={menu}
              aria-controls="mobile-menu"
              aria-label={menu ? t.nav.close : t.nav.menu}
              className="relative grid size-10 place-items-center rounded-full border border-line bg-ink-2/70 backdrop-blur-md md:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${
                  menu ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${
                  menu ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[45] flex flex-col bg-ink/95 px-6 pb-8 pt-24 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-lenis-prevent
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1">
              {t.nav.items.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    // Scroll is locked while the menu is open: unlock first, then travel.
                    e.preventDefault();
                    setMenu(false);
                    lockScroll(false);
                    requestAnimationFrame(() => scrollToId(item.id));
                  }}
                  className="display flex items-baseline gap-4 py-2 text-[clamp(2.4rem,11vw,3.6rem)]"
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: EXPO }}
                >
                  <span className="eyebrow text-mint">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="flex items-center justify-between gap-3 border-t border-line pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="flex items-center gap-2">
                <LangToggle />
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid size-10 place-items-center rounded-full border border-line text-muted"
                >
                  <GitHub />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-10 place-items-center rounded-full border border-line text-muted"
                >
                  <LinkedIn />
                </a>
              </div>
              <a
                href={t.meta.cv}
                download
                className="flex h-10 items-center gap-2 rounded-full bg-fg px-4 text-sm font-medium text-ink"
              >
                {t.nav.cta}
                <Download />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
