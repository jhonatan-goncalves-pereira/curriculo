import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  /** First part in the display sans, second in the serif accent. */
  title?: [string, string];
  lead?: ReactNode;
  className?: string;
  /** Set to "p" when the caller renders its own heading for the section. */
  labelAs?: "p" | "h2";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  className,
  labelAs,
}: SectionHeadingProps) {
  const Label = labelAs ?? (title ? "p" : "h2");
  return (
    <div className={className}>
      <Reveal>
        {/* Without a display title the eyebrow is the section's heading. */}
        <Label className="eyebrow flex items-center gap-3">
          <span aria-hidden className="text-mint">
            {index}
          </span>
          <span aria-hidden className="h-px w-10 bg-line" />
          {eyebrow}
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
