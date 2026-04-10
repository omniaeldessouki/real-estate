import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Ready to talk about your next home?
        </h2>
        <p className={styles.description}>
          Share your goals on our contact page and a licensed advisor will respond within twelve hours.
        </p>
        <a href="/contact" className={styles.button}>
          Contact an advisor
        </a>
      </div>
    </section>
  );
}