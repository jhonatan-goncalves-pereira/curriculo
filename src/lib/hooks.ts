"use client";

import { useCallback, useSyncExternalStore } from "react";
import { en } from "@/content/en";
import { pt } from "@/content/pt";
import type { Dictionary, Lang } from "@/content/types";
import { SITE } from "./site";
import { langStore, useStore } from "./store";

const DICTIONARIES: Record<Lang, Dictionary> = { pt, en };
const LANG_KEY = "jg-lang";

export function useLang(): Lang {
  return useStore(langStore);
}

export function useT(): Dictionary {
  return DICTIONARIES[useLang()];
}

export function setLang(lang: Lang) {
  langStore.set(lang);
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* storage unavailable (private mode) */
  }
}

export function toggleLang() {
  setLang(langStore.get() === "pt" ? "en" : "pt");
}

/** Saved choice wins; otherwise non-Portuguese browsers get English. */
export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    /* storage unavailable */
  }
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** True only on devices with a real hover-capable pointer (mouse / trackpad). */
export function useFinePointer(): boolean {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

const clockFormat = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: SITE.timeZone,
});

function subscribeClock(onTick: () => void) {
  const id = window.setInterval(onTick, 15_000);
  return () => window.clearInterval(id);
}

/** Wall-clock time in Juazeiro do Norte; empty on the server to avoid a hydration mismatch. */
export function useLocalTime(): string {
  return useSyncExternalStore(
    subscribeClock,
    () => clockFormat.format(new Date()),
    () => "",
  );
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
