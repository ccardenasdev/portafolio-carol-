import Reveal from "../../Reveal";
import StatsCard from "../cards/StatsCard";
import Polaroid from "../cards/Polaroid";
import StickyNoteCard from "../cards/StickyNoteCard";
import GoalsCard from "../cards/GoalsCard";
import styles from "./SideRail.module.css";

export default function SideRail() {
  return (
    <div className={styles.rail}>
      <StatsCard />

      <Reveal variant="hero" delay={280} className={styles.duoRow}>
        <Polaroid
          label="🐾 Mi compañero"
          caption="Mi compañero de aventuras"
          tone="peach"
          rotate={-3}
          size="lg"
          image="/images/hero-photo.png"
          imagePosition="66% 50%"
          imageScale={2.2}
        />
        <StickyNoteCard />
      </Reveal>

      <Reveal variant="hero" delay={400}>
        <GoalsCard />
      </Reveal>
    </div>
  );
}
