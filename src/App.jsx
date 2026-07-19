import { useEffect, useMemo, useState } from "react";
import {
  Download,
  ExternalLink,
  Folder,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import styles from "./App.module.css";

import profileImage from "../assets/hero/serini.png";
import ecommerceImage from "../assets/projects/ecommerce.png";
import gameImage from "../assets/projects/Game.png";
import lmsImage from "../assets/projects/LMS-Frontend.png";
import laravelImage from "../assets/projects/Laravel.png";
import moodVoiceImage from "../assets/projects/MoodVoice.png";
import movieImage from "../assets/projects/Movie-Rec.png";
import portfolioImage from "../assets/projects/PortFolio.png";
import cvPdf from "../assets/cv/Serini_Puwakgolla_CV.pdf";

const navItems = ["about", "skills", "projects", "experience", "education", "cv"];

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["React", "React Native", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "Laravel"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase", "SQLite"],
  },
  {
    title: "AI",
    skills: ["TensorFlow", "Scikit-Learn", "Gemini API", "NLP"],
  },
  {
    title: "Cloud",
    skills: ["Azure", "GitHub", "Git"],
  },
];

const projects = [
  {
    title: "Mood Voice",
    category: "Software Engineering / AI",
    description:
      "Cross-platform mobile app featuring real-time voice-to-text mood journaling and semantic sentiment analysis, with AI-assisted image mood recognition and personalized music recommendations.",
    tech: ["FastAPI", "React Native", "SQLite", "Gemini API", "NLP", "JWT"],
    github: "https://github.com/SherinDZerogithub/Voice-To-Text",
    image: moodVoiceImage,
    featured: true,
  },
  {
    title: "Game Development Sandbox",
    category: "Systems & Game Logic / AI",
    description:
      "Dynamic infinite text-adventure project powered by generative AI, with a FastAPI backend and alternate web interfaces for stream-style narrative generation.",
    tech: ["Python", "FastAPI", "Streamlit", "SQLite", "Gemini API"],
    github: "https://github.com/SherinDZerogithub/game-dev",
    image: gameImage,
    featured: true,
  },
  {
    title: "Tasks Manager Application",
    category: "Backend & Systems",
    description:
      "Task management web platform built on MVC architecture with authentication, CRUD workflows, Blade views, and a MySQL relational database.",
    tech: ["PHP", "Laravel", "Blade", "MySQL", "CSS"],
    github: "https://github.com/SherinDZerogithub/tasks-manager",
    image: laravelImage,
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack Web Development",
    description:
      "Decoupled e-commerce architecture with a Vite frontend, Express backend, MongoDB product catalogs, and asynchronous API routes for orders.",
    tech: ["Node.js", "Express", "MongoDB", "React", "Vite"],
    github: "https://github.com/SherinDZerogithub/e-commerce",
    image: ecommerceImage,
    featured: false,
  },
  {
    title: "Movie Discovery App",
    category: "Mobile Development",
    description:
      "Cross-platform mobile discovery app using Expo Router, responsive NativeWind UI, and dynamic movie API data fetching.",
    tech: ["React Native", "TypeScript", "Expo", "NativeWind"],
    github: "https://github.com/SherinDZerogithub/Movie-Recommendation",
    image: movieImage,
    featured: false,
  },
   {
    title: "LMS Frontend Project",
    category: "UI / Frontend Development",
    description:
      "A responsive frontend for a Learning Management System (LMS) designed to provide an intuitive user experience for students and instructors. Features include course browsing, user authentication, interactive dashboards. Built with modern frontend technologies for optimal performance and scalability.",
    tech:  ["React.js",
    "TypeScript",
    "Redux (or Zustand)",
    "Tailwind CSS",
    "Axios (for API calls)",
    "React Router",
    "Clerk Auth",
    "JWT Authentication"],
    github: "https://github.com/SherinDZerogithub/LMS.git",
    image: lmsImage,
    featured: false,
  },
  
];

const certifications = [
  { title: "Cyber Security & Ethical Hacking", issuer: "Sri Bharathee Nenasala, Peradeniya" },
  { title: "Microsoft Power BI", issuer: "Alison" },
  { title: "Java Programming (6 Months)", issuer: "SLIIT" },
];

function useTypingText(text) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const startTimer = window.setTimeout(() => {
      const timer = window.setInterval(() => {
        index += 1;
        setTypedText(text.slice(0, index));
        if (index >= text.length) {
          window.clearInterval(timer);
        }
      }, 90);
    }, 600);

    return () => window.clearTimeout(startTimer);
  }, [text]);

  return typedText;
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <a href="#top" className={styles.logo} aria-label="Go to hero">
        S<span>.</span>P
      </a>

      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {navItems.map((item, index) => (
          <a key={item} href={`#${item}`}>
            <span>0{index + 1}.</span>
            {item}
          </a>
        ))}
      </nav>

      <button
        className={styles.menuButton}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
              <span>0{index + 1}.</span>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const typedText = useTypingText("Aspiring AI & ML Engineer.");

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.heroGrid} />
      <div className={styles.heroContent}>
        <p className={styles.systemLine}>
          <span />
          INITIALIZING SYSTEM...
        </p>
        <p className={styles.kicker}>&gt; Hello, world. I am</p>
        <h1 className={styles.glitch} data-text="Serini Puwakgolla">
          Serini Puwakgolla
        </h1>
        <div className={styles.typeLine}>
          <span>&gt;</span>
          <strong>{typedText}</strong>
          <i />
        </div>
        <p className={styles.heroCopy}>
          Computer Science Undergraduate - Software Engineer Intern - Full-Stack & Mobile Developer
          <br />
          Building scalable software, crafting cross-platform mobile experiences, and exploring AI-driven human interaction.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.primaryButton} href="#projects">
            EXPLORE_WORK
          </a>
          <a className={styles.iconButton} href="https://github.com/SherinDZerogithub" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a className={styles.iconButton} href="https://www.linkedin.com/in/serini-p-96463a24b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      <div className={styles.heroImageWrap}>
        <img src={profileImage} alt="Serini Puwakgolla" className={styles.heroImage} />
        <div className={styles.heroStats}>
          <span>FULL STACK</span>
          <span>MOBILE</span>
          <span>AI / ML</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ number, title, align = "left" }) {
  return (
    <div className={`${styles.sectionHeading} ${align === "center" ? styles.centerHeading : ""}`}>
      <h2>
        <span>{number}.</span>
        {title}
      </h2>
      <div />
    </div>
  );
}

