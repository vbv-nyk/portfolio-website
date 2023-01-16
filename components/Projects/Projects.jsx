import { projects } from "@/pages/api/projectsAPI";
import React, { use, useState } from "react";
import { ReactDOM } from "react";
import styles from "./Projects.module.css";
function Overlay(props) {
  const [imageClicked, setImageClicked] = useState(false);
  if (imageClicked)
    return (
      <>
        <div className={styles.projectOverlay}>
          <div className={styles.projectDescription}>{props.description}</div>
          <div className={styles.ghIco}>
            <a href={props.ghLink} target="_blank">
              <img
                src="/github-mark-white.svg"
                className={styles.ghIcon}
                alt=""
                srcset=""
              />
            </a>
          </div>
        </div>
        <div className={styles.projectName}>{props.name}</div>
      </>
    );
  return (
    <>
      <img
        src={props.source}
        className={styles.projectImage}
        alt=""
        onClick={() => {
          setImageClicked(true);
        }}
      />
      <div className={styles.projectName}>{props.name}</div>
    </>
  );
}
function GridItem(props) {
  return (
    <div className={styles.gridItem}>
      <Overlay {...props} />
    </div>
  );
}

export default function Projects() {
  const [imageNo, setImageNo] = useState(0);
  const gridItems = projects.map((project, index) => {
    return <GridItem {...project} key={index} />;
  });
  return (
    <div className={styles.projects} id="projects">
      <h1 className={styles.header}>My Projects</h1>
      <div className={styles.projectsGrid}>{gridItems}</div>
    </div>
  );
}
