'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [appStoreLoaded, setAppStoreLoaded] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLeft}>
          <div className={styles.logo}>
            <Image
              src="/assets/images/booked_ai_logo.jpeg"
              alt="Booked AI Logo"
              width={32}
              height={32}
              className={styles.logoImage}
              priority
              onLoad={() => setLogoLoaded(true)}
              onError={(e) => {
                console.error('Footer logo failed to load:', e);
                setLogoLoaded(true);
              }}
            />
            <span className={styles.logoText}>Booked AI</span>
          </div>
          <p className={styles.copyright}>© Copyright 2025, All Rights Reserved</p>
        </div>
        
        <div className={styles.footerMiddle}>
          <nav className={styles.footerNav}>
            <Link href="/explore">Explore</Link>
            <Link href="/blogs/travel-guide">Blog</Link>
            <Link href="/partner">Partner with us</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact us</Link>
          </nav>
          
          <div className={styles.appStoreButton}>
            <Image
              src="/assets/images/app-store-image.svg"
              alt="App Store"
              width={20}
              height={20}
              priority
              onLoad={() => setAppStoreLoaded(true)}
              onError={(e) => {
                console.error('App store image failed to load:', e);
                setAppStoreLoaded(true);
              }}
            />
            Download on the App Store
          </div>
        </div>
        
        <div className={styles.footerRight}>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>TikTok</a>
            <a href="#" className={styles.socialLink}>Facebook</a>
            <a href="#" className={styles.socialLink}>Instagram</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
          </div>
          
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
