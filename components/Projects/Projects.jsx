import React, { useState } from "react";
import { ReactDOM } from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  const [imageNo, setImageNo] = useState(0);
  return (
    <>
      <div className={styles.projects}>
        <h1 className={styles.header}>My Projects</h1>
        <div className={styles.projectsGrid}>
          <div className={styles.gridItem}>
            <img
              src={`/project${imageNo}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Opencademy</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${(imageNo + 1) % 2}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Youtify</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${(imageNo + 1) % 2}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Youtify</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${(imageNo + 1) % 2}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Youtify</div>
          </div>
        </div>
      </div>
    </>
  );
}
