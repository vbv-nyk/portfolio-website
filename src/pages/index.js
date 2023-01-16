import { Inter } from "@next/font/google";
import AboutMe from "components/AboutMe/AboutMe";
import ContactPage from "components/ContactPage/ContactPage";
import NavBar from "components/NavBar/NavBar";
import Projects from "components/Projects/Projects";
import { useEffect, useState } from "react";
import Swipeable, { useSwipeable } from "react-swipeable";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = ["#about", "#projects", "#contact"];
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      window.location.href = pages[(currentPage + 1) % 3];
      setCurrentPage((n) => (n + 1) % 3);
    },
    onSwipedRight: (eventData) => {
      if (currentPage === 0) {
        window.location.href = pages[2];
        setCurrentPage(2);
      } else {
        window.location.href = pages[currentPage - 1];
        setCurrentPage((n) => n - 1);
      }
    },
  });
  return (
    <>
      <NavBar />
      <div className={styles.sectionsContainer} {...handlers}>
        <AboutMe />
        <Projects />
        <ContactPage />
      </div>
    </>
  );
}
