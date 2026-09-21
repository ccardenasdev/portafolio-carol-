"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../lib/i18n";
import { UiIcon } from "../icons/UiIcons";
import styles from "./BentoNav.module.css";

export default function BentoNav() {
  const { t, lang, toggleLang } = useLanguage();
  const { nav, identity, socials, ui } = t;
  const [activeHash, setActiveHash] = useState("#inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // The real theme is only knowable client-side (it was set by the
    // blocking init script in layout.tsx before hydration), so it must be
    // synced after mount rather than guessed during the initial render —
    // guessing here would make the client's first render diverge from the
    // server's and trigger a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light"
    );
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage may be unavailable (e.g. private mode); theme just won't persist
    }
  };

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
  }, [nav]);

  const talkHref =
    socials.find((s) => s.id === "whatsapp")?.href ??
    socials.find((s) => s.id === "mail")?.href;

  return (
    <header className={styles.wrap}>
      <div className={`${styles.bar} glass`}>
        <a href="#inicio" className={styles.brand} aria-label={ui.navHome}>
          <span className={styles.brandMark}>CC</span>
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="bento-nav"
          aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <UiIcon name={menuOpen ? "close" : "menu"} className={styles.menuIcon} />
        </button>

        <nav
          id="bento-nav"
          className={styles.nav}
          data-open={menuOpen || undefined}
          aria-label={ui.navLandmark}
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
          <a
            className={styles.talk}
            href={talkHref}
            target="_blank"
            rel="noreferrer"
          >
            <UiIcon name="chat" className={styles.talkIcon} />
            <span>{ui.talk}</span>
          </a>
          <button
            type="button"
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={ui.langToggleLabel}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === "dark" ? ui.themeToLight : ui.themeToDark}
          >
            <UiIcon name={theme === "dark" ? "moon" : "sun"} className={styles.sunIcon} />
          </button>
        </div>
      </div>
    </header>
  );
}