function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeading number="02" title="About Me" />
      <div className={`${styles.panel} ${styles.aboutPanel}`}>
        <p>
          I'm a final-year Computer Science undergraduate at the University of Sri Jayewardenepura currently seeking a six-month Software Engineering internship.
        </p>
        <p>
          I enjoy building full-stack applications, mobile apps, and AI-powered systems while continuously learning modern technologies.
        </p>
        <p>
          My interests include software engineering, artificial intelligence, machine learning, and creating practical digital products that solve real problems.
        </p>
        <p>
          My goal is to grow as a software engineer by contributing to impactful projects, learning from experienced teams, and building reliable user-focused systems.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className={`${styles.section} ${styles.band}`}>
      <SectionHeading number="03" title="Skills" />
      <div className={styles.skillGrid}>
        {skillCategories.map((category) => (
          <article className={styles.panel} key={category.title}>
            <h3>{category.title}</h3>
            <div className={styles.skillTags}>
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);
  const otherProjects = useMemo(() => projects.filter((project) => !project.featured), []);

  return (
    <section id="projects" className={styles.section}>
      <SectionHeading number="04" title="Selected Works" />

      <div className={styles.featuredList}>
        {featuredProjects.map((project, index) => (
          <article className={`${styles.featuredProject} ${index % 2 ? styles.reverseProject : ""}`} key={project.title}>
            <a className={styles.projectImageLink} href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
              <img src={project.image} alt={`${project.title} screenshot`} />
            </a>
            <div className={styles.projectInfo}>
              <p>{project.category}</p>
              <h3>
                <a href={project.github} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              <div className={styles.panel}>{project.description}</div>
              <ul className={styles.techList}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a className={styles.projectIconLink} href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                <Github size={22} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <h3 className={styles.subHeading}>Other Noteworthy Projects</h3>
      <div className={styles.projectGrid}>
        {otherProjects.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.projectCardTop}>
              <Folder size={34} />
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                <ExternalLink size={20} />
              </a>
            </div>
            <img src={project.image} alt={`${project.title} preview`} />
            <h4>
              <a href={project.github} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h4>
            <p className={styles.cardCategory}>{project.category}</p>
            <p>{project.description}</p>
            <ul>
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className={`${styles.section} ${styles.band}`}>
      <SectionHeading number="05" title="Professional Experience" align="center" />
      <div className={styles.timeline}>
        <article className={styles.timelineItem}>
          <span className={`${styles.timelineDot} ${styles.activeDot}`} />
          <div className={styles.panel}>
            <span className={styles.badge}>CURRENT</span>
            <h3>Software Developer (Part-Time / Intern)</h3>
            <div className={styles.meta}>
              <span>Apps Technologies</span>
              <span>Colombo, Sri Lanka</span>
              <span>Nov 2025 - Present</span>
            </div>
            <ul>
              <li>Contributed to the development of a web-based financial ERP platform.</li>
              <li>Developed and maintained web application features using PHP/Laravel and JavaScript.</li>
              <li>Improved backend validation logic, increasing data integrity and reducing runtime errors.</li>
              <li>Collaborated with cross-functional teams to optimize application performance.</li>
              <li>Gained hands-on experience working with real-world scalable systems.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className={styles.section}>
      <SectionHeading number="06" title="Education & Certifications" align="center" />
      <div className={styles.educationGrid}>
        <article className={`${styles.panel} ${styles.degreePanel}`}>
          <span>DEGREE</span>
          <h3>Bachelor of Science (Hons) in Computer Science</h3>
          <p>University of Sri Jayewardenepura</p>
          <strong>2022 - Present (Expected: 2027)</strong>
        </article>
        <div>
          <h3 className={styles.certLabel}>PROFESSIONAL DEVELOPMENT</h3>
          <div className={styles.certList}>
            {certifications.map((certification) => (
              <article className={styles.panel} key={certification.title}>
                <h4>{certification.title}</h4>
                <p>{certification.issuer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CvDownload() {
  return (
    <section id="cv" className={`${styles.section} ${styles.cvSection}`}>
      <SectionHeading number="07" title="CV" align="center" />
      <div className={styles.cvContent}>
        <a className={styles.cvButton} href={cvPdf} download>
          <Download size={26} />
          Download CV
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Serini Puwakgolla</h2>
      <p>Building the next generation of intelligent software & digital experiences.</p>
      <div>
        <a href="https://github.com/SherinDZerogithub" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com/in/serini-p-96463a24b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
      </div>
      <small>Copyright {new Date().getFullYear()} SERINI PUWAKGOLLA. ALL RIGHTS RESERVED.</small>
      <small>SYSTEM_STATUS: ONLINE</small>
    </footer>
  );
}

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.progressBar} />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <CvDownload />
      </main>
      <Footer />
    </div>
  );
}

export default App;
