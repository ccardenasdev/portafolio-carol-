import BentoNav from "./BentoNav";
import HeroRail from "./hero/HeroRail";
import HeroCopy from "./hero/HeroCopy";
import HeroWindow from "./hero/HeroWindow";
import SideRail from "./hero/SideRail";
import TechGridCard from "./cards/TechGridCard";
import ProjectsBentoCard from "./cards/ProjectsBentoCard";
import InspirationCard from "./cards/InspirationCard";
import PurposeCard from "./cards/PurposeCard";
import WhyWorkWithMeCard from "./cards/WhyWorkWithMeCard";
import TerminalCard from "./cards/TerminalCard";
import TimelineCard from "./cards/TimelineCard";
import ContactCard from "./cards/ContactCard";
import QuoteBar from "./cards/QuoteBar";
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

        <section className={styles.row4} aria-label="Trayectoria y contacto">
          <TimelineCard />
          <ContactCard />
        </section>

        <QuoteBar />
      </main>

      <FlatlayCorner />
    </div>
  );
}
