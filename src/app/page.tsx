"use client";

import { useState, useEffect, useRef } from "react";

/* ── DATA ────────────────────────────────────────────────────── */

const NAV = [
  { id: "home",       label: "Início" },
  { id: "about",      label: "Sobre" },
  { id: "experience", label: "Experiência" },
  { id: "skills",     label: "Skills" },
  { id: "contact",    label: "Contato" },
];

const PHRASES = ["Full Stack Developer.", "QA Engineer.", "Power BI Analyst.", "ML & IoT Enthusiast."];

const STATS = [
  { v: "4+",  l: "Anos de experiência" },
  { v: "15+", l: "Projetos entregues" },
  { v: "8+",  l: "Empresas & institutos" },
  { v: "AWS", l: "Certificação cloud" },
];

const CERTS = [
  { name: "AWS Certified Cloud Practitioner",         issuer: "Amazon Web Services" },
  { name: "Postman API Fundamentals Student Expert",  issuer: "Postman" },
  { name: "Formação QA Analyst",                      issuer: "DBC Company" },
  { name: "Fundamentos do Desenvolvimento de Sistemas", issuer: "EV Bradesco" },
];

const SKILLS = [
  { cat: "cat-backend",  color: "#f59e0b", label: "Backend",        items: ["Java","Spring Boot","Node.js","Express.js","PHP","REST APIs","JWT"] },
  { cat: "cat-frontend", color: "#00e5ff", label: "Frontend",       items: ["React","Next.js","TypeScript","JavaScript","HTML/CSS","Tailwind","Bootstrap"] },
  { cat: "cat-db",       color: "#10b981", label: "Banco de Dados", items: ["PostgreSQL","MySQL","SQL Server","Prisma ORM","Oracle"] },
  { cat: "cat-devops",   color: "#ef4444", label: "Infra & DevOps", items: ["Docker","Linux","AWS EC2/S3/Lambda","Proxmox/KVM","NGINX","Git","CI/CD"] },
  { cat: "cat-qa",       color: "#8b5cf6", label: "QA & Testes",    items: ["Cypress","Selenium","JUnit","REST Assured","Postman","Testes Ágeis"] },
  { cat: "cat-ml",       color: "#ec4899", label: "ML / AI / IoT",  items: ["Python","scikit-learn","DistilBERT / NLP","AWS SageMaker","Power BI","Raspberry Pi","MQTT","Edge AI"] },
];

