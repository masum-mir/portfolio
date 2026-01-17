import React, { useState, useEffect } from "react";
import { experience } from "../../portfolio";
import "./Experience.scss";

const Experience = () => {
  const [openSections, setOpenSections] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Open first section by default
    if (experience.sections && experience.sections.length > 0) {
      setOpenSections({ [experience.sections[0].title]: true });
    }
  }, []);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className={`experience-page ${isVisible ? "visible" : ""}`}>
      <div className="experience-wrapper">
        <div className="experience-hero">
          <div className="hero-content">
            <div className="hero-badge">
              <svg
                className="badge-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h1 className="hero-title">{experience.title || "Experience"}</h1>
            
            <p className="hero-description">
              {experience.description ||
                "Explore my work history and professional experience"}
            </p>
          </div>
        </div>

        <div className="experience-timeline">
          {experience.sections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="timeline-section"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <div
                className={`section-header ${
                  openSections[section.title] ? "active" : ""
                }`}
                onClick={() => toggleSection(section.title)}
              >
                <div className="header-left">
                  <div className="section-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="header-content">
                    <h2 className="section-title">{section.title}</h2>
                    {/* <span className="section-count">
                      {section.experiences.length} {section.experiences.length === 1 ? 'position' : 'positions'}
                    </span> */}
                  </div>
                </div>
                <button className="toggle-btn" aria-label="Toggle section">
                  <svg
                    className={`toggle-icon ${
                      openSections[section.title] ? "rotated" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`section-content ${
                  openSections[section.title] ? "expanded" : ""
                }`}
              >
                <div className="content-inner">
                  {section.experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="experience-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="timeline-indicator">
                        <div className="timeline-dot"></div>
                        {index < section.experiences.length - 1 && (
                          <div className="timeline-line"></div>
                        )}
                      </div>

                      <div className="exp-card">
                        <div className="card-header">
                          <div className="company-logo">
                            <img
                              src={require(`../../assets/img/${exp.logo_path}`)}
                              alt={exp.company}
                              className="logo-img"
                            />
                          </div>

                          <div className="card-info">
                            <div className="info-top">
                              <div className="title-section">
                                <h3 className="job-title">{exp.title}</h3>
                                <a
                                  href={exp.company_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="company-link"
                                >
                                  {exp.company}
                                  <svg
                                    className="link-icon"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </a>
                              </div>

                              <div className="meta-tags">
                                <span className="duration-tag">
                                  <svg
                                    className="tag-icon"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                  {exp.duration}
                                </span>
                                {exp.location && (
                                  <span className="location-tag">
                                    <svg
                                      className="tag-icon"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                    </svg>
                                    {exp.location}
                                  </span>
                                )}
                              </div>
                            </div>

                            <p className="job-description">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
