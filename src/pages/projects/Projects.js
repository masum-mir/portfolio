import { ProjectsData } from "../../data/portfolio";
import "./Projects.scss";

const PROJECT_GROUPS = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    category: "Software Engineering",
  },
  {
    id: "research-networking",
    title: "Research / Networking",
    category: "Research / Networking",
  },
  {
    id: "ai-machine-learning",
    title: "AI / Machine Learning",
    category: "AI / Machine Learning",
  },
];

const ProjectCard = ({ repo }) => (
  <article className="project-card">
    <div className="project-card-top">
      <span className="project-category">
        {repo.category || "Project"}
      </span>

      {repo.createdAt && (
        <span className="project-date">
          {repo.createdAt}
        </span>
      )}
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

    {!!repo.languages?.length && (
      <div
        className="project-stack"
        aria-label={`${repo.name} technologies`}
      >
        {repo.languages.map((language) => (
          <span key={`${repo.id}-${language.name}`}>
            {language.name}
          </span>
        ))}
      </div>
    )}

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
);

const Projects = () => {
  const projects = ProjectsData?.data || [];

  return (
    <main className="projects-page">
      <div className="projects-wrapper">
        <section
          className="projects-section"
          aria-labelledby="featured-projects-title"
        >
          <div className="projects-heading-row">
            <h1 id="featured-projects-title">
              Featured Projects
            </h1>

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

          <div className="project-groups">
            {PROJECT_GROUPS.map((group) => {
              const groupProjects = projects.filter(
                (project) => project.category === group.category
              );

              if (groupProjects.length === 0) {
                return null;
              }

              return (
                <section
                  className="project-group"
                  key={group.id}
                  aria-labelledby={`${group.id}-title`}
                >
                  <h2
                    className="project-group-title"
                    id={`${group.id}-title`}
                  >
                    {group.title}
                  </h2>

                  <div className="projects-grid">
                    {groupProjects.map((repo) => (
                      <ProjectCard
                        key={repo.id}
                        repo={repo}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
