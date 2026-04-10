import styles from "./Faq.module.css";

export default function Faq() {
  const faqs = [
    {
      question: "How quickly can we begin?",
      answer:
        "Most clients are onboarded within 24 to 48 hours after an initial consultation and brief review.",
    },
    {
      question: "Do you handle off-market opportunities?",
      answer:
        "Yes. A significant share of our activity happens through private channels, referral networks, and closed-circle introductions.",
    },
    {
      question: "How do you protect confidentiality?",
      answer:
        "We work with strict disclosure protocols, controlled listing exposure, and advisor-led communication from first inquiry to closing.",
    },
  ];

  return (
    <section className={styles.section} id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.headingWrapper}>
          <span className={styles.headingSub}>FAQ</span>
          <h2 className={styles.headingTitle}>Questions we hear most often</h2>
          <p className={styles.headingDesc}>Straight answers on process, privacy, and timelines.</p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <details key={idx} className={styles.faqItem}>
              <summary className={styles.summary}>
                {faq.question}
                <span className={styles.summaryIcon} aria-hidden="true">
                  expand_more
                </span>
              </summary>
              <p className={styles.faqText}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}