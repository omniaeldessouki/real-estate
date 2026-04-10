import React from "react";
import styles from "./Hero.module.css";

export default function HeroMask() {
  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.bg}></div>
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.maskText}>About</h1>
        <p className={styles.subtitle}>
          Luxury real estate with an architect’s eye A counsel-led brokerage for
          buyers and sellers who expect design rigor, discretion, and global
          market intelligence.
        </p>
        <a href="/services" className={styles.cta}>
          Explore Services
        </a>
      </div>
    </section>
  );
}
