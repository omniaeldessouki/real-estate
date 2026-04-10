"use client";

import { useId, useRef } from "react";
import styles from "./SignatureHomes.module.css";
import Image from "next/image";
import Link from "next/link";
import { useHomes } from "@/context/HomesContext";

export default function SignatureHomes() {
  const headingId = useId();
  const { homes } = useHomes();
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>DISCOVER ON HOVER</span>

          <h2 id={headingId} className={styles.title}>
            Signature homes at a glance
          </h2>

          <p className={styles.subtitle}>
            Pause over each residence to preview price, story, and key specs —
            then open the full listing when you are ready.
          </p>
        </div>

        {/* wrapper */}
        <div className={styles.wrapper}>
          <button className={styles.prev} onClick={scrollLeft}>
            ←
          </button>

          <div className={styles.grid} ref={sliderRef}>
            {homes.map((home) => (
              <div key={home.id} className={styles.card}>
                <Image
                  src={home.image}
                  alt="Luxury home"
                  className={styles.image}
                  width={300}
                  height={300}
                  quality={100}
                  unoptimized
                  priority
                />

                <span className={styles.tag}>{home.tag}</span>

                <div className={styles.overlay}>
                  <h3 className={styles.price}>{home.price}</h3>
                  <p className={styles.desc}>{home.desc}</p>
                  <p className={styles.specs}>{home.specs}</p>

                  <Link
                    href={`/properties/${home.id}`}
                    className={styles.link}
                  >
                    View full details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.next} onClick={scrollRight}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}