import React from "react";
import styles from "./Experience.module.css";

const revisions = [
  {
    rev: "A",
    role: "UI Designer",
    notes: "Started in Figma and Canva with layout, colour, and interface thinking first.",
  },
  {
    rev: "B",
    role: "Frontend Developer",
    notes: "Moved into HTML, CSS, JavaScript, and React to build what I had designed.",
  },
  {
    rev: "C",
    role: "Full-Stack Developer",
    notes: "Added Node.js, Express, MongoDB, and MySQL to own the whole stack.",
  },
  {
    rev: "D",
    role: "Responsive Web Designer",
    notes: "Focused on interfaces that hold up across devices, not just desktop.",
  },
  {
    rev: "E",
    role: "Graphic Designer",
    notes: "Kept a design practice alongside code with Canva work for visual polish.",
  },
];

export const Experience = () => {
  return (
    <section className={styles.section} id="journey">
      <div className={styles.sectionHead}>
        <span className={styles.sectionNum}>04</span>
        <span className={styles.sectionTitle}>Revision History</span>
        <span className={styles.sectionRule} />
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.revTable}>
          <thead>
            <tr>
              <th>Rev</th>
              <th>Role</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {revisions.map((item) => (
              <tr key={item.rev}>
                <td className={styles.revTag}>{item.rev}</td>
                <td className={styles.revRole}>{item.role}</td>
                <td>{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
