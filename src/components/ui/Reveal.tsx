"use client";

import { motion, useInView, useScroll, useTransform, animate, type MotionValue } from "motion/react";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const EXPO = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Adds a focus-pull blur; reserve it for headings, it is expensive on big blocks. */
  blur?: boolean;
}

/** Fades content up the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 28, blur = false }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(12px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.95, delay, ease: EXPO }}
    >
      {children}
    </motion.div>
  );
}

interface RiseProps {
  text: string;
  /** Seconds after the intro curtain starts lifting. */
  delay?: number;
  className?: string;
  /** Animate each letter on its own beat, or the whole word as one block. */
  by?: "letter" | "word";
  /**
   * Classes for the moving glyphs themselves. Gradient text must go here:
   * `background-clip: text` does not reach through a transformed child.
   */
  glyphClassName?: string;
}

/**
 * Text that rises out of a mask. Pure CSS (`.rise` in globals.css), so it
 * plays on first paint without waiting for hydration. Screen readers get the
 * plain string.
 */
export function Rise({ text, delay = 0, className, by = "letter", glyphClassName = "" }: RiseProps) {
  const parts = by === "letter" ? Array.from(text) : [text];
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-flex">
        {parts.map((part, i) => (
          // Padding + negative margin keeps descenders and italic overhang inside the mask.
          <span
            key={`${part}-${i}`}
            className="-mx-[0.06em] -mb-[0.32em] -mt-[0.08em] inline-block overflow-hidden px-[0.06em] pb-[0.32em] pt-[0.08em]"
          >
            <span
              className={`rise inline-block will-change-transform ${glyphClassName}`}
              style={{ "--d": `${(delay + i * 0.038).toFixed(3)}s` } as CSSProperties}
            >
              {part === " " ? "\u00A0" : part}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

function ScrubWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.42, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.26em] inline-block">
      {word}
    </motion.span>
  );
}

/** Paragraph whose words light up one by one as the reader scrolls through it. */
export function WordScrub({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.86", "end 0.5"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrubWord
          key={`${word}-${i}`}
          word={word}
          progress={scrollYProgress}
          range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]}
        />
      ))}
    </p>
  );
}

/** Counts from zero to `value` once visible. Server HTML already holds the final number. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EXPO,
      onUpdate: (v) => {
        node.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>{value}</span>
      {suffix}
    </span>
  );
}
