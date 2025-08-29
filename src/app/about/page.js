import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>About Booked AI</h1>
          <p className={styles.subtitle}>
            When travellers consider a journey, we envision Booked AI, with its innovative AI functionalities, as the premier choice.
          </p>
        </div>
        
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Leaders in AI Travel</h2>
          <div className={styles.contentWrapper}>
            <div className={styles.iataLogo}>
              <div className={styles.iataIcon}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#3b82f6"/>
                  <path d="M20 30L40 50L60 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 25L25 35L35 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M45 25L55 35L65 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.iataText}>IATA</div>
            </div>
            
            <div className={styles.description}>
              <p>
                Booked AI is the world's first AI-powered travel agent, engineered to handle every step a human agent would, acting as a personal travel assistant tailored to you. It's also the only AI product with International Air Travel Authority (IATA) accreditation, giving it the unique authority to directly book and manage travel on behalf of its users.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <button className={styles.faqQuestion}>
                What is Booked AI?
                <svg className={styles.faqArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className={styles.faqItem}>
              <button className={styles.faqQuestion}>
                How is Booked AI different from other travel platforms?
                <svg className={styles.faqArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className={styles.faqItem}>
              <button className={styles.faqQuestion}>
                Is Booked AI free to use?
                <svg className={styles.faqArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className={styles.faqItem}>
              <button className={styles.faqQuestion}>
                What destinations does Booked AI support?
                <svg className={styles.faqArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
