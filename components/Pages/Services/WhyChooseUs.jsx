"use client";

import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  const items = [
    {
      icon: "🏡",
      title: "Trusted Agents",
      desc: "Our experienced agents guide you through every step of buying or selling your property.",
    },
    {
      icon: "📍",
      title: "Premium Locations",
      desc: "Discover properties located in the most desirable and strategic areas.",
    },
    {
      icon: "📈",
      title: "Smart Investment",
      desc: "We help you make profitable real estate investments with expert insights.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Why Choose Us</h2>
        <p>
          We provide professional real estate services designed to help you
          achieve your property goals with confidence.
        </p>
      </div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}