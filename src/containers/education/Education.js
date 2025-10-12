import "./Education.scss";
import { degrees } from "../../portfolio";

const Education = () => {
  return (
    <div className="education-page">
      <div className="education-wrapper">
        <div className="education-hero">
          {/* <div className="hero-background">
            <div className="hero-circle circle-1"></div>
            <div className="hero-circle circle-2"></div>
            <div className="hero-circle circle-3"></div>
          </div> */}

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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>

            <h1 className="hero-title">Education</h1>
            <p className="hero-description">
              My academic journey and qualifications that shaped my career
            </p>
          </div>
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

        {/* Certifications Section */}
        <div className="certifications-section">
          <div className="cert-card">
            <div className="cert-icon-wrapper">
              <svg
                className="cert-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="cert-title">Certifications & Achievements</h3>
            <p className="cert-description">
              Professional certifications and notable achievements will be
              showcased here
            </p>
            <div className="cert-badge">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
