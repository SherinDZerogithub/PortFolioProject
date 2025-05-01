import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>My Journey</h2>
      <div className={styles.content}>
        <div className={styles.timeline}>
          {history.map((historyItem, id) => (
            <div key={id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.cardHeader}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                    className={styles.companyLogo}
                  />
                  <div>
                    <h3 className={styles.role}>{historyItem.role}</h3>
                    <p className={styles.duration}>
                      {historyItem.startDate} -{" "}
                      {historyItem.endDate || "Present"}
                    </p>
                  </div>
                </div>
                <ul className={styles.experienceList}>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id} className={styles.experienceItem}>
                      <span className={styles.bullet}>•</span>
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
