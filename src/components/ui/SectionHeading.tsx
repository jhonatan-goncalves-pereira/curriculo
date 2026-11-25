import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** Ordem da seção. Não é mais desenhada: as seções não são uma sequência. */
  index?: string;
  eyebrow: string;
  /** First part in the display sans, second in the serif accent. */
  title?: [string, string];
  lead?: ReactNode;
  className?: string;
  /** Set to "p" when the caller renders its own heading for the section. */
  labelAs?: "p" | "h2";
}

export function SectionHeading({ eyebrow, title, lead, className, labelAs }: SectionHeadingProps) {
  const Label = labelAs ?? (title ? "p" : "h2");
  return (
    <div className={className}>
      <Reveal>
        {/* Sem título grande, o rótulo é o título da seção. Escrito à caneta, sublinhado de vermelho. */}
        <Label className="eyebrow inline-flex flex-col">
          {eyebrow}
          <svg aria-hidden viewBox="0 0 120 8" preserveAspectRatio="none" className="mt-0.5 h-2 w-full text-violet">
            <path
              d="M2 5C30 2 62 7 118 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </Label>
      </Reveal>
      {title && (
        <Reveal delay={0.06} blur>
          <h2 className="display mt-6 text-[clamp(2.6rem,6.4vw,5.6rem)]">
            {title[0]}{" "}
            <span className="accent gradient-text pr-[0.08em] text-[1.06em]">{title[1]}</span>
          </h2>
        </Reveal>
      )}
      {lead && (
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-[46ch] text-pretty text-[1.05rem] leading-relaxed text-muted">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
