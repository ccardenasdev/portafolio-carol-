export const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
];

export const identity = {
  firstName: "Carol",
  lastName: "Cárdenas",
  roles: [
    "Frontend Developer",
    "Estudiante de Ingeniería en Ciencia de Datos",
  ],
  founder: "Fundadora de Inspira Models",
  available: "Disponible para prácticas profesionales",
  description:
    "Desarrolladora apasionada por crear soluciones digitales que transforman ideas en experiencias reales. Lidero con disciplina, responsabilidad y compromiso con la excelencia en cada proyecto que emprendo.",
};

export const hero = {
  greeting: "Hola, soy Carol",
  role: "Desarrolladora Frontend & Data Science",
  location: "Medellín, Colombia",
  description:
    "Construyo interfaces web claras y responsivas con React, JavaScript y Tailwind CSS, conectadas a bases de datos reales con Supabase. Me apasiona acompañar un producto desde el primer boceto hasta producción.",
};

export const aboutMini = {
  title: "Sobre mí",
  bullets: [
    "Soy desarrolladora frontend con pasión por la tecnología, el diseño y los datos.",
    "Líder, disciplinada y perseverante. Me encanta aprender, resolver problemas y convertir ideas en productos digitales que generen impacto.",
  ],
  verse: "Proverbios 16:3",
};

export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/ccardenasdev" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carol-estefani-cardenas-117835415",
  },
  {
    id: "mail",
    label: "Correo",
    href: "mailto:cardenasrodriguezcarolestefani@gmail.com?subject=Contacto%20desde%20tu%20portafolio",
  },
] as const;

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: "calendar", value: "2+", label: "Años aprendiendo cada día" },
  { icon: "code", value: "3", label: "Proyectos en producción" },
  { icon: "star", value: "10+", label: "Tecnologías que domino" },
  { icon: "cross", value: "100%", label: "Disciplina y compromiso" },
];

export const goals2026 = [
  "Finalizar mi Ingeniería en Ciencia de Datos",
  "Conseguir mis prácticas profesionales",
  "Mejorar mis habilidades en IA",
  "Seguir liderando Inspira Models",
  "Aportar valor desde el primer día en un equipo",
  "Seguir impactando vidas a través de la tecnología",
];

export const stickyNote = {
  quote: "Todo lo puedo en Cristo que me fortalece.",
  reference: "Filipenses 4:13",
};

export type Accent = "rose" | "lavender" | "sky" | "mint" | "peach";

export type ProjectCategory = "Web" | "E-commerce";

export interface Project {
  id: string;
  name: string;
  windowLabel: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  href: string;
  accent: Accent;
}

export const projectFilters: Array<ProjectCategory | "Todos"> = [
  "Todos",
  "Web",
  "E-commerce",
];

export const projects: Project[] = [
  {
    id: "inspira",
    name: "Inspira Models Agency",
    windowLabel: "inspira.app",
    description:
      "Plataforma multi-portal con accesos diferenciados para aprendices, profesores, empresas, acudientes y administración. Catálogo de talentos con filtros avanzados, solicitudes con radicado, contratos digitales y panel administrativo.",
    category: "Web",
    tags: ["React", "Tailwind CSS", "Supabase", "Vercel"],
    href: "https://inspira-models-agency.vercel.app",
    accent: "rose",
  },
  {
    id: "urbanstep",
    name: "UrbanStep",
    windowLabel: "urbanstep.app",
    description:
      "Tienda B2B con precios escalonados por volumen y modo mayorista, carrito, checkout en cuatro pasos, autenticación por roles y panel de administración. Integra asesor de estilo con IA y búsqueda de productos por imagen.",
    category: "E-commerce",
    tags: ["JavaScript", "HTML5", "CSS3", "Vercel"],
    href: "https://tienda-virtual-de-ropa.vercel.app",
    accent: "lavender",
  },
  {
    id: "calzasport",
    name: "CalzaSport",
    windowLabel: "calzasport.shop",
    description:
      "Desarrollo y administración de tienda con catálogo de más de 25 referencias, embudo de conversión, checkout guiado por WhatsApp y medición de campañas con Meta Pixel.",
    category: "E-commerce",
    tags: ["Shopify", "Meta Ads", "Meta Pixel"],
    href: "https://calzasport.shop",
    accent: "sky",
  },
];

export interface TechItem {
  id: string;
  label: string;
}

export const languages: TechItem[] = [
  { id: "javascript", label: "JavaScript" },
  { id: "html5", label: "HTML5" },
  { id: "css3", label: "CSS3" },
  { id: "openjdk", label: "Java" },
];

export type FrameworkGroup = "Frontend" | "Backend" | "E-commerce";

export const frameworks: Record<FrameworkGroup, TechItem[]> = {
  Frontend: [
    { id: "react", label: "React" },
    { id: "tailwindcss", label: "Tailwind CSS" },
  ],
  Backend: [
    { id: "supabase", label: "Supabase" },
    { id: "mysql", label: "MySQL" },
  ],
  "E-commerce": [
    { id: "shopify", label: "Shopify" },
    { id: "meta", label: "Meta Ads" },
  ],
};

export const tools: TechItem[] = [
  { id: "git", label: "Git" },
  { id: "github", label: "GitHub" },
  { id: "vercel", label: "Vercel" },
  { id: "visualstudiocode", label: "VS Code" },
];

export const techGrid: TechItem[] = [
  ...languages,
  ...frameworks.Frontend,
  ...frameworks.Backend,
  { id: "git", label: "Git" },
];

