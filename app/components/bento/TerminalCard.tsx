import Reveal from "../Reveal";
import { terminalValues } from "../../lib/content";
import styles from "./TerminalCard.module.css";

export default function TerminalCard() {
  return (
    <Reveal delay={160} as="article" className={styles.card}>
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span data-tone="close" />
          <span data-tone="min" />
          <span data-tone="max" />
        </div>
        <span className={styles.path}>{terminalValues.path}</span>
      </div>
      <pre className={styles.body}>
        <code>
          <span className={styles.keyword}>const</span> carol = {"{"}
          {"\n"}
          {terminalValues.entries.map((entry) => (
            <span key={entry.key}>
              {"  "}
              <span className={styles.prop}>{entry.key}</span>:{" "}
              <span className={styles.value}>{entry.value}</span>,{"\n"}
            </span>
          ))}
          {"}"};{"\n\n"}
          <span className={styles.keyword}>while</span> (aprendiendo) {"{"}
          {"\n"}
          {"  "}construyendoSueños(); <span className={styles.heart}>♡</span>
          {"\n"}
          {"}"}
        </code>
      </pre>
    </Reveal>
  );
}
