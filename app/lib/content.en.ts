import type {
  ContactCardItem,
  Project,
  ProjectCategory,
  SocialLink,
  Stat,
  TimelineEntry,
} from "./content";

export const nav = [
  { href: "#inicio", label: "Home" },
  { href: "#sobre-mi", label: "About" },
  { href: "#proyectos", label: "Projects" },
  { href: "#experiencia", label: "Experience" },
  { href: "#habilidades", label: "Skills" },
  { href: "#educacion", label: "Education" },
  { href: "#contacto", label: "Contact" },
];

export const identity = {
  firstName: "Carol",
  lastName: "Cárdenas",
  roles: [
    "Freelance Frontend Developer",
    "Data Science Engineering Student",
  ],
  founder: "Founder of Inspira Models",
  languages: "🌐 Spanish (native) · English (B1)",
  available: "Open to internships or an apprenticeship contract",
  description:
    "Freelance developer passionate about building digital solutions that turn ideas into real experiences. I'm looking for an internship or apprenticeship contract to bring the experience I've built delivering real projects to a team, with the same discipline, responsibility and commitment to excellence I bring to every independent project.",
};

export const hero = {
  greeting: "Hi, I'm Carol",
  role: "Frontend Developer & Data Science",
  location: "Medellín, Colombia",
  description:
    "I build clear, responsive web interfaces with React, JavaScript and Tailwind CSS, connected to real databases with Supabase. As a freelancer I've accompanied projects from the first sketch to production, and now I'm looking for an internship or apprenticeship contract to keep growing within a team.",
  photoAlt:
    "Carol next to her chihuahua at her desk, surrounded by books and her work setup",
};

export const aboutMini = {
  title: "About me",
  bullets: [
    "I'm a frontend developer passionate about technology, design and data.",
    "A leader, disciplined and persistent. I love learning, solving problems and turning ideas into digital products that create impact.",
  ],
  verse: "Proverbs 16:3",
};

export const whatsappHref = "https://wa.link/q9rwn2";

export const socials: SocialLink[] = [
  { id: "whatsapp", label: "WhatsApp", href: whatsappHref },
  { id: "github", label: "GitHub", href: "https://github.com/ccardenasdev" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carolcardenas499/",
  },
  {
    id: "mail",
    label: "Email",
    href: "mailto:cardenasrodriguezcarolestefani@gmail.com?subject=Contact%20from%20your%20portfolio",
  },
];

export const stats: Stat[] = [
  { icon: "calendar", value: "2+", label: "Years learning every day" },
  { icon: "code", value: "3", label: "Freelance projects in production" },
  { icon: "star", value: "10+", label: "Technologies I work with" },
  { icon: "target", value: "100%", label: "Discipline and commitment" },
];

export const goals2026 = [
  "Finish my Data Science Engineering degree",
  "Land my internship or apprenticeship contract",
  "Improve my AI skills",
  "Keep leading Inspira Models",
  "Add value from day one on a team",
  "Keep impacting lives through technology",
];

export const stickyNote = {
  quote: "I can do all things through Christ who strengthens me.",
  reference: "Philippians 4:13",
};

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
      "Multi-portal platform with role-based access for trainees, teachers, companies, guardians and admins. Talent catalog with advanced filters, tracked applications, digital contracts and an admin panel.",
    category: "Web",
    tags: ["React", "Tailwind CSS", "Supabase", "Vercel"],
    href: "https://inspira-models-agency.vercel.app",
    accent: "rose",
    thumbnail: "/images/projects/inspira.png",
  },
  {
    id: "urbanstep",
    name: "UrbanStep",
    windowLabel: "urbanstep.app",
    description:
      "B2B store with volume-based tiered pricing and wholesale mode, cart, four-step checkout, role-based auth and an admin panel. Includes an AI style advisor and image-based product search.",
    category: "E-commerce",
    tags: ["JavaScript", "HTML5", "CSS3", "Vercel"],
    href: "https://tienda-virtual-de-ropa.vercel.app",
    accent: "lavender",
    thumbnail: "/images/projects/urbanstep.png",
  },
  {
    id: "calzasport",
    name: "CalzaSport",
    windowLabel: "calzasport.shop",
    description:
      "Built and manage a store with a catalog of 25+ references, conversion funnel, WhatsApp-guided checkout and campaign tracking with Meta Pixel.",
    category: "E-commerce",
    tags: ["Shopify", "Meta Ads", "Meta Pixel"],
    href: "https://calzasport.shop",
    accent: "sky",
    thumbnail: "/images/projects/calzasport.png",
  },
];

export {
  languages,
  frameworks,
  tools,
  techGrid,
} from "./content";

export const aboutBio = [
  "I'm a frontend developer focused on React, JavaScript and Tailwind CSS, trained as a Software Programming Technician (SENA, top graduate) and currently studying Software Analysis and Development Technology (SENA) and Data Science Engineering (ITM).",
  "I enjoy being part of a digital product's whole journey: understanding a real need, integrating databases with Supabase and shipping to production. I'm self-taught, organized, and motivated to keep growing as a Software Developer within a product team.",
];

