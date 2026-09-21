"use client";

import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import { UiIcon } from "../../icons/UiIcons";
import { TechIcon } from "../../icons/TechIcons";
import styles from "./ContactCard.module.css";

export default function ContactCard() {
  const { t } = useLanguage();
  const { contactCards, ui } = t;

  return (
    <Reveal as="article" className={`${styles.card} glass card`} id="contacto">
      <div className={styles.header}>
        <h3>{ui.contactTitle}</h3>
        <UiIcon name="chat" className={styles.headerIcon} />
      </div>
      <p className={styles.intro}>{ui.contactIntro}</p>
      <div className={styles.list}>
        {contactCards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={card.href.startsWith("http") ? "noreferrer" : undefined}
            className={styles.item}
            data-accent={card.accent}
          >
            <span className={styles.icon}>
              <TechIcon id={card.icon} className={styles.iconGlyph} />
            </span>
            <span className={styles.text}>
              <strong>{card.title}</strong>
              <span>{card.handle}</span>
            </span>
            <UiIcon name="arrow-right" className={styles.arrow} />
          </a>
        ))}
      </div>
    </Reveal>
  );
}
