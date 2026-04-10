import React from "react";
import styles from "./WhereWeAdvise.module.css";

const WhereWeAdvise = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Images Left */}
          <div className={styles.imagesColumn}>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85"
              alt="Modern luxury estate in a coastal neighborhood"
              className={styles.image}
            />
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
              alt="Luxury city residence with skyline outlook"
              className={styles.image}
            />
          </div>

          {/* Text Right */}
          <div className={styles.textColumn}>
            <span className={styles.label}>Where we advise</span>
            <h2 className={styles.heading}>
              Market intelligence across prime residential corridors
            </h2>
            <p className={styles.description}>
              Our advisors combine local broker relationships, transaction data, and architectural context to guide
              acquisitions in coastal, mountain, and urban luxury markets.
            </p>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className="material-symbols-outlined">location_city</span>
                <p>Primary coverage in New York, Los Angeles, Miami, Aspen, and London.</p>
              </li>
              <li className={styles.listItem}>
                <span className="material-symbols-outlined">query_stats</span>
                <p>Weekly pricing intelligence on active, private, and recently closed listings.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAdvise;