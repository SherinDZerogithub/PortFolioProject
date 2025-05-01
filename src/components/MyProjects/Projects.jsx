import React from "react";
import styles from "./projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

const ProjectsPage = () => {
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <img
              src={getImageUrl(project.imageSrc)}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techList}>
                {project.tech.map((tech, i) => (
                  <span className={styles.tech} key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
