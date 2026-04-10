import React from "react";
import styles from "./IdealClients.module.css";

const clients = [
  {
    title: "Primary and secondary buyers",
    text: "Executives, founders, and family offices pursuing high-conviction homes in core and lifestyle markets.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Discreet sellers",
    text: "Owners who want controlled buyer access, qualified negotiations, and minimal public exposure.",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Portfolio-minded investors",
    text: "Clients balancing capital strategy, hold periods, and legacy considerations across multiple residences.",
    img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1600&q=80",
  },
];

const IdealClients = () => {
  return (
    <section className={styles.section} id="ideal-clients">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left sticky header */}
          <div className={styles.left}>
            <span className={styles.label}>Fit</span>
            <h2 className={styles.heading}>Who we work best with</h2>
            <p className={styles.description}>
              We are most effective with clients who value strategic guidance, private process, and long-term
              positioning over short-term noise.
            </p>
          </div>

          {/* Right cards */}
          <div className={styles.right}>
            {clients.map((client, idx) => (
              <div key={idx} className={styles.card}>
                <img src={client.img} alt={client.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{client.title}</h3>
                  <p className={styles.cardText}>{client.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealClients;