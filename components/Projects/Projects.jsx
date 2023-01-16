import { projects } from "@/pages/api/projectsAPI";
import React, { use, useState } from "react";
import { ReactDOM } from "react";
import styles from "./Projects.module.css";
function Overlay(props) {
  const [imageClicked, setImageClicked] = useState(false);
  if (imageClicked)
    return (
      <>
        <div className={styles.projectName}>{props.name}</div>
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
      </>
    );
  return (
    <>
      <div className={styles.projectName}>{props.name}</div>
      <img
        src={props.source}
        className={styles.projectImage}
        alt=""
        onClick={() => {
          setImageClicked(true);
        }}
      />
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
