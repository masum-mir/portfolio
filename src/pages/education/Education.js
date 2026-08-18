import { degrees } from "../../data/portfolio";
import "./Education.scss";

const Education = () => (
  <main className="education-page">
    <div className="education-wrapper">
      <div className="page-heading-row">
        <h1>Education</h1>
      </div>

      <div className="education-list">
        {degrees.degrees.map((degree) => (
          <article
            className="degree-card"
            key={`${degree.title}-${degree.duration}`}
          >
            <div className="education-logo">
              <img
                src={require(`../../assets/img/${degree.logo_path}`)}
                alt={`${degree.alt_name} logo`}
              />
            </div>

            <div className="degree-content">
              <div className="degree-topline">
                <div>
                  <h2>{degree.title}</h2>
                  <p className="degree-name">
                    {degree.subtitle}
                  </p>
                </div>

                <span className="degree-period">
                  {degree.duration}
                </span>
              </div>

              {!!degree.descriptions?.length && (
                <ul>
                  {degree.descriptions.map((description) => (
                    <li key={description}>
                      {description}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Institution
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </main>
);

export default Education;
