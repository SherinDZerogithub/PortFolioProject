import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./About.module.css";

const specs = [
  ["Institution", "Univ. of Sri Jayawardenepura"],
  ["Programme", "B.Sc. Computer Science"],
  ["Public repos", "9"],
  ["Design tools", "Figma, Canva"],
  ["Looking for", "Internship, 2026"],
];

export const About = () => {
  return (
    <>
      <section className={styles.hero} id="top">
        <div className={`${styles.titleblock} ${styles.crop}`}>
          <span className={styles.cbl} aria-hidden="true" />
          <span className={styles.cbr} aria-hidden="true" />
          <div className={styles.eyebrow}>
            DWG NO. SP-2026-04 <span className={styles.rule} /> STUDENT PORTFOLIO
          </div>
          <h1 className={styles.name}>Serini Puwakgolla</h1>
          <div className={styles.role}>
            Computer Science Undergraduate <span>/</span> Full-Stack Developer <span>/</span> UI Designer
          </div>
          <p className={styles.lede}>
            Fourth-year CS student at the University of Sri Jayawardenepura, building full-stack apps,
            machine learning models, and interfaces end to end, from Figma frame to production database.
            Currently looking for an internship where I can ship real work.
          </p>

          <div className={styles.ctaRow}>
            <a className={`${styles.btn} ${styles.primary}`} href="#projects">
              View Projects <ArrowUpRight size={15} />
            </a>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href="https://github.com/SherinDZerogithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href="https://www.linkedin.com/in/serini-p-96463a24b"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>

          <div className={styles.strip}>
            <div className={styles.cell}>
              <div className={styles.key}>Status</div>
              <div className={styles.value}>Seeking Internship</div>
            </div>
            <div className={styles.cell}>
              <div className={styles.key}>Year</div>
              <div className={styles.value}>4th Year, B.Sc CS</div>
            </div>
            <div className={styles.cell}>
              <div className={styles.key}>Focus</div>
              <div className={styles.value}>Full-Stack + UI</div>
            </div>
            <div className={styles.cell}>
              <div className={styles.key}>Based</div>
              <div className={styles.value}>Sri Lanka</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>01</span>
          <span className={styles.sectionTitle}>About</span>
          <span className={styles.sectionRule} />
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.copy}>
            <p>
              I started on the <strong>design side</strong>, laying out interfaces in Figma and Canva,
              before moving into <strong>frontend</strong>, then <strong>full-stack</strong> development.
              That path shows in how I build: I care about how a product looks and feels as much as how
              its backend is structured.
            </p>
            <p>
              My project work spans <strong>e-commerce platforms</strong>,{" "}
              <strong>role-based task management systems</strong>, <strong>mobile apps</strong>, and{" "}
              <strong>machine learning models</strong>, a mix that reflects a CS degree taken seriously
              across web, data, and design.
            </p>
            <p>
              I am in my final year and actively looking for an <strong>internship</strong> where I can
              contribute to a real codebase, learn from an experienced team, and keep building.
            </p>
          </div>

          <aside className={`${styles.factPanel} ${styles.crop}`} aria-label="Quick specs">
            <span className={styles.cbl} aria-hidden="true" />
            <span className={styles.cbr} aria-hidden="true" />
            <div className={styles.panelLabel}>Quick Specs</div>
            {specs.map(([key, value]) => (
              <div className={styles.factRow} key={key}>
                <span>{key}</span>
                <span className={styles.factValue}>{value}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
};
