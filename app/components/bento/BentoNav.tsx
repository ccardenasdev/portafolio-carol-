"use client";

import { useEffect, useState } from "react";
import { nav, identity, socials } from "../../lib/content";
import { UiIcon } from "../icons/UiIcons";
import styles from "./BentoNav.module.css";

export default function BentoNav() {
  const [activeHash, setActiveHash] = useState("#inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = nav
      .map(({ href }) => ({ hash: href, target: document.querySelector(href) }))
      .filter((entry): entry is { hash: string; target: Element } =>
        Boolean(entry.target)
      );

    const hashByTarget = new Map(sections.map(({ hash, target }) => [target, hash]));
    const distanceByHash = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const hash = hashByTarget.get(entry.target);
          if (!hash) return;
          if (entry.isIntersecting) {
            distanceByHash.set(hash, Math.abs(entry.boundingClientRect.top));
          } else {
            distanceByHash.delete(hash);
          }
        });

        if (distanceByHash.size === 0) return;
        let closest = "#inicio";
        let closestDistance = Infinity;
        distanceByHash.forEach((distance, hash) => {
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = hash;
          }
        });
        setActiveHash(closest);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(({ target }) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const mailSocial = socials.find((s) => s.id === "mail");

  return (
    <header className={styles.wrap}>
      <div className={`${styles.bar} glass`}>
        <a href="#inicio" className={styles.brand} aria-label="Ir al inicio">
          <span className={styles.brandMark}>CC</span>
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="bento-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <UiIcon name={menuOpen ? "close" : "menu"} className={styles.menuIcon} />
        </button>

        <nav
          id="bento-nav"
          className={styles.nav}
          data-open={menuOpen || undefined}
          aria-label="Navegación principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              data-active={activeHash === item.href || undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.statusLabel}>{identity.available}</span>
        </div>

        <div className={styles.actions}>
          <a className={styles.talk} href={mailSocial?.href}>
            <UiIcon name="chat" className={styles.talkIcon} />
            <span>Hablemos</span>
          </a>
          <span className={styles.themeToggle} aria-hidden="true">
            <UiIcon name="sun" className={styles.sunIcon} />
          </span>
        </div>
      </div>
    </header>
  );
}
