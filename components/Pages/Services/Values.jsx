import styles from "./Values.module.css";

const values = [
  {
    icon: "🏡",
    title: "Sustainability",
    text: "We promote responsible real estate development and support communities that value green spaces, energy efficiency, and long-term neighborhood growth."
  },
  {
    icon: "💡",
    title: "Innovation",
    text: "We use modern technology, smart property marketing, and data-driven insights to help clients find the right homes and investment opportunities faster."
  },
  {
    icon: "⭐",
    title: "Excellence",
    text: "We aim to deliver exceptional service at every step — from property search and market analysis to negotiations and closing."
  },
  {
    icon: "🎯",
    title: "Customer Focus",
    text: "Our clients come first. We listen carefully to their needs and guide them through every stage of buying, selling, or investing in real estate."
  },
  {
    icon: "🤝",
    title: "Integrity",
    text: "Trust and transparency are at the heart of everything we do. We provide honest advice and clear communication so clients can make confident decisions."
  },
  {
    icon: "👥",
    title: "Collaboration",
    text: "Real estate success comes from teamwork. We work closely with buyers, sellers, investors, and industry professionals to deliver the best results."
  },
  {
    icon: "📈",
    title: "Impact & Value Creation",
    text: "We help clients build long-term wealth through strategic property investments and carefully selected homes in high-potential locations."
  }
];

export default function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2>Our Values</h2>
          <p>Delivering impact with purpose and partnership</p>
        </div>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}