import "./Education.scss";
import { degrees } from "../../portfolio";

const Education = () => {
  return (
    <div className="education-page">
      <div className="education-wrapper">
        <div className="education-hero"> 
 
        </div>

        {/* degree section */}
        <div className="education-timeline">
          <div className="timeline-header">
            <h2 className="timeline-title">Academic Journey</h2>
            <div className="timeline-line"></div>
          </div>

          <div className="timeline-content">
            {degrees.degrees.map((degree, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot">
                    <div className="dot-inner"></div>
                  </div>
                  {index < degrees.degrees.length - 1 && (
                    <div className="timeline-connector"></div>
                  )}
                </div>

                <div className="degree-card">
                  <div className="card-header">
                    {degree.logo_path && (
                      <div className="card-logo-section">
                        <div className="logo-container">
                          <img
                            src={require(`../../assets/img/${degree.logo_path}`)}
                            alt={degree.alt_name}
                            className="logo-img"
                          />
                        </div>
                      </div>
                    )}

                    <div className="card-main">
                      <div className="card-top">
                        <div className="degree-info">
                          <h3 className="degree-name">{degree.title}</h3>
                          <p className="institution-name">{degree.subtitle}</p>
                        </div>

                        <div className="duration-tag">
                          <svg
                            className="clock-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{degree.duration}</span>
                        </div>
                      </div>

                      <ul className="description-list">
                        {degree.descriptions.map((desc, i) => (
                          <li key={i} className="description-item">
                            <svg
                              className="check-icon"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {degree.website_link && (
                        <a
                          href={degree.website_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="website-link"
                        >
                          <span>Visit Institution</span>
                          <svg
                            className="arrow-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default Education;
