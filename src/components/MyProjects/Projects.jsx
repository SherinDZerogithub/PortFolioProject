import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";

const otherProjects = [
  {
    title: "ML-Wine-Predicting-Model",
    description: "Machine learning model predicting wine quality / Jupyter Notebook",
    link: "https://github.com/SherinDZerogithub/ML-Wine-Predicting-Model-CS1",
  },
  {
    title: "Power-BI",
    description: "Data visualisation and dashboarding work",
    link: "https://github.com/SherinDZerogithub/Power-BI",
  },
  {
    title: "Big_Data_Analytics",
    description: "Film dataset analysis / coursework collaboration",
    link: "https://github.com/SherinDZerogithub/Big_Data_Analytics",
  },
];

const ProjectsPage = () => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.sectionHead}>
        <span className={styles.sectionNum}>03</span>
        <span className={styles.sectionTitle}>Featured Projects</span>
        <span className={styles.sectionRule} />
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.projectTop}>
              <span className={styles.projectId}>
                PRJ-{String(index + 1).padStart(2, "0")} / {project.type}
              </span>
            </div>
            <h3 className={styles.projectName}>{project.title}</h3>
            <p className={styles.projectDesc}>{project.description}</p>
            <div className={styles.specLine}>
              <b>Tech</b> {project.tech.join(" / ")}
            </div>
            <a
              className={styles.projectLink}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View repository <ArrowRight className={styles.arrow} size={15} />
            </a>
          </article>
        ))}
      </div>

      <div className={styles.otherGrid} aria-label="Other builds">
        {otherProjects.map((project) => (
          <a
            className={styles.otherCard}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
          >
            <span className={styles.otherName}>{project.title}</span>
            <span className={styles.otherDesc}>{project.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
