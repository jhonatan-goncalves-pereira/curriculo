"use client";

import { useEffect, useRef } from "react";

const GOLDEN = Math.PI * (3 - Math.sqrt(5));
const AUTO_SPIN = 0.0032;

/**
 * 3D tag sphere rendered with plain DOM nodes, so the labels stay crisp text.
 * Spins on its own, can be dragged, and coasts with inertia after release.
 * Decorative: the same technologies are listed as real text next to it.
 */
export function TechSphere({ items, hint }: { items: readonly string[]; hint: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;

    const n = items.length;
    const base = items.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * GOLDEN;
      return [Math.cos(theta) * r, y, Math.sin(theta) * r] as const;
    });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rotX = -0.32;
    let rotY = 0.4;
    let vx = 0;
    let vy = reduced ? 0 : AUTO_SPIN;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let frame = 0;
    let running = false;

    const render = () => {
      const radius = el.clientWidth * 0.39;
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      base.forEach(([x, y, z], i) => {
        const node = nodes.current[i];
        if (!node) return;
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y1 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;
        const depth = (z2 + 1) / 2;
        const scale = 0.6 + depth * 0.58;
        node.style.transform = `translate(-50%, -50%) translate3d(${(x1 * radius).toFixed(1)}px, ${(y1 * radius).toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        node.style.opacity = (0.14 + depth * depth * 0.86).toFixed(3);
        node.style.zIndex = String(Math.round(depth * 100));
      });
    };

    const tick = () => {
      if (!dragging) {
        rotY += vy;
        rotX += vx;
        // Ease back to the idle spin after a throw.
        vy += ((reduced ? 0 : AUTO_SPIN) - vy) * 0.025;
        vx += (0 - vx) * 0.05;
      }
      render();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = (e.clientX - lastX) * 0.0062;
      const dy = (e.clientY - lastY) * 0.0062;
      lastX = e.clientX;
      lastY = e.clientY;
      rotY += dx;
      rotX = Math.max(-1.2, Math.min(1.2, rotX - dy));
      vy = dx;
      vx = -dy;
    };
    const onUp = () => {
      dragging = false;
    };

    // Only burn frames while the sphere is actually on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    observer.observe(el);
    render();

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      stop();
      observer.disconnect();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, [items]);

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div
        ref={wrap}
        aria-hidden
        className="relative aspect-square w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
      >
        {/* Planet body: gives the labels something to orbit. */}
        <div className="absolute inset-[13%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgb(94_242_194/0.16),rgb(139_124_255/0.09)_45%,transparent_70%)]" />
        <div className="absolute inset-[11%] rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[11%] rounded-full border border-dashed border-white/[0.06] [transform:rotateX(72deg)]" />
        {items.map((item, i) => (
          <span
            key={item}
            ref={(node) => {
              nodes.current[i] = node;
            }}
            className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-white/10 bg-ink-2/85 px-3.5 py-1.5 font-mono text-[0.8rem] text-fg will-change-transform"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="eyebrow mt-2 text-center">{hint}</p>
    </div>
  );
}
