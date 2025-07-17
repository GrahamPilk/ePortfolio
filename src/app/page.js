import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.sectionWhite}>
        <div className={styles.introContainer}>
          <h1 className={styles.introTitle}>Hi, I am Graham Pilkington!</h1>
          <div className={styles.ovalTab}>
            <a href="https://github.com/GrahamPilk" target="_blank" rel="noopener noreferrer" className={styles.ovalLink}>GitHub</a>
            <a href="/grahamresume.pdf" download className={styles.ovalLink}>Download Resume</a>
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
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}
