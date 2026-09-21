"use client";

import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import { UiIcon } from "../../icons/UiIcons";
import styles from "./InspirationCard.module.css";

export default function InspirationCard() {
  const { t } = useLanguage();
  const { inspirations, ui } = t;

  return (
    <Reveal delay={140} as="article" className={`${styles.card} glass card`}>
      <div className={styles.header}>
        <h3>{ui.inspirationTitle}</h3>
        <span aria-hidden="true">🦋</span>
      </div>
      <ul className={styles.list}>
        {inspirations.map((item) => (
          <li key={item.label}>
            <UiIcon name={item.icon} className={styles.icon} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
