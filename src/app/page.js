"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

function TrianglesAnimation({ count = 10 }) {
  // Generate random triangle properties
  const triangles = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 20 + 10; // 10-30px
    const top = Math.random() * 80 + 10; // 10-90%
    const duration = Math.random() * 4 + 4; // 4-8s
    const delay = Math.random() * 4; // 0-4s
    const rotation = Math.random() * 360; // 0-360deg
    return { size, top, duration, delay, rotation, key: i };
  });
  return (
    <div className={styles.trianglesContainer}>
      {triangles.map(({ size, top, duration, delay, rotation, key }) => (
        <svg
          key={key}
          className={styles.triangle}
          style={{
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            transform: `rotate(${rotation}deg)`
          }}
          viewBox="0 0 30 30"
        >
          <polygon points="15,0 30,30 0,30" fill="#3498db" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.page}>
      <TrianglesAnimation count={12} />
      <section className={styles.sectionWhite}>
        <div className={styles.introContainer}>
          <h1 className={styles.introTitle}>Hi, I am Graham Pilkington!</h1>
          <div className={`${styles.ovalTab} ${isLoaded ? styles.ovalTabVisible : styles.ovalTabHidden}`}>
            <a href="https://github.com/GrahamPilk" target="_blank" rel="noopener noreferrer" className={styles.ovalLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="/grahamresume.pdf" download className={styles.ovalLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </a>
            <a href="mailto:graham.a.pilkington@gmail.com" className={styles.ovalLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/graham-pilkington/" target="_blank" rel="noopener noreferrer" className={styles.ovalLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
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
        <div className={styles.contactContainer}>
          <h1>Get in touch!</h1>
          <p>I'm always looking for new opportunities and collaborations.</p>
          <p>Feel free to reach out via email or connect on LinkedIn.</p>
        </div>
      </section>
    </div>
  );
}
