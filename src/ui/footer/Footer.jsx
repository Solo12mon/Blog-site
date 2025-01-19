import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.h4}>
        <span>Digital Product Design</span> Remote Work <span>UX Design</span>{" "}
        Distributed Teams
        <span>Creativity</span> Strategy <span>Suspense</span> Growth
      </h4>
      <h3 className={styles.h3}>Nordic Rose</h3>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.
      </p>
      <div className={styles.socialLinks}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="/rss">RSS</a>
      </div>
      <div className={styles.copyRight}>© 2012–2020 Nordic Rose Co.</div>
      <div className={styles.allRightsReserved}>All rights reserved.</div>
    </footer>
  );
}
