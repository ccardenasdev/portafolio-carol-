"use client";

import { useLanguage } from "../../../lib/i18n";
import styles from "./StickyNoteCard.module.css";

export default function StickyNoteCard() {
  const { t } = useLanguage();
  const { stickyNote } = t;

  return (
    <div className={styles.note}>
      <p className={styles.quote}>&ldquo;{stickyNote.quote}&rdquo;</p>
      <p className={styles.reference}>{stickyNote.reference}</p>
    </div>
  );
}
