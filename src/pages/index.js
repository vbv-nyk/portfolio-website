import { Inter } from "@next/font/google";
import AboutMe from "components/AboutMe/AboutMe";
import NavBar from "components/NavBar/NavBar";
import Projects from "components/Projects/Projects";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.sectionsContainer}>
        <AboutMe />
        <Projects />
      </div>
      <NavBar />
    </div>
  );
}
