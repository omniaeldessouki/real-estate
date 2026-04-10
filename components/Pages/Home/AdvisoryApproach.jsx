import styles from "./AdvisoryApproach.module.css";

const steps = [
  {
    number: "01",
    title: "Mandate definition",
    text: "Objectives, timing, privacy limits, and negotiation posture are locked before any outreach begins.",
  },
  {
    number: "02",
    title: "Targeted opportunities",
    text: "Filtered options with concise tradeoffs—never a firehose of listings that waste your calendar.",
  },
  {
    number: "03",
    title: "Offer to close",
    text: "Offer strategy, counters, and closing milestones coordinated with your legal and finance teams—in writing.",
  },
];

export default function AdvisoryApproach() {
  return (
    <section id="advisory-approach" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left column */}
          <div className={styles.left}>
            <p className={styles.label}>Advisory model</p>
            <h2 className={styles.title}>How our advisory works in practice</h2>
            <p className={styles.description}>
              A clear cadence for serious clients: fewer meetings, stronger documentation, and decisions you can
              defend months later.
            </p>
            <a href="/contact" className={styles.button}>
              Start a brief
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </a>
          </div>

          {/* Right column */}
          <div className={styles.right}>
            <ol className={styles.timeline}>
              {steps.map((step) => (
                <li key={step.number} className={styles.timelineItem}>
                  <span className={styles.number}>{step.number}</span>
                  <div className={styles.contentBox}>
                    <h3 className={styles.contentTitle}>{step.title}</h3>
                    <p className={styles.contentText}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}