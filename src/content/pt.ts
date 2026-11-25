import { BASE_PATH } from "@/lib/site";
import type { Dictionary } from "./types";

const GH = "https://github.com/jhonatan-goncalves-pereira";

export const pt: Dictionary = {
  meta: {
    title: "Jhonatan Gonçalves — Desenvolvedor Full Stack · Sistemas & Infra",
    description:
      "Desenvolvedor Full Stack e Analista de Sistemas com sistemas em produção na saúde pública e na universidade. React, Next.js, TypeScript, Java/Spring Boot, Node.js, infraestrutura Linux com Proxmox, testes automatizados, BI e Edge AI.",
    cv: `${BASE_PATH}/cv-jhonatan-goncalves-pereira.pdf`,
  },
  nav: {
    items: [
      { id: "products", label: "Produtos" },
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
    status: "Disponível para vagas remotas e projetos",
    rolesPrefix: "Desenvolvedor Full Stack",
    roles: ["Saúde digital", "Sistemas & Infra", "Automação de QA", "BI & Dados"],
    lead: "Entrego de ponta a ponta: da interface em React à API em Java ou Node, do banco de dados ao servidor que mantém tudo no ar. Meus sistemas rodam em produção numa universidade pública, numa secretaria municipal de saúde e no chão de uma fábrica.",
    noteHand: "336 pares, 99,4%",
    noteSystem: "336 pares registrados, 99,4% de qualidade",
    noteCaption: "O primeiro dia do sistema na Esplêndida Calçados: do caderno ao tablet.",
    primary: "Ver sistemas no ar",
    secondary: "Baixar CV",
    location: "Juazeiro do Norte, CE · Brasil",
    current: "Hoje na URCA",
    scroll: "Role para explorar",
    localTime: "Hora local",
  },
  about: {
    eyebrow: "Sobre",
    statement:
      "Transformo processos confusos em software que as pessoas realmente usam. Já levei sistemas do zero à produção numa universidade pública e numa secretaria municipal de saúde, automatizei testes em consultoria e coloquei machine learning para rodar dentro de um microcontrolador.",
    paragraphs: [
      "Sou Desenvolvedor Full Stack e Analista de Sistemas na Universidade Regional do Cariri (URCA), onde construo e mantenho sistemas institucionais e cuido da infraestrutura virtualizada que os sustenta.",
      "Estou na reta final do bacharelado em Sistemas de Informação no IFCE: falta a defesa do TCC, sobre predição de defeitos em commits com Machine Learning e NLP. No PET-Saúde Digital, criei o SESAU Digital, plataforma de gestão em produção na Secretaria de Saúde de Juazeiro do Norte.",
    ],
    stats: [
      { value: 5, suffix: "+", label: "anos atuando em tecnologia" },
      { value: 8, suffix: "+", label: "VMs em produção sob minha gestão" },
      { value: 18, label: "sistemas de saúde mapeados no SUS" },
      { value: 4, label: "sistemas institucionais criados do zero" },
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
  products: {
    eyebrow: "Produtos",
    title: ["Sistemas no ar", "em uso real"],
    lead: "Quatro produtos que construí do zero e que estão em uso: dois na saúde pública de Juazeiro do Norte e dois na Universidade Regional do Cariri. Todos abertos para você ver agora.",
    visit: "Acessar",
    items: [
      {
        id: "sesau",
        kicker: "Secretaria Municipal de Saúde · em produção",
        name: "SESAU Digital",
        domain: "sesau-digital.vercel.app",
        href: "https://sesau-digital.vercel.app/",
        description:
          "A Secretaria de Saúde sem papel: documentos com assinatura eletrônica, a programação do SUS (PPI) em dados abertos e o relatório quadrimestral de cada setor, num só endereço e com um só login.",
        highlights: [
          "Protocolo Digital: cria, assina, numera e tramita documentos oficiais, com validação pública por QR Code.",
          "Gestão da PPI: lê os relatórios oficiais da SESA-CE e cruza a programação com a produção aprovada no DATASUS.",
          "RDQA por setor: cada setor preenche a sua parte e o sistema gera o documento assinado e os painéis da audiência pública.",
        ],
        metrics: [
          { value: "72", label: "setores no sistema" },
          { value: "236", label: "testes automatizados" },
          { value: "132/132", label: "relatórios da PPI conferidos" },
        ],
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "React PDF", "Three.js"],
        imageAlt:
          "Página inicial do SESAU Digital, com o mapa 3D da PPI ambulatorial recebida por Juazeiro do Norte",
      },
      {
        id: "cms",
        kicker: "Conselho Municipal de Saúde · no ar",
        name: "CMS Digital",
        domain: "cms-juazeiro.vercel.app",
        href: "https://cms-juazeiro.vercel.app/",
        description:
          "Gestão do Conselho Municipal de Saúde: conselheiros, comissões, reuniões com presença, quórum e votação, acervo de resoluções e acompanhamento de RDQA, RAG e planos, com portal público de transparência.",
        highlights: [
          "O Regimento Interno vira regra no sistema: quórum, paridade, faltas e prazos geram alertas automáticos.",
          "RDQA, RAG e planos acompanhados do recebimento à deliberação, com parecer no sistema e os prazos da LC nº 141/2012.",
          "Convocação por e-mail e WhatsApp, declarações com QR Code e auditoria encadeada por hash.",
        ],
        metrics: [
          { value: "20", label: "cadeiras com paridade" },
          { value: "39", label: "testes automatizados" },
          { value: "3", label: "perfis de acesso" },
        ],
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "React PDF", "Vercel"],
        imageAlt: "Página inicial do CMS Digital, com a roda das 20 cadeiras do Plenário",
      },
      {
        id: "siseventos",
        kicker: "Universidade Regional do Cariri · em produção",
        name: "SIS Eventos",
        domain: "siseventos.urca.br",
        href: "https://siseventos.urca.br/",
        description:
          "Congressos, semanas acadêmicas, mostras e cursos da URCA num só lugar: inscrições, envio de trabalhos, presença e certificados, do ingresso ao certificado e sem papel.",
        highlights: [
          "Inscrição em segundos pelo celular ou pelo computador, com comprovante na hora.",
          "Presença por QR Code, no telão da entrada ou na chamada do ministrante, até sem internet.",
          "Certificado com código e QR para qualquer pessoa conferir, que vai direto para o LinkedIn. App instalável, sem loja de aplicativos.",
        ],
        metrics: [
          { value: "641", label: "inscrições numa só etapa da Semana Universitária" },
          { value: "62", label: "certificados emitidos num só dia" },
        ],
        stack: ["TypeScript", "React", "Node.js", "PWA", "QR Code"],
        imageAlt: "Página inicial do SIS Eventos, com a vitrine dos eventos da URCA",
      },
      {
        id: "sisagenda",
        kicker: "Universidade Regional do Cariri · em produção",
        name: "SIS Agenda",
        domain: "sisagenda.urca.br",
        href: "https://sisagenda.urca.br/",
        description:
          "O agendamento de recursos da URCA: espaços e laboratórios, equipamentos, veículos e atendimentos dos departamentos, com disponibilidade em tempo real e aprovação pelo responsável.",
        highlights: [
          "Solicitação em minutos, com aprovação pelo responsável e resposta por e-mail.",
          "Calendário com tudo o que foi agendado, histórico e status em tempo real, para evitar conflito de horário.",
          "Agendamentos no Google Agenda e no celular, entrada com a conta Google e app instalável.",
        ],
        metrics: [
          { value: "385+", label: "agendamentos aprovados" },
          { value: "4", label: "tipos de recurso: espaços, equipamentos, veículos e atendimentos" },
        ],
        stack: ["React", "Vite", "Node.js", "Express", "Prisma", "PWA"],
        imageAlt: "Página inicial do SIS Agenda, o sistema de agendamentos da URCA",
      },
    ],
    dataTitle: "Dados para gestão em saúde",
    dataLead: "O que roda por baixo do SESAU Digital e do CMS Digital, e que eu levo para qualquer secretaria:",
    data: [
      {
        title: "PPI × produção",
        body: "Programação pactuada cruzada com a produção aprovada no DATASUS, em valor e em quantidade.",
      },
      {
        title: "RDQA sem retrabalho",
        body: "Cada setor alimenta a sua parte; o relatório quadrimestral sai pronto, assinado e com painéis.",
      },
      {
        title: "Painéis de indicadores",
        body: "Power BI com segurança por linha (RLS) e medidas DAX para a gestão acompanhar os indicadores de saúde.",
      },
      {
        title: "Dados do SUS mapeados",
        body: "18 sistemas de informação em saúde mapeados na Secretaria, com as lacunas de integração documentadas.",
      },
    ],
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
        company: "Residência PNAAT · Esplêndida Calçados",
        mark: "PN",
        role: "Residente de Desenvolvimento de Software (Full Stack)",
        period: "Out 2026 — Presente",
        location: "Cariri, CE",
        current: true,
        points: [
          "Pelo PNAAT (FIT, Softex Cariri e UFCA), fui alocado na Esplêndida Calçados, fábrica de calçados injetados, e desenvolvi com mais três residentes um sistema de apontamento de produção e refugo (OEE) que entrou em uso real na linha em 6 semanas.",
          "Tablets offline-first (React, TypeScript, IndexedDB) e API em FastAPI e PostgreSQL, com 371 testes automáticos.",
          "Infraestrutura no servidor da própria fábrica: HTTPS, acesso remoto seguro e publicação por botão, com backup e volta automática (Bitbucket Pipelines).",
          "Levantamento no chão de fábrica, manuais, vídeos e treinamento dos usuários, seguindo o método Kaizen do programa (PDCA, Pareto, Before & After).",
        ],
        tags: ["FastAPI", "PostgreSQL", "React", "TypeScript", "PWA", "Playwright"],
      },
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
        company: "PET-Saúde Digital · Secretaria de Saúde de Juazeiro do Norte",
        mark: "PS",
        role: "Monitor bolsista · Desenvolvedor do SESAU Digital",
        period: "Ago 2025 — Presente",
        location: "Juazeiro do Norte, CE",
        current: true,
        points: [
          "Criei o SESAU Digital, em produção na Secretaria: protocolo digital com assinatura eletrônica e validação pública por QR Code, gestão da PPI cruzada com a produção do DATASUS e RDQA por setor.",
          "Criei o CMS Digital para o Conselho Municipal de Saúde: conselheiros, comissões, reuniões com quórum e votação, acervo de resoluções e acompanhamento de RDQA e RAG, com o Regimento Interno automatizado.",
          "Cruzei a PPI ambulatorial do município (R$ 6,1 milhões por mês, pacientes de 27 municípios) com a produção aprovada no DATASUS: leituras que antes levavam dias de trabalho manual.",
          "Mapeei 18 sistemas de informação em saúde em uso na Secretaria e documentei a ausência de interoperabilidade entre eles.",
        ],
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "DATASUS", "LGPD"],
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
          "Construí dashboards executivos em Power BI com RLS dinâmico e 12+ medidas DAX, consolidando dados de várias fontes para a gestão da saúde.",
          "Montei painéis de monitoramento de indicadores de saúde usados pela gestão municipal.",
          "Digitalizei processos administrativos com sistemas web em JavaScript, PHP e MySQL.",
        ],
        tags: ["Power BI", "DAX", "SQL", "Indicadores de saúde", "PHP", "MySQL"],
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
    lead: "Sete entregas que mostram o alcance: indústria, visão computacional, firmware, pesquisa, análise de dados e qualidade.",
    all: "Ver todos os repositórios",
    items: [
      {
        id: "oee",
        kicker: "Indústria · em uso na linha",
        title: "Esplêndida OEE",
        description:
          "Apontamento de produção e refugo para a Esplêndida Calçados, fábrica de calçados injetados no Cariri. Os tablets funcionam sem rede, e o painel mostra produção, qualidade, Pareto de defeitos e o andamento de cada pedido no mesmo dia. Em uso na linha desde novembro de 2026.",
        stack: ["FastAPI", "PostgreSQL", "React", "TypeScript", "PWA offline-first", "Playwright", "Bitbucket Pipelines"],
        metrics: [
          { value: "6 sem.", label: "até o uso real" },
          { value: "371", label: "testes automáticos" },
          { value: "11", label: "injetoras atendidas" },
        ],
        links: [{ label: "Ler o estudo de caso", href: "#case" }],
        note: "Sistema interno da fábrica",
      },
      {
        id: "vision",
        kicker: "Visão computacional · em andamento",
        title: "Estação de visão e desperdício",
        description:
          "A próxima etapa da residência: uma estação no fim da esteira conta as peças por câmera, aponta defeitos para comparar com a seleção do inspetor e, junto da balança, mede o desperdício de galho e purga por molde. Piloto previsto com meta de erro de até 5%.",
        stack: ["Raspberry Pi 5", "Hailo-8L", "Python", "SQLite", "Visão computacional"],
        links: [],
        note: "Em andamento",
      },
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
        id: "ppi",
        kicker: "Análise de dados · Python",
        title: "Painel analítico da PPI",
        description:
          "Primeira versão da análise da PPI de Juazeiro do Norte: baixa os relatórios oficiais por competência, do ambulatório (SIA) e dos hospitais (SIH), transforma em tabelas com pandas e mostra os números em gráficos interativos. Virou o módulo de PPI do SESAU Digital.",
        stack: ["Python", "pandas", "Plotly", "Streamlit"],
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
    ],
  },
  caseStudy: {
    eyebrow: "Estudo de caso",
    title: ["Do caderno", "ao tablet"],
    lead: "A fábrica anotava a produção num caderno, e o refugo ia para o moinho sem contagem. Em seis semanas, saímos do levantamento na linha para o uso real: cada ponto de contagem ganhou um tablet que funciona sem rede, e o PCP, a qualidade e a gerência passaram a ver o andamento de cada remessa no mesmo dia. Cada regra do sistema veio de uma conversa com quem faz a peça.",
    facts: [
      { label: "Onde", value: "Esplêndida Calçados, fábrica de calçados injetados no Cariri (CE), pela Residência PNAAT" },
      { label: "Quando", value: "Outubro a dezembro de 2026, em sprints de duas semanas" },
      { label: "Equipe", value: "4 residentes, orientados por Weliton Rodrigues e Flavian Fernandes" },
      { label: "Meu papel", value: "Full stack: tablet offline, API, infraestrutura e entrega contínua, com cerca de 2/3 dos commits" },
    ],
    metrics: [
      { value: "6 sem.", label: "do primeiro dia ao uso real" },
      { value: "371", label: "testes automáticos" },
      { value: "99,4%", label: "de qualidade no primeiro dia de uso" },
    ],
    problemTitle: "O problema",
    problem: [
      "Produção no caderno: saber quanto faltava de um pedido exigia somar à mão.",
      "Refugo sem registro: ia para o moinho sem contagem, sem causa, sem máquina e sem responsável.",
      "PCP sem retorno: a remessa saía do ERP em papel e só voltava quando estava pronta ou atrasada.",
    ],
    builtTitle: "O que cada pessoa ganhou",
    built: [
      {
        who: "Chão de fábrica",
        what: "Tablet com botões grandes e a foto de cada peça: peças boas, seleção com o defeito, retrabalho com a causa, desfazer por um minuto e PIN por operador.",
      },
      {
        who: "PCP",
        what: "Remessas importadas direto do PDF do ERP, com conferência; prazo e previsão de término; catálogo, postos, moldes e peso do galho.",
      },
      {
        who: "Qualidade",
        what: "Defeitos por etapa, fichas de inspeção para imprimir, seleção em pares e custo do retrabalho.",
      },
      {
        who: "Gerência",
        what: "Painel por perfil com produção, qualidade, Pareto das causas de refugo e previsto × realizado de cada remessa, também de fora da fábrica.",
      },
    ],
    howTitle: "Como foi feito",
    how: [
      {
        title: "Funciona sem rede",
        body: "O tablet guarda tudo no IndexedDB e sincroniza quando a rede volta. Cada lançamento nasce com um UUID, então reenviar nunca conta duas vezes.",
      },
      {
        title: "Nada se apaga",
        body: "A correção é por estorno, com justificativa, e o histórico fica auditável.",
      },
      {
        title: "Regras da fábrica no código",
        body: "Cada ponto de contagem confere com o anterior, e nenhuma etapa aprova mais do que a anterior liberou.",
      },
      {
        title: "ERP sem acesso ao banco",
        body: "Remessas, pedidos e o catálogo de peças são lidos dos relatórios em PDF, já com a foto de cada peça recortada.",
      },
      {
        title: "No servidor da própria fábrica",
        body: "HTTPS, backup e integração rodam como tarefas do sistema e voltam sozinhos depois de queda de energia. O acesso de fora é por túnel, sem abrir porta no roteador.",
      },
      {
        title: "Publicação por um botão",
        body: "Testes e auditoria de dependências em cada PR. A publicação copia o banco, aplica as migrações, confere e volta sozinha se algo falhar.",
      },
    ],
    beforeAfterTitle: "Construído com a linha, não para a linha",
    beforeAfterHead: ["Como estava", "O que a fábrica mostrou", "O que mudou no sistema"],
    beforeAfter: [
      [
        "A injeção marcava o defeito na hora",
        "O defeito só aparece na seleção, horas depois",
        "A injeção só conta; o defeito entra na seleção do inspetor",
      ],
      [
        "Remessa escolhida pelo número",
        "A linha achava a remessa pela data do rodapé do papel e pelos modelos",
        "Número em destaque, com a data e os modelos de apoio",
      ],
      [
        "Alça e solado pelo código",
        "A operadora reconhece a peça pela foto, não pelo código",
        "Catálogo com a foto de cada peça, agrupado por referência",
      ],
      [
        "Seleção pelo pé direito e esquerdo",
        "As peças chegam no saco, sem saber o pé, e o refugo contava em dobro",
        "Seleção em pares, com o pé só quando se sabe; os dados antigos corrigidos por estorno",
      ],
      [
        "Qualquer operador em qualquer máquina",
        "Cada pessoa deve apontar só nos postos dela",
        "Limite por máquina, definido pelo PCP",
      ],
    ],
    resultsTitle: "Resultados",
    results: [
      "Em uso real na linha desde 19/11/2026. No primeiro dia, a inspetora lançou 336 pares de alça numa injetora, com 99,4% de qualidade.",
      "As mudanças pedidas pela gerência no uso real foram publicadas no mesmo dia.",
      "11 injetoras, a seleção, 2 esteiras, a expedição e o moinho atendidos, com 5 perfis de acesso.",
      "371 testes automáticos, testes de ponta a ponta no navegador e carga testada com 10 vezes o volume de um turno.",
      "5 manuais, 3 vídeos tutoriais e treinamento presencial dos usuários.",
    ],
    learningsTitle: "O que aprendi",
    learnings: [
      "O chão de fábrica corrige o modelo: o defeito só aparece na seleção, a operadora reconhece a peça pela foto e o refugo chega em pares.",
      "Dado confiável vem de não apagar nada: o refugo que contava em dobro foi achado e corrigido com a usuária, por estorno, sem perder o histórico.",
      "Treinar quem usa faz parte da entrega: manual por função, vídeo e acompanhamento no posto.",
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
    note: "Sistema interno da fábrica: não há link público, e nenhum dado real de produção aparece aqui. A tela do tablet acima é uma ilustração.",
    mock: {
      station: "Injetora 07",
      offline: "Sem rede, 1 na fila",
      produced: "Produzidas",
      scrap: "Refugo",
      quality: "Qualidade",
      good: "Peças boas",
      select: "Seleção",
      undo: "Desfazer (60 s)",
    },
  },
  skills: {
    eyebrow: "Stack",
    title: ["Ferramentas que", "domino"],
    lead: "O que uso no dia a dia para tirar um sistema do papel e manter tudo saudável.",
    hint: "Arraste para girar",
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
        label: "Banco de dados",
        items: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "Prisma ORM", "Drizzle ORM", "SQLAlchemy"],
      },
      {
        label: "Infra & DevOps",
        items: ["Linux", "Docker", "Proxmox / KVM", "NGINX", "DNS / TLS", "GitHub Actions", "Bitbucket Pipelines", "Caddy · Tailscale", "AWS EC2 · S3 · Lambda"],
      },
      {
        label: "QA & Testes",
        items: ["Cypress", "Selenium", "Playwright", "JUnit", "REST Assured", "Postman", "Pytest", "Allure"],
      },
      {
        label: "Dados, ML & Edge",
        items: ["Python", "pandas", "Plotly", "Power BI · DAX", "DATASUS", "scikit-learn", "DistilBERT / NLP", "R", "Raspberry Pi · Hailo", "ESP32", "MQTT"],
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
        period: "2021 — atual",
        note: "Reta final: falta a defesa do TCC, sobre predição de defeitos em commits com Machine Learning e NLP.",
      },
      {
        title: "Técnico em Informática",
        school: "EEEP Padre João Bosco de Lima",
        period: "2017 — 2019",
      },
    ],
    coursesTitle: "Formações complementares",
    courses: [
      { title: "Residência em software na indústria (método Kaizen)", issuer: "PNAAT · FIT, Softex Cariri e UFCA", year: "2026" },
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
