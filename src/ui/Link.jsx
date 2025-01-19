import styles from "./Link.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Link = () => {
  const links = [
    { href: "tel:+2347012467021", icon: <FaPhone />, label: "Call Us" },
    {
      href: "robertsolomon313@gmail.com",
      icon: <FaEnvelope />,
      label: "Email Us",
    },
    { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
    {
      href: "https://instagram.com",
      icon: <FaInstagram />,
      label: "Instagram",
    },
  ];

  return (
    <div className={styles.linkContainer}>
      <h2 className={styles.heading}>Contact Us</h2>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.icon}>{link.icon}</span>
              <span className={styles.label}>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Link;
