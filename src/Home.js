import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css"; // Ensure the CSS file is imported

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            {/* Link to homepage with custom styles */}
            <Link to="/" className="no-style-link">
              CHATTIN<span>TIME</span>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Instant Answers, Anytime, Anywhere.</h1>
          <div className="cta-buttons">
            <a href="chatbot" className="watch-btn">Try it now.</a>
          </div>
        </div>
      </section>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Our Company</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/credits">Credits</Link> {/* Use Link component */}
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
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
    </div>
  );
};

export default Home;
