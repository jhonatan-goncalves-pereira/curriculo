import { MARQUEE } from "@/lib/site";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {MARQUEE.map((item, i) => (
        <li key={item} className="flex items-center">
          <span
            className={`px-7 text-[clamp(1.9rem,4.6vw,3.6rem)] leading-none tracking-tight ${
              i % 2 ? "accent outline-text text-[clamp(2.1rem,5vw,4rem)]" : "font-medium text-fg"
            }`}
          >
            {item}
          </span>
          <svg aria-hidden viewBox="0 0 24 24" className="size-5 text-mint" fill="currentColor">
            <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

/** Endless strip of core technologies between the hero and the story. */
export function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-line bg-ink/60 py-7 backdrop-blur-sm [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
