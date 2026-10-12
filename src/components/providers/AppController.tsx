"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import type { SectionId } from "@/content/types";
import { detectLang, setLang, useT } from "@/lib/hooks";
import { setLenis } from "@/lib/scroll";
import { activeSection, sceneArmed, sceneState } from "@/lib/store";

/**
 * Headless wiring for everything global: language detection, smooth scroll,
 * and the scroll / pointer signals the WebGL scene and the nav listen to.
 */
export function AppController() {
  const t = useT();

  useEffect(() => {
    setLang(detectLang());
  }, []);

  // Shader compilation and 90k generated vertices are not free: start the scene
  // only once the document has loaded and the main thread has a quiet moment.
  useEffect(() => {
    let cancel = () => {};
    const arm = () => {
      if (typeof window.requestIdleCallback === "function") {
        const id = window.requestIdleCallback(() => sceneArmed.set(true), { timeout: 1500 });
        cancel = () => window.cancelIdleCallback(id);
      } else {
        const id = window.setTimeout(() => sceneArmed.set(true), 200);
        cancel = () => window.clearTimeout(id);
      }
    };
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });
    return () => {
      window.removeEventListener("load", arm);
      cancel();
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.11,
      wheelMultiplier: 1,
    });
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    let frame = 0;

    const measure = () => {
      frame = 0;
      const middle = window.innerHeight * 0.5;
      let current = sections[0];
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= middle) current = el;
      }
      if (!current) return;
      sceneState.shape = Number(current.dataset.scene);
      activeSection.set(current.id as SectionId);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      sceneState.pointerActive = true;
      sceneState.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      sceneState.pointerY = -((e.clientY / window.innerHeight) * 2 - 1);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    const onLeave = () => {
      sceneState.pointerActive = false;
    };
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  // React hoists <title> into <head> and keeps it in sync with the language.
  // (Writing document.title by hand gets overwritten when metadata hydrates.)
  return <title>{t.meta.title}</title>;
}
