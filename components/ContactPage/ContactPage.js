import React from "react";
import styles from "./ContactPage.module.css";
import { ReactDOM } from "react";

export default function ContactPage() {
  return (
    <div className={styles.contactPage} id="contact">
      <div className={styles.header}>Contact Me!</div>
      <div className={styles.contactCardContainer}>
        <div className={styles.mediaContainer}>
          <img
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png"
            className={styles.logoImage}
          ></img>
          <div className={styles.text}>vbv.nyk.2003@gmail.com</div>
        </div>
        <div className={styles.mediaContainer}>
          <img
            src="https://www.drupal.org/files/project-images/linkedin_circle_logo.png"
            className={styles.logoImage}
          ></img>
          <div className={styles.text}>
            <a
              className={styles.contactLink}
              href="https://www.linkedin.com/in/vaibhav-nayak-4986771ab/"
              target={"_blank"}
            >
              Vaibhav Nayak
            </a>{" "}
            on Linkedin
          </div>
        </div>
        <div className={styles.mediaContainer}>
          <img
            src="https://www.clipartmax.com/png/full/448-4482345_phone-green-mobile-icon-png.png"
            className={styles.logoImage}
          ></img>
          <div className={styles.text}>+91 6362445629</div>
        </div>
        <div className={styles.mediaContainer}>
          <img
            src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
            className={styles.logoImage}
          ></img>
          <div className={styles.text}>
            {" "}
            <span className={styles.specialText}>Pixel#1202</span>
          </div>
        </div>
      </div>
    </div>
  );
}
