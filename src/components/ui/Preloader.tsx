"use client";

import { useEffect } from "react";
import { appReady } from "@/lib/store";

const SEEN_KEY = "jg-seen";
/** Must match the `.preloader` animation delay in globals.css. */
const CURTAIN_LIFTS_AT = 800;

/**
 * Short intro curtain, shown once per browser session.
 *
 * The animation itself is pure CSS (see `.preloader` in globals.css), so it
 * starts on first paint instead of waiting for JavaScript to hydrate: on a slow
 * phone the curtain is already gone by the time React wakes up. This component
 * only records the visit and tells the WebGL scene when to fade in.
 */
export function Preloader() {
  useEffect(() => {
    const skip =
      document.documentElement.classList.contains("seen") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* storage unavailable */
    }
    // Count from navigation start: if hydration was slow, the curtain is already up.
    const wait = skip ? 0 : Math.max(0, CURTAIN_LIFTS_AT - performance.now());
    const id = window.setTimeout(() => appReady.set(true), wait);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      aria-hidden
      className="preloader pointer-events-none fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-6 sm:p-10"
    >
      <div className="eyebrow flex items-center justify-between">
        <span>Jhonatan Gonçalves</span>
        <span>Portfolio · 2026</span>
      </div>

      <p className="accent max-w-[12ch] text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] text-muted">
        Full Stack, Systems <span className="text-fg">&amp; Infra</span>
      </p>

      <span className="absolute inset-x-0 bottom-0 h-[3px] bg-fg/5">
        <span className="preloader-bar block h-full origin-left bg-gradient-to-r from-mint to-violet" />
      </span>
    </div>
  );
}
