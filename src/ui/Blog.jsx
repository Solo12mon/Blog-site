import Blog1 from "./Blogs/Blog1";
import Blog3 from "./Blogs/Blog3";
import Blog5 from "./Blogs/Blog5";
import Blog6 from "./Blogs/Blog6";
import styles from "./Blog.module.css";
export default function Blog() {
  return (
    <div>
      <div className={styles.subheading}>
        <h1> All articles</h1>
      </div>
      <div className={styles.blogSection}>
        <Blog1 />

        <Blog3 />

        <Blog5 />
        <Blog6 />
      </div>
    </div>
  );
}
