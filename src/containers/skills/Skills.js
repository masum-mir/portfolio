import { skills, learning } from "../../portfolio";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-header-section">
        <div className="header-icon">
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h1 className="skills-header">What I Do?</h1>
        <div className="header-divider"></div>
      </div>

      <div className="skills-content">
        {skills.data.map((skill, i) => (
          <div key={i} className="skill-section">
            <div className="skill-card">
              <div className="skill-header">
                <h2 className="skill-title">{skill.title}</h2>
              </div>

              <div className="software-skills">
                <ul className="skills-list">
                  {skill.softwareSkills.map((logo, idx) => (
                    <li
                      key={idx}
                      className="skill-icon-item"
                      title={logo.skillName}
                    >
                      <span
                        className="iconify skill-icon"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      />
                      <span className="skill-name">{logo.skillName}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skill-descriptions">
                {skill.skills.map((skillSentence, i) => (
                  <p key={i} className="skill-text">
                    {skillSentence}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Section */}
      <div className="skills-header-section learning-section">
        <div className="header-icon">
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h1 className="skills-header">What I'm Learning</h1>
        <div className="header-divider"></div>
      </div>

      <div className="skills-content">
        {learning.data.map((skill, i) => (
          <div key={i} className="skill-section">
            <div className="skill-card learning-card">
              <div className="skill-header">
                <h2 className="skill-title">{skill.title}</h2>
                {/* <span className="learning-badge">In Progress</span> */}
              </div>

              <div className="software-skills">
                <ul className="skills-list">
                  {skill.softwareSkills.map((logo, idx) => (
                    <li
                      key={idx}
                      className="skill-icon-item"
                      title={logo.skillName}
                    >
                      <span
                        className="iconify skill-icon"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      />
                      <span className="skill-name">{logo.skillName}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skill-descriptions">
                {skill.skills.map((skillSentence, i) => (
                  <p key={i} className="skill-text">
                    {skillSentence}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
