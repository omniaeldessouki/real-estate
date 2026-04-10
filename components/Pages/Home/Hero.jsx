import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.bg}></div>
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.maskText}>Luxury Homes</h1>
        <p className={styles.subtitle}>
          Curating Spaces For Extraordinary Living. Discover a handpicked
          collection of significant luxury homes and estates—from coastal villas
          and mountain retreats to glass-walled city penthouses.
        </p>
        <a href="/about" className={styles.cta}>
          Explore About
        </a>
      </div>
    </section>
  );
}
