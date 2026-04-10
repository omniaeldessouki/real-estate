import Image from "next/image";
import styles from "./Expertise.module.css";

export default function Expertise() {
  const items = [
    {
      icon: "verified",
      title: "Architectural Vetting",
      text: "Every property we represent is vetted by licensed architects for structural integrity and lasting design value.",
    },
    {
      icon: "auto_awesome",
      title: "Private sales & acquisitions",
      text: "We specialize in off-market and pocket listings—giving high-net-worth buyers and sellers discretion at every step.",
    },
    {
      icon: "travel_explore",
      title: "Global Insight",
      text: "Our reach extends across major luxury markets, with on-the-ground agents and data whether you are in London, Tokyo, or Aspen.",
    },
  ];

  return (
    <section id="expertise" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.bgSquare}></div>
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1600&amp;q=85"
            alt="Luxury residence interior with marble and natural light"
            className={styles.image}
            fill
            quality={100}
            unoptimized
            style={{ objectFit: "cover", borderRadius: "1rem" }}
          />
        </div>
        <div className={styles.textContent}>
          <span className={styles.subTitle}>Our standard</span>
          <h2 className={styles.title}>Unrivaled expertise in luxury real estate</h2>
          <div className={styles.items}>
            {items.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <div className={styles.iconWrapper}>
                  <span className={`material-symbols-outlined ${styles.icon}`}>{item.icon}</span>
                </div>
                <div>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}