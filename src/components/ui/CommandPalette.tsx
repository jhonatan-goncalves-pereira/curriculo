"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { copyText, toggleLang, useT } from "@/lib/hooks";
import { lockScroll, scrollToId } from "@/lib/scroll";
import { SITE } from "@/lib/site";
import { paletteOpen, useStore } from "@/lib/store";
import { ArrowUpRight, Copy, Download, GitHub, Languages, LinkedIn, Search, WhatsApp } from "./Icons";

interface Command {
  id: string;
  group: string;
  label: string;
  icon: ReactNode;
  run: () => void;
}

/** ⌘K / Ctrl+K quick actions: jump to a section, copy the email, grab the CV. */
export function CommandPalette() {
  const open = useStore(paletteOpen);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        paletteOpen.set(!paletteOpen.get());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return <AnimatePresence>{open && <Palette key="palette" />}</AnimatePresence>;
}

function Palette() {
  const t = useT();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const list = useRef<HTMLUListElement>(null);

  // Hold the page still while open, and hand focus back to where it came from.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    lockScroll(true);
    return () => {
      lockScroll(false);
      previous?.focus?.({ preventScroll: true });
    };
  }, []);

  const commands = useMemo<Command[]>(() => {
    const go = (id: string) => () => scrollToId(id);
    const openUrl = (url: string) => () => window.open(url, "_blank", "noopener,noreferrer");
    return [
      ...t.nav.items.map((item) => ({
        id: `go-${item.id}`,
        group: t.palette.groups.navigate,
        label: item.label,
        icon: <ArrowUpRight />,
        run: go(item.id),
      })),
      {
        id: "copy-email",
        group: t.palette.groups.actions,
        label: `${t.palette.actions.copyEmail} · ${SITE.email}`,
        icon: <Copy />,
        run: () => void copyText(SITE.email),
      },
      {
        id: "download-cv",
        group: t.palette.groups.actions,
        label: t.palette.actions.downloadCv,
        icon: <Download />,
        run: openUrl(t.meta.cv),
      },
      {
        id: "switch-lang",
        group: t.palette.groups.actions,
        label: t.palette.actions.switchLang,
        icon: <Languages />,
        run: toggleLang,
      },
      {
        id: "github",
        group: t.palette.groups.links,
        label: "GitHub",
        icon: <GitHub />,
        run: openUrl(SITE.github),
      },
      {
        id: "linkedin",
        group: t.palette.groups.links,
        label: "LinkedIn",
        icon: <LinkedIn />,
        run: openUrl(SITE.linkedin),
      },
      {
        id: "whatsapp",
        group: t.palette.groups.links,
        label: "WhatsApp",
        icon: <WhatsApp />,
        run: openUrl(SITE.whatsapp),
      },
    ];
  }, [t]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  const selected = Math.min(index, Math.max(0, results.length - 1));

  const close = () => paletteOpen.set(false);

  const execute = (command: Command | undefined) => {
    if (!command) return;
    close();
    // Release the lock now (not after the exit animation) so scroll commands work.
    lockScroll(false);
    requestAnimationFrame(command.run);
  };

  const move = (next: number) => {
    setIndex(next);
    list.current
      ?.querySelector<HTMLElement>(`[data-index="${next}"]`)
      ?.scrollIntoView({ block: "nearest" });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      move(results.length ? (selected + 1) % results.length : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      move(results.length ? (selected - 1 + results.length) % results.length : 0);
    } else if (e.key === "Enter") {
      e.preventDefault();
      execute(results[selected]);
    } else if (e.key === "Tab") {
      // Single focusable control: keep focus inside the dialog.
      e.preventDefault();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-black/65 px-4 pt-[14vh] backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      data-lenis-prevent
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.search}
        className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/10 bg-ink-2/95 shadow-[0_40px_120px_-20px_rgb(0_0_0/0.9)]"
        initial={{ opacity: 0, y: -14, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="shrink-0 text-[1.1rem] text-dim" />
          <input
            autoFocus
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[selected] ? `cmd-${results[selected].id}` : undefined}
            aria-label={t.palette.placeholder}
            className="h-14 w-full bg-transparent text-[0.98rem] text-fg outline-none placeholder:text-dim"
            placeholder={t.palette.placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
            }}
          />
          <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[0.65rem] text-dim">
            ESC
          </kbd>
        </div>

        <ul
          ref={list}
          id="palette-list"
          role="listbox"
          className="max-h-[min(52vh,420px)] overflow-y-auto overscroll-contain p-2"
        >
          {results.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-dim">{t.palette.empty}</li>
          )}
          {results.map((command, i) => {
            const showGroup = i === 0 || results[i - 1].group !== command.group;
            const active = i === selected;
            return (
              <li key={command.id} role="presentation">
                {showGroup && <p className="eyebrow px-3 pb-1.5 pt-3">{command.group}</p>}
                <button
                  type="button"
                  id={`cmd-${command.id}`}
                  role="option"
                  aria-selected={active}
                  data-index={i}
                  tabIndex={-1}
                  onPointerMove={() => setIndex(i)}
                  onClick={() => execute(command)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[0.93rem] transition-colors ${
                    active ? "bg-white/[0.07] text-fg" : "text-muted"
                  }`}
                >
                  <span className={`text-[1.05rem] ${active ? "text-mint" : "text-dim"}`}>
                    {command.icon}
                  </span>
                  <span className="truncate">{command.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 border-t border-line px-4 py-2.5 text-[0.7rem] text-dim">
          <kbd className="rounded border border-line px-1 font-mono">↑</kbd>
          <kbd className="rounded border border-line px-1 font-mono">↓</kbd>
          <span>{t.palette.hint}</span>
          <kbd className="ml-auto rounded border border-line px-1 font-mono">↵</kbd>
        </div>
      </motion.div>
    </motion.div>
  );
}
