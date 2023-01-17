import { Inter } from "@next/font/google";
import AboutMe from "components/AboutMe/AboutMe";
import ContactPage from "components/ContactPage/ContactPage";
import NavBar from "components/NavBar/NavBar";
import Projects from "components/Projects/Projects";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = ["#about", "#projects", "#contact"];
  return (
    <>
      <NavBar />
      <div className={styles.sectionsContainer}>
        <AboutMe />
        <Projects />
        <ContactPage />
      </div>
    </>
  );
}
