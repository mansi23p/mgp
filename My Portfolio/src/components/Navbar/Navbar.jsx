import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
         <li>
            <a href="#about"><button>About</button></a>
          </li>
          <li>
            <a href="#experience"><button>Experience</button></a>
          </li>
          <li>
            <a href="#projects"><button>Projects</button></a>
          </li>
          <li>
            <a href="#contact"><button>Contact</button></a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
