import React from "react";
import styles from "./Contact.module.css";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.content}>
        <h2 className={styles.title}>Get In Touch</h2>

        <div>
          <p className={styles.description}>
            Feel free to reach out for collaborations or just a friendly hello!!!
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.contactLink}>
              <Envelope size={24} className={styles.icon} />
              <span>SeriniPuwakgolla@gmail.com</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={24} className={styles.socialIcon} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={24} className={styles.socialIcon} />
            </a>

            <a
              href="https://instergram.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={24} className={styles.socialIcon} />
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} Serini Puwakgolla. All rights reserved.
          </p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </footer>
  );
};
