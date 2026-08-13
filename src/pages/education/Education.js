import { degrees } from "../../data/portfolio";
import "./Education.scss";

const Education = () => (
  <main className="education-page">
    <div className="education-wrapper">
      <header className="education-intro">
        <span className="page-eyebrow">Education</span>

        <p>
          My Computer Science and Engineering studies complement hands-on
          software development and research in machine learning, deep learning,
          IoT, and networked systems.
        </p>
      </header>

      <section className="education-section" aria-labelledby="education-title">
        <div className="education-heading">
          <span className="section-kicker">Academic Journey</span>

          <h2 id="education-title">University Education</h2>
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
                  <div className="degree-heading-content">
                    <h3>{degree.title}</h3>

                    <p className="degree-name">{degree.subtitle}</p>
                  </div>

                  <span className="degree-period">{degree.duration}</span>
                </div>

                <ul>
                  {degree.descriptions.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>

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
      </section>
    </div>
  </main>
);

export default Education;
