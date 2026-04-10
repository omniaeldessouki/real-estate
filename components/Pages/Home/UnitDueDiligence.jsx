import styles from "./UnitDueDiligence.module.css";
import Image from "next/image";

export default function UnitDueDiligence() {
  const articles = [
    {
      id: "01",
      icon: "architecture",
      title: "Plan & volume",
      text: "Floor plates, ceiling heights, load-bearing changes, and outdoor square footage reconciled to title and condo docs.",
      imgSrc:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
      imgAlt: "Architectural floor plans and blueprints on a desk",
      reverse: false,
    },
    {
      id: "02",
      icon: "account_balance",
      title: "HOA & reserves",
      text: "For multi-unit buildings: assessment history, special levies, insurance layers, and rental restrictions summarized in one brief.",
      imgSrc:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      imgAlt: "Modern residential towers and urban skyline",
      reverse: true,
    },
    {
      id: "03",
      icon: "bolt",
      title: "Systems & efficiency",
      text: "HVAC age, envelope performance, generator and water—flagged before offer so surprises don’t land at closing.",
      imgSrc:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85",
      imgAlt: "HVAC and building mechanical systems",
      reverse: false,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subTitle}>Per-unit standards</span>
          <h2 className={styles.title}>What we verify before you tour</h2>
          <p className={styles.description}>
            Every unit—condo, villa, or compound—gets the same documentation
            pass so your calendar stays focused on real contenders.
          </p>
        </div>

        <div className={styles.articles}>
          {articles.map((a, idx) => (
            <article key={a.id} className={styles.article}>
              <div className={styles.articleImage}>
                <Image
                  src={a.imgSrc}
                  alt={a.imgAlt}
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized
                />
              </div>
              <div
                className={`${styles.articleContent} ${a.reverse ? styles.reverse : ""}`}
              >
                <div className={styles.articleHeader}>
                  <span className="material-symbols-outlined">{a.icon}</span>
                  <span className={styles.articleNumber}>{a.id}</span>
                </div>
                <h3 className={styles.articleTitle}>{a.title}</h3>
                <p className={styles.articleText}>{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
