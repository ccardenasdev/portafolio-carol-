import Reveal from "../Reveal";
import { closingQuote } from "../../lib/content";
import styles from "./QuoteBar.module.css";

export default function QuoteBar() {
  return (
    <Reveal className={`${styles.bar} glass`}>
      <p>{closingQuote}</p>
    </Reveal>
  );
}
