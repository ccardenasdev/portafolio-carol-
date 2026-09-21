"use client";

import Image from "next/image";
import Reveal from "../../Reveal";
import IconChip from "../../IconChip";
import { useLanguage } from "../../../lib/i18n";
import { UiIcon } from "../../icons/UiIcons";
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
  const { t } = useLanguage();
  const { projects, socials, ui } = t;

  return (
    <Reveal
      delay={90}
      as="article"
      className={`${styles.card} glass card`}
      id="proyectos"
    >
      <div className={styles.header}>
        <h3>{ui.projectsTitle}</h3>
        <a
          className={styles.viewAll}
          href={socials.find((s) => s.id === "github")?.href}
          target="_blank"
          rel="noreferrer"
        >
          <span>{ui.projectsViewAll}</span>
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
              <Image
                src={project.thumbnail}
                alt={`${ui.projectThumbAlt} ${project.name}`}
                fill
                sizes="(max-width: 860px) 90vw, 260px"
                className={styles.thumbImage}
              />
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
