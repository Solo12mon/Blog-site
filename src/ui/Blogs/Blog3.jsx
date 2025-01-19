import styles from "./Blog3.module.css";

export default function Blog3() {
  const imagepath = "/images/AfricanDishes1.jpeg";
  return (
    <div className={styles.blog}>
      <img className={styles.image} src={imagepath} alt="African Dish" />
      <p className={styles.text}>
        A pot of flavors, rich and deep, An African dish, where stories sleep,
        In every bite, traditions keep.
      </p>
    </div>
  );
}
