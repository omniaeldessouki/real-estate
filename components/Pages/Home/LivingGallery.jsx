import Image from "next/image";
import styles from "./LivingGallery.module.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1700&q=85",
    alt: "Contemporary luxury residence with pool at golden hour",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85",
    alt: "Coastal glass residence with pool and terrace",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    alt: "Mountain luxury home with contemporary exterior at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    alt: "Open-plan living and dining with kitchen beyond glass partitions",
  },
  {
    src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=85",
    alt: "Bright living room with leather sofa, white armchairs, and gallery wall of framed art",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
    alt: "Sunlit lounge with grey sofa, plants, bookshelf, and relaxed residential styling",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern bathroom with freestanding tub and dark wall tile",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
    alt: "White modern villa with covered patio lounge and turquoise swimming pool",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1700&q=85",
    alt: "Contemporary luxury residence with pool at golden hour",
  },
  
  
];

export default function LivingGallery() {
  return (
    <section id="living-gallery" className={styles.section}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <span className={styles.subTitle}>Visual brief</span>
          <h2 className={styles.title}>Spaces worth traveling for</h2>
          <p className={styles.description}>
            A curated bento gallery from the homes and interiors our clients
            pursue across city, coast, and resort markets.
          </p>
        </div>

        <div className={styles.grid}>
          {images.map((img, idx) => (
            <figure
              key={idx}
              className={`${styles.figure} ${img.large ? styles.figureLarge : styles.figureMedium}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={styles.figureImg}
                style={{ objectFit: "cover" }}
                quality={100}
                unoptimized
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
