import Image from "next/image";
import Reveal from "../Reveal";
import { aboutMini } from "../../lib/content";
import styles from "./HeroWindow.module.css";

export default function HeroWindow() {
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
          src="/images/hero-desk.png"
          alt="Carol en su escritorio con su chihuahua, rodeada de libros, luces cálidas y su setup de trabajo"
          fill
          priority
          sizes="(max-width: 860px) 100vw, 55vw"
          className={styles.photo}
        />

        <div className={`${styles.miniCard} glass`}>
          <div className={styles.miniHeader}>
            <p>{aboutMini.title}</p>
            <span aria-hidden="true">✕</span>
          </div>
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
      </div>
    </Reveal>
  );
}
