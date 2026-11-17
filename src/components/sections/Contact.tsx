"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { copyText, useT } from "@/lib/hooks";
import { SITE } from "@/lib/site";
import { ArrowUpRight, Check, Copy, GitHub, LinkedIn, Mail, Send, WhatsApp } from "../ui/Icons";
import { Magnetic } from "../ui/Interactive";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type Status = "idle" | "sending" | "success" | "error";

const FIELD =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3.5 text-[0.96rem] text-fg outline-none transition-colors placeholder:text-dim hover:border-white/20 focus:border-mint focus:bg-mint/[0.03]";

function ContactForm() {
  const t = useT();
  const f = t.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot: real people never fill a field they cannot see.
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: "Contato pelo portfólio",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="panel p-6 md:p-8">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">{f.name}</span>
          <input className={FIELD} name="name" autoComplete="name" placeholder={f.name} required />
        </label>
        <label className="block">
          <span className="sr-only">{f.email}</span>
          <input
            className={FIELD}
            type="email"
            name="email"
            autoComplete="email"
            placeholder={f.email}
            required
          />
        </label>
      </div>
      <label className="mt-3 block">
        <span className="sr-only">{f.message}</span>
        <textarea
          className={`${FIELD} min-h-[150px] resize-y`}
          name="message"
          placeholder={f.message}
          required
        />
      </label>
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="group flex h-13 items-center gap-3 rounded-full bg-fg pl-6 pr-2 text-[0.95rem] font-medium text-ink transition-opacity disabled:opacity-60"
        >
          {sending ? f.sending : f.send}
          <span className="grid size-9 place-items-center rounded-full bg-ink text-fg transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <Send className={sending ? "animate-pulse" : ""} />
          </span>
        </button>

        <p aria-live="polite" className="min-h-[1.25rem] flex-1 text-[0.9rem]">
          <AnimatePresence mode="wait">
            {(status === "success" || status === "error") && (
              <motion.span
                key={status}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`inline-flex items-center gap-2 ${
                  status === "success" ? "text-mint" : "text-[#ffb86b]"
                }`}
              >
                {status === "success" && <Check />}
                {status === "success" ? f.success : f.error}
              </motion.span>
            )}
          </AnimatePresence>
        </p>
      </div>
    </form>
  );
}

function EmailLine() {
  const t = useT();
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (!(await copyText(SITE.email))) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${SITE.email}`}
        className="group flex items-center gap-3 break-all text-[clamp(1.05rem,2.3vw,1.6rem)] font-medium tracking-tight"
      >
        <Mail className="shrink-0 text-mint" />
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
          {SITE.email}
        </span>
      </a>
      <Magnetic strength={0.35}>
        <button
          type="button"
          onClick={onCopy}
          className="flex h-10 items-center gap-2 rounded-full border border-line px-4 font-mono text-[0.74rem] text-muted transition-colors hover:border-mint/50 hover:text-fg"
        >
          {copied ? <Check className="text-mint" /> : <Copy />}
          <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
        </button>
      </Magnetic>
    </div>
  );
}

export function Contact() {
  const t = useT();
  const c = t.contact;

  return (
    <section id="contact" data-scene="5" className="section-y relative">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading index="06" eyebrow={c.eyebrow} labelAs="p" />
          <Reveal delay={0.05} blur>
            <h2 className="display mt-6 text-[clamp(3.6rem,12vw,10rem)]">
              {c.title[0]}{" "}
              <span className="accent gradient-text -mb-[0.2em] block pb-[0.2em] pr-[0.08em] text-[1.04em] leading-[0.95]">
                {c.title[1]}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-[40ch] text-pretty text-[1.1rem] leading-relaxed text-muted">
              {c.lead}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <EmailLine />
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { label: "WhatsApp", href: SITE.whatsapp, icon: <WhatsApp /> },
                { label: "LinkedIn", href: SITE.linkedin, icon: <LinkedIn /> },
                { label: "GitHub", href: SITE.github, icon: <GitHub /> },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 items-center gap-2.5 rounded-full border border-line bg-ink-2/70 px-5 text-[0.92rem] transition-colors hover:border-white/30"
                >
                  {link.icon}
                  {link.label}
                  <ArrowUpRight className="text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-16">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {c.availability.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-line bg-ink-2/85 px-3 py-1.5 font-mono text-[0.7rem] text-muted"
                >
                  <span aria-hidden className="size-1 rounded-full bg-mint" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
