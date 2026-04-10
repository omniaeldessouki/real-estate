import { useId } from "react";
import styles from "./Markets.module.css";

export default function Markets() {
  const headingId = useId();

  return (
    <section id="markets" className={styles.section} aria-labelledby={headingId}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Presence</span>

          <h2 id={headingId} className={styles.title}>
            A footprint built for serious buyers
          </h2>

          <p className={styles.subtitle}>
            Institutional-grade research, private listings, and advisors who
            close quietly in the markets that matter most.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon} aria-hidden>
              public
            </span>

            <p className={styles.number}>18</p>

            <p className={styles.label}>
              Cities & resort corridors
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon} aria-hidden>
              lock
            </span>

            <p className={styles.number}>40%</p>

            <p className={styles.label}>
              Off-market or whisper listings
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon} aria-hidden>
              schedule
            </span>

            <p className={styles.number}>Under 48h</p>

            <p className={styles.label}>
              First response from your advisor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}