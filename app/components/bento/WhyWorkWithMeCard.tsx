import Reveal from "../Reveal";
import { traits } from "../../lib/content";
import { UiIcon } from "../icons/UiIcons";
import styles from "./WhyWorkWithMeCard.module.css";

export default function WhyWorkWithMeCard() {
  return (
    <Reveal delay={80} as="article" className={`${styles.card} glass card`}>
      <div className={styles.header}>
        <h3>¿Por qué trabajar conmigo?</h3>
        <span aria-hidden="true">💗</span>
      </div>
      <div className={styles.grid}>
        {traits.map((trait) => (
          <div key={trait.title} className={styles.trait}>
            <UiIcon name={trait.icon} className={styles.icon} />
            <h4>{trait.title}</h4>
            <p>{trait.description}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
