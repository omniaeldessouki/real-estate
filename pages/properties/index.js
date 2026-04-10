"use client";

import Head from "next/head";
import { useState } from "react";
import { useProperties } from "@/context/PropertiesContext";
import PropertyCard from "@/components/Pages/Home/Card";
import styles from "./style.module.css";
import Main from "@/components/Layout/main";
import Hero from "../../components/Pages/Properties/Hero";

export default function PropertiesPage() {
  const { properties } = useProperties();
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredProperties =
    typeFilter === "all"
      ? properties
      : properties.filter((p) => p.type === typeFilter);

  return (
    <>
      <Head>
        <title>Properties | Luxury Villas, Apartments & Chalets</title>

        <meta
          name="description"
          content="Browse our collection of luxury villas, modern apartments, and premium chalets. Find the perfect property for your lifestyle."
        />

        <meta
          name="keywords"
          content="luxury properties, villas for sale, apartments, chalets, real estate listings"
        />

        <meta name="author" content="Real Estate Company" />

        {/* Open Graph */}
        <meta property="og:title" content="Luxury Real Estate Properties" />
        <meta
          property="og:description"
          content="Discover premium villas, apartments and chalets in top locations."
        />
        <meta property="og:type" content="website" />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Hero />
        <div className={styles.container}>
          <div className={styles.filters}>
            {["all", "villa", "apartment", "chalet"].map((type) => (
              <button
                key={type}
                className={typeFilter === type ? styles.active : ""}
                onClick={() => setTypeFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </Main>
    </>
  );
}