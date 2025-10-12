import "./Greeting.scss";

const Greeting = () => {
  return (
    <div className="greeting-container">
      <div className="greeting-content">
        <div className="greeting-image-section">
          <div className="image-wrapper">
            <div className="image-border"></div>
            <img
              className="profile-image"
              alt="Masum - Software Engineer"
              src={require("../../assets/img/myimg.jpg")}
            />
          </div>

          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-dot dot-1"></div>
          <div className="decoration-dot dot-2"></div>
          <div className="decoration-dot dot-3"></div>
        </div>

        <div className="greeting-text-section">
          <div className="text-content">
            <div className="tag-line">
              <span className="tag-icon">👋</span>
              <span className="tag-text">Hello, I'm</span>
            </div>

            <h1 className="greeting-heading">
              <span className="name-text">Masum</span>
              <span className="cursor-blink">|</span>
            </h1>

            <div className="title-wrapper">
              <h2 className="job-title">Junior Software Engineer</h2>
              <div className="title-underline"></div>
            </div>

            <p className="greeting-description">
              Skilled in <span className="highlight">Java</span>,{" "}
              <span className="highlight">Spring Boot</span>,{" "}
              <span className="highlight">React.js</span>,{" "}
              <span className="highlight">JavaScript</span>,{" "}
              <span className="highlight">HTML</span>,{" "}
              <span className="highlight">CSS</span>, and{" "}
              <span className="highlight">MySQL</span>. Passionate about
              building responsive, high-performance web applications and
              delivering maintainable, scalable solutions.
            </p>

            <div className="cta-buttons">
              <a
                href="https://github.com/masum-mir/my-portfolio/blob/main/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg
                  className="btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>View Resume</span>
              </a>

              <a href="contact" className="btn btn-secondary">
                <span>Contact Me</span>
                <svg
                  className="btn-icon"
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
            </div>

            {/* Quick Stats */}
            {/* <div className="quick-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div> */}
    </div>
  );
};

export default Greeting;
