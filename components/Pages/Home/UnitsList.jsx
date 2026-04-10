import styles from "./UnitsList.module.css";

const units = [
  {
    city: "New York",
    title: "Hudson aerie · Unit 48B",
    desc: "Full-floor · 3 bed · 3.5 bath · 3,240 sqft",
    price: "From $6.8M · Private tour",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85",
  },
  {
    city: "Miami",
    title: "Bayline residence · Tower A",
    desc: "Corner flow · 4 bed · 4 bath · 4,100 sqft",
    price: "From $9.2M · By appointment",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Aspen",
    title: "Ridge compound · West wing",
    desc: "Guest house · 5 bed · 6 bath · 8,200 sqft",
    price: "From $14.5M · Whisper",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Laguna",
    title: "Cliffside villa · Parcel 2",
    desc: "Single-level core · 4 bed · 5 bath · 6,600 sqft",
    price: "From $11.0M · Off-market",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Units() {
  return (
    <section id="units" className={styles.unitsSection}>
      <div className={styles.unitsContainer}>
        <div className={styles.unitsHeader}>
          <h3 className={styles.unitsTitle}>Representative units in motion</h3>
          <p className={styles.unitsText}>
            Illustrative inventory, status and pricing confirmed on inquiry.
            We match you to units that fit your brief.
          </p>
        </div>

        <ul className={styles.unitsList}>
          {units.map((unit, index) => (
            <li key={index} className={styles.unitCard}>
              <div className={styles.unitMedia}>
                <img src={unit.image} alt={unit.title} />
              </div>

              <div className={styles.unitContent}>
                <div>
                  <p className={styles.unitCity}>{unit.city}</p>
                  <p className={styles.unitTitle}>{unit.title}</p>
                  <p className={styles.unitDesc}>{unit.desc}</p>
                </div>

                <p className={styles.unitPrice}>{unit.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}