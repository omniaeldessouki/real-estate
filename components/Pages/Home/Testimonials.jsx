import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "We closed in less than three weeks with zero public exposure. The strategy, pacing, and communication were exceptional.",
    signature: "Buyer · Manhattan",
  },
  {
    text: "Their architectural review changed our shortlist completely and saved us from a costly mistake.",
    signature: "Family office · London",
  },
  {
    text: "We sold quietly, above expectations, and with total confidence in every negotiation round.",
    signature: "Seller · Malibu",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <span className={styles.subTitle}>Client perspective</span>
          <h2 className={styles.title}>Trusted by buyers and sellers who value discretion</h2>
          <p className={styles.description}>
            A few notes from clients who asked for privacy, precision, and an advisor who can move quickly.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <article key={idx} className={styles.testimonial}>
              <p className={styles.quoteMark} aria-hidden="true">"</p>
              <p className={styles.text}>{t.text}</p>
              <p className={styles.signature}>{t.signature}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}