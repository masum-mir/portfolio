import React from "react";
import "./Error404.scss";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-page">
      <div className="error-wrapper">
        <div className="error-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>

        <div className="error-content">
          <div className="error-number">
            <span className="digit digit-4-1">4</span>
            <div className="digit digit-0">
              <svg className="broken-circle" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="502"
                  strokeDashoffset="125"
                  className="circle-path"
                />
                <line
                  x1="40"
                  y1="40"
                  x2="160"
                  y2="160"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="cross-line"
                />
              </svg>
            </div>
            <span className="digit digit-4-2">4</span>
          </div>

          <div className="error-text">
            <h1 className="error-title">Oops! Page Not Found</h1>
            <p className="error-description">
              The page you're looking for seems to have wandered off into the
              digital wilderness. Don't worry, we'll help you find your way back
              home!
            </p>
          </div>

          <div className="error-suggestions">
            <div className="suggestion-item">
              <svg
                className="suggestion-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Check the URL for typos</span>
            </div>
            <div className="suggestion-item">
              <svg
                className="suggestion-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Go back to the homepage</span>
            </div>
            <div className="suggestion-item">
              <svg
                className="suggestion-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Contact me if the problem persists</span>
            </div>
          </div>

          <div className="error-actions">
            <Link to="/home" className="action-btn primary-btn">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Back to Home</span>
            </Link>

            <Link to="/contact" className="action-btn secondary-btn">
              <span>Contact Support</span>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
