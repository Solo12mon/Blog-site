import Blog1 from "./Blogs/Blog1";
import Blog2 from "./Blogs/Blog2";
import Blog3 from "./Blogs/Blog3";
import Blog4 from "./Blogs/Blog4";
import Blog5 from "./Blogs/Blog5";
import Blog6 from "./Blogs/Blog6";

import styles from "./Home.module.css"; // Use this file for Home styles

export default function Home() {
  return (
    <div>
      <div className={styles.subheading}>
        <h1> All articles</h1>
      </div>
      <div className={styles.blogSection}>
        <Blog1 />
        <Blog2 />
        <Blog3 />
        <Blog4 />
        <Blog5 />
        <Blog6 />
      </div>
    </div>
  );
}
