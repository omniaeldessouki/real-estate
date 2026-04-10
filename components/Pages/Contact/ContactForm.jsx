import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    region: "North America",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="inquiry" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.grid}>
            
            <div className={styles.field}>
              <label className={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldFull}>
              <label className={styles.label}>Interested Region</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className={styles.select}
              >
                <option>North America</option>
                <option>Europe</option>
                <option>Asia-Pacific</option>
                <option>Middle East</option>
              </select>
            </div>

            <div className={styles.fieldFull}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Share your preferred markets, budget range, timeline, and any must-haves…"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              />
            </div>

            <div className={styles.fieldFull}>
              <button type="submit" className={styles.button}>
                Send Inquiry
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}