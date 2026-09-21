"use client";

import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import type { TimelineEntry } from "../../../lib/content";
import styles from "./TimelineCard.module.css";

function TimelineGroup({
  id,
  title,
  icon,
  entries,
}: {
  id?: string;
  title: string;
  icon: string;
  entries: TimelineEntry[];
}) {
  if (entries.length === 0) return null;

  return (
    <div className={styles.group} id={id}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span aria-hidden="true">{icon}</span>
      </div>
      <ul className={styles.list}>
        {entries.map((entry) => (
          <li key={entry.title}>
            <span className={styles.dot} aria-hidden="true" />
            <div className={styles.entry}>
              <span className={styles.date}>{entry.date}</span>
              <h4>{entry.title}</h4>
              <p className={styles.place}>{entry.place}</p>
              {entry.description && (
                <p className={styles.description}>{entry.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TimelineCard() {
  const { t } = useLanguage();
  const { timeline, ui } = t;
  const work = timeline.filter((entry) => entry.type === "work");
  const education = timeline.filter((entry) => entry.type === "education");
  const certifications = timeline.filter((entry) => entry.type === "certification");

  return (
    <Reveal as="article" className={`${styles.card} glass card`}>
      <TimelineGroup id="experiencia" title={ui.experienceTitle} icon="💼" entries={work} />
      <TimelineGroup id="educacion" title={ui.educationTitle} icon="🎓" entries={education} />
      <TimelineGroup title={ui.certificationsTitle} icon="📜" entries={certifications} />
    </Reveal>
  );
}
