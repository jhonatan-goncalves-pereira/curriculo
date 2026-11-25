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
      { id: "about", label: "About" },
      { id: "products", label: "Products" },
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
    lead: "I ship end to end, from the React interface to the Java or Node API, and from the database to the server that keeps it all running. My systems run in production at a public university and a city health department.",
    primary: "View projects",
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
    lead: "Five more deliveries that show the range: firmware, research, data analysis and quality.",
    all: "View all repositories",
    items: [
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
  skills: {
    eyebrow: "Stack",
    title: ["Tools I", "master"],
    lead: "What I use every day to get a system off the ground and keep it healthy.",
    hint: "Drag to rotate",
    groups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "HTML5 / CSS3"],
      },
      {
        label: "Backend",
        items: ["Java", "Spring Boot", "Node.js", "Express", "PHP", "REST APIs", "JWT"],
      },
      {
        label: "Databases",
        items: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "Prisma ORM"],
      },
      {
        label: "Infra & DevOps",
        items: ["Linux", "Docker", "Proxmox / KVM", "NGINX", "DNS / TLS", "GitHub Actions", "AWS EC2 · S3 · Lambda"],
      },
      {
        label: "QA & Testing",
        items: ["Cypress", "Selenium", "JUnit", "REST Assured", "Postman", "Pytest", "Allure"],
      },
      {
        label: "Data, ML & Edge",
        items: ["Python", "pandas", "Plotly", "Power BI · DAX", "DATASUS", "scikit-learn", "DistilBERT / NLP", "R", "ESP32", "MQTT"],
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
