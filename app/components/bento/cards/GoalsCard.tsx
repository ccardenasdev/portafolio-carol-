"use client";

import { useLanguage } from "../../../lib/i18n";
import { UiIcon } from "../../icons/UiIcons";
import styles from "./GoalsCard.module.css";

export default function GoalsCard() {
  const { t } = useLanguage();
  const { goals2026, ui } = t;

  return (
    <div className={`${styles.card} glass`}>
      <div className={styles.header}>
        <p>{ui.goalsTitle}</p>
        <span className={styles.targetIcon}>
          <UiIcon name="target" className={styles.targetGlyph} />
        </span>
      </div>
      <ul className={styles.list}>
        {goals2026.map((goal) => (
          <li key={goal.slice(0, 16)}>
            <UiIcon name="check" className={styles.check} />
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
