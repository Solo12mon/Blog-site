import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img
        className={styles.logoImage}
        src="/images/logo-dark.png"
        alt="A logo of a house"
      />
      <h2 className={styles.heading}>
        A few words about this blog platform, Ghost, and how this site was made
      </h2>
      <p className={styles.subheading}>
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </p>
      {/* Long horizontal line */}
      <div className={styles.hrLong}></div>
    </div>
  );
}
