import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const MenuIcon = menuOpen ? X : Menu;

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Primary navigation">
        <a className={styles.navMark} href="#top" onClick={() => setMenuOpen(false)}>
          <span className={styles.dot} aria-hidden="true" />
          SERINI PUWAKGOLLA
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon size={22} />
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.navStatus}>
          <span className={styles.pulse} aria-hidden="true" />
          OPEN TO INTERNSHIPS
        </div>
      </nav>
    </header>
  );
};
