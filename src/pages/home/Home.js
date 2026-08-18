import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import {
  homePageData,
  skills,
  mlResearch,
} from "../../data/portfolio";

import "./Home.scss";

const SkillCard = ({ item }) => (
  <article className="skill-card">
    <h3>{item.title}</h3>

    <div
      className="skill-tags"
      aria-label={`${item.title} technologies`}
    >
      {item.softwareSkills.map((skill) => (
        <span key={skill.skillName}>
          {skill.skillName}
        </span>
      ))}
    </div>

    <ul>
      {item.skills.map((description) => (
        <li key={description}>
          {description}
        </li>
      ))}
    </ul>
  </article>
);

const Home = () => {
  const {
    name,
    careerTitle,
    description,
    currentRole,
    organization,
    publicationText,
    github,
    linkedin,
  } = homePageData;

  return (
    <main>
      <section
        className="greeting-container"
        aria-labelledby="greeting-title"
      >
        <div className="greeting-content">
          <div className="greeting-text-section">
            <p className="intro-label">
              Hello, I’m
            </p>

            <h1
              id="greeting-title"
              className="greeting-heading"
            >
              {name}
            </h1>

            <p className="career-title">
              {careerTitle}
            </p>

            <p className="greeting-description">
              {description}
            </p>

            <div className="cta-buttons">
              <Link
                to="/projects"
                className="btn btn-primary"
              >
                View Projects
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>

              <a
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FontAwesomeIcon icon={faFileArrowDown} />
                View Resume
              </a>
            </div>

            <div className="professional-links">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                LinkedIn
              </a>

              <Link to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="greeting-image-section">
            <div className="profile-card">
              <div className="profile-image-wrap">
                <img
                  className="profile-image"
                  alt={name}
                  src={require("../../assets/img/myimg.jpg")}
                />
              </div>

              <div className="profile-summary">
                <div>
                  <span>Current Role</span>
                  <strong>{currentRole}</strong>
                  <small>{organization}</small>
                </div>

                <div className="research-badge">
                  {publicationText}
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
          <div className="skills-heading">
            <h2 id="skills-title">
              Technical Expertise
            </h2>
          </div>

          <div className="skills-grid">
            {skills.data.map((item) => (
              <SkillCard
                key={item.title}
                item={item}
              />
            ))}

            {mlResearch.data.map((item) => (
              <SkillCard
                key={item.title}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
