"use client";

import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import { UiIcon } from "../../icons/UiIcons";
import styles from "./StatsCard.module.css";

export default function StatsCard() {
  const { t } = useLanguage();
  const { stats, ui } = t;

  return (
    <Reveal
      variant="hero"
      delay={220}
      as="article"
      className={`${styles.card} glass card`}
    >
      <h3 className={styles.title}>{ui.statsTitle}</h3>
      <ul className={styles.list}>
        {stats.map((stat) => (
          <li key={stat.label} className={styles.row}>
            <span className={styles.icon}>
              <UiIcon name={stat.icon} className={styles.iconGlyph} />
            </span>
            <span>
              <strong className={styles.value}>{stat.value}</strong>
              <span className={styles.label}>{stat.label}</span>
            </span>
          </li>
        ))}
      </ul>
      <a className={styles.cta} href="#contacto">
        <span>{ui.statsCta}</span>
        <UiIcon name="arrow-right" className={styles.ctaIcon} />
      </a>
    </Reveal>
  );
}
