import styles from "./page.module.css";

export default function TermsConditions() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.subtitle}>
            Last updated: January 2025
          </p>
        </div>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Booked AI's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Booked AI's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Service Description</h2>
            <p>
              Booked AI provides AI-powered travel booking services including but not limited to:
            </p>
            <ul>
              <li>Flight bookings and reservations</li>
              <li>Hotel accommodations</li>
              <li>Travel itineraries and planning</li>
              <li>AI-powered travel recommendations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. User Responsibilities</h2>
            <p>
              Users are responsible for:
            </p>
            <ul>
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of their account</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Ensuring they have the legal capacity to enter into agreements</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Payment Terms</h2>
            <p>
              All payments must be made in full at the time of booking. Prices are subject to change 
              without notice. Refunds and cancellations are subject to the policies of individual 
              travel providers.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Limitation of Liability</h2>
            <p>
              Booked AI shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@bookedai.com<br />
              <strong>Address:</strong> Booked AI, Legal Team, [Your Address]
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
