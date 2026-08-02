import styles from "./FlatlayCorner.module.css";

export default function FlatlayCorner() {
  return (
    <svg
      className={styles.flatlay}
      viewBox="0 0 220 200"
      fill="none"
      aria-hidden="true"
    >
      {/* vase */}
      <path
        d="M40 150c-6 0-10 6-9 13l3 22c1 6 6 10 12 10h18c6 0 11-4 12-10l3-22c1-7-3-13-9-13H40Z"
        fill="var(--peach)"
      />
      {/* tulips */}
      <g stroke="var(--rose-vivid)" strokeWidth="2" strokeLinecap="round">
        <path d="M50 150c0-30 4-45 4-55M50 150c-4-26-2-42 6-52M50 150c4-24 10-38 14-46" />
      </g>
      <ellipse cx="54" cy="92" rx="8" ry="11" fill="var(--rose)" />
      <ellipse cx="42" cy="98" rx="7" ry="10" fill="var(--lavender)" />
      <ellipse cx="66" cy="100" rx="7" ry="10" fill="var(--mint)" />
      {/* book */}
      <rect x="90" y="168" width="56" height="10" rx="2" fill="var(--champagne)" />
      <rect x="96" y="158" width="44" height="10" rx="2" fill="var(--sky)" />
      {/* cross */}
      <path
        d="M120 150v-32M110 128h20"
        stroke="var(--champagne-vivid)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* candle */}
      <rect x="160" y="140" width="16" height="38" rx="4" fill="var(--cream)" stroke="var(--border)" />
      <path d="M168 132c3 3 4 6 0 9-4-3-3-6 0-9Z" fill="var(--peach-vivid)" />
      {/* pen */}
      <path
        d="M96 182 150 186"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
