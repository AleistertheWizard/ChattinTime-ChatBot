import React from "react";
import { Link } from 'react-router-dom'; // Import Link component
import "./styles.css"; // Import your CSS file

const Pricing = () => {
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

      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Choose Your Plan</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Free Plan</h3>
              <p className="price">$0/month</p>
              <ul className="plan-features">
                <li>Access to basic chatbot features</li>
                <li>Limited number of interactions per month</li>
                <li>Community support</li>
              </ul>
              <Link to="/signup" className="btn">Sign Up</Link>
            </div>

            <div className="pricing-card">
              <h3>Basic Plan</h3>
              <p className="price">$9.99/month</p>
              <ul className="plan-features">
                <li>All Free Plan features</li>
                <li>Increased interaction limits</li>
                <li>Email support</li>
                <li>Access to additional chatbot customization options</li>
              </ul>
              <Link to="/signup" className="btn">Sign Up</Link>
            </div>

            <div className="pricing-card">
              <h3>Pro Plan</h3>
              <p className="price">$29.99/month</p>
              <ul className="plan-features">
                <li>All Basic Plan features</li>
                <li>Unlimited interactions with the chatbot</li>
                <li>Priority support</li>
                <li>Advanced analytics and reports</li>
                <li>Access to premium chatbot features</li>
              </ul>
              <Link to="/signup" className="btn">Sign Up</Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
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

export default Pricing;
