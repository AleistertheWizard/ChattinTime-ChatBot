import React from "react";
import { Link } from 'react-router-dom'; // Import Link component
import "./styles.css"; // Import your CSS file

const About = () => {
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

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>
          <div className="about-content">
            <div className="mission-vision">
              <div className="mission">
                <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
                <p>
                  At ChattinTime, we strive to make conversations more intuitive, intelligent, and accessible. Our mission is to revolutionize 
                  human-computer interaction by creating bots that are not only useful but also engaging and easy to use.
                </p>
              </div>
              <div className="vision">
                <h3><i className="fas fa-eye"></i> Our Vision</h3>
                <p>
                  Our vision is to become the global leader in conversational AI, empowering businesses and individuals to automate 
                  and enhance their communication. We aim to make every interaction smarter and more efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Human-Centered</h3>
              <p>We focus on creating bots that understand and engage users in a natural, human-like manner.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Security & Privacy</h3>
              <p>We prioritize user privacy and ensure all conversations are secure and confidential.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-cogs"></i>
              <h3>Innovation</h3>
              <p>We are committed to continuously improving our technology to make conversations more intelligent and useful.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-comments"></i>
              <h3>Accessibility</h3>
              <p>We believe in making intelligent conversation accessible to everyone, no matter their background or skill level.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Our Company</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/features">Features</Link>
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

export default About;
