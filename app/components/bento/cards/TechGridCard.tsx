"use client";

import Reveal from "../../Reveal";
import IconChip, { toneForIndex } from "../../IconChip";
import { useLanguage } from "../../../lib/i18n";
import styles from "./TechGridCard.module.css";

export default function TechGridCard() {
  const { t } = useLanguage();
  const { techGrid, ui } = t;

  return (
    <Reveal as="article" className={`${styles.card} glass card`} id="habilidades">
      <div className={styles.header}>
        <h3>{ui.techTitle}</h3>
        <span aria-hidden="true">✨</span>
      </div>
      <ul className={styles.grid}>
        {techGrid.map((item, index) => (
          <li key={item.id} className={styles.chip}>
            <IconChip id={item.id} tone={toneForIndex(index)} size="sm" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <p className={styles.footer}>
        <span aria-hidden="true">🔖</span> {ui.techFooter}
      </p>
    </Reveal>
  );
}
