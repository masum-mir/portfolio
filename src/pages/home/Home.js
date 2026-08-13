import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { skills, mlResearch } from "../../data/portfolio";
import "./Home.scss";

const SkillCard = ({ item, tone = "default" }) => (
  <article className={`skill-card ${tone === "research" ? "research-card" : ""}`}>
    <h3>{item.title}</h3>
    <div className="skill-tags" aria-label={`${item.title} technologies`}>
      {item.softwareSkills.map((skill) => (
        <span key={skill.skillName}>{skill.skillName}</span>
      ))}
    </div>
    <ul>
      {item.skills.map((description) => (
        <li key={description}>{description}</li>
      ))}
    </ul>
  </article>
);

const Home = () => (
  <main>
    <section className="greeting-container" aria-labelledby="greeting-title">
      <div className="greeting-content">
        <div className="greeting-text-section">

          <p className="intro-label">Hello, I’m</p>

          <h1 id="greeting-title" className="greeting-heading">
            Md Masum
          </h1>

          <p className="career-title">
            Software Engineer · Machine Learning & Deep Learning Researcher
          </p>

          <p className="greeting-description">
            I am a software engineer and researcher with experience in backend development,
            machine learning, deep learning, and IoT-based systems. I enjoy building reliable
            software, developing data-driven solutions, and conducting research on intelligent
            and networked systems. My work combines practical software development with
            academic research, experimentation, and publication.
          </p>

          <div className="expertise-row" aria-label="Core expertise">
            <span>Java & Spring Boot</span>
            <span>React.js</span>
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Deep Learning</span>
          </div>

          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects <FontAwesomeIcon icon={faArrowRight} />
            </Link>

            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FontAwesomeIcon icon={faFileArrowDown} /> View Resume
            </a>
          </div>

          <div className="professional-links">
            <a
              href="https://github.com/masum-mir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/md-masum-mir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </a>

            <Link to="/contact">Contact Me</Link>
          </div>
        </div>

        <div className="greeting-image-section">
          <div className="profile-card">
            <div className="profile-image-wrap">
              <img
                className="profile-image"
                alt="Md Masum Mir"
                src={require("../../assets/img/myimg.jpg")}
              />
            </div>

            <div className="profile-summary">
              <div>
                <span>Current Role</span>
                <strong>Research Assistant</strong>
                <small>DHMAINetRG · Dhaka</small>
              </div>

              <div className="research-badge">
                2 Publications · 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="skills-container"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="skills-shell">

        <header className="skills-intro">
          <span className="page-eyebrow">Technical Expertise</span>

          <p>
            My technical background combines software engineering with
            machine learning and deep learning research. I work with backend
            systems, web applications, databases, data processing, model
            development, experimentation, and research-oriented implementations.
          </p>
        </header>

        <div className="skills-grid">
          {skills.data.map((item) => (
            <SkillCard key={item.title} item={item} />
          ))}

          {mlResearch.data.map((item) => (
            <SkillCard
              key={item.title}
              item={item}
              tone="research"
            />
          ))}
        </div>

        <div className="focus-strip" aria-label="Role focus">

          <div>
            <span>01</span>
            <strong>Software Engineering</strong>
            <p>
              Backend and full-stack development, REST APIs, databases,
              authentication, testing, and deployment.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Machine Learning</strong>
            <p>
              Data preprocessing, feature engineering, model development,
              evaluation, and reproducible experimentation using Python.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Deep Learning Research</strong>
            <p>
              Neural network development and experimentation for IoT,
              forecasting, and networked-system research problems.
            </p>
          </div>

        </div>
      </div>
    </section>
  </main>
);

export default Home;
