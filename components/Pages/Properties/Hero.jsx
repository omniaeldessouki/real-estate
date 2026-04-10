import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.bg}></div>
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.maskText}>Properties</h1>
        <p className={styles.subtitle}>
            Luxury real estate with an architect’s eye A counsel-led brokerage for
        </p>
        <a href="/services" className={styles.cta}>
          Explore Services
        </a>
      </div>
    </section>
  );
}
