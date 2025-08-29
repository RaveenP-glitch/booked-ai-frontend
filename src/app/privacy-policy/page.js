import styles from "./page.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Last updated: January 2025
          </p>
        </div>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              make a booking, or contact us for support. This may include:
            </p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Travel preferences and booking history</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your bookings and payments</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Personalize your experience</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@bookedai.com<br />
              <strong>Address:</strong> Booked AI, Privacy Team, [Your Address]
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
