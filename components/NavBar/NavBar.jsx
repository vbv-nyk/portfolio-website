import styles from "./NavBar.module.css";
import React from "react";
import { ReactDOM } from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}>
        <ul className={styles.navbarList}>
          <a href="#about" className={styles.link}>
            <li className={styles.listItem}>Home</li>
          </a>
          <a href="#projects" className={styles.link}>
            <li className={styles.listItem}>Projects</li>
          </a>
          <a href="#contact" className={styles.link}>
            <li className={styles.listItem}>Contact Me</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
