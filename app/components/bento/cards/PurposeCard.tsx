"use client";

import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import { UiIcon } from "../../icons/UiIcons";
import styles from "./PurposeCard.module.css";

export default function PurposeCard() {
  const { t } = useLanguage();
  const { purpose } = t;

  return (
    <Reveal as="article" className={`${styles.card} glass card`}>
      <div className={styles.header}>
        <h3>{purpose.title}</h3>
        <span aria-hidden="true">🎯</span>
      </div>
      <p className={styles.body}>{purpose.body}</p>
      <div className={styles.callout}>
        <UiIcon name="rocket" className={styles.calloutIcon} />
        <p>{purpose.callout}</p>
      </div>
    </Reveal>
  );
}
