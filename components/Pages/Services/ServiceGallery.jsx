import React from "react";
import styles from "./ServiceGallery.module.css";

const services = [
  {
    category: "Sell-side",
    title: "Waterfront listing",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "Buy-side",
    title: "Legacy residence acquisition",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "Buy-side",
    title: "Penthouse negotiation",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "Advisory",
    title: "Repositioning strategy",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
];

const ServiceGallery = () => {
  return (
    <section id="service-gallery" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.label}>Service in action</span>
            <h2 className={styles.heading}>Homes and outcomes we deliver</h2>
            <p className={styles.description}>
              A visual snapshot of the property profiles we handle for private buyers and sellers.
            </p>
          </div>
          <div className={styles.tags}>
            {["Sell-side", "Buy-side", "Advisory"].map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className={styles.grid}>
          {services.map((service, idx) => (
            <figure key={idx} className={styles.card}>
              <img src={service.img} alt={service.title} className={styles.image} />
              <figcaption className={styles.caption}>
                <p className={styles.category}>{service.category}</p>
                <p className={styles.title}>{service.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;