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
              Hi! I’m a passionate and detail-oriented{" "}
              <strong>Web Developer</strong> & <strong>UI Designer</strong> who
              thrives on turning ideas into reality through clean code and
              thoughtful design. I specialize in building responsive,
              user-friendly websites and web applications using modern
              technologies like <strong>React</strong>, <strong>Next.js</strong>
              , <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            </p>

            <p>
              With a strong eye for aesthetics and a solid foundation in
              fullstack development, I focus on creating digital experiences
              that are both visually appealing and technically sound. From
              crafting engaging interfaces to building scalable backend systems,
              I love solving real-world problems through technology.
            </p>

            <p>
              Beyond development, I bring a creative edge to my work — having
              designed flyers, digital assets, and content for student
              organizations using tools like <strong>Figma</strong> and{" "}
              <strong>Canva</strong>.
            </p>

            <p>
              Currently, I'm focused on sharpening my backend development skills
              and building projects that seamlessly blend great design with
              robust functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
