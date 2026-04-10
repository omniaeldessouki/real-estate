import { useEffect } from "react";
import styles from "./Terms.module.css";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Terms & Conditions</h1>
        <p>
          Please read these terms carefully before using our website or services.
        </p>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <div className={styles.block}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to be bound by these
            terms and conditions.
          </p>
        </div>

        <div className={styles.block}>
          <h2>2. Use of Website</h2>
          <p>
            You agree to use the website only for lawful purposes and in a way
            that does not infringe the rights of others.
          </p>
        </div>

        <div className={styles.block}>
          <h2>3. Property Information</h2>
          <p>
            All property listings are provided for informational purposes only
            and may be updated or changed without notice.
          </p>
        </div>

        <div className={styles.block}>
          <h2>4. Limitation of Liability</h2>
          <p>
            We are not responsible for any damages or losses resulting from the
            use of our website or services.
          </p>
        </div>

        <div className={styles.block}>
          <h2>5. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these terms at any time.
          </p>
        </div>

      </section>
    </div>
  );
}