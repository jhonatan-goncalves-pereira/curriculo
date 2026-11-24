export type Lang = "pt" | "en";

export type SectionId =
  | "home"
  | "about"
  | "products"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact";

export type ProjectId = "pulso" | "sis" | "tcc" | "bi" | "qa" | "ppi";

/** Live products shown with a screenshot (images live in src/assets/products). */
export type ProductId = "sesau" | "cms";

export interface ProductItem {
  id: ProductId;
  kicker: string;
  name: string;
  /** Shown in the fake browser bar above the screenshot. */
  domain: string;
  href: string;
  description: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  stack: string[];
  imageAlt: string;
}

export interface DataPoint {
  title: string;
  body: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Principle {
  title: string;
  body: string;
}

export interface ExperienceItem {
  company: string;
  mark: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  tags: string[];
}

export interface ProjectItem {
  id: ProjectId;
  kicker: string;
  title: string;
  description: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  links: { label: string; href: string }[];
  note?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  school: string;
  period: string;
  note?: string;
}

export interface CourseItem {
  title: string;
  issuer: string;
  year: string;
}

export interface Dictionary {
  /** `cv` is the PDF served for this language (see `npm run cv`). */
  meta: { title: string; description: string; cv: string };
  nav: {
    items: { id: SectionId; label: string }[];
    cta: string;
    menu: string;
    close: string;
    skip: string;
    search: string;
  };
  hero: {
    status: string;
    rolesPrefix: string;
    roles: string[];
    lead: string;
    primary: string;
    secondary: string;
    location: string;
    current: string;
    scroll: string;
    localTime: string;
  };
  about: {
    eyebrow: string;
    statement: string;
    paragraphs: string[];
    stats: Stat[];
    principlesTitle: string;
    principles: Principle[];
    photoAlt: string;
    photoCaption: string;
  };
  products: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    visit: string;
    items: ProductItem[];
    dataTitle: string;
    dataLead: string;
    data: DataPoint[];
  };
  experience: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    items: ExperienceItem[];
    now: string;
    more: string;
    less: string;
  };
  projects: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    items: ProjectItem[];
    all: string;
  };
  skills: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    groups: SkillGroup[];
    hint: string;
  };
  education: {
    eyebrow: string;
    title: [string, string];
    degrees: EducationItem[];
    coursesTitle: string;
    courses: CourseItem[];
    certsTitle: string;
    certs: CourseItem[];
  };
  contact: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    copy: string;
    copied: string;
    availability: string[];
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    built: string;
    top: string;
    rights: string;
  };
  palette: {
    placeholder: string;
    empty: string;
    groups: { navigate: string; actions: string; links: string };
    actions: { copyEmail: string; downloadCv: string; switchLang: string };
    hint: string;
  };
  notFound: { title: string; body: string; back: string };
}
