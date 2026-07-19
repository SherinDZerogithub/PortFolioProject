import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.wrap}>
        <div className={`${styles.contactPanel} ${styles.crop}`}>
          <span className={styles.cbl} aria-hidden="true" />
          <span className={styles.cbr} aria-hidden="true" />
          <span className={styles.sectionNum}>05 / CONTACT</span>
          <h2>Let's build something.</h2>
          <p>
            Final-year CS student, open to internship opportunities in full-stack or frontend development.
            Reach out on LinkedIn or check out the code on GitHub.
          </p>
          <div className={styles.contactLinks}>
            <a
              className={`${styles.btn} ${styles.primary}`}
              href="mailto:SeriniPuwakgolla@gmail.com"
            >
              <Mail size={15} /> Email Me
            </a>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href="https://www.linkedin.com/in/serini-p-96463a24b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={15} />
            </a>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href="https://github.com/SherinDZerogithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all repos <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className={styles.footMeta}>
          <span>© 2026 Serini Puwakgolla</span>
          <span>Built with intent, not a template</span>
        </div>
      </div>
    </footer>
  );
};
