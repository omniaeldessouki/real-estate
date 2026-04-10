import styles from "./VisualGallery.module.css";

export default function VisualGallery() {
  const items = [
    { title: "Coastal glass estate", sub: "Waterfront", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85", spanClass: "lg:col-span-7 lg:row-span-2" },
    { title: "Skyline penthouse", sub: "Urban", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", spanClass: "lg:col-span-5" },
    { title: "Gallery living room", sub: "Interiors", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", spanClass: "lg:col-span-5" },
    { title: "Mountain compound", sub: "Resort", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", spanClass: "lg:col-span-4" },
    { title: "Glass-lined hallway", sub: "Work", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", spanClass: "lg:col-span-4" },
    { title: "Spa-inspired bath", sub: "Interiors", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85", spanClass: "lg:col-span-4" },
    { title: "Light-filled living", sub: "Minimal", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85", spanClass: "lg:col-span-3" },
    { title: "Primary suite", sub: "Rest", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85", spanClass: "lg:col-span-6" },
    { title: "Pool & terrace", sub: "Outdoor", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85", spanClass: "lg:col-span-3" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.bgRadial} aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.heading}>
          <p className={styles.headingSub}>Visual index</p>
          <h2 className={styles.headingTitle}>Residences in the collection</h2>
          <p className={styles.headingDesc}>
            A cross-section of architecture, light, and landscape we tour with clients—urban, coastal, and resort.
          </p>
        </div>
        <div className={styles.galleryWrapper}>
          <div className={styles.grid}>
            {items.map((item, index) => (
              <figure key={index} className={styles.figure}>
                <img src={item.img} alt={item.title} className={styles.figureImg} />
                <span className={styles.figureOverlay} aria-hidden="true" />
                <figcaption className={styles.figcaption}>
                  <p className={styles.figcaptionTitle}>{item.title}</p>
                  <p className={styles.figcaptionSub}>{item.sub}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}