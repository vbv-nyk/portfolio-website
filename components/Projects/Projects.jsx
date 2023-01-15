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
              src={`/project${0}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Opencademy</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${1}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Youtify</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${2}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Memory Card Game</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${3}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Battleship Game Simulation</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${4}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Todo List</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${5}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Library</div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${6}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>
              Cat Themed Dashboard Project
            </div>
          </div>
          <div className={styles.gridItem}>
            <img
              src={`/project${7}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Rock Paper Scissor</div>
          </div>

          <div className={styles.gridItem}>
            <img
              src={`/project${8}.webp`}
              className={styles.projectImage}
              alt=""
            />
            <div className={styles.projectName}>Drum Simulation</div>
          </div>
        </div>
      </div>
    </>
  );
}
