import styles from "./Blog2.module.css";

export default function Blog2() {
  const imagePath = "/images/A.I1.jpeg";
  return (
    <div className={styles.blog}>
      <img
        className={styles.image}
        src={imagePath}
        alt="An image of a view of AI"
      />
      <p className={styles.text}>
        AI, a spark in the world&apos;s vast sea, A bridge to worlds of what
        could be, A dream of tomorrow, set free.
      </p>
    </div>
  );
}
