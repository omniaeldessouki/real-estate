import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Agent.module.css";

const listings = [
  {
    id: 1,
    title: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    slug: "luxury-villa",
  },
  {
    id: 2,
    title: "Modern Apartment",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    slug: "modern-apartment",
  },
  {
    id: 3,
    title: "Beach House",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    slug: "beach-house",
  },
];

export default function Agent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Our Professional Agent</h1>
          <p>Helping you find the best property opportunities.</p>
        </div>
      </section>

      {/* PROFILE */}
      <section className={styles.profile}>
        <div className={styles.container}>
          <div className={styles.profileGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/agent.jpg"
                alt="Agent"
                fill
                className={styles.image}
                unoptimized
              />
            </div>

            <div className={styles.info}>
              <h2>Omnia EL Dessouki</h2>
              <p className={styles.role}>Seo Real Estate Agent</p>

              <p>
                With over 3 years of experience in the real estate market,
                Omnia helps clients find perfect homes and investments.
              </p>

              <div className={styles.contact}>
                <p>📞 +2 0111 9920 634</p>
                <p>📧 omniaeldessouki6@gmail.com</p>
                <p>📍 Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className={styles.properties}>
        <div className={styles.container}>
          <h2>Agent Listings</h2>

          <div className={styles.cards}>
            {listings.map((item, index) => (
              <Link href={`/properties/${item.id}`}>
                <div className={styles.cardImage}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.img}
                    unoptimized
                  />
                </div>

                <p className={styles.cardTitle}>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
