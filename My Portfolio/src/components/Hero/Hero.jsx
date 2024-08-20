import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mansi</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience of using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="/Mansi_Fresher_Resume.pdf" className={styles.contactBtn} download>
        Download Resume
      </a>
      </div>
    
      <img src="mgo.png" alt="img" width={"500px"} height={"500px"} className={styles.roundImage}  />
  
        
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
