import React from "react";
import styles from "./AboutStory.module.css";

const AboutStory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.decor}>
            A more thoughtful way to buy and sell architecture. <br />
            Architectural Curator represents exceptional homes with museum-level
            care, offering discreet guidance to clients who value design and
            legacy.
          </div>
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="Luxury residence interior with marble and natural light"
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.subtitle}>Our story</span>
          <h2 className={styles.title}>Built for serious buyers and sellers</h2>
          <p className={styles.paragraph}>
            Architectural Curator was founded on a simple premise: the world’s
            most important homes deserve the same rigor as museum-quality
            acquisitions and landmark restorations. We are not a volume
            brokerage—we are a counsel-led practice for buyers and sellers who
            value design and discretion.
          </p>
          <p className={styles.paragraph}>
            Our team blends licensed architecture, private banking discretion,
            and on-the-ground market intelligence across North America, Europe,
            and Asia-Pacific. Every listing and buy-side mandate meets the same
            brokerage standard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
