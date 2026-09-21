"use client";

import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import styles from "./QuoteBar.module.css";

export default function QuoteBar() {
  const { t } = useLanguage();

  return (
    <Reveal className={`${styles.bar} glass`}>
      <p>{t.closingQuote}</p>
    </Reveal>
  );
}
