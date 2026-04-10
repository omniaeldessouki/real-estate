import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

export default function PropertyCard({ property }) {
  return (
    <Link href={`/properties/${property.id}`} className={styles.card}>
      
      <div className={styles.imageWrapper}>
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className={styles.image}
          unoptimized
        />
        <div className={styles.overlay}>
          <span className={styles.type}>{property.type}</span>
          <span className={styles.status}>{property.status}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <h3>{property.title}</h3>
          <span className={styles.price}>{property.price}</span>
        </div>

        <p className={styles.description}>{property.description}</p>

        <div className={styles.features}>
          <span>🛏 {property.beds}</span>
          <span>🛁 {property.baths}</span>
          <span>📐 {property.area}</span>
        </div>
      </div>
    </Link>
  );
}
