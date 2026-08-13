import { experience, publications } from "../../data/portfolio";
import "./Experience.scss";

const Experience = () => {
  const roles = experience.sections.flatMap(
    (section) => section.experiences || [],
  );

  const highlightAuthor = (authors) => {
    const target = "Md Masum";
    const parts = authors.split(target);

    return parts.map((part, index) => (
      <span key={`${part}-${index}`}>
        {part}

        {index < parts.length - 1 && (
          <strong className="author-highlight">{target}</strong>
        )}
      </span>
    ));
  };

  return (
    <main className="experience-page">
      <div className="experience-wrapper">
        <header className="experience-intro">
          <span className="page-eyebrow">Experience & Research</span>

          <p>{experience.description}</p>
        </header>

        <section
          className="experience-section"
          aria-labelledby="professional-experience-title"
        >
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">Career</span>

              <h2 id="professional-experience-title">
                Professional Experience
              </h2>
            </div>
          </div>

          <div className="experience-list">
            {roles.map((exp, index) => (
              <article
                className="experience-card"
                key={`${exp.title}-${exp.company}-${exp.duration}`}
              >
                {/* Timeline */}

                <div className="timeline-column" aria-hidden="true">
                  <span className="timeline-dot" />

                  {index < roles.length - 1 && (
                    <span className="timeline-line" />
                  )}
                </div>

                {/* Experience Content */}

                <div className="experience-card-body">
                  <div className="experience-card-head">
                    <div className="company-block">
                      <div className="company-logo">
                        <img
                          src={require(`../../assets/img/${exp.logo_path}`)}
                          alt={`${exp.company} logo`}
                        />
                      </div>

                      <div className="company-info">
                        <div className="role-row">
                          <h3>{exp.title}</h3>

                          {exp.duration.includes("Present") && (
                            <span className="current-badge">Current</span>
                          )}
                        </div>

                        <a
                          href={exp.company_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {exp.company}

                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>

                    <div className="experience-meta">
                      <span className="experience-duration">
                        {exp.duration}
                      </span>

                      <span className="experience-location">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="publications-section"
          aria-labelledby="publications-title"
        >
          <div className="section-heading-row publications-heading">
            <div>
              <span className="section-kicker">Research Output</span>

              <h2 id="publications-title">Publications</h2>
            </div>

            <span className="publication-count">
              {publications.data.length} Publications · 2026
            </span>
          </div>

          <div className="publication-list">
            {publications.data.map((pub, index) => (
              <article className="publication-card" key={pub.id}>
                <div className="publication-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="publication-content">
                  <div className="publication-topline">
                    <span>{pub.type}</span>
                    <span>{pub.year}</span>
                  </div>

                  <h3>{pub.name}</h3>

                  <p className="authors">{highlightAuthor(pub.authors)}</p>

                  <p className="venue">{pub.venue}</p>

                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-link"
                    >
                      View Publication
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Experience;
