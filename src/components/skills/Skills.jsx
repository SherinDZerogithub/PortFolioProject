import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";

const SkillsPage = () => {
  return (
    <section className={styles.section} id="stack">
      <div className={styles.sectionHead}>
        <span className={styles.sectionNum}>02</span>
        <span className={styles.sectionTitle}>Tech Stack</span>
        <span className={styles.sectionRule} />
      </div>

      <div className={styles.legend}>
        {skillsData.map((categoryData) => (
          <div className={styles.legendCat} key={categoryData.category}>
            <span className={styles.category}>{categoryData.category}</span>
            <div className={styles.chipRow}>
              {categoryData.skills.map((skill) => (
                <span className={styles.chip} key={skill.title}>
                  {skill.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