export const aboutBio = [
  "Soy desarrolladora frontend enfocada en React, JavaScript y Tailwind CSS, con formación como Técnica en Programación de Software (SENA, egresada distinguida) y actualmente cursando Tecnología en Análisis y Desarrollo de Software (SENA) e Ingeniería en Ciencia de Datos (ITM).",
  "Disfruto acompañar todo el proceso de un producto digital: entender una necesidad real, integrar bases de datos con Supabase y desplegar en producción. Soy autodidacta, organizada y me motiva seguir creciendo como Software Developer dentro de un equipo de producto.",
];

export interface TimelineEntry {
  type: "work" | "education";
  tag: string;
  date: string;
  datetime: string;
  title: string;
  place: string;
  description?: string;
}

export const timeline: TimelineEntry[] = [
  {
    type: "work",
    tag: "EXPERIENCIA_02",
    date: "2024 — ACTUALIDAD",
    datetime: "2024",
    title: "Directora y Fundadora",
    place: "Inspira Models · Medellín",
    description:
      "Dirección estratégica, administrativa y comercial de la academia y agencia. Desarrollo y mantenimiento del sitio web corporativo con React, Tailwind CSS, Supabase y Vercel, además de campañas de Meta Ads.",
  },
  {
    type: "work",
    tag: "EXPERIENCIA_01",
    date: "2024 — ACTUALIDAD",
    datetime: "2024",
    title: "Desarrolladora Web",
    place: "Freelance · Medellín / Remoto",
    description:
      "Interfaces web responsivas con React, JavaScript, HTML5, CSS3 y Tailwind CSS. Integración de bases de datos y autenticación con Supabase, despliegues en Vercel y control de versiones con Git.",
  },
  {
    type: "education",
    tag: "FORMACION_03",
    date: "2026 — ACTUALIDAD",
    datetime: "2026",
    title: "Ingeniería en Ciencia de Datos",
    place: "Instituto Tecnológico Metropolitano (ITM)",
  },
  {
    type: "education",
    tag: "FORMACION_02",
    date: "EN FORMACIÓN",
    datetime: "2025",
    title: "Tecnología en Análisis y Desarrollo de Software",
    place: "SENA",
  },
  {
    type: "education",
    tag: "FORMACION_01",
    date: "GRADUADA 2025",
    datetime: "2025",
    title: "Técnica en Programación de Software",
    place: "SENA",
    description: "Egresada distinguida — mejor estudiante del programa.",
  },
];

export const contactCards = [
  {
    id: "github",
    title: "GitHub",
    icon: "github",
    handle: "github.com/ccardenasdev",
    href: "https://github.com/ccardenasdev",
    actionLabel: "Visitar perfil",
    accent: "lavender",
  },
  {
    id: "mail",
    title: "Correo",
    icon: "mail",
    handle: "Escríbeme directamente",
    href: "mailto:cardenasrodriguezcarolestefani@gmail.com?subject=Contacto%20desde%20tu%20portafolio",
    actionLabel: "Enviar correo",
    accent: "rose",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: "linkedin",
    handle: "Conectemos profesionalmente",
    href: "https://www.linkedin.com/in/carol-estefani-cardenas-117835415",
    actionLabel: "Ver perfil",
    accent: "sky",
  },
] as const;

export const inspirations: { icon: string; label: string }[] = [
  { icon: "plane", label: "Aviación" },
  { icon: "leaf", label: "Naturaleza" },
  { icon: "book", label: "Libros y aprendizaje" },
  { icon: "code", label: "Código limpio" },
  { icon: "sparkle", label: "Inteligencia artificial" },
  { icon: "chart", label: "Ciencia de datos" },
  { icon: "rocket", label: "Emprendimiento" },
  { icon: "puzzle", label: "Resolver problemas" },
  { icon: "paw", label: "Mi chihuahua" },
];

export const purpose = {
  title: "Mi propósito profesional",
  body: "Seguir creciendo como desarrolladora, aportar soluciones que generen impacto y trabajar en un equipo que me permita aprender, servir y dejar huella a través de la tecnología.",
  callout:
    "Busco mis prácticas profesionales para aplicar mis conocimientos y seguir construyendo mi mejor versión cada día.",
};

export const traits: { icon: string; title: string; description: string }[] = [
  {
    icon: "check",
    title: "Responsable",
    description: "Cumplo con compromisos y entrego resultados de calidad.",
  },
  {
    icon: "crown",
    title: "Líder",
    description:
      "Capaz de guiar equipos y tomar decisiones que impulsan el proyecto.",
  },
  {
    icon: "shield",
    title: "Resiliente",
    description:
      "Enfrento desafíos con actitud positiva y mentalidad de crecimiento.",
  },
  {
    icon: "spark",
    title: "Creativa",
    description:
      "Pienso fuera de la caja y amo convertir ideas en soluciones reales.",
  },
];

export const terminalValues = {
  path: "carol@dev ~/propósito",
  entries: [
    { key: "pasión", value: '"Código"' },
    { key: "enfoque", value: '"Disciplina"' },
    { key: "propósito", value: '"Impactar vidas"' },
    { key: "fe", value: "true" },
    { key: "constancia", value: '"100% cada día"' },
  ],
};

export const closingQuote =
  "No se trata de ser la mejor, se trata de ser mejor que ayer.";

export const cvHref = "/documents/CV_Carol_Cardenas.pdf";
