import Reveal from "../Reveal";
import IconChip, { toneForIndex } from "../IconChip";
import { techGrid } from "../../lib/content";
import styles from "./TechGridCard.module.css";

export default function TechGridCard() {
  return (
    <Reveal as="article" className={`${styles.card} glass card`} id="habilidades">
      <div className={styles.header}>
        <h3>Tecnologías que uso</h3>
        <span aria-hidden="true">✨</span>
      </div>
      <ul className={styles.grid}>
        {techGrid.map((item, index) => (
          <li key={item.id} className={styles.chip}>
            <IconChip id={item.id} tone={toneForIndex(index)} size="sm" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <p className={styles.footer}>
        <span aria-hidden="true">🔖</span> Siempre aprendiendo algo nuevo
      </p>
    </Reveal>
  );
}
