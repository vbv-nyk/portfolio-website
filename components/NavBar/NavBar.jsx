import styles from "./NavBar.module.css";
import React from "react";
import { ReactDOM } from "react";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}>
        <ul className={styles.navbarList}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Projects</li>
          <li className={styles.listItem}>Achievements</li>
          <li className={styles.listItem}>Tech Stack</li>
        </ul>
      </div>
    </div>
  );
}
