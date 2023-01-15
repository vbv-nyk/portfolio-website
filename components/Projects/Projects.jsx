import { projects } from "@/pages/api/projectsAPI";
import React, { useState } from "react";
import { ReactDOM } from "react";
import styles from "./Projects.module.css";

function GridItem(props) {
  return (
    <div className={styles.gridItem}>
      <img src={props.source} className={styles.projectImage} alt="" />
      <div className={styles.projectName}>{props.name}</div>
    </div>
  );
}

export default function Projects() {
  const [imageNo, setImageNo] = useState(0);
  const gridItems = projects.map((project) => {
    return <GridItem {...project} />;
  });
  return (
    <>
      <div className={styles.projects}>
        <h1 className={styles.header}>My Projects</h1>
        <div className={styles.projectsGrid}>{gridItems}</div>
      </div>
    </>
  );
}
