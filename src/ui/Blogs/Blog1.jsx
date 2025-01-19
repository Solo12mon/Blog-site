import styles from "./Blog1.module.css";

export default function Blog1() {
  const imagePath = "/images/3687334.jpg";
  return (
    <div className={styles.blog}>
      <img
        className={styles.image}
        src={imagePath}
        alt="A Music sheet on E-flat"
      />
      <p className={styles.text}>
        E-flat hums low, a velvet stream, A mellow note that sparks a dream, A
        soulful voice in music&lsquo;s gleam.
      </p>
    </div>
  );
}
