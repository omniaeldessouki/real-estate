import styles from "./Process.module.css";

const steps = [
  {
    number: "1",
    title: "Define the brief",
    text: "Lifestyle, architecture, capital strategy, and timing—documented once so every showing stays on message.",
  },
  {
    number: "2",
    title: "Shortlist & tour",
    text: "Targeted shortlists from on- and off-market inventory, private showings, and architect-led reviews when a property warrants it.",
  },
  {
    number: "3",
    title: "Negotiate & close",
    text: "Offer strategy aligned with your counsel, discreet coordination with sellers, and a clear path to signature and transfer.",
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.label}>The journey</span>
            <h2 className={styles.title}>
              From brief to closing, without the noise
            </h2>
          </div>

          <a href="/investment" className={styles.guideLink}>
            Read the investment guide
          </a>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>

              <h3 className={styles.stepTitle}>{step.title}</h3>

              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}