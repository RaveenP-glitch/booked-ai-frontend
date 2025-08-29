'use client';
import styles from "./page.module.css";

export default function Explore() {
  const destinations = [
    {
      id: 1,
      title: "Trip to Bingol",
      description: "Experience Bingöl, a hidden gem in Eastern Turkey where thermal springs meet mountain vistas. Our AI Travel Agent suggests visiting its pristine lakes, historic mosques, and traditional markets. Stay in affordable accommodations while exploring the natural beauty of this lesser-known destination.",
      location: "Bingol, Turkey",
      category: "Art & Cultural Deep Dive",
      author: "Astha A",
      readTime: "12 min read",
      image: "/assets/bingol.jpg"
    },
    {
      id: 2,
      title: "Trip to Artvin",
      description: "Nestled in northeastern Turkey, Artvin captivates with ancient churches, dense forests, and the stunning Kackar Mountains. Our AI travel agent suggests visiting during summer for hiking and autumn for vibrant colors. Discover authentic local culture and breathtaking landscapes.",
      location: "Artvin, Turkey",
      category: "Nature's Wonder",
      author: "Daryl Anthony",
      readTime: "12 min read",
      image: "/assets/artvin.jpg"
    },
    {
      id: 3,
      title: "Trip to Ardahan",
      description: "Experience Ardahan, a hidden Turkish gem near the Georgian border. Our AI Travel Agent highlights this budget-friendly destination's ancient castle, alpine meadows, and authentic local cuisine. The city offers a perfect blend of history and natural beauty.",
      location: "Ardahan, Turkey",
      category: "Art & Cultural Deep Dive",
      author: "Onur Y",
      readTime: "12 min read",
      image: "/assets/ardahan.jpg"
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Explore</h1>
          <p className={styles.subtitle}>
            Discover the latest travel trends and amazing places to visit!
          </p>
          <div className={styles.ctaButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.09 8.26L20 9L12.09 9.74L10 16L7.91 9.74L0 9L7.91 8.26L10 2Z" fill="currentColor"/>
            </svg>
            Download on the App Store
          </div>
        </div>

        <div className={styles.destinations}>
          <div className={styles.destinationsGrid}>
            {destinations.map((destination) => (
              <article key={destination.id} className={styles.destinationCard}>
                <div className={styles.cardImage}>
                  <img src="/assets/mockups/mobile-1.png" alt={destination.title} />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{destination.title}</h2>
                  <p className={styles.cardDescription}>
                    {destination.description}
                  </p>
                  <a href={`/blogs/${destination.category.toLowerCase().replace(/\s+/g, '-')}/${destination.id}`} className={styles.readMore}>
                    Read more →
                  </a>
                  
                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 4C9.10457 4 10 4.89543 10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4Z" fill="currentColor"/>
                        <path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" fill="currentColor"/>
                      </svg>
                      <span>{destination.location}</span>
                    </div>
                    
                    <div className={styles.metaItem}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3Z" fill="currentColor"/>
                      </svg>
                      <span>{destination.category}</span>
                    </div>
                    
                    <div className={styles.metaItem}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="currentColor"/>
                      </svg>
                      <span>{destination.author}</span>
                    </div>
                    
                    <div className={styles.metaItem}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z" fill="currentColor"/>
                        <path d="M8 4V8L11 10L8 8V4Z" fill="currentColor"/>
                      </svg>
                      <span>{destination.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