export const timeline: TimelineEntry[] = [
  {
    type: "work",
    tag: "EXPERIENCE_02",
    date: "2024 — PRESENT",
    datetime: "2024",
    title: "Director & Founder",
    place: "Inspira Models · Medellín",
    description:
      "Strategic, administrative and commercial direction of the academy and agency. Development and maintenance of the corporate website with React, Tailwind CSS, Supabase and Vercel, plus Meta Ads campaigns.",
  },
  {
    type: "work",
    tag: "EXPERIENCE_01",
    date: "2024 — PRESENT",
    datetime: "2024",
    title: "Web Developer",
    place: "Freelance · Medellín / Remote",
    description:
      "Responsive web interfaces with React, JavaScript, HTML5, CSS3 and Tailwind CSS. Database integration and auth with Supabase, deployments on Vercel and version control with Git.",
  },
  {
    type: "education",
    tag: "EDUCATION_03",
    date: "2026 — PRESENT",
    datetime: "2026",
    title: "Data Science Engineering",
    place: "Instituto Tecnológico Metropolitano (ITM)",
  },
  {
    type: "education",
    tag: "EDUCATION_02",
    date: "IN PROGRESS",
    datetime: "2025",
    title: "Software Analysis and Development Technology",
    place: "SENA",
  },
  {
    type: "education",
    tag: "EDUCATION_01",
    date: "GRADUATED 2025",
    datetime: "2025",
    title: "Software Programming Technician",
    place: "SENA",
    description: "Top graduate — best student of the program.",
  },
  {
    type: "certification",
    tag: "CERT_02",
    date: "MAY 2026",
    datetime: "2026",
    title: "Cybersecurity — Red Team Operations",
    place: "Cymetria Group · Alcaldía de Medellín",
    description: "117 hours of hands-on offensive security training.",
  },
  {
    type: "certification",
    tag: "CERT_01",
    date: "SENA",
    datetime: "2025",
    title: "English Level 6",
    place: "SENA Certification",
  },
];

export const contactCards: ContactCardItem[] = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    icon: "whatsapp",
    handle: "Message me directly",
    href: whatsappHref,
    actionLabel: "Open WhatsApp",
    accent: "mint",
  },
  {
    id: "mail",
    title: "Email",
    icon: "mail",
    handle: "Write to me directly",
    href: "mailto:cardenasrodriguezcarolestefani@gmail.com?subject=Contact%20from%20your%20portfolio",
    actionLabel: "Send email",
    accent: "rose",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: "linkedin",
    handle: "Let's connect professionally",
    href: "https://www.linkedin.com/in/carolcardenas499/",
    actionLabel: "View profile",
    accent: "sky",
  },
  {
    id: "github",
    title: "GitHub",
    icon: "github",
    handle: "github.com/ccardenasdev",
    href: "https://github.com/ccardenasdev",
    actionLabel: "Visit profile",
    accent: "lavender",
  },
];

export const inspirations: { icon: string; label: string }[] = [
  { icon: "plane", label: "Aviation" },
  { icon: "leaf", label: "Nature" },
  { icon: "book", label: "Books & learning" },
  { icon: "code", label: "Clean code" },
  { icon: "sparkle", label: "Artificial intelligence" },
  { icon: "chart", label: "Data science" },
  { icon: "rocket", label: "Entrepreneurship" },
  { icon: "puzzle", label: "Problem solving" },
  { icon: "paw", label: "My chihuahua" },
];

export const purpose = {
  title: "My professional purpose",
  body: "To keep growing as a developer, contribute solutions that create impact, and work on a team that lets me learn, serve and leave a mark through technology.",
  callout:
    "I'm looking for an internship or an apprenticeship contract to bring a team the experience I've already built as a freelance developer, keep learning and become my best version every day.",
};

export const traits: { icon: string; title: string; description: string }[] = [
  {
    icon: "check",
    title: "Responsible",
    description: "I follow through on commitments and deliver quality work.",
  },
  {
    icon: "crown",
    title: "Leader",
    description: "Able to guide teams and make decisions that move the project forward.",
  },
  {
    icon: "rocket",
    title: "Freelance",
    description: "I already manage real projects end to end: clients, deadlines and delivery.",
  },
  {
    icon: "spark",
    title: "Creative",
    description: "I think outside the box and love turning ideas into real solutions.",
  },
];

export const terminalValues = {
  path: "carol@dev ~/purpose",
  entries: [
    { key: "passion", value: '"Code"' },
    { key: "focus", value: '"Discipline"' },
    { key: "purpose", value: '"Impact lives"' },
    { key: "faith", value: "true" },
    { key: "consistency", value: '"100% every day"' },
  ],
};

export const closingQuote =
  "It's not about being the best, it's about being better than yesterday.";

export const cvHref = "/documents/CV_Carol_Cardenas.pdf";

export const ui = {
  heroGreeting: "Hi! I'm",
  followLabel: "Follow me on",
  viewProjects: "View my projects",
  downloadCv: "Download CV",
  talk: "Let's talk",
  statsTitle: "My journey in numbers",
  statsCta: "Let's talk",
  goalsTitle: "2026 Goals",
  techTitle: "Technologies I use",
  techFooter: "Always learning something new",
  projectsTitle: "Featured projects",
  projectsViewAll: "More on GitHub",
  inspirationTitle: "What inspires me",
  whyWorkTitle: "Why work with me?",
  contactTitle: "Let's talk",
  contactIntro:
    "Looking for a freelance developer, or want to offer me an internship or apprenticeship contract? Message me, I reply fast.",
  experienceTitle: "Experience",
  educationTitle: "Education",
  certificationsTitle: "Certifications",
  terminalLearning: "learning",
  terminalBuildingDreams: "buildingDreams",
  themeToLight: "Switch to light mode",
  themeToDark: "Switch to dark mode",
  langToggleLabel: "Español",
  projectThumbAlt: "Screenshot of the homepage of",
  navHome: "Go to home",
  navLandmark: "Main navigation",
  menuOpen: "Open menu",
  menuClose: "Close menu",
};
