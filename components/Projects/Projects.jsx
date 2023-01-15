import React from "react";
import { ReactDOM } from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={styles.projects}>
        <h1 className={styles.header}>My Projects</h1>
        <div className={styles.projectsGrid}>
          <div className={styles.gridItem}>
            <img
              src="/project1.webp"
              className={styles.projectImage}
              alt=""
              srcset=""
            />
          </div>
          <div className={styles.gridItem}>
            <img
              src="/project1.webp"
              className={styles.projectImage}
              alt=""
              srcset=""
            />
          </div>
          <div className={styles.gridItem}>
            <img
              src="/project1.webp"
              className={styles.projectImage}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
