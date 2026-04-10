"use client";

import Image from "next/image";
import { useProperties } from "@/context/PropertiesContext";
import Link from "next/link";
import styles from "./FeaturedProperties.module.css";
import PropertyCard from "./Card";


export default function FeaturedProperties() {
  const { properties } = useProperties();
  return (
    <section id="featured" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.listingsTag}>Listings</span>
            <h2 className={styles.title}>Featured properties</h2>
          </div>
          <Link href="/properties" className={styles.servicesLink}>
            All Properties
          </Link>
        </div>

        <div className={styles.grid}>
          {properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
