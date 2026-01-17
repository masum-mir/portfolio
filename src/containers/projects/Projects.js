import "./Projects.scss";
import {
  ProjectsData, 
  publications,
} from "../../portfolio.js";

function openInNewTab(url) {
  const win = window.open(url, "_blank");
  if (win) win.focus();
}

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-wrapper">
        <div className="projects-hero">
          {/* <div className="hero-background">
            <div className="bg-grid"></div>
            <div className="bg-glow glow-1"></div>
            <div className="bg-glow glow-2"></div>
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>

            <h1 className="hero-title">Projects</h1>
            <p className="hero-description">
  I build full-stack web applications using Java, Spring Boot, and React, focusing on scalable backends and responsive, user-friendly frontends.
            </p>
          </div>
        </div>

        <div className="projects-section">
          <div className="section-header">
            <div className="header-line"></div>
            <h2 className="section-title">Featured Projects</h2>
            <div className="header-line"></div>
          </div>

          <div className="projects-grid">
            {ProjectsData.data.map((repo, index) => (
              <div
                key={repo.id}
                className="project-card"
                onClick={() => openInNewTab(repo.url)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-shine"></div>

                <div className="card-header">
                  <div className="project-icon">
                    <svg
                      className="repo-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="external-link">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="project-name">{repo.name}</h3>
                  <p className="project-description">{repo.description}</p>
                </div>

                <div className="card-footer">
                  <div className="project-meta">
                    <svg
                      className="meta-icon"
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
                    <span className="meta-text">
                      {repo.createdAt}
                    </span>
                  </div>
                  <div className="view-project">
                    <span>View Project</span>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="more-button ">
            <a
              href="https://github.com/masum-mir?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="more-projects"
              aria-label="GitHub"
            >
              <span>More Projects</span>
            </a>
          </div>
        </div>

        {publications.data.length > 0 && (
          <>
            <div className="publications-section">
              <div className="section-header">
                <div className="header-line"></div>
                <h2 className="section-title">
                  Publications
                </h2>
                <div className="header-line"></div>
              </div>

              <p className="section-description">
                Some of my published Articles, Blogs and Research.
              </p>

              <div className="publications-grid">
                {publications.data.map((pub, index) => (
                  <div
                    key={pub.id}
                    className="publication-card"
                    onClick={() => openInNewTab(pub.url)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="pub-badge">
                      <svg
                        className="pub-icon"
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

                    <div className="pub-content">
                      <h3 className="pub-title">{pub.name}</h3>
                      <p className="pub-description">{pub.description}</p>

                      <div className="pub-footer">
                        <div className="pub-date">
                          <svg
                            className="date-icon"
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
                          <span>Published {pub.createdAt}</span>
                        </div>

                        <div className="read-more">
                          <span>Read More</span>
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="projects-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div className="stat-number">{ProjectsData.data.length}+</div>
            <div className="stat-label">Projects</div>
          </div
          >
          <div></div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="stat-number">{publications.data.length}+</div>
            <div className="stat-label">Publications</div>
          </div>
 
        </div>
      </div>
    </div>
  );
};

export default Projects;
