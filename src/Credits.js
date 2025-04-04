import React from "react";
import "./styles.css";
import { Link } from "react-router-dom"

const Credits = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
            <Link to="/" className="no-style-link">
              CHATTIN<span>TIME</span>
            </Link>
        </div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <section className="content-section" style={{ marginTop: "80px" }}>
        <div className="container">
          <h1>Our Team</h1>
          <div className="team-grid">
            <div className="team-member">
              <img src="rishil png.png" alt="" />
              <h3>Rishil Abhijit Jalisatgih</h3>
              <p className="title">PES Electronic City Campus</p>
              <p className="bio">SRN: PES2UG23CS482</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="team-member">
              <img src="rithvik png.png" alt="" />
              <h3>Rithvik Hemanth</h3>
              <p className="title">PES Electronic City Campus</p>
              <p className="bio">SRN: PES2UG23CS484</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Our Company</h3>
            <Link to="/">Home</Link> {/* Use Link component */}
            <Link to="/about">About Us</Link> {/* Use Link component */}
            <Link to="/rules">Rules</Link> {/* Use Link component */}
            <Link to="/pricing">Pricing</Link> {/* Use Link component */}
            <Link to="/contact">Contact</Link> {/* Use Link component */}
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ChattinTime. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Credits;