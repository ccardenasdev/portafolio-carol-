import BentoNav from "./BentoNav";
import HeroRail from "./HeroRail";
import HeroCopy from "./HeroCopy";
import HeroWindow from "./HeroWindow";
import SideRail from "./SideRail";
import TechGridCard from "./TechGridCard";
import ProjectsBentoCard from "./ProjectsBentoCard";
import InspirationCard from "./InspirationCard";
import PurposeCard from "./PurposeCard";
import WhyWorkWithMeCard from "./WhyWorkWithMeCard";
import TerminalCard from "./TerminalCard";
import QuoteBar from "./QuoteBar";
import FlatlayCorner from "./FlatlayCorner";
import styles from "./BentoBoard.module.css";

export default function BentoBoard() {
  return (
    <div className={styles.board} id="inicio">
      <div className={styles.ambient} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobRose}`} />
        <span className={`${styles.blob} ${styles.blobLavender}`} />
        <span className={`${styles.blob} ${styles.blobMint}`} />
      </div>

      <BentoNav />

      <main className={styles.main}>
        <section className={styles.heroGrid} aria-label="Presentación">
          <HeroRail />
          <HeroCopy />
          <HeroWindow />
          <SideRail />
        </section>

        <section className={styles.row2} aria-label="Stack, proyectos e inspiración">
          <TechGridCard />
          <ProjectsBentoCard />
          <InspirationCard />
        </section>

        <section className={styles.row3} aria-label="Propósito y valores">
          <PurposeCard />
          <WhyWorkWithMeCard />
          <TerminalCard />
        </section>

        <QuoteBar />
      </main>

      <FlatlayCorner />
    </div>
  );
}
