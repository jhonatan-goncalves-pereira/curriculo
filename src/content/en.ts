import { BASE_PATH } from "@/lib/site";
import type { Dictionary } from "./types";

const GH = "https://github.com/jhonatan-goncalves-pereira";

export const en: Dictionary = {
  meta: {
    title: "Jhonatan Gonçalves — Full Stack Developer · Systems & Infra",
    description:
      "Full Stack Developer with systems in production in public health and higher education. React, Next.js, TypeScript, Java/Spring Boot, Node.js, Linux infrastructure on Proxmox, test automation, BI and Edge AI. Open to remote roles.",
    cv: `${BASE_PATH}/cv-jhonatan-goncalves-pereira-en.pdf`,
  },
  nav: {
    items: [
      { id: "products", label: "Products" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Stack" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Download CV",
    menu: "Open menu",
    close: "Close menu",
    skip: "Skip to content",
    search: "Open quick search",
  },
  hero: {
    status: "Open to remote roles · UTC−3",
    rolesPrefix: "Full Stack Developer",
    roles: ["Digital Health", "Systems & Infra", "QA Automation", "BI & Data"],
    lead: "I ship end to end, from the React interface to the Java or Node API, and from the database to the server that keeps it all running. My systems run in production at a public university, a city health department and a factory floor.",
    noteHand: "336 pairs, 99.4%",
    noteSystem: "336 pairs logged, 99.4% quality",
    noteCaption: "Day one of the system at Esplêndida Calçados: from notebook to tablet.",
    primary: "See live systems",
    secondary: "Download CV",
    location: "Juazeiro do Norte, CE · Brazil",
    current: "Currently at URCA",
    scroll: "Scroll to explore",
    localTime: "Local time",
  },
  about: {
    eyebrow: "About",
    statement:
      "I turn messy processes into software people actually use. I have taken systems from zero to production at a public university and a city health department, automated testing at a consultancy, and put machine learning to work inside a microcontroller.",
    paragraphs: [
      "I am a Full Stack Developer and Systems Analyst at the Regional University of Cariri (URCA), where I build and maintain institutional systems and run the virtualized infrastructure behind them.",
      "I am in the final stage of my B.Sc. in Information Systems at IFCE, with only the thesis defense left; my research predicts defects in commits using Machine Learning and NLP. Through PET-Saúde Digital, I built SESAU Digital, a management platform now in production at the Juazeiro do Norte City Health Department.",
    ],
    stats: [
      { value: 5, suffix: "+", label: "years working in tech" },
      { value: 8, suffix: "+", label: "production VMs under my care" },
      { value: 18, label: "public health systems mapped" },
      { value: 4, label: "institutional systems built from scratch" },
    ],
    principlesTitle: "How I work",
    principles: [
      {
        title: "End to end",
        body: "Frontend, backend, database and infrastructure. I understand the full path of a request, so I fix the problem where it actually lives.",
      },
      {
        title: "Quality from day one",
        body: "I come from QA: automated tests and CI/CD are part of the delivery, not a step left for later.",
      },
      {
        title: "Data that drives decisions",
        body: "From Power BI dashboards to ML models, I use data to answer concrete questions for the people making decisions.",
      },
    ],
    photoAlt: "Portrait of Jhonatan Gonçalves Pereira",
    photoCaption: "Cariri, Ceará",
  },
  products: {
    eyebrow: "Products",
    title: ["Live systems", "in real use"],
    lead: "Four products I built from scratch that people use every day: two in public health in Juazeiro do Norte and two at the Regional University of Cariri. All open for you to explore right now.",
    visit: "Open",
    items: [
      {
        id: "sesau",
        kicker: "City Health Department · in production",
        name: "SESAU Digital",
        domain: "sesau-digital.vercel.app",
        href: "https://sesau-digital.vercel.app/",
        description:
          "A paperless health department: documents with e-signatures, public health planning (PPI) as open data and each unit's four-month report, all at one address with a single login.",
        highlights: [
          "Digital Protocol: creates, signs, numbers and routes official documents, with public QR-code validation.",
          "PPI Management: reads the State Health Department's official reports and checks planning against approved production in DATASUS.",
          "Sector-level RDQA: each unit fills in its part, and the system produces the signed report and the dashboards for the public hearing.",
        ],
        metrics: [
          { value: "72", label: "units in the system" },
          { value: "236", label: "automated tests" },
          { value: "132/132", label: "PPI reports reconciled" },
        ],
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "React PDF", "Three.js"],
        imageAlt: "SESAU Digital home page, with a 3D map of the outpatient planning received by Juazeiro do Norte",
      },
      {
        id: "cms",
        kicker: "City Health Council · live",
        name: "CMS Digital",
        domain: "cms-juazeiro.vercel.app",
        href: "https://cms-juazeiro.vercel.app/",
        description:
          "Management for the City Health Council: council members, committees, meetings with attendance, quorum and voting, a library of resolutions and the follow-up of RDQA, RAG and health plans, with a public transparency portal.",
        highlights: [
          "The council's bylaws become system rules: quorum, parity, absences and deadlines trigger automatic alerts.",
          "RDQA, RAG and plans tracked from receipt to resolution, with written opinions and the legal deadlines of Brazil's LC 141/2012.",
          "Meeting calls by email and WhatsApp, certificates with QR codes and a hash-chained audit trail.",
        ],
        metrics: [
          { value: "20", label: "seats with parity" },
          { value: "39", label: "automated tests" },
          { value: "3", label: "access roles" },
        ],
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "React PDF", "Vercel"],
        imageAlt: "CMS Digital home page, with the wheel of the council's 20 seats",
      },
      {
        id: "siseventos",
        kicker: "Regional University of Cariri · in production",
        name: "SIS Eventos",
        domain: "siseventos.urca.br",
        href: "https://siseventos.urca.br/",
        description:
          "The university's conferences, academic weeks, exhibitions and courses in one place: registration, paper submission, attendance and certificates, from ticket to certificate and paperless.",
        highlights: [
          "Registration in seconds from a phone or computer, with an instant receipt.",
          "Attendance by QR code, on the entrance screen or in the speaker's roll call, even offline.",
          "Certificates with a code and QR anyone can verify, sent straight to LinkedIn. Installable app, no app store needed.",
        ],
        metrics: [
          { value: "641", label: "registrations in a single stage of University Week" },
          { value: "62", label: "certificates issued in a single day" },
        ],
        stack: ["TypeScript", "React", "Node.js", "PWA", "QR Code"],
        imageAlt: "SIS Eventos home page, showcasing the university's events",
      },
      {
        id: "sisagenda",
        kicker: "Regional University of Cariri · in production",
        name: "SIS Agenda",
        domain: "sisagenda.urca.br",
        href: "https://sisagenda.urca.br/",
        description:
          "Resource booking for the university: rooms and labs, equipment, vehicles and department services, with real-time availability and approval by the person in charge.",
        highlights: [
          "Requests in minutes, approved by the person in charge, with the answer by email.",
          "A calendar with every booking, history and real-time status, to avoid schedule clashes.",
          "Bookings in Google Calendar and on the phone, sign-in with Google and an installable app.",
        ],
        metrics: [
          { value: "385+", label: "approved bookings" },
          { value: "4", label: "resource types: rooms, equipment, vehicles and services" },
        ],
        stack: ["React", "Vite", "Node.js", "Express", "Prisma", "PWA"],
        imageAlt: "SIS Agenda home page, the university's booking system",
      },
    ],
    dataTitle: "Data for health management",
    dataLead: "What runs under SESAU Digital and CMS Digital, and what I can bring to any health department:",
    data: [
      {
        title: "PPI × production",
        body: "Agreed health planning checked against approved production in DATASUS, by value and by volume.",
      },
      {
        title: "Reports without rework",
        body: "Each unit feeds its own part; the four-month report comes out ready, signed and with dashboards.",
      },
      {
        title: "Indicator dashboards",
        body: "Power BI with row-level security and DAX measures so managers can track health indicators.",
      },
      {
        title: "Public health data mapped",
        body: "18 health information systems mapped at the department, with integration gaps documented.",
      },
    ],
  },
  experience: {
    eyebrow: "Journey",
    title: ["Where I've", "delivered"],
    lead: "A public university, a consultancy, a national research network and city health management. Different contexts, the same bar: it has to work in production.",
    now: "Current",
    more: "View full journey",
    less: "Show less",
    items: [
      {
        company: "PNAAT Residency · Esplêndida Calçados",
        mark: "PN",
        role: "Software Development Resident (Full Stack)",
        period: "Oct 2026 — Present",
        location: "Cariri, Brazil",
        current: true,
        points: [
          "Through PNAAT (FIT, Softex Cariri and UFCA), I was placed at Esplêndida Calçados, an injection-molded footwear factory, and built with three other residents a production and scrap tracking system (OEE) that went into real use on the line in 6 weeks.",
          "Offline-first tablets (React, TypeScript, IndexedDB) and a FastAPI and PostgreSQL API, with 371 automated tests.",
          "Infrastructure on the factory's own server: HTTPS, secure remote access and one-click releases with backup and automatic rollback (Bitbucket Pipelines).",
          "Shop-floor requirements gathering, manuals, videos and user training, following the program's Kaizen method (PDCA, Pareto, Before & After).",
        ],
        tags: ["FastAPI", "PostgreSQL", "React", "TypeScript", "PWA", "Playwright"],
      },
      {
        company: "URCA · Regional University of Cariri",
        mark: "UR",
        role: "Full Stack Developer · Systems & Infrastructure Analyst",
        period: "Aug 2024 — Present",
        location: "Crato, Brazil",
        current: true,
        points: [
          "Built SisEventos and SisAgenda from scratch (React, Node.js/Express, MySQL), with a proposal workflow, certificates with validation codes and role-based access control (RBAC).",
          "Develop and maintain REST APIs in Java/Spring Boot and Node.js used by hundreds of internal users.",
          "Run 8+ production VMs on Proxmox/KVM (LMS, LDAP, OJS, DNS), plus NGINX, firewall and TLS certificate renewal.",
        ],
        tags: ["React", "Node.js", "Spring Boot", "MySQL", "SQL Server", "Proxmox", "NGINX"],
      },
      {
        company: "PET-Saúde Digital · Juazeiro do Norte City Health Department",
        mark: "PS",
        role: "Student Monitor · Developer of SESAU Digital",
        period: "Aug 2025 — Present",
        location: "Juazeiro do Norte, Brazil",
        current: true,
        points: [
          "Built SESAU Digital, now in production at the department: a digital document protocol with e-signatures and public QR-code validation, PPI planning checked against DATASUS production data, and sector-level RDQA reporting.",
          "Built CMS Digital for the City Health Council: council members, committees, meetings with quorum and voting, a library of resolutions and RDQA/RAG follow-up, with the council's bylaws automated.",
          "Checked the city's outpatient PPI (R$6.1 million a month, patients from 27 municipalities) against approved production in DATASUS: readings that used to take days of manual work.",
          "Mapped 18 health information systems in use at the department and documented the lack of interoperability between them.",
        ],
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "DATASUS", "LGPD"],
      },
      {
        company: "DBC Company",
        mark: "DB",
        role: "QA Analyst · Trainee",
        period: "Nov 2024 — Apr 2025",
        location: "Remote · Porto Alegre, Brazil",
        points: [
          "Automated UI and REST API tests with Cypress, Selenium WebDriver, Postman and REST Assured.",
          "Wired the suites into the CI/CD pipeline with GitHub Actions, cutting manual regression rework.",
        ],
        tags: ["Cypress", "Selenium", "REST Assured", "JUnit", "GitHub Actions"],
      },
      {
        company: "RNP · Brazilian National Research and Education Network",
        mark: "RN",
        role: "Trainee · Network Monitoring",
        period: "Jun 2024 — Nov 2024",
        location: "Remote · Rio de Janeiro, Brazil",
        points: [
          "Deployed and maintained perfSONAR to measure throughput, latency, RTT and routes across the academic network.",
          "Built automations and performance reports and presented the results at technical events.",
        ],
        tags: ["perfSONAR", "Linux", "Docker", "Networking"],
      },
      {
        company: "Capacita Brasil",
        mark: "CB",
        role: "Mentor",
        period: "Aug 2024 — Apr 2025",
        location: "Remote",
        points: [
          "Mentored students in the web development track, supporting React and full stack projects.",
        ],
        tags: ["React", "JavaScript", "Mentoring"],
      },
      {
        company: "URCA · Regional University of Cariri",
        mark: "UR",
        role: "IT Support Analyst",
        period: "Nov 2023 — Sep 2024",
        location: "Crato, Brazil",
        points: [
          "Kept the university's servers, networks and equipment running, with a focus on availability and security.",
          "Documented procedures and fixes for recurring incidents.",
        ],
        tags: ["Linux", "Networking", "Servers", "Security"],
      },
      {
        company: "City of Juazeiro do Norte · Health Department",
        mark: "JN",
        role: "IT Intern · Data Analyst",
        period: "Aug 2022 — Aug 2023",
        location: "Juazeiro do Norte, Brazil",
        points: [
          "Built executive Power BI dashboards with dynamic RLS and 12+ DAX measures, consolidating data from several sources for health management.",
          "Set up dashboards to monitor the health indicators used by city management.",
          "Digitized administrative processes with web systems in JavaScript, PHP and MySQL.",
        ],
        tags: ["Power BI", "DAX", "SQL", "Health indicators", "PHP", "MySQL"],
      },
      {
        company: "Compass UOL",
        mark: "CU",
        role: "Trainee (scholarship) · AWS & Machine Learning",
        period: "Nov 2022 — Apr 2023",
        location: "Remote",
        points: [
          "Built projects on AWS (EC2, S3, Lambda, API Gateway) and trained ML models with SageMaker and scikit-learn.",
        ],
        tags: ["AWS", "Python", "SageMaker", "Node.js"],
      },
      {
        company: "Integra Cariri · Innovation Cluster",
        mark: "IC",
        role: "Founder",
        period: "Jul 2022 — Jan 2023",
        location: "Fortaleza, Brazil",
        points: [
          "Led a team of three building a web platform for public transport routes and schedules in the Cariri region.",
        ],
        tags: ["Product", "Web", "Leadership"],
      },
      {
        company: "CNPq",
        mark: "CN",
        role: "Undergraduate Research Fellow",
        period: "Sep 2021 — Sep 2022",
        location: "Crato, Brazil",
        points: [
          "Analyzed national public datasets in R to identify factors that influence educational indicators.",
        ],
        tags: ["R", "Statistics", "Data analysis"],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: ["Selected", "work"],
    lead: "Seven deliveries that show the range: industry, computer vision, firmware, research, data analysis and quality.",
    all: "View all repositories",
    items: [
      {
        id: "oee",
        kicker: "Industry · in use on the line",
        title: "Esplêndida OEE",
        description:
          "Production and scrap tracking for Esplêndida Calçados, an injection-molded footwear factory in Cariri, Brazil. The tablets work offline, and the dashboard shows production, quality, a Pareto of defects and the progress of each order on the same day. In use on the line since November 2026.",
        stack: ["FastAPI", "PostgreSQL", "React", "TypeScript", "PWA offline-first", "Playwright", "Bitbucket Pipelines"],
        metrics: [
          { value: "6 wks", label: "to real use" },
          { value: "371", label: "automated tests" },
          { value: "11", label: "injection machines covered" },
        ],
        links: [{ label: "Read the case study", href: "#case" }],
        note: "Internal factory system",
      },
      {
        id: "vision",
        kicker: "Computer vision · in progress",
        title: "Vision and waste station",
        description:
          "The residency's next step: a station at the end of the conveyor counts parts by camera, flags defects to compare with the inspector's sorting and, with the scale, measures sprue and purge waste per mold. A pilot is planned with an error target of 5% or less.",
        stack: ["Raspberry Pi 5", "Hailo-8L", "Python", "SQLite", "Computer vision"],
        links: [],
        note: "In progress",
      },
      {
        id: "pulso",
        kicker: "Edge AI · IoT",
        title: "PulsoPNAAT",
        description:
          "Predictive maintenance through vibration analysis. An ESP32-S3 edge node reads the accelerometer at 400 Hz, extracts 18 metrics per second and classifies the machine state. Telemetry flows over MQTT to a Grafana dashboard.",
        stack: ["C", "ESP32-S3", "BNO085", "MQTT", "InfluxDB", "Grafana", "Python"],
        metrics: [
          { value: "400 Hz", label: "sampling rate" },
          { value: "18", label: "metrics per second" },
          { value: "5", label: "states recognized" },
        ],
        links: [{ label: "Code", href: `${GH}/pulsopnaat` }],
      },
      {
        id: "tcc",
        kicker: "Research · Thesis",
        title: "Defect prediction in commits",
        description:
          "ML and NLP to estimate whether a commit will introduce a defect, comparing Random Forest, Logistic Regression and DistilBERT on open source repositories.",
        stack: ["Python", "scikit-learn", "DistilBERT", "NLP"],
        links: [],
        note: "IFCE · Advisor Prof. Dr. Talles Brito",
      },
      {
        id: "bi",
        kicker: "Data · Public health",
        title: "BI for public health management",
        description:
          "Executive Power BI dashboards for the Health Department, with dynamic RLS and 12+ DAX measures consolidating multiple sources.",
        stack: ["Power BI", "DAX", "SQL", "DATASUS"],
        links: [],
        note: "Institutional data",
      },
      {
        id: "ppi",
        kicker: "Data analysis · Python",
        title: "PPI analytics dashboard",
        description:
          "The first version of Juazeiro do Norte's PPI analysis: it downloads the official reports for each period, outpatient (SIA) and hospital (SIH), turns them into tables with pandas and shows the numbers in interactive charts. It became the PPI module of SESAU Digital.",
        stack: ["Python", "pandas", "Plotly", "Streamlit"],
        links: [],
        note: "Institutional data",
      },
      {
        id: "qa",
        kicker: "QA · Automation",
        title: "ServeRest API Tests",
        description:
          "API test suite in Python and Pytest, with JSON Schema validation, published Allure reports and continuous execution in CI.",
        stack: ["Python", "Pytest", "Allure", "GitHub Actions"],
        links: [
          { label: "Code", href: `${GH}/desafio01-bootcamp-qa` },
          {
            label: "Report",
            href: "https://jhonatan-goncalves-pereira.github.io/desafio01-bootcamp-qa/",
          },
        ],
      },
    ],
  },
  caseStudy: {
    eyebrow: "Case study",
    title: ["From notebook", "to tablet"],
    lead: "The factory logged production in a paper notebook, and scrap went to the grinder uncounted. In six weeks we went from shop-floor research to real use: every counting point got a tablet that works offline, and planning, quality and management started seeing the progress of each order on the same day. Every rule in the system came from a conversation with the people who make the parts.",
    facts: [
      { label: "Where", value: "Esplêndida Calçados, an injection-molded footwear factory in Cariri, Brazil, through the PNAAT Residency" },
      { label: "When", value: "October to December 2026, in two-week sprints" },
      { label: "Team", value: "4 residents, advised by Weliton Rodrigues and Flavian Fernandes" },
      { label: "My role", value: "Full stack: offline tablet, API, infrastructure and continuous delivery, with about 2/3 of the commits" },
    ],
    metrics: [
      { value: "6 wks", label: "from day one to real use" },
      { value: "371", label: "automated tests" },
      { value: "99.4%", label: "quality on the first day of use" },
    ],
    problemTitle: "The problem",
    problem: [
      "Production in a notebook: knowing how much of an order was left meant adding it up by hand.",
      "Scrap with no record: it went to the grinder with no count, no cause, no machine and no one responsible.",
      "Planning in the dark: an order left the ERP on paper and only came back when it was done or late.",
    ],
    builtTitle: "What each person got",
    built: [
      {
        who: "Shop floor",
        what: "A tablet with big buttons and a photo of every part: good parts, sorting with the defect, rework with its cause, a one-minute undo and a PIN per operator.",
      },
      {
        who: "Planning",
        what: "Orders imported straight from the ERP's PDF, with a check before saving; deadlines and finish estimates; catalog, stations, molds and sprue weight.",
      },
      {
        who: "Quality",
        what: "Defects per stage, printable inspection sheets, sorting in pairs and the cost of rework.",
      },
      {
        who: "Management",
        what: "Role-based dashboards with production, quality, a Pareto of scrap causes and planned vs. actual for each order, also from outside the factory.",
      },
    ],
    howTitle: "How it was built",
    how: [
      {
        title: "Works offline",
        body: "The tablet stores everything in IndexedDB and syncs when the network comes back. Every entry is born with a UUID, so resending never counts twice.",
      },
      {
        title: "Nothing gets deleted",
        body: "Corrections are reversals with a reason, and the history stays auditable.",
      },
      {
        title: "Factory rules in code",
        body: "Each counting point is checked against the previous one, and no stage approves more than the one before released.",
      },
      {
        title: "ERP without database access",
        body: "Orders, purchase orders and the parts catalog are read from PDF reports, with a cropped photo of each part.",
      },
      {
        title: "On the factory's own server",
        body: "HTTPS, backup and integration run as system tasks and come back on their own after a power cut. Outside access goes through a tunnel, with no open router port.",
      },
      {
        title: "One-click releases",
        body: "Tests and dependency audits on every PR. A release backs up the database, applies migrations, checks itself and rolls back on its own if anything fails.",
      },
    ],
    beforeAfterTitle: "Built with the line, not for the line",
    beforeAfterHead: ["How it was", "What the factory showed us", "What changed in the system"],
    beforeAfter: [
      [
        "Injection logged the defect on the spot",
        "Defects only show up at sorting, hours later",
        "Injection only counts; the defect is entered at the inspector's sorting",
      ],
      [
        "Orders picked by number",
        "The line found an order by the date in the paper's footer and by the models",
        "Number up front, with the date and models as support",
      ],
      [
        "Straps and soles by code",
        "Operators recognize a part by its photo, not its code",
        "A catalog with a photo of every part, grouped by reference",
      ],
      [
        "Sorting by right and left foot",
        "Parts arrive in a bag with no foot known, and scrap counted twice",
        "Sorting in pairs, with the foot only when known; old data fixed by reversal",
      ],
      [
        "Any operator on any machine",
        "Each person should log only on their own stations",
        "A per-machine limit, set by planning",
      ],
    ],
    resultsTitle: "Results",
    results: [
      "In real use on the line since November 19, 2026. On day one, the inspector logged 336 pairs of straps on one machine, at 99.4% quality.",
      "Changes requested by management during real use were released the same day.",
      "11 injection machines, sorting, 2 conveyors, shipping and the grinder covered, with 5 access roles.",
      "371 automated tests, end-to-end browser tests and load tested at 10 times a shift's volume.",
      "5 manuals, 3 video tutorials and in-person user training.",
    ],
    learningsTitle: "What I learned",
    learnings: [
      "The shop floor corrects the model: defects only show up at sorting, operators recognize parts by photo, and scrap arrives in pairs.",
      "Trustworthy data comes from never deleting anything: the scrap that counted twice was found and fixed with the user, by reversal, without losing history.",
      "Training the people who use it is part of the delivery: a manual per role, videos and support at the station.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "React",
      "TypeScript",
      "PWA",
      "IndexedDB (Dexie)",
      "pytest",
      "Playwright",
      "Bitbucket Pipelines",
      "Caddy",
      "Tailscale",
    ],
    note: "An internal factory system: there is no public link, and no real production data appears here. The tablet screen above is an illustration.",
    mock: {
      station: "Machine 07",
      offline: "Offline, 1 queued",
      produced: "Produced",
      scrap: "Scrap",
      quality: "Quality",
      good: "Good parts",
      select: "Sorting",
      undo: "Undo (60 s)",
    },
  },
  skills: {
    eyebrow: "Stack",
    title: ["Tools I", "master"],
    lead: "What I use every day to get a system off the ground and keep it healthy.",
    hint: "Drag to rotate",
    groups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "PWA offline-first", "HTML5 / CSS3"],
      },
      {
        label: "Backend",
        items: ["Java", "Spring Boot", "Node.js", "Express", "Python · FastAPI", "PHP", "REST APIs", "JWT"],
      },
      {
        label: "Databases",
        items: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "Prisma ORM", "Drizzle ORM", "SQLAlchemy"],
      },
      {
        label: "Infra & DevOps",
        items: ["Linux", "Docker", "Proxmox / KVM", "NGINX", "DNS / TLS", "GitHub Actions", "Bitbucket Pipelines", "Caddy · Tailscale", "AWS EC2 · S3 · Lambda"],
      },
      {
        label: "QA & Testing",
        items: ["Cypress", "Selenium", "Playwright", "JUnit", "REST Assured", "Postman", "Pytest", "Allure"],
      },
      {
        label: "Data, ML & Edge",
        items: ["Python", "pandas", "Plotly", "Power BI · DAX", "DATASUS", "scikit-learn", "DistilBERT / NLP", "R", "Raspberry Pi · Hailo", "ESP32", "MQTT"],
      },
    ],
  },
  education: {
    eyebrow: "Education",
    title: ["Academic", "background"],
    degrees: [
      {
        title: "B.Sc. in Information Systems",
        school: "IFCE · Crato Campus",
        period: "2021 — present",
        note: "Final stage: thesis defense pending. Research on defect prediction in commits with Machine Learning and NLP.",
      },
      {
        title: "Technical Degree in Computing",
        school: "EEEP Padre João Bosco de Lima",
        period: "2017 — 2019",
      },
    ],
    coursesTitle: "Further training",
    courses: [
      { title: "Software residency in industry (Kaizen method)", issuer: "PNAAT · FIT, Softex Cariri and UFCA", year: "2026" },
      { title: "Embedded Systems and Edge AI", issuer: "PNAAT · FIT / Softex", year: "2026" },
      { title: "Quality Engineering · Python Automation · AWS", issuer: "Compass UOL · AI/R", year: "2026" },
      { title: "ICT Residency · Full Stack", issuer: "IFCE Fortaleza", year: "2023" },
      { title: "New Businesses in ICT", issuer: "UFCA / Brisa", year: "2023" },
      { title: "AWS & Machine Learning", issuer: "Compass UOL", year: "2022" },
    ],
    certsTitle: "Certifications",
    certs: [
      { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "" },
      { title: "Postman API Fundamentals Student Expert", issuer: "Postman", year: "" },
      { title: "QA Analyst Training", issuer: "DBC Company", year: "" },
      { title: "Fundamentals of Systems Development", issuer: "Escola Virtual Bradesco", year: "" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: ["Let's", "talk"],
    lead: "Have a role, a project or a hard problem? I reply fast.",
    copy: "Copy email",
    copied: "Email copied",
    availability: ["Remote", "Hybrid", "On-site in Cariri", "Full-time or contract", "Open to relocation"],
    form: {
      name: "Your name",
      email: "Your email",
      message: "How can I help?",
      send: "Send message",
      sending: "Sending",
      success: "Message sent. I will get back to you soon.",
      error: "Could not send right now. Please write directly to the email above.",
    },
  },
  footer: {
    built: "Designed and built by me with Next.js, WebGL and Motion.",
    top: "Back to top",
    rights: "All rights reserved.",
  },
  palette: {
    placeholder: "Go to, copy, open…",
    empty: "Nothing found.",
    groups: { navigate: "Navigate", actions: "Actions", links: "Links" },
    actions: {
      copyEmail: "Copy email",
      downloadCv: "Download résumé (PDF)",
      switchLang: "Mudar para Português",
    },
    hint: "to navigate",
  },
  notFound: {
    title: "Page not found",
    body: "The address you tried to open does not exist or has moved.",
    back: "Back to home",
  },
};
