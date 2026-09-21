"use client";

import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import { UiIcon } from "../../icons/UiIcons";
import styles from "./WhyWorkWithMeCard.module.css";

export default function WhyWorkWithMeCard() {
  const { t } = useLanguage();
  const { traits, ui } = t;

  return (
    <Reveal delay={80} as="article" className={`${styles.card} glass card`}>
      <div className={styles.header}>
        <h3>{ui.whyWorkTitle}</h3>
        <span aria-hidden="true">💗</span>
      </div>
      <div className={styles.grid}>
        {traits.map((trait) => (
          <div key={trait.title} className={styles.trait}>
            <UiIcon name={trait.icon} className={styles.icon} />
            <h4>{trait.title}</h4>
            <p>{trait.description}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
