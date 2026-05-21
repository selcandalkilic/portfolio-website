import { useState } from 'react';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
  level: "LEVEL 01",
  title: "JavaFX Image Studio",
  description:
    "A desktop application for image processing. Users can load an image, apply grayscale, adjust brightness, detect edges, apply blur, reset the image, and save the result.",
  technologies: ["Java", "JavaFX", "Image Processing"],
  highlights: [
    "Pixel-based image processing",
    "JavaFX user interface with buttons, sliders, and checkboxes",
    "Image statistics such as width, height, and average brightness",
  ],
  github: "#",
},
    {
      level: "LEVEL 02",
      title: "Database Design Project",
      description:
        "A database design project including an ER model, relational schema, normalization, and SQL queries.",
      technologies: ["SQL", "ER Modeling", "Relational Databases"],
      highlights: [
        "Designed an entity-relationship model",
        "Created relational tables and keys",
        "Practiced SQL queries and normalization",
      ],
      github: "#",
    },
    {level: "LEVEL 03",
      title: "Hotel Workflow Concept",
      description:
        "A concept for improving hotel check-in, guest communication, and internal room status management through digital tools.",
      technologies: ["Web Development", "Process Design", "Business Workflows"],
      highlights: [
        "Based on real hotel operations experience",
        "Focus on self check-in and guest communication",
        "Designed to reduce manual coordination work",
      ],
      github: "#",
    },
  ];
    const skills = [
    "Java",
    "JavaFX",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
    "Databases",
    "Problem Solving",
    "German",
    "English",
    "Turkish",
  ];
    if (!gameStarted) {
    return (
      <div className="startScreen">
        <div className="arcadeFrame">
          <p className="insertCoin">INSERT COIN</p>

          <h1 className="arcadeTitle">SELCAN.EXE</h1>

          <p className="arcadeSubtitle">
            Computer Science Portfolio
          </p>

          <div className="playerInfo">
            <p>PLAYER 1: SELCAN DALKILIC</p>
            <p>STATUS: COMPUTER SCIENCE STUDENT</p>
            <p>LOCATION: LINZ, AUSTRIA</p>
          </div>

          <button
            className="startButton"
            onClick={() => setGameStarted(true)}
          >
            START GAME
          </button>

          <p className="pressStart">PRESS START TO ENTER PORTFOLIO</p>
        </div>
      </div>
    );
  }
  return (
    <div className="website">
      <nav className="navbar">
        <div className="logo">PLAYER 1: SELCAN</div>
        

        <div className="navLinks">
          <a href="#about">Profile</a>
          <a href="#projects">Missions</a>
          <a href="#skills">Skills</a>
          <a href="/cv.pdf" target="_blank">CV</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
         <p className="smallIntro">PLAYER 1 · COMPUTER SCIENCE STUDENT · JKU LINZ</p>

          <h1>
            MISSION START
            <br />
            BUILDING DIGITAL SOLUTIONS
          </h1>

          <p className="heroText">
            I’m a Computer Science student interested in software development,
            databases, web applications, and real-world process improvement.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryButton">
              View Missions
            </a>

            <a href="/cv.pdf" target="_blank" className="secondaryButton">
              Download CV
            </a>

            <a href="#contact" className="secondaryButton">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
         Welcome to my portfolio arcade. Explore my projects, unlocked skills,
        education, and experience as a Computer Science student building practical
        software solutions.
        </p>
      </section>

           <section id="projects" className="section">
  <p className="sectionLabel">MISSION SELECT</p>
  <h2>Project Levels</h2>

        <div className="projectsGrid">
          {projects.map((project) => (
            <div className="projectCard" key={project.title}>
              <p className="levelTag">{project.level}</p>
              <h3>{project.title}</h3>

              <p className="projectDescription">{project.description}</p>

              <div className="techList">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <button
                className="projectButton"
                onClick={() => setSelectedProject(project)}
              >
                OPEN LEVEL
              </button>
            </div>
          ))}
        </div>
      </section>

            <section id="skills" className="section">
        <p className="sectionLabel">What I Use</p>
        <h2>Skills</h2>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <div className="skillCard" key={skill}>
              {skill}
            </div>
          ))}
        </div>
              <section id="contact" className="section contactSection">
        <p className="sectionLabel">FINAL LEVEL</p>
        <h2>Contact Terminal</h2>

        <div className="contactBox">
          <p className="terminalLine">
            &gt; PLAYER READY FOR INTERNSHIPS, PROJECTS, AND COLLABORATION
          </p>

          <p>
            Email:{" "}
            <a href="mailto:selcandalkilic01@gmail.com">
              selcandalkilic01@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a href="https://github.com/selcandalkilic" target="_blank">
              github.com/selcandalkilic
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/selcandalkilic" target="_blank">
              linkedin.com/in/selcandalkilic
            </a>
          </p>

          <p>Location: Linz, Austria</p>
        </div>
      </section>
      </section>
            {selectedProject && (
        <div className="levelOverlay">
          <div className="levelModal">
            <button
              className="closeButton"
              onClick={() => setSelectedProject(null)}
            >
              X
            </button>

            <p className="levelTag">{selectedProject.level}</p>
            <h2>{selectedProject.title}</h2>

            <p className="modalDescription">
              {selectedProject.description}
            </p>

            <div className="techList">
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <h3>MISSION OBJECTIVES</h3>

            <ul>
              {selectedProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <p className="missionStatus">STATUS: COMPLETED</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;