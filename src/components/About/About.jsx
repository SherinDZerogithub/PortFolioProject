import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.backgroundPattern}></div>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("hero/SeriniPuwakgolla.jpg")}
            alt="Serini Puwakgolla"
            className={styles.aboutImage}
          />
          <div className={styles.imageBorder}></div>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.introText}>
            <h1 className={styles.heading}>Hi, I'm Serini</h1>
            <p>
            🚀 Passionate Web Developer | Responsive Web Designer | Graphic
            Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
