import Link from "next/link";
import React from "react";
import { ReactDOM } from "react";
import styles from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <div className={styles.aboutMe} id="about">
      <div className={styles.profileContainer}>
        <img src="/profile.webp" className={styles.myPicture} />
        <div className={styles.profileDetails}>
          <div className={styles.name}>Vaibhav Nayak</div>
          <div className={styles.desc}>
            Hello! I'm currently in my 3rd semester pursuing computer science. I
            love programming and learning new technologies.
          </div>
          <div className={styles.logoContainer}>
            <Link href="https://github.com/vbv-nyk" target="_blank">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt=""
                className={styles.logoItem}
              />
            </Link>
            <Link href="https://devfolio.co/@vbvnyk" target="_blank">
              <img
                src="https://avatars.githubusercontent.com/u/38809367?s=280&v=4"
                alt=""
                className={styles.logoItem}
              />
            </Link>
            <Link href="https://www.codechef.com/users/vbv_nyk" target="_blank">
              <img
                src="https://pbs.twimg.com/profile_images/1477930785537605633/ROTVNVz7_400x400.jpg"
                alt=""
                className={styles.logoItem}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
