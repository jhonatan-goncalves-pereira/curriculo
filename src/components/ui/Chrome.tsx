"use client";

import { motion, useMotionValue, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";
import { useFinePointer } from "@/lib/hooks";

/** Thin reading-progress bar pinned to the top edge. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-mint via-[#d9fff2] to-violet"
      style={{ scaleX }}
    />
  );
}

/** Soft light that trails the mouse. The native cursor stays untouched. */
export function CursorGlow() {
  const fine = useFinePointer();
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine, x, y]);

  if (!fine) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgb(94 242 194 / 0.07) 0%, rgb(139 124 255 / 0.045) 38%, transparent 68%)",
      }}
    />
  );
}
