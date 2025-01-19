import styles from "./Blog6.module.css";

export default function Blog6() {
  const imagePath = "/images/sweetPianobackground.jpg";
  return (
    <div className={styles.blog}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={imagePath}
          alt="A piano keys with music note"
        />
      </div>
      <p className={styles.text}>
        A piano rests with a piece in place, Notes on paper, a silent embrace,
        Awaiting touch to awaken its grace.
      </p>
    </div>
  );
}
