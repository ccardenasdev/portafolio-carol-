import { stickyNote } from "../../lib/content";
import { UiIcon } from "../icons/UiIcons";
import styles from "./StickyNoteCard.module.css";

export default function StickyNoteCard() {
  return (
    <div className={styles.note}>
      <UiIcon name="cross" className={styles.cross} />
      <p className={styles.quote}>“{stickyNote.quote}”</p>
      <p className={styles.reference}>{stickyNote.reference}</p>
    </div>
  );
}
