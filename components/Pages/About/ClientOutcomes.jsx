import React from "react";
import styles from "./ClientOutcomes.module.css";

const deals = [
  {
    type: "Sell-side · Malibu",
    title: "Waterfront villa close",
    description:
      "Discreet marketing to a qualified buyer network, resulting in a signed contract within 19 days.",
  },
  {
    type: "Buy-side · Aspen",
    title: "Legacy residence acquisition",
    description:
      "Negotiated below ask after structural review and market comps, with a 28-day close.",
  },
  {
    type: "Advisory · New York",
    title: "Portfolio repositioning",
    description:
      "Repriced and staged a three-asset portfolio to improve exposure and reduce days on market.",
  },
  {
    type: "Buy-side · Manhattan",
    title: "Penthouse concession package",
    description:
      "Coordinated private access and negotiated concessions after building review and tax analysis.",
  },
];

const images = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
];

const ClientOutcomes = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Client outcomes</span>
          <h2 className={styles.heading}>Recent transactions and mandates</h2>
          <p className={styles.description}>
            A selection of recent engagements completed with privacy, speed, and valuation discipline.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {/* Images Left */}
          <div className={styles.imagesGrid}>
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Client outcome ${idx + 1}`}
                className={styles.image}
              />
            ))}
          </div>

          {/* Deal Tape Right */}
          <div className={styles.dealTape}>
            <h3 className={styles.dealHeading}>Recent deal tape</h3>
            <div className={styles.deals}>
              {deals.map((deal, idx) => (
                <div key={idx} className={styles.deal}>
                  <p className={styles.dealType}>{deal.type}</p>
                  <p className={styles.dealTitle}>{deal.title}</p>
                  <p className={styles.dealDescription}>{deal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientOutcomes;