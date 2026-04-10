import { useState } from "react";
import styles from "./MissionSection.module.css";
import Link from "next/link";

export default function MissionSection() {
  const [active, setActive] = useState("mission");

  const content = {
    mission: {
      title: "Our Mission",
      text: "Our mission is to simplify the real estate journey by providing expert guidance, market insights, and personalized service. We help buyers, sellers, and investors make confident decisions and achieve their property goals.",
    },
    vision: {
      title: "Our Vision",
      text: "Our vision is to become a trusted leader in the real estate market by connecting people with exceptional homes and investment opportunities while creating thriving communities.",
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* LEFT CARD */}
        <div className={styles.leftCard}>
          <h2>Helping You Find The Perfect Home.</h2>

          <p>
            We are committed to connecting people with exceptional homes and
            investment opportunities while delivering a smooth and transparent
            real estate experience.
          </p>
          <Link href="/contact">
            <button className={styles.button}>
              Contact Us →
            </button>
          </Link>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.rightCard}>
          <div>
            <h3>{content[active].title}</h3>

            <p>{content[active].text}</p>
          </div>

          {/* ARROWS */}
          <div className={styles.controls}>
            <button onClick={() => setActive("mission")}>‹</button>
            <button onClick={() => setActive("vision")}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
