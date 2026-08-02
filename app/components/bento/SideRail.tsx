import Reveal from "../Reveal";
import StatsCard from "./StatsCard";
import Polaroid from "./Polaroid";
import PlaylistCard from "./PlaylistCard";
import StickyNoteCard from "./StickyNoteCard";
import GoalsCard from "./GoalsCard";
import styles from "./SideRail.module.css";

export default function SideRail() {
  return (
    <div className={styles.rail}>
      <StatsCard />

      <Reveal variant="hero" delay={280} className={styles.polaroidRow}>
        <Polaroid label="Viajes" caption="Explorando" tone="sky" rotate={-4} />
        <Polaroid label="Naturaleza" caption="Aire libre" tone="mint" rotate={3} />
      </Reveal>

      <Reveal variant="hero" delay={320}>
        <PlaylistCard />
      </Reveal>

      <Reveal variant="hero" delay={360} className={styles.duoRow}>
        <Polaroid
          label="🐾 Mi compañero"
          caption="Mi compañero de aventuras"
          tone="peach"
          rotate={-3}
          size="lg"
          image="/images/hero-desk.png"
          imagePosition="28% 68%"
        />
        <StickyNoteCard />
      </Reveal>

      <Reveal variant="hero" delay={400}>
        <GoalsCard />
      </Reveal>
    </div>
  );
}
