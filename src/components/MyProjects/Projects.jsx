import React, { useState } from "react";
import styles from "./projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

const ProjectsPage = () => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const handleVideoClick = (index) => {
    setPlayingVideoIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.mediaWrapper}>
              {project.videoSrc ? (
                <video
                  className={styles.projectMedia}
                  src={getImageUrl(project.videoSrc)}
                  controls
                  muted
                  playsInline
                  onClick={() => handleVideoClick(index)}
                  {...(playingVideoIndex === index ? { autoPlay: true } : {})}
                />
              ) : (
                <img
                  src={getImageUrl(project.imageSrc)}
                  alt={project.title}
                  className={styles.projectMedia}
                />
              )}
            </div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techList}>
              {project.tech.map((techItem, i) => (
                <span className={styles.tech} key={i}>
                  {techItem}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
