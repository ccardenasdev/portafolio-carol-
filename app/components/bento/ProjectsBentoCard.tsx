import Reveal from "../Reveal";
import IconChip from "../IconChip";
import { projects, socials } from "../../lib/content";
import { UiIcon } from "../icons/UiIcons";
import styles from "./ProjectsBentoCard.module.css";

const techIconByTag: Record<string, string> = {
  React: "react",
  "Tailwind CSS": "tailwindcss",
  Supabase: "supabase",
  Vercel: "vercel",
  JavaScript: "javascript",
  HTML5: "html5",
  CSS3: "css3",
  Shopify: "shopify",
  "Meta Ads": "meta",
  "Meta Pixel": "meta",
};

export default function ProjectsBentoCard() {
  return (
    <Reveal
      delay={90}
      as="article"
      className={`${styles.card} glass card`}
      id="proyectos"
    >
      <div className={styles.header}>
        <h3>Proyectos destacados</h3>
        <a
          className={styles.viewAll}
          href={socials.find((s) => s.id === "github")?.href}
          target="_blank"
          rel="noreferrer"
        >
          <span>Más en GitHub</span>
          <UiIcon name="arrow-right" className={styles.viewAllIcon} />
        </a>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={styles.project}
            data-accent={project.accent}
          >
            <div className={styles.thumb}>
              <span className={styles.thumbLabel}>{project.windowLabel}</span>
            </div>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.slice(0, 3).map((tag) => {
                const iconId = techIconByTag[tag];
                return iconId ? (
                  <IconChip key={tag} id={iconId} tone={project.accent} size="sm" />
                ) : null;
              })}
            </div>
          </a>
        ))}
      </div>

      <div className={styles.dots} aria-hidden="true">
        {projects.map((project) => (
          <span key={project.id} />
        ))}
      </div>
    </Reveal>
  );
}
