import { ProjectsData } from "../../data/portfolio";
import "./Projects.scss";

const Projects = () => (
  <main className="projects-page">
    <div className="projects-wrapper">

      {/* =====================================================
          PAGE INTRO
      ===================================================== */}

      <header className="projects-intro">
        <span className="page-eyebrow">Selected Work</span>
        <p>
          A selection of projects across software engineering, backend
          development, full-stack applications, machine learning, networking,
          and responsive web development. Each project highlights practical
          problem-solving, implementation, and the technologies used to build it.
        </p>
      </header>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        className="projects-section"
        aria-labelledby="featured-projects-title"
      >
        <div className="projects-heading-row">

          <div>
            <span className="section-kicker">Portfolio</span>

            <h2 id="featured-projects-title">
              Featured Projects
            </h2>
          </div>

          <a
            className="github-all-link"
            href="https://github.com/masum-mir?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Repositories
            <span aria-hidden="true">↗</span>
          </a>

        </div>

        <div className="projects-grid">

          {ProjectsData.data.map((repo) => (
            <article
              className="project-card"
              key={repo.id}
            >

              <div className="project-card-top">
                <span className="project-category">
                  {repo.category || "Project"}
                </span>

                <span className="project-date">
                  {repo.createdAt}
                </span>
              </div>

              <div
                className="project-icon"
                aria-hidden="true"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M4 6.75A1.75 1.75 0 015.75 5h4.08c.46 0 .9.18 1.23.51L12.55 7h5.7A1.75 1.75 0 0120 8.75v8.5A1.75 1.75 0 0118.25 19H5.75A1.75 1.75 0 014 17.25V6.75z"
                  />
                </svg>
              </div>

              <h3>
                {repo.name}
              </h3>

              <p className="project-description">
                {repo.description}
              </p>

              <div
                className="project-stack"
                aria-label={`${repo.name} technologies`}
              >
                {repo.languages.map((language) => (
                  <span key={language.name}>
                    {language.name}
                  </span>
                ))}
              </div>

              <a
                className="project-link"
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <span aria-hidden="true">↗</span>
              </a>

            </article>
          ))}

        </div>
      </section>

    </div>
  </main>
);

export default Projects;