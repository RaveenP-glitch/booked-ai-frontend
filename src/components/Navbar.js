'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsBlogsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleBlogsDropdown = () => {
    setIsBlogsOpen(!isBlogsOpen);
  };

  const closeBlogsDropdown = () => {
    setIsBlogsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsBlogsOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsBlogsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <div className={styles.logoWrapper}>
            <Image
              src="/assets/images/booked_ai_logo.jpeg"
              alt="Booked AI Logo"
              width={32}
              height={32}
              className={styles.logoImage}
              priority
              onLoad={() => setLogoLoaded(true)}
              onError={(e) => {
                console.error('Logo failed to load:', e);
                setLogoLoaded(true);
              }}
            />
            {logoLoaded && <div className={styles.betaTag}>BETA</div>}
          </div>
          <span className={styles.logoText}>Booked AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link href="/explore" className={styles.navLink}>
            Explore
          </Link>
          
          <div 
            className={styles.dropdown}
            ref={dropdownRef}
          >
            <button 
              className={styles.dropdownButton}
              onClick={toggleBlogsDropdown}
              aria-expanded={isBlogsOpen}
            >
              Blogs
              <svg className={`${styles.dropdownArrow} ${isBlogsOpen ? styles.rotated : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {isBlogsOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/blogs/travel-guide" className={styles.dropdownItem} onClick={closeBlogsDropdown}>
                  Travel Guide
                </Link>
                <Link href="/blogs/city-guide" className={styles.dropdownItem} onClick={closeBlogsDropdown}>
                  City Guide
                </Link>
              </div>
            )}
          </div>
          
          <Link href="/partner" className={styles.navLink}>
            Partner
          </Link>
          
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <span>Menu</span>
            <button 
              className={styles.closeButton}
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              ×
            </button>
          </div>
          
          <div className={styles.mobileNavLinks}>
            <Link href="/explore" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Explore
            </Link>
            
            <div className={styles.mobileDropdown}>
              <button 
                className={styles.mobileDropdownButton}
                onClick={() => setIsBlogsOpen(!isBlogsOpen)}
              >
                Blogs
                <svg 
                  className={`${styles.mobileDropdownArrow} ${isBlogsOpen ? styles.rotated : ''}`} 
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isBlogsOpen && (
                <div className={styles.mobileDropdownMenu}>
                  <Link href="/blogs/travel-guide" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                    Travel Guide
                  </Link>
                  <Link href="/blogs/city-guide" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                    City Guide
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/partner" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Partner
            </Link>
            
            <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
