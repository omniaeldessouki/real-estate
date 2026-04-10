"use client";

import styles from "./OurServices.module.css";

export default function OurServices() {
  const services = [
    {
      title: "Property Buying",
      desc: "We help you find the perfect property that matches your lifestyle and investment goals.",
      icon: "🏡",
    },
    {
      title: "Property Selling",
      desc: "Sell your property quickly with our expert marketing and real estate strategies.",
      icon: "📈",
    },
    {
      title: "Real Estate Investment",
      desc: "Discover profitable investment opportunities in premium locations.",
      icon: "💼",
    },
    {
      title: "Consultation",
      desc: "Get professional advice from our experienced real estate consultants.",
      icon: "🤝",
    },
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Real Estate Services</h2>

        <p className={styles.subtitle}>
          We provide complete real estate solutions to help you buy, sell, and
          invest in premium properties.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}