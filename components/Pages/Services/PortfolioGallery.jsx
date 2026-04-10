import React from "react";
import styles from "./PortfolioGallery.module.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern luxury estate at sunset",
    span: "2/2", // row-span 2, col-span 2
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    alt: "Glass coastal residence with pool",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    alt: "Mountain contemporary home exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    alt: "Penthouse living with city views",
  },
  {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury interior with marble surfaces",
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85",
    alt: "Minimal luxury apartment living space",
    span: "2/1",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Architectural detail of luxury residence",
  },
  {
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80",
    alt: "Waterfront terrace at dusk",
  },
];

const PortfolioGallery = () => {
  return (
    <section id="service-imagery" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.heading}>Homes and markets we touch</h2>
          <p className={styles.description}>
            A visual cross-section of the architecture, light, and locations we
            represent for private clients—from coastlines to skylines.
          </p>
        </div>

        <div className={styles.grid}>
          {images.map((img, idx) => (
            <figure
              key={idx}
              className={`${styles.figure} ${img.span === "2/2" ? styles.span2 : ""} ${
                img.span === "2/1" ? styles.spanCol2 : ""
              }`}
            >
              <img src={img.src} alt={img.alt} className={styles.image} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
