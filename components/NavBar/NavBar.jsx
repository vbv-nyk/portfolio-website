import styles from "./NavBar.module.css";
import React from "react";
import { ReactDOM } from "react";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}></div>
    </div>
  );
}
