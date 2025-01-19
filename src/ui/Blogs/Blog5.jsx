import styles from "./Blog5.module.css";

export default function Blog5() {
  const imagePath = "/images/piano-background.jpg";
  return (
    <div className={styles.blog}>
      <img className={styles.image} src={imagePath} alt="A Dusty piano" />
      <p className={styles.text}>
        A dusty piano, silent and still, Its keys once danced to passion’s will,
        Now waits for hands, a song to fill.
      </p>
    </div>
  );
}
