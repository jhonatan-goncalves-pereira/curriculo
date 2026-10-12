"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery, usePrefersReducedMotion } from "@/lib/hooks";
import { sceneArmed, useStore } from "@/lib/store";
import { startScene } from "./scene";

function ParticleCanvas({ count }: { count: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;
    // Null means no WebGL: the CSS backdrop already carries the page.
    const dispose = startScene(canvas.current, count);
    return () => dispose?.();
  }, [count]);

  return <canvas ref={canvas} className="block size-full" />;
}

/**
 * Fixed, decorative WebGL layer behind the content. It waits for the page to
 * load and go idle, and is skipped entirely when the visitor prefers reduced
 * motion.
 */
export function SceneMount() {
  const reduced = usePrefersReducedMotion();
  const small = useMediaQuery("(max-width: 767px)");
  const armed = useStore(sceneArmed);

  if (reduced || !armed) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <ParticleCanvas count={small ? 6500 : 15000} />
    </div>
  );
}
