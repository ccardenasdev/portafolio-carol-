import { nav } from "../../lib/content";
import styles from "./HeroRail.module.css";

export default function HeroRail() {
  return (
    <div className={styles.rail} aria-hidden="true">
      <span className={styles.badge}>01</span>
      <div className={styles.dots}>
        {nav.map((item, index) => (
          <span
            key={item.href}
            className={styles.dot}
            data-first={index === 0 || undefined}
          />
        ))}
      </div>
      <svg className={styles.branch} viewBox="0 0 40 220" fill="none">
        <path
          d="M20 10v190M20 40c-10 4-14 12-14 22M20 70c10 3 15 10 15 19M20 105c-9 3-13 11-13 20M20 138c9 4 14 11 14 20M20 170c-8 3-12 10-12 18"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="6" cy="62" r="3" fill="currentColor" />
        <circle cx="35" cy="89" r="3" fill="currentColor" />
        <circle cx="7" cy="125" r="3" fill="currentColor" />
        <circle cx="34" cy="158" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}
