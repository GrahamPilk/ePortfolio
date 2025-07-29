"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Add scroll event listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate which section we're in based on scroll position
  const getCurrentSection = () => {
    const windowHeight = window.innerHeight;
    const currentSection = Math.floor(scrollY / windowHeight);
    return currentSection;
  };

  // Determine the position class based on scroll
  const getOvalTabPosition = () => {
    const currentSection = getCurrentSection();
    
    if (currentSection === 0) {
      // First section - animate from left to center
      return isLoaded ? styles.ovalTabCenter : styles.ovalTabHidden;
    } else if (currentSection >= 5) {
      // Contact section - move to right side
      return styles.ovalTabRight;
    } else {
      // Other sections - stay on right side
      return styles.ovalTabRight;
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.sectionWhite}>
        <div className={styles.introContainer}>
          <h1 className={styles.introTitle}>Hi, I am Graham Pilkington!</h1>
          <div className={`${styles.ovalTab} ${getOvalTabPosition()}`}>
            <a href="https://github.com/GrahamPilk" target="_blank" rel="noopener noreferrer" className={styles.ovalLink}>GitHub</a>
            <a href="/grahamresume.pdf" download className={styles.ovalLink}>Resume</a>
            <a href="mailto:graham.a.pilkington@gmail.com" className={styles.ovalLink}>Message me!</a>
            <a href="https://www.linkedin.com/in/graham-pilkington/" target="_blank" rel="noopener noreferrer" className={styles.ovalLink}>LinkedIn</a>
          </div>
          <p className={styles.introTopP}>Computer Science Student</p>
          <p>I like to build!</p>
        </div>
      </section>
      <section className={styles.sectionBlue}>
        <h1>About Me</h1>
      </section>
      <section className={styles.sectionWhite}>
        <h1>Tech Arsenal</h1>
      </section>
      <section className={styles.sectionBlue}>
        <h1>Experience</h1>
      </section>
      <section className={styles.sectionWhite}>
        <h1>Projects</h1>
      </section>
      <section className={styles.sectionBlue}>
        <h1>Get in touch!</h1>
        <p>I'm always looking for new opportunities and collaborations. Feel free to reach out to me via email or connect with me on LinkedIn.</p>
        {/* contact form */}
      </section>
    </div>
  );
}
