import { goals2026 } from "../../lib/content";
import { UiIcon } from "../icons/UiIcons";
import styles from "./GoalsCard.module.css";

export default function GoalsCard() {
  return (
    <div className={`${styles.card} glass`} id="educacion">
      <div className={styles.header}>
        <p>Metas 2026</p>
        <span className={styles.targetIcon}>
          <UiIcon name="target" className={styles.targetGlyph} />
        </span>
      </div>
      <ul className={styles.list}>
        {goals2026.map((goal) => (
          <li key={goal.slice(0, 16)}>
            <UiIcon name="check" className={styles.check} />
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
