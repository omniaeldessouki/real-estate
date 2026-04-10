import styles from "./LifestyleAmenities.module.css";

export default function LifestyleAmenities() {
  const items = [
    {
      title: "Primary suite",
      desc: "Restful scale, statement headboard, and soft daylight through draped windows",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=88",
    },
    {
      title: "Skyline bedroom",
      desc: "Floor-to-ceiling glass, calm palette, and a quiet sleep wing above the city",
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=88",
    },
    {
      title: "Chef kitchen core",
      desc: "Service flow, storage, and entertaining capacity",
      img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=2000&q=88",
    },
    {
      title: "Executive office",
      desc: "Quiet placement and camera-ready natural light",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88",
    },
  ];

  return (
    <section className={styles.section}>
        <div className={styles.content}>
      <div className={styles.heading}>
        <p className={styles.headingSub}>Lifestyle index</p>
        <h2 className={styles.headingTitle}>Amenities clients request before first tour</h2>
        <p className={styles.headingDesc}>
          The most requested lifestyle priorities, visualized as a quick shortlist for relocation and second-home buyers.
        </p>
      </div>

      <div className={styles.gallery}>
        {items.map((item, index) => (
          <figure key={index} className={styles.figure}>
            <img src={item.img} alt={item.title} className={styles.figureImg} />
            <figcaption className={styles.figcaption}>
              <p className={styles.figcaptionTitle}>{item.title}</p>
              <p className={styles.figcaptionDesc}>{item.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      </div>
    </section>
  );
}