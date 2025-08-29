import styles from "./page.module.css";

export default function Partner() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Integrate an AI Travel Agent in No Time
            </h1>
            <p className={styles.subtitle}>
              Partner with us to add a cutting-edge AI travel agent to your website - fully operational in no time!
            </p>
            <div className={styles.ctaText}>
              Apply to become a partner of Booked AI Today!
            </div>
            <button className={styles.ctaButton}>
              Apply Now →
            </button>
          </div>
          
          <div className={styles.phoneMockup}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                  <div className={styles.phoneTime}>9:41</div>
                  <div className={styles.phoneIcons}>
                    <div className={styles.signal}></div>
                    <div className={styles.wifi}></div>
                    <div className={styles.battery}></div>
                  </div>
                </div>
                
                <div className={styles.appContent}>
                  <div className={styles.appHeader}>
                    <div className={styles.menuIcon}>☰</div>
                    <div className={styles.appTitle}>Booked AI</div>
                    <div className={styles.appIcons}>
                      <div className={styles.editIcon}>✏️</div>
                      <div className={styles.bellIcon}>🔔</div>
                    </div>
                  </div>
                  
                  <div className={styles.chatBubble}>
                    <div className={styles.chatText}>
                      Here are the options for hotels in Hamilton Island for 1 person for 2 nights, from Oct. 17th to Oct. 19th.
                    </div>
                  </div>
                  
                  <div className={styles.filterTabs}>
                    <div className={`${styles.tab} ${styles.active}`}>Featured</div>
                    <div className={styles.tab}>Cheapest</div>
                    <div className={styles.tab}>Top Rated</div>
                  </div>
                  
                  <div className={styles.hotelCard}>
                    <div className={styles.hotelImages}>
                      <div className={styles.hotelImage1}></div>
                      <div className={styles.hotelImage2}></div>
                    </div>
                    <div className={styles.hotelInfo}>
                      <h3 className={styles.hotelName}>Qualia</h3>
                      <p className={styles.hotelDesc}>10 min walk to 'The Famous Beach'</p>
                      <div className={styles.hotelRating}>
                        <span className={styles.star}>⭐</span>
                        <span>4.8</span>
                      </div>
                      <div className={styles.hotelAmenities}>
                        <span>🏊‍♂️</span>
                        <span>🏋️‍♂️</span>
                        <span>🧺</span>
                        <span>❄️</span>
                      </div>
                      <div className={styles.hotelPrice}>
                        <div className={styles.totalPrice}>$2000 AUD</div>
                        <div className={styles.perNight}>$1000 Per Night</div>
                      </div>
                      <button className={styles.selectButton}>Select Hotel</button>
                    </div>
                  </div>
                  
                  <div className={styles.seeMore}>
                    See other featured hotels
                  </div>
                  
                  <div className={styles.chatInput}>
                    <input 
                      type="text" 
                      placeholder="Type to chat" 
                      className={styles.input}
                    />
                    <button className={styles.sendIcon}>✈️</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>What is Booked AI?</h2>
          <p className={styles.sectionSubtitle}>An Around-the-clock Personal AI Travel Agent</p>
          
          <div className={styles.chatGrid}>
            <div className={styles.chatCard}>
              <div className={styles.chatText}>We've got 10 results for your flights!</div>
            </div>
            <div className={styles.chatCard}>
              <div className={styles.chatText}>We have changed your booking to tomorrow.</div>
            </div>
            <div className={styles.chatCard}>
              <div className={styles.chatText}>Your Hotel Booking has now been confirmed!</div>
            </div>
            <div className={styles.chatCard}>
              <div className={styles.chatText}>Here is the itinerary for your incoming London Trip:</div>
            </div>
            
            <div className={styles.centerGraphic}>
              <div className={styles.aiCore}></div>
              <div className={styles.aiRays}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
