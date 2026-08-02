import Reveal from "../Reveal";
import { identity, hero, cvHref, socials } from "../../lib/content";
import { TechIcon } from "../icons/TechIcons";
import { UiIcon } from "../icons/UiIcons";
import styles from "./HeroCopy.module.css";

export default function HeroCopy() {
  return (
    <div className={styles.copy}>
      <Reveal variant="hero" delay={60} className={styles.greeting}>
        ¡Hola! Soy <span aria-hidden="true">👋</span>
      </Reveal>

      <Reveal variant="hero" delay={120} as="h1" className={styles.name}>
        {identity.firstName}
        <br />
        <span className={styles.nameAccent}>
          {identity.lastName}
          <UiIcon name="crown" className={styles.crown} />
        </span>
      </Reveal>

      <Reveal variant="hero" delay={190} className={styles.pills}>
        <span className={styles.pill}>{identity.roles.join(" • ")}</span>
        <span className={styles.pill}>
          {identity.founder} <span aria-hidden="true">🤍</span>
        </span>
      </Reveal>

      <Reveal variant="hero" delay={240} as="p" className={styles.description}>
        {hero.description}
      </Reveal>

      <Reveal variant="hero" delay={300} className={styles.actions}>
        <a className={styles.primary} href="#proyectos">
          <span>Ver mis proyectos</span>
          <span aria-hidden="true">✨</span>
        </a>
        <a className={styles.secondary} href={cvHref} download="CV_Carol_Cardenas.pdf">
          <span>Descargar CV</span>
          <UiIcon name="download" className={styles.downloadIcon} />
        </a>
      </Reveal>

      <Reveal variant="hero" delay={360} className={styles.follow}>
        <p>Sígueme en</p>
        <div className={styles.socialRow}>
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className={styles.socialLink}
              aria-label={social.label}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <TechIcon id={social.id} className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
