import { useEffect } from "react";
import Image from "next/image";
import styles from "./Investment.module.css";

export default function Investment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Real Estate Investment</h1>
          <p>
            Discover premium investment opportunities in high-growth locations
            with strong returns and long-term value.
          </p>

          <a href="/investment" className={styles.cta}>
            Explore Opportunities
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>

            <div className={styles.text}>
              <h2>Why Invest With Us?</h2>
              <p>
                We help investors identify the best real estate opportunities in
                prime markets with professional guidance and market insights.
              </p>
            </div>

            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80"
                alt="Investment"
                fill
                className={styles.image}
                unoptimized
              />
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2>Investment Benefits</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>High ROI</h3>
              <p>Properties with strong rental yields and capital growth.</p>
            </div>

            <div className={styles.card}>
              <h3>Prime Locations</h3>
              <p>Invest in high-demand areas with future development.</p>
            </div>

            <div className={styles.card}>
              <h3>Expert Guidance</h3>
              <p>Professional investment advice from our specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2>Start Your Investment Journey</h2>
          <p>Talk to our experts and discover the best opportunities.</p>

          <a href="/contact" className={styles.cta}>
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}