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
        <h1 className={styles.maskText}>Our Services</h1>
        <p className={styles.subtitle}>
          We provide complete real estate solutions to help you buy, sell, and
          invest in the best properties.
        </p>
        <a href="/about" className={styles.cta}>
          Explore About
        </a>
      </div>
    </section>
  );
}
