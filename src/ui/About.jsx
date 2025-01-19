import styles from "./About.module.css"; // Assuming your CSS module is named aboutUs.module.css

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <header className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>Who We Are</p>
      </header>

      <section className={styles.section}>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            We are a passionate team dedicated to creating innovative solutions
            that help our clients grow and thrive. Our approach is simple: we
            combine creativity, technology, and strategy to deliver results that
            matter.
          </p>
          <p className={styles.description}>
            With years of experience, we understand what it takes to bring ideas
            to life and transform them into successful ventures. We are here to
            make an impact and create lasting relationships with our clients.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/500x300?text=About+Us"
            alt="About Us"
            className={styles.image}
          />
        </div>
      </section>

      <section className={styles.mission}>
        <h2 className={styles.missionTitle}>Our Mission</h2>
        <p className={styles.missionText}>
          Our mission is to inspire innovation, foster creativity, and help
          businesses achieve their full potential by providing expert solutions
          and personalized services.
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 Nordic Rose. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
