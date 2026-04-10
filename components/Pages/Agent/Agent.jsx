import { useEffect } from "react";
import Image from "next/image";
import styles from "./Agent.module.css";

export default function Agent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Our Professional Agent</h1>
          <p>Helping you find the best property opportunities.</p>
        </div>
      </section>

      {/* PROFILE */}
      <section className={styles.profile}>
        <div className={styles.container}>
          <div className={styles.profileGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/agent.jpg"
                alt="Agent"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.info}>
              <h2>Omnia EL Dessouki</h2>
              <p className={styles.role}>Senior Real Estate Agent</p>

              <p>
                With over 10 years of experience in the real estate market,
                Omnia has helped hundreds of clients find their dream homes and
                investment properties. Her expertise in market trends and
                dedication to client satisfaction make her a trusted advisor in
                the industry. Whether you're buying, selling, or investing,
                Omnia is here to guide you every step of the way.
              </p>

              <div className={styles.contact}>
                <p>📞 +2 0111 9920 634</p>
                <p>📧 omniaeldessouki6@gmail.com</p>
                <p>📍 Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div>
              120+ <p>Properties Sold</p>
            </div>
            <div>
              10+ <p>Years Experience</p>
            </div>
            <div>
              85+ <p>Happy Clients</p>
            </div>
            <div>
              25+ <p>Active Listings</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className={styles.properties}>
        <div className={styles.container}>
          <h2>Agent Listings</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <p>Luxury Villa</p>
            </div>
            <div className={styles.card}>
              <p>Modern Apartment</p>
            </div>
            <div className={styles.card}>
              <p>Beach House</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