const EXP = [
  {
    company: "Universidade Regional do Cariri – URCA",
    role: "Desenvolvedor Full Stack · Analista de Sistemas",
    period: "Ago 2024 – Presente",
    location: "Crato, CE",
    current: true,
    tags: ["Node.js","Spring Boot","React","PostgreSQL","Proxmox"],
    desc: "Desenvolvimento e manutenção de sistemas institucionais de média e alta complexidade. APIs RESTful com Java/Spring Boot e Node.js/Express. Frontend em React com Chart.js e FullCalendar. Gerência de 8+ VMs em produção com Proxmox/KVM.",
    logo: "https://www.urca.br/wp-content/uploads/2020/08/logo-footer.png",
  },
  {
    company: "PET-Saúde Informação e Saúde Digital",
    role: "Monitor Bolsista",
    period: "Ago 2025 – Presente",
    location: "Juazeiro do Norte, CE",
    current: true,
    tags: ["DATASUS","e-SUS","Power BI","Interoperabilidade","SUS"],
    desc: "Mapeamento de 18 sistemas de informação em saúde em uso na SESAU. Proposição de 7 painéis BI vinculados ao financiamento Previne Brasil/ID-APS. Diagnóstico de zero interoperabilidade entre sistemas.",
    logo: "https://www.gov.br/saude/pt-br/composicao/sgtes/pet-saude/imagens/PETSAUDE.png/@@images/d5c89d72-fbca-4829-b024-602106508ffc.png",
  },
  {
    company: "DBC Company",
    role: "QA Analyst Trainee",
    period: "Nov 2024 – Abr 2025",
    location: "Porto Alegre, RS",
    current: false,
    tags: ["Cypress","Selenium","JUnit","CI/CD","Docker","GitHub Actions"],
    desc: "Automação de testes de aplicações web e APIs REST. Integração com pipelines CI/CD via GitHub Actions. Redução de retrabalho manual e cobertura de regressão em projetos ágeis.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsx9H5V2xgDSMKC6vib2FHat2R8yn-zoedQ&s",
  },
  {
    company: "URCA – Suporte de TI",
    role: "Analista de Suporte de TI",
    period: "Nov 2023 – Set 2024",
    location: "Crato, CE",
    current: false,
    tags: ["Linux","Redes","Servidores","NGINX","TLS"],
    desc: "Gestão de infraestrutura de redes e hardware. Manutenção de servidores, roteadores e impressoras. Segurança de rede, renovação de certificados TLS e documentação técnica.",
    logo: "https://www.urca.br/wp-content/uploads/2020/08/logo-footer.png",
  },
  {
    company: "Capacita Brasil / RNP",
    role: "Trainee",
    period: "Jun 2024 – Nov 2024",
    location: "Rio de Janeiro, RJ",
    current: false,
    tags: ["perfSONAR","Linux","Docker","Automação","Latência"],
    desc: "Implementação e manutenção de ferramentas de monitoramento de rede (perfSONAR). Testes de throughput, latência, RTT e traceroute. Relatórios e apresentações em eventos técnicos nacionais.",
    logo: "https://www.rnp.br/wp-content/uploads/2024/08/default.png",
  },
  {
    company: "Prefeitura de Juazeiro do Norte – SESAU",
    role: "Estagiário de TI / Analista de Dados",
    period: "Ago 2022 – Ago 2023",
    location: "Juazeiro do Norte, CE",
    current: false,
    tags: ["PHP","MySQL","Power BI","JavaScript","HTML/CSS"],
    desc: "Digitalização de processos administrativos da secretaria de saúde. Dashboards em Power BI para monitoramento de indicadores de saúde utilizados pela gestão municipal.",
    logo: "https://juazeirodonorte.ce.gov.br/link/link179.jpg",
  },
  {
    company: "Compass UOL",
    role: "Bolsista – AWS & Machine Learning",
    period: "Nov 2022 – Abr 2023",
    location: "Brasil (remoto)",
    current: false,
    tags: ["AWS","Python","ML","SageMaker","Lambda"],
    desc: "Formação intensiva em cloud AWS e Machine Learning. Projetos com EC2, S3, Lambda, API Gateway. Certificação AWS obtida. Modelos de ML com SageMaker e Python/scikit-learn.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8x6lISMxfcPaPSEvXjcIyhK3pCdVv31pCTA&s",
  },
  {
    company: "CNPq",
    role: "Bolsista de Iniciação Científica",
    period: "Set 2021 – Set 2022",
    location: "Crato, CE",
    current: false,
    tags: ["R","Análise de Dados","Estatística","Big Data"],
    desc: "Análise de bases nacionais públicas e sua influência no fator educacional. Software R para identificação de padrões em grandes conjuntos de dados e contribuição em políticas públicas.",
    logo: "https://www2.ifal.edu.br/noticias/cnpq-divulga-chamada-para-pesquisas-para-enfrentamento-da-covid-19/cnpq.png/@@images/image.png",
  },
];

const CONTACT_LINKS = [
  { icon: "✉", label: "Email",      value: "jhonatan.pereira@urca.br", href: "mailto:jhonatan.pereira@urca.br" },
  { icon: "💼", label: "LinkedIn",   value: "jhonatan-goncalves-pereira",       href: "https://www.linkedin.com/in/jhonatan-goncalves-pereira", blank: true },
  { icon: "📍", label: "Localização",value: "Juazeiro do Norte, CE – Brasil",   href: undefined },
];

/* ── ICONS ───────────────────────────────────────────────────── */
const GhIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LiIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);
const SendIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

/* ── COMPONENT ───────────────────────────────────────────────── */
export default function Home() {
  const [active, setActive]       = useState("home");
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [typed, setTyped]         = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const phraseIdx = useRef(0);
  const charIdx   = useRef(0);
  const deleting  = useRef(false);

  /* typewriter */
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const ph = PHRASES[phraseIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setTyped(ph.slice(0, charIdx.current));
        if (charIdx.current === ph.length) {
          deleting.current = true;
          t = setTimeout(tick, 2000);
        } else {
          t = setTimeout(tick, 60);
        }
      } else {
        charIdx.current--;
        setTyped(ph.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % PHRASES.length;
          t = setTimeout(tick, 380);
        } else {
          t = setTimeout(tick, 36);
        }
      }
    };
    t = setTimeout(tick, 800);
    return () => clearTimeout(t);
  }, []);

  /* cursor */
  useEffect(() => {
    const t = setInterval(() => setShowCursor(v => !v), 520);
    return () => clearInterval(t);
  }, []);

  /* scroll spy */
  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      for (const { id } of [...NAV].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>

      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <button onClick={() => goto("home")} className="nav-logo grad">
            JG<span style={{ color: "var(--c-cyan)" }}>.</span>
          </button>

          {/* desktop */}
          <div className="nav-links">
            {NAV.map(n => (
              <button key={n.id} onClick={() => goto(n.id)} className={`nav-link${active === n.id ? " active" : ""}`}>
                {n.label}
                {active === n.id && <span className="nav-dot" />}
              </button>
            ))}
          </div>

          {/* mobile toggle */}
          <button className="nav-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* mobile menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => goto(n.id)} className={`mobile-link${active === n.id ? " active" : ""}`}>
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="hero-blob1" />
        <div className="hero-blob2" />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot" />
            Disponível para novas oportunidades
          </div>

          <h1 className="display-xl hero-title">
            Jhonatan{" "}
            <span className="grad">Gonçalves</span>
          </h1>

          <p className="hero-typewriter">
            {typed}
            <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </p>

          <p className="hero-sub">
            Graduando em Sistemas de Informação · IFCE Crato · Cariri, CE<br />
            Construindo sistemas que importam — do backend ao edge.
          </p>

          <div className="hero-actions">
            <button onClick={() => goto("contact")} className="btn btn-primary">
              Vamos conversar <ArrowIcon />
            </button>
            <button onClick={() => goto("experience")} className="btn btn-outline">
              Ver experiência
            </button>
          </div>

          <div className="hero-socials">
            {[
              { href: "https://github.com/jhonatan-goncalves-pereira", icon: <GhIcon />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/jhonatan-goncalves-pereira", icon: <LiIcon />, label: "LinkedIn" },
              { href: "mailto:jhonatan.pereira@urca.br", icon: <MailIcon />, label: "Email" },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer" aria-label={s.label} className="social-btn">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="scroll-hint">
          <span className="scroll-hint-text">scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section-pad" style={{ background: "var(--c-bg2)" }}>
        <div className="container">
          <span className="eyebrow">Sobre</span>
          <h2 className="display-lg" style={{ marginBottom: "clamp(40px,6vw,64px)" }}>
            Quem sou<span style={{ color: "var(--c-cyan)" }}>.</span>
          </h2>

          <div className="about-grid">
            {/* photo */}
            <div className="photo-wrap">
              <div className="photo-ring1" />
              <div className="photo-ring2" />
              <div className="photo-img">
                <img
                  src="https://avatars.githubusercontent.com/u/94761781?v=4"
                  alt="Jhonatan Gonçalves"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* content */}
            <div>
              <h3 className="display-md" style={{ marginBottom: "16px", lineHeight: 1.3 }}>
                Desenvolvedor Full Stack<br />
                <span className="grad">& Pesquisador em ML</span>
              </h3>
              <p style={{ color: "var(--c-t2)", lineHeight: 1.85, marginBottom: 14, fontSize: "clamp(13px,1.8vw,15px)" }}>
                Meu nome é <strong style={{ color: "var(--c-t1)" }}>Jhonatan Gonçalves Pereira</strong>. Atuo como Analista de Sistemas
                na URCA, construindo e mantendo sistemas institucionais de média e alta complexidade com perfil técnico de ponta a ponta.
              </p>
              <p style={{ color: "var(--c-t2)", lineHeight: 1.85, marginBottom: "clamp(20px,3vw,32px)", fontSize: "clamp(13px,1.8vw,15px)" }}>
                Meu TCC aplica <strong style={{ color: "var(--c-t1)" }}>Machine Learning e NLP</strong> (Random Forest, DistilBERT)
                para predição de defeitos em commits. Atuo também no <strong style={{ color: "var(--c-t1)" }}>PET-Saúde Digital</strong>,
                mapeando sistemas de saúde pública e propondo painéis BI para gestão municipal com foco em interoperabilidade SUS.
              </p>

              {/* stats */}
              <div className="stats-grid">
                {STATS.map(s => (
                  <div key={s.l} className="glass card stat-card">
                    <div className="stat-num grad">{s.v}</div>
                    <div className="stat-lbl">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* certs */}
              <p className="mono" style={{ color: "var(--c-t3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Certificações
              </p>
              <div className="cert-list">
                {CERTS.map((c, i) => (
                  <div key={i} className="cert-item">
                    <span className="cert-dot" />
                    <span style={{ color: "var(--c-t1)", fontWeight: 500 }}>{c.name}</span>
                    <span style={{ color: "var(--c-t3)" }}>·</span>
                    <span style={{ color: "var(--c-t2)" }}>{c.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section-pad">
        <div className="container">
          <span className="eyebrow">Carreira</span>
          <h2 className="display-lg" style={{ marginBottom: "clamp(40px,6vw,64px)" }}>
            Experiência<span style={{ color: "var(--c-cyan)" }}>.</span>
          </h2>

          <div className="timeline">
            <div className="timeline-line" />
            <div className="timeline-items">
              {EXP.map((e, i) => (
                <div key={i} className="timeline-item">
                  <div className="tl-dot-wrap">
                    <div className={`tl-dot${e.current ? " active" : ""}`} />
                  </div>
                  <div className={`tl-card glass card${e.current ? " current glass-cyan" : ""}`}>
                    <div className="tl-header">
                      {e.logo && (
                        <div className="tl-logo">
                          <img src={e.logo} alt={e.company} />
                        </div>
                      )}
                      <div className="tl-meta">
                        <div className="tl-badges">
                          {e.current && (
                            <span className="badge-current">
                              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                              Atual
                            </span>
                          )}
                          <span className="badge-period mono">{e.period}</span>
                          <span className="badge-period mono" style={{ color: "var(--c-t3)" }}>· {e.location}</span>
                        </div>
                        <div className="tl-role">{e.role}</div>
                        <div className="tl-company">{e.company}</div>
                      </div>
                    </div>
                    <p className="tl-desc">{e.desc}</p>
                    <div className="tl-tags">
                      {e.tags.map(t => (
                        <span key={t} className="tag tag-cyan">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section-pad" style={{ background: "var(--c-bg2)" }}>
        <div className="container">
          <span className="eyebrow">Skills</span>
          <h2 className="display-lg" style={{ marginBottom: "clamp(40px,6vw,64px)" }}>
            Conhecimentos<span style={{ color: "var(--c-cyan)" }}>.</span>
          </h2>

          <div className="skills-grid">
            {SKILLS.map(sk => (
              <div key={sk.cat} className={`skill-card glass card ${sk.cat}`}
                style={{ "--cat-c": sk.color } as React.CSSProperties}>
                <div className="skill-header">
                  <span className="skill-dot" />
                  <span className="skill-label">{sk.label}</span>
                </div>
                <div className="skill-chips">
                  {sk.items.map(item => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-pad">
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Contato</span>
            <h2 className="display-lg">
              Vamos conversar<span style={{ color: "var(--c-cyan)" }}>.</span>
            </h2>
            <p style={{ color: "var(--c-t3)", marginTop: 12, fontSize: 15 }}>
              Aberto a oportunidades remotas, híbridas e presenciais.
            </p>
          </div>

          <div className="contact-links">
            {CONTACT_LINKS.map(c => (
              <a key={c.label} href={c.href} target={c.blank ? "_blank" : undefined}
                rel="noopener noreferrer" className="contact-card glass"
                style={{ pointerEvents: c.href ? "auto" : "none" }}>
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-lbl">{c.label}</div>
                  <div className="contact-val">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="form-wrap glass">
            <form action="https://formsubmit.co/jhonatan.pereira@urca.br" method="POST">
              <input type="hidden" name="_subject" value="Contato pelo portfólio" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <input className="form-input" type="text" name="name" placeholder="Seu nome" required />
                <input className="form-input" type="email" name="email" placeholder="Seu email" required />
              </div>
              <textarea className="form-input form-textarea" name="message" placeholder="Sua mensagem..." required />
              <button type="submit" className="form-submit">
                Enviar mensagem <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="footer">
        <span className="footer-text">© 2025 Jhonatan Gonçalves Pereira</span>
        <span className="footer-text">Cariri, CE · Brasil</span>
      </div>

    </main>
  );
}