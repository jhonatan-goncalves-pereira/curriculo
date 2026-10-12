import type { Dictionary } from "./types";

const GH = "https://github.com/jhonatan-goncalves-pereira";

export const pt: Dictionary = {
  meta: {
    title: "Jhonatan Gonçalves — Desenvolvedor Full Stack · Sistemas & Infra",
    description:
      "Desenvolvedor Full Stack e Analista de Sistemas. React, TypeScript, Java/Spring Boot, Node.js, infraestrutura Linux com Proxmox, automação de testes, BI e Edge AI.",
  },
  nav: {
    items: [
      { id: "about", label: "Sobre" },
      { id: "experience", label: "Experiência" },
      { id: "projects", label: "Projetos" },
      { id: "skills", label: "Stack" },
      { id: "contact", label: "Contato" },
    ],
    cta: "Baixar CV",
    menu: "Abrir menu",
    close: "Fechar menu",
    skip: "Pular para o conteúdo",
    search: "Abrir busca rápida",
  },
  hero: {
    status: "Disponível para novas oportunidades",
    rolesPrefix: "Desenvolvedor Full Stack",
    roles: ["Sistemas & Infra", "Automação de QA", "BI & Dados", "Edge AI"],
    lead: "Entrego de ponta a ponta: da interface em React à API em Java ou Node, do banco de dados ao servidor que mantém tudo no ar.",
    primary: "Ver projetos",
    secondary: "Baixar CV",
    location: "Juazeiro do Norte, CE · Brasil",
    current: "Hoje na URCA",
    scroll: "Role para explorar",
    localTime: "Hora local",
  },
  about: {
    eyebrow: "Sobre",
    statement:
      "Transformo processos confusos em software que as pessoas realmente usam. Já levei sistemas do zero à produção em universidade pública, automatizei testes em consultoria e coloquei machine learning para rodar dentro de um microcontrolador.",
    paragraphs: [
      "Sou Desenvolvedor Full Stack e Analista de Sistemas na Universidade Regional do Cariri (URCA), onde construo e mantenho sistemas institucionais e cuido da infraestrutura virtualizada que os sustenta.",
      "Concluo o bacharelado em Sistemas de Informação no IFCE em 2026, com TCC sobre predição de defeitos em commits usando Machine Learning e NLP. No PET-Saúde Digital, mapeio sistemas do SUS e proponho painéis de BI para a gestão municipal.",
    ],
    stats: [
      { value: 5, suffix: "+", label: "anos atuando em tecnologia" },
      { value: 8, suffix: "+", label: "VMs em produção sob minha gestão" },
      { value: 18, label: "sistemas de saúde mapeados no SUS" },
      { value: 2, label: "sistemas institucionais criados do zero" },
    ],
    principlesTitle: "Como eu trabalho",
    principles: [
      {
        title: "Ponta a ponta",
        body: "Frontend, backend, banco e infraestrutura. Entendo o caminho inteiro de uma requisição, então resolvo o problema onde ele realmente está.",
      },
      {
        title: "Qualidade desde o início",
        body: "Venho de QA: testes automatizados e CI/CD fazem parte da entrega, não são uma etapa que fica para depois.",
      },
      {
        title: "Dados que viram decisão",
        body: "De dashboards em Power BI a modelos de ML, uso dados para responder perguntas concretas de quem toma decisão.",
      },
    ],
    photoAlt: "Retrato de Jhonatan Gonçalves Pereira",
    photoCaption: "Cariri, Ceará",
  },
  experience: {
    eyebrow: "Trajetória",
    title: ["Onde já", "entreguei"],
    lead: "Universidade pública, consultoria, rede nacional de pesquisa e gestão municipal de saúde. Contextos diferentes, a mesma régua: funcionar em produção.",
    now: "Atual",
    more: "Ver trajetória completa",
    less: "Mostrar menos",
    items: [
      {
        company: "URCA · Universidade Regional do Cariri",
        mark: "UR",
        role: "Desenvolvedor Full Stack · Analista de Sistemas e Infraestrutura",
        period: "Ago 2024 — Presente",
        location: "Crato, CE",
        current: true,
        points: [
          "Criei do zero o SisEventos e o SisAgenda (React, Node.js/Express, MySQL), com fluxo de propostas, certificados com código de validação e controle de acesso por papéis (RBAC).",
          "Desenvolvo e mantenho APIs REST em Java/Spring Boot e Node.js usadas por centenas de usuários internos.",
          "Administro 8+ VMs em produção com Proxmox/KVM (EAD, LDAP, OJS, DNS), além de NGINX, firewall e renovação de certificados TLS.",
        ],
        tags: ["React", "Node.js", "Spring Boot", "MySQL", "SQL Server", "Proxmox", "NGINX"],
      },
      {
        company: "PET-Saúde · Informação e Saúde Digital",
        mark: "PS",
        role: "Monitor bolsista",
        period: "Ago 2025 — Presente",
        location: "Juazeiro do Norte, CE",
        current: true,
        points: [
          "Mapeei 18 sistemas de informação em saúde em uso na Secretaria Municipal e documentei a ausência de interoperabilidade entre eles.",
          "Propus 7 painéis de BI ligados aos indicadores de financiamento da Atenção Primária (Previne Brasil / ID-APS).",
        ],
        tags: ["Power BI", "DATASUS", "e-SUS", "Interoperabilidade"],
      },
      {
        company: "DBC Company",
        mark: "DB",
        role: "QA Analyst · Trainee",
        period: "Nov 2024 — Abr 2025",
        location: "Remoto · Porto Alegre, RS",
        points: [
          "Automatizei testes de interface e de APIs REST com Cypress, Selenium WebDriver, Postman e REST Assured.",
          "Integrei as suítes ao pipeline de CI/CD com GitHub Actions, reduzindo retrabalho manual de regressão.",
        ],
        tags: ["Cypress", "Selenium", "REST Assured", "JUnit", "GitHub Actions"],
      },
      {
        company: "RNP · Rede Nacional de Ensino e Pesquisa",
        mark: "RN",
        role: "Trainee · Monitoramento de redes",
        period: "Jun 2024 — Nov 2024",
        location: "Remoto · Rio de Janeiro, RJ",
        points: [
          "Implantei e mantive o perfSONAR para medir throughput, latência, RTT e rotas da rede acadêmica.",
          "Criei automações e relatórios de desempenho e apresentei os resultados em eventos técnicos.",
        ],
        tags: ["perfSONAR", "Linux", "Docker", "Redes"],
      },
      {
        company: "Capacita Brasil",
        mark: "CB",
        role: "Mentor",
        period: "Ago 2024 — Abr 2025",
        location: "Remoto",
        points: [
          "Mentorei alunos da formação em desenvolvimento web, com apoio em React e projetos full stack.",
        ],
        tags: ["React", "JavaScript", "Mentoria"],
      },
      {
        company: "URCA · Universidade Regional do Cariri",
        mark: "UR",
        role: "Analista de Suporte de TI",
        period: "Nov 2023 — Set 2024",
        location: "Crato, CE",
        points: [
          "Mantive servidores, redes e equipamentos da universidade, com foco em disponibilidade e segurança.",
          "Documentei procedimentos e soluções para incidentes recorrentes.",
        ],
        tags: ["Linux", "Redes", "Servidores", "Segurança"],
      },
      {
        company: "Prefeitura de Juazeiro do Norte · SESAU",
        mark: "JN",
        role: "Estagiário de TI · Analista de dados",
        period: "Ago 2022 — Ago 2023",
        location: "Juazeiro do Norte, CE",
        points: [
          "Construí dashboards executivos em Power BI com RLS dinâmico e 12+ medidas DAX para a gestão da saúde.",
          "Digitalizei processos administrativos com sistemas web em JavaScript, PHP e MySQL.",
        ],
        tags: ["Power BI", "DAX", "PHP", "MySQL", "JavaScript"],
      },
      {
        company: "Compass UOL",
        mark: "CU",
        role: "Bolsista · AWS & Machine Learning",
        period: "Nov 2022 — Abr 2023",
        location: "Remoto",
        points: [
          "Desenvolvi projetos em AWS (EC2, S3, Lambda, API Gateway) e treinei modelos de ML com SageMaker e scikit-learn.",
        ],
        tags: ["AWS", "Python", "SageMaker", "Node.js"],
      },
      {
        company: "Integra Cariri · Cluster de Inovação",
        mark: "IC",
        role: "Fundador",
        period: "Jul 2022 — Jan 2023",
        location: "Fortaleza, CE",
        points: [
          "Liderei uma equipe de três pessoas na criação de uma plataforma web de rotas e horários do transporte público do Cariri.",
        ],
        tags: ["Produto", "Web", "Liderança"],
      },
      {
        company: "CNPq",
        mark: "CN",
        role: "Bolsista de Iniciação Científica",
        period: "Set 2021 — Set 2022",
        location: "Crato, CE",
        points: [
          "Analisei bases públicas nacionais em R para identificar fatores que influenciam indicadores educacionais.",
        ],
        tags: ["R", "Estatística", "Análise de dados"],
      },
    ],
  },
  projects: {
    eyebrow: "Projetos",
    title: ["Trabalho", "selecionado"],
    lead: "Seis entregas que mostram o alcance: firmware, web, pesquisa, dados e qualidade.",
    all: "Ver todos os repositórios",
    items: [
      {
        id: "pulso",
        kicker: "Edge AI · IoT",
        title: "PulsoPNAAT",
        description:
          "Manutenção preditiva por análise de vibração. Um nó de borda ESP32-S3 lê o acelerômetro a 400 Hz, extrai 18 métricas por segundo e classifica o estado do equipamento. A telemetria segue por MQTT até um dashboard no Grafana.",
        stack: ["C", "ESP32-S3", "BNO085", "MQTT", "InfluxDB", "Grafana", "Python"],
        metrics: [
          { value: "400 Hz", label: "amostragem" },
          { value: "18", label: "métricas por segundo" },
          { value: "5", label: "estados reconhecidos" },
        ],
        links: [{ label: "Código", href: `${GH}/pulsopnaat` }],
      },
      {
        id: "sis",
        kicker: "Em produção · URCA",
        title: "SisEventos & SisAgenda",
        description:
          "Sistemas institucionais de eventos e agendamentos acadêmicos, criados do zero: fluxo de propostas, certificados com código de validação e RBAC.",
        stack: ["React", "Vite", "Node.js", "Express", "MySQL", "JWT"],
        links: [],
        note: "Código institucional",
      },
      {
        id: "tcc",
        kicker: "Pesquisa · TCC",
        title: "Predição de defeitos em commits",
        description:
          "ML e NLP para estimar se um commit vai introduzir defeito, comparando Random Forest, Regressão Logística e DistilBERT em repositórios open source.",
        stack: ["Python", "scikit-learn", "DistilBERT", "NLP"],
        links: [],
        note: "IFCE · Orient. Prof. Dr. Talles Brito",
      },
      {
        id: "bi",
        kicker: "Dados · Saúde pública",
        title: "BI para gestão do SUS",
        description:
          "Dashboards executivos em Power BI para a Secretaria de Saúde, com RLS dinâmico e 12+ medidas DAX consolidando múltiplas fontes.",
        stack: ["Power BI", "DAX", "SQL", "DATASUS"],
        links: [],
        note: "Dados institucionais",
      },
      {
        id: "qa",
        kicker: "QA · Automação",
        title: "ServeRest API Tests",
        description:
          "Suíte de testes de API em Python e Pytest, com validação por JSON Schema, relatórios Allure publicados e execução contínua em CI.",
        stack: ["Python", "Pytest", "Allure", "GitHub Actions"],
        links: [
          { label: "Código", href: `${GH}/desafio01-bootcamp-qa` },
          {
            label: "Relatório",
            href: "https://jhonatan-goncalves-pereira.github.io/desafio01-bootcamp-qa/",
          },
        ],
      },
      {
        id: "labs",
        kicker: "Backend · API REST",
        title: "API de Laboratórios",
        description:
          "API em Node.js e Express com autenticação JWT, upload de imagens, relatório em PDF e testes com Jest e Supertest.",
        stack: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
        links: [{ label: "Código", href: `${GH}/api-gerenciamento-salas` }],
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: ["Ferramentas que", "domino"],
    lead: "O que uso no dia a dia para tirar um sistema do papel e manter tudo saudável.",
    hint: "Arraste para girar",
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
        label: "Banco de dados",
        items: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "Prisma ORM"],
      },
      {
        label: "Infra & DevOps",
        items: ["Linux", "Docker", "Proxmox / KVM", "NGINX", "DNS / TLS", "GitHub Actions", "AWS EC2 · S3 · Lambda"],
      },
      {
        label: "QA & Testes",
        items: ["Cypress", "Selenium", "JUnit", "REST Assured", "Postman", "Pytest", "Allure"],
      },
      {
        label: "Dados, ML & Edge",
        items: ["Python", "scikit-learn", "DistilBERT / NLP", "Power BI · DAX", "R", "ESP32", "MQTT"],
      },
    ],
  },
  education: {
    eyebrow: "Formação",
    title: ["Base", "acadêmica"],
    degrees: [
      {
        title: "Bacharelado em Sistemas de Informação",
        school: "IFCE · Campus Crato",
        period: "2021 — 2026",
        note: "TCC: predição de defeitos em commits com Machine Learning e NLP.",
      },
      {
        title: "Técnico em Informática",
        school: "EEEP Padre João Bosco de Lima",
        period: "2017 — 2019",
      },
    ],
    coursesTitle: "Formações complementares",
    courses: [
      { title: "Sistemas Embarcados e Edge AI", issuer: "PNAAT · FIT / Softex", year: "2026" },
      { title: "Quality Engineering · Python Automation · AWS", issuer: "Compass UOL · AI/R", year: "2026" },
      { title: "Residência em TIC · Full Stack", issuer: "IFCE Fortaleza", year: "2023" },
      { title: "Novos Negócios em TIC", issuer: "UFCA / Brisa", year: "2023" },
      { title: "AWS & Machine Learning", issuer: "Compass UOL", year: "2022" },
    ],
    certsTitle: "Certificações",
    certs: [
      { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "" },
      { title: "Postman API Fundamentals Student Expert", issuer: "Postman", year: "" },
      { title: "Formação QA Analyst", issuer: "DBC Company", year: "" },
      { title: "Fundamentos do Desenvolvimento de Sistemas", issuer: "Escola Virtual Bradesco", year: "" },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: ["Vamos", "conversar"],
    lead: "Tem uma vaga, um projeto ou um problema difícil? Respondo rápido.",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
    availability: ["Remoto", "Híbrido", "Presencial no Cariri", "CLT ou PJ"],
    form: {
      name: "Seu nome",
      email: "Seu e-mail",
      message: "Como posso ajudar?",
      send: "Enviar mensagem",
      sending: "Enviando",
      success: "Mensagem enviada. Retorno em breve.",
      error: "Não foi possível enviar agora. Escreva direto para o e-mail acima.",
    },
  },
  footer: {
    built: "Projetado e construído por mim com Next.js, WebGL e Motion.",
    top: "Voltar ao topo",
    rights: "Todos os direitos reservados.",
  },
  palette: {
    placeholder: "Ir para, copiar, abrir…",
    empty: "Nada encontrado.",
    groups: { navigate: "Navegar", actions: "Ações", links: "Links" },
    actions: {
      copyEmail: "Copiar e-mail",
      downloadCv: "Baixar currículo (PDF)",
      switchLang: "Switch to English",
    },
    hint: "para navegar",
  },
  notFound: {
    title: "Página não encontrada",
    body: "O endereço que você tentou abrir não existe ou mudou de lugar.",
    back: "Voltar ao início",
  },
};
