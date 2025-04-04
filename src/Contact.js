import React from "react";
import { Link } from "react-router-dom"
import "./styles.css"; // Import your CSS file

const Contact = () => {
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
          <h1>Contact Us</h1>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Address</h3>
                <p>
                  PES University
                  <br />
                  Electronic City
                  <br />
                  Bangalore, India
                </p>
              </div>
              <div className="info-card">
                <i className="fas fa-phone"></i>
                <h3>Phone</h3>
                <p>xxxxxxxxxx</p>
              </div>
              <div className="info-card">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>support@chattintime.com</p>
              </div>
              <div className="info-card">
                <i className="fas fa-clock"></i>
                <h3>Support Hours</h3>
                <p>24/7 Customer Support</p>
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
            <Link to="/credits">Credits</Link> {/* Use Link component */}
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

export default Contact;