import styles from "./Blog4.module.css";

export default function Blog4() {
  const imagePath = "/images/PHONEIMGS1.jpeg";
  return (
    <div className={styles.blog}>
      <img className={styles.image} src={imagePath} alt="phones picture" />
      <p className={styles.text}>
        A phone connects both far and near, A voice, a laugh, a memory clear, A
        world of life held close, right here.
      </p>
    </div>
  );
}
