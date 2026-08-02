import { TechIcon } from "./icons/TechIcons";
import styles from "./IconChip.module.css";

const TONES = ["rose", "lavender", "sky", "mint", "peach"] as const;

export function toneForIndex(index: number) {
  return TONES[index % TONES.length];
}

export default function IconChip({
  id,
  tone = "lavender",
  size = "md",
}: {
  id: string;
  tone?: (typeof TONES)[number];
  size?: "sm" | "md";
}) {
  return (
    <span
      className={styles.chip}
      data-tone={tone}
      data-size={size}
      aria-hidden="true"
    >
      <TechIcon id={id} className={styles.icon} />
    </span>
  );
}
