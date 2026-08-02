import { UiIcon } from "../icons/UiIcons";
import styles from "./PlaylistCard.module.css";

export default function PlaylistCard() {
  return (
    <div className={`${styles.card} glass`}>
      <div className={styles.art} aria-hidden="true">
        <UiIcon name="sparkle" className={styles.artIcon} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>Mi playlist de enfoque</p>
        <p className={styles.subtitle}>Código, café y propósito</p>
        <div className={styles.progress}>
          <span />
        </div>
      </div>
      <div className={styles.controls} aria-hidden="true">
        <UiIcon name="prev" className={styles.controlIcon} />
        <span className={styles.play}>
          <UiIcon name="play" className={styles.playIcon} filled />
        </span>
        <UiIcon name="next" className={styles.controlIcon} />
      </div>
    </div>
  );
}
