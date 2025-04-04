import React from "react";
import { Link } from 'react-router-dom'; // Import Link component
import "./styles.css"; // Import your CSS file

const ToS = () => {
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
          <h2 className="section-title">Terms of Service</h2>
          <div className="about-content">
            <div className="terms-content">
              <h3>Welcome to the ChattinTime Service</h3>
              <p>
                By using our chatbot services (the "Service"), you agree to the following terms and conditions ("Terms of Service"). Please read these terms carefully before using the Service.
              </p>
            </div>

            <div className="section">
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing or using the chatbot services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use the Service.
              </p>
            </div>

            <div className="section">
              <h3>2. Use of Service</h3>
              <p>
                The Service is intended for personal and non-commercial use only. You agree to use the chatbot in a lawful and respectful manner. You are responsible for any content you submit to the chatbot.
              </p>
            </div>

            <div className="section">
              <h3>3. User Conduct</h3>
              <p>
                You agree not to use the chatbot to:
                <ul>
                  <li>Submit any content that is harmful, offensive, or illegal.</li>
                  <li>Impersonate any person or entity.</li>
                  <li>Engage in disruptive behavior or activities that interfere with the Service's functionality.</li>
                </ul>
              </p>
            </div>

            <div className="section">
              <h3>4. Privacy and Data Collection</h3>
              <p>
                We take your privacy seriously. Our chatbot may collect and store data such as chat logs, user inputs, and technical information for the purpose of improving the Service. By using the Service, you consent to our data collection practices as described in our Privacy Policy.
              </p>
              <p>
                For more details on how your data is collected and used, please refer to our <Link to="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>

            <div className="section">
              <h3>5. Limitations of Liability</h3>
              <p>
                The chatbot service is provided on an "as-is" basis, and we do not guarantee that the Service will be uninterrupted or error-free. We are not responsible for any damages or losses that may occur as a result of using the Service.
              </p>
            </div>

            <div className="section">
              <h3>6. Termination</h3>
              <p>
                We reserve the right to suspend or terminate your access to the Service at our discretion, without notice, if we believe that you have violated these Terms of Service.
              </p>
            </div>

            <div className="section">
              <h3>7. Modifications to Terms</h3>
              <p>
                We may update these Terms of Service from time to time. Any changes will be posted on this page, and you are responsible for reviewing these Terms regularly. By continuing to use the Service, you accept any modifications to the Terms of Service.
              </p>
            </div>

            <div className="section">
              <h3>8. Governing Law</h3>
              <p>
                These Terms of Service are governed by the laws of [Your Country/State]. Any disputes related to the Service shall be resolved in the courts located in [Jurisdiction].
              </p>
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

export default ToS;
