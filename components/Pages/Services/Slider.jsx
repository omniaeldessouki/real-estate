import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    alt: "Luxury modern estate at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    alt: "Coastal villa with pool",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    alt: "Mountain retreat home",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    alt: "Penthouse interior with city view",
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    alt: "Luxury poolside villa",
  },
];

export default function RealEstateSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.slider}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === current ? styles.active : ""}`}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
}