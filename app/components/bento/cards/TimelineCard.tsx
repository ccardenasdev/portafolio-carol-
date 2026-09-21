"use client";

import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import styles from "./TimelineCard.module.css";

export default function TimelineCard() {
  const { t } = useLanguage();
  const { timeline, ui } = t;
  const work = timeline.filter((entry) => entry.type === "work");
  const education = timeline.filter((entry) => entry.type === "education");

  return (
    <Reveal as="article" className={`${styles.card} glass card`}>
      <div className={styles.group} id="experiencia">
        <div className={styles.header}>
          <h3>{ui.experienceTitle}</h3>
          <span aria-hidden="true">💼</span>
        </div>
        <ul className={styles.list}>
          {work.map((entry) => (
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

      <div className={styles.group} id="educacion">
        <div className={styles.header}>
          <h3>{ui.educationTitle}</h3>
          <span aria-hidden="true">🎓</span>
        </div>
        <ul className={styles.list}>
          {education.map((entry) => (
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
    </Reveal>
  );
}
