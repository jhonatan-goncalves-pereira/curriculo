"use client";

import { useLocalTime, useT } from "@/lib/hooks";
import { SITE } from "@/lib/site";
import { ArrowUp, GitHub, LinkedIn, Mail } from "../ui/Icons";

export function Footer() {
  const t = useT();
  const time = useLocalTime();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-line bg-ink/70 backdrop-blur-sm">
      <div className="shell flex flex-wrap items-center justify-between gap-6 py-10">
        <p className="max-w-[40ch] text-[0.92rem] leading-relaxed text-muted">{t.footer.built}</p>

        <div className="flex items-center gap-2">
          {[
            { label: "GitHub", href: SITE.github, icon: <GitHub /> },
            { label: "LinkedIn", href: SITE.linkedin, icon: <LinkedIn /> },
            { label: "Email", href: `mailto:${SITE.email}`, icon: <Mail /> },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-mint/50 hover:text-mint"
            >
              {link.icon}
            </a>
          ))}
          <a
            href="#home"
            className="ml-2 flex h-11 items-center gap-2 rounded-full border border-line px-4 text-[0.86rem] transition-colors hover:border-fg/30"
          >
            {t.footer.top}
            <ArrowUp />
          </a>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the viewport edge on purpose. */}
      <p
        aria-hidden
        className="display pointer-events-none -mb-[0.16em] select-none whitespace-nowrap text-center text-[clamp(4rem,17.5vw,19rem)] leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgb(30_42_74/0.26)] [mask-image:linear-gradient(#000_35%,transparent_105%)]"
      >
        Jhonatan<span className="accent">.</span>
      </p>

      <div className="shell eyebrow flex flex-wrap items-center justify-between gap-3 border-t border-line py-5">
        {/* Built once, read for years: the client may know a newer year than the HTML. */}
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
        </span>
        <span>
          Juazeiro do Norte, CE{time ? ` · ${time}` : ""}
        </span>
      </div>
    </footer>
  );
}
