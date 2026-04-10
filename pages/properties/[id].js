"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import { useProperties } from "@/context/PropertiesContext";
import Main from "@/components/Layout/main";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { useState } from "react";

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { properties } = useProperties();

  const property = properties.find((p) => p.id === Number(id));

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!property) return <p>Loading...</p>;

  const images = property.images;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Head>
        <title>{property.title} | Luxury Real Estate</title>
        <meta
          name="description"
          content={`${property.title} located in ${property.location}. ${property.description}`}
        />
        <meta
          name="keywords"
          content={`real estate, ${property.type}, ${property.location}, luxury property`}
        />
        <meta property="og:title" content={property.title} />
        <meta property="og:description" content={property.description} />
        <meta property="og:image" content={images[0]} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Main>
        <div className={styles.container}>
          <Link href="/properties" className={styles.backLink}>
            &larr; Back to Properties
          </Link>

          <div className={styles.breadcrumbs}>
            <span>Home</span> &gt; <span>Properties</span> &gt;{" "}
            <span>{property.title}</span>
          </div>

          {/* Main Image */}
          <div className={styles.imageWrapper} onClick={() => openModal(0)}>
            <Image
              src={images[0]}
              alt={property.title}
              fill
              className={styles.image}
              unoptimized
            />
          </div>

          {/* Property Details */}
          <div className={styles.info}>
            <div className={styles.header}>
              <div>
                <h1>{property.title}</h1>
                <p className={styles.description}>{property.description}</p>
              </div>
              <span className={styles.price}>{property.price}</span>
            </div>

            <div className={styles.overlay}>
              <span className={styles.type}>{property.type}</span>
              <span className={styles.status}>{property.status}</span>
            </div>

            <p className={styles.location}>{property.location}</p>

            <div className={styles.details}>
              <div>
                <strong>{property.beds}</strong>
                <span>Beds</span>
              </div>
              <div>
                <strong>{property.baths}</strong>
                <span>Baths</span>
              </div>
              <div>
                <strong>{property.area}</strong>
                <span>Area</span>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className={styles.gallery}>
            {images.map((img, index) => (
              <div
                key={index}
                className={styles.galleryItem}
                onClick={() => openModal(index)}
              >
                <Image
                  src={img}
                  alt={property.title}
                  fill
                  className={styles.image}
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Modal */}
          {isOpen && (
            <div className={styles.modalOverlay} onClick={closeModal}>
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[currentIndex]}
                  alt={property.title}
                  width={1000}
                  height={600}
                  className={styles.modalImage}
                  unoptimized
                />
                <button className={styles.closeBtn} onClick={closeModal}>
                  &times;
                </button>

                <button className={styles.prevBtn} onClick={prevImage}>
                  &larr;
                </button>

                <button className={styles.nextBtn} onClick={nextImage}>
                  &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </Main>
    </>
  );
}
