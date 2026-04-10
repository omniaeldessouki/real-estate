import { useEffect } from "react";
import styles from "./Privacy.module.css";    

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy explains how we collect and use your information.</p>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        
        <div className={styles.block}>
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address,
            phone number, and other details when you contact us or use our services.
          </p>
        </div>

        <div className={styles.block}>
          <h2>How We Use Your Information</h2>
          <p>
            Your information is used to improve our services, communicate with
            you, and provide better real estate opportunities and support.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Information Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal
            data from unauthorized access, alteration, or disclosure.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Cookies</h2>
          <p>
            Our website may use cookies to enhance user experience and analyze
            website traffic.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us
            through our website.
          </p>
        </div>

      </section>
    </div>
  );
}