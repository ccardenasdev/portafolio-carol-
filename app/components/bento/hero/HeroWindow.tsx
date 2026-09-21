"use client";

import Image from "next/image";
import Reveal from "../../Reveal";
import { useLanguage } from "../../../lib/i18n";
import styles from "./HeroWindow.module.css";

export default function HeroWindow() {
  const { t } = useLanguage();
  const { aboutMini } = t;

  return (
    <Reveal variant="hero" delay={160} className={styles.frame} id="sobre-mi">
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span data-tone="close" />
          <span data-tone="min" />
          <span data-tone="max" />
        </div>
        <span className={styles.url}>carol.dev</span>
      </div>

      <div className={styles.scene}>
        <Image
          src="/images/hero-photo.png"
          alt={t.hero.photoAlt}
          fill
          priority
          sizes="(max-width: 860px) 100vw, 55vw"
          className={styles.photo}
        />
      </div>

      <div className={styles.miniCard}>
        <p className={styles.miniTitle}>{aboutMini.title}</p>
        <ul className={styles.miniList}>
          {aboutMini.bullets.map((bullet) => (
            <li key={bullet.slice(0, 18)}>{bullet}</li>
          ))}
        </ul>
        <div className={styles.miniFooter}>
          <span aria-hidden="true">♡</span>
          <span>{aboutMini.verse}</span>
        </div>
      </div>
    </Reveal>
  );
}
