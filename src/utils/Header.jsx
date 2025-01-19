import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo";
import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          <h1 className={styles.title}>NORDIC ROSE</h1>
        </NavLink>

        {/* Navigation links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <NavLink
            onClick={closeMenu}
            to="/blog"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Blog
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/link"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Links
          </NavLink>

          {/* Close button */}
          <div onClick={toggleMenu} className={styles.closeButton}>
            <IoCloseCircleSharp />
          </div>
        </nav>

        {/* Hamburger button */}
        <div
          className={`${styles.menuBtn} ${menuOpen ? styles.hidden : ""}`}
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger icon */}
        </div>
      </header>

      <div className={styles.separator}></div>

      <Logo />
    </div>
  );
}
