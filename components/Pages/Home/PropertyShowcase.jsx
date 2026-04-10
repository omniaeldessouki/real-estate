import { useState, useId } from "react";
import styles from "./PropertyShowcase.module.css";
import { useSlides } from "@/context/ImagesContext";



export default function Showcase() {
  const headingId = useId();
  const [index, setIndex] = useState(0);
  const { slides } = useSlides();

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Property gallery</span>

          <h2 id={headingId} className={styles.title}>
            Signature homes & interiors
          </h2>

          <p className={styles.subtitle}>
            A rotating look at architecture, light, and location—the caliber of
            properties we represent for private clients.
          </p>
        </div>

        <div className={styles.slider}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <figure key={i} className={styles.slide}>
                <img src={slide.img} alt={slide.title} />

                <figcaption className={styles.caption}>
                  <p className={styles.captionTitle}>{slide.title}</p>
                  <p className={styles.captionDesc}>{slide.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <button className={styles.prev} onClick={prev}>
            ‹
          </button>

          <button className={styles.next} onClick={next}>
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`${styles.dot} ${
                index === i ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}