'use client';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [showBetaText, setShowBetaText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(`.${styles.hero}`);
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowBetaText(window.scrollY < heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hotelDeals = [
    {
      id: 1,
      title: "6 Nights at Amanpuri, Phuket",
      description: "For just $1,125 per night, enjoy a 6-night stay in one of our elegantly appointed rooms!",
      price: "6 nights for $1,125 per night!",
      image: "/assets/mockups/mobile-1.png"
    },
    {
      id: 2,
      title: "2 Nights at The Ned, London",
      description: "For just $300 per night, enjoy a 2-night stay in one of our elegantly appointed rooms!",
      price: "2 nights for $300 per night!",
      image: "/assets/mockups/mobile-1.png"
    },
    {
      id: 3,
      title: "4 Nights at The Ritz-Carlton, Kyoto",
      description: "For just $1,125 per night, enjoy a 4-night stay in one of our elegantly appointed rooms in Ritz-Carlton, Kyoto",
      price: "4 nights for $1,125 per night!",
      image: "/assets/mockups/mobile-1.png"
    }
  ];

  const flightDeals = [
    {
      id: 1,
      title: "Toronto to New York Flight!",
      description: "Fly from Toronto to New York with Air Canada in economy class and enjoy exclusive AI-powered deals on your next trip.",
      price: "Return Flight $900 /person!",
      image: "/assets/mockups/mobile-1.png"
    },
    {
      id: 2,
      title: "Singapore to Sydney Flight!",
      description: "Fly from Singapore to Sydney with Qantas in business class and enjoy exclusive AI-powered deals on your next trip.",
      price: "Return Flight $900 /person!",
      image: "/assets/mockups/mobile-1.png"
    },
    {
      id: 3,
      title: "Barcelona to Amsterdam Flight!",
      description: "Fly from Barcelona to Amsterdam with KLM in economy class and enjoy exclusive AI-powered deals on your next trip.",
      price: "Return Flight $900 /person!",
      image: "/assets/mockups/mobile-1.png"
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Your AI travel agent, right at your fingertips
            </h1>
            <p className={styles.subtitle}>
              Introducing the world's first AI Travel Agent! Booked AI manages your flights, hotels, and itineraries through an easy-to-use chat platform.
            </p>
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
        
        {/* Beta Image - Disappears on scroll */}
        {showBetaText && (
          <div className={styles.betaSection}>
            <img 
              src="/assets/images/try-our-beta.png" 
              alt="Try Our Beta" 
              className={styles.betaImage}
            />
          </div>
        )}

        {/* Exclusive Hotel Deals Section */}
        <section className={styles.dealsSection}>
          <div className={styles.dealsHeader}>
            <h2 className={styles.dealsTitle}>
              <span className={styles.highlight}>Exclusive</span> Hotel Deals!
            </h2>
            <p className={styles.dealsSubtitle}>
              Our AI Travel Agent explores our database to instantly create the best savings and packages for you to enjoy!
            </p>
            <a href="/explore" className={styles.viewAllLink}>View all</a>
          </div>
          
          <div className={styles.dealsGrid}>
            {hotelDeals.map((deal) => (
              <div key={deal.id} className={styles.dealCard}>
                <div className={styles.dealImage}>
                  <img src="/assets/mockups/mobile-1.png" alt={deal.title} />
                </div>
                <div className={styles.dealContent}>
                  <h3 className={styles.dealTitle}>{deal.title}</h3>
                  <p className={styles.dealDescription}>{deal.description}</p>
                  <a href="#" className={styles.readMore}>Read More →</a>
                  <div className={styles.dealPrice}>{deal.price}</div>
                  <button className={styles.bookNowButton}>Book Now!</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exclusive Flight Deals Section */}
        <section className={styles.dealsSection}>
          <div className={styles.dealsHeader}>
            <h2 className={styles.dealsTitle}>
              <span className={styles.highlight}>Exclusive</span> Flights Deals!
            </h2>
            <p className={styles.dealsSubtitle}>
              Our AI Travel Agent explores our database to instantly create the best savings and packages for you to enjoy!
            </p>
            <a href="/explore" className={styles.viewAllLink}>View all</a>
          </div>
          
          <div className={styles.dealsGrid}>
            {flightDeals.map((deal) => (
              <div key={deal.id} className={styles.dealCard}>
                <div className={styles.dealImage}>
                  <img src="/assets/mockups/mobile-1.png" alt={deal.title} />
                </div>
                <div className={styles.dealContent}>
                  <h3 className={styles.dealTitle}>{deal.title}</h3>
                  <p className={styles.dealDescription}>{deal.description}</p>
                  <a href="#" className={styles.readMore}>Read More →</a>
                  <div className={styles.dealPrice}>{deal.price}</div>
                  <button className={styles.bookNowButton}>Book Now!</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Sign up for our newsletter</h2>
            <p className={styles.newsletterSubtitle}>
              Be the first to know about releases and industry news and insights.
            </p>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter email address" 
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}>Subscribe</button>
            </div>
          </div>
        </section>

        {/* Worldwide Section */}
        <section className={styles.worldwideSection}>
          <h2 className={styles.worldwideTitle}>Worldwide Flights & Hotels</h2>
        </section>
      </main>
    </div>
  );
}
