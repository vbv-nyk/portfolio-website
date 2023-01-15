import React from "react";
import { ReactDOM } from "react";
import styles from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.profileContainer}>
        <img src="/profile.webp" className={styles.myPicture} />
        <div className={styles.profileDetails}>
          <div className={styles.name}>Vaibhav Nayak</div>
          <div className={styles.desc}>
            Hello! I'm currently in my 3rd semester pursuing computer science. I
            love programming and learning new technologies.
          </div>
        </div>
      </div>
    </div>
  );
}
