import React from "react";
import { Link } from 'react-router-dom'; // Import Link component
import "./styles.css"; // Import your CSS file

const PrivacyPolicy = () => {
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
          <h2 className="section-title">Privacy Policy</h2>
          <div className="about-content">
            <div className="privacy-content">
              <h3>Introduction</h3>
              <p>
                At ChattinTime, we respect and value your privacy. This Privacy Policy explains how we collect, use, and safeguard the personal data you provide when using our chatbot service (the "Service"). By using the Service, you agree to the terms outlined in this policy.
              </p>
            </div>

            <div className="section">
              <h3>1. Information We Collect</h3>
              <p>
                We collect the following types of information when you use our chatbot service:
                <ul>
                  <li><strong>Personal Information:</strong> We may collect personal data such as your name, email address, or other identifiable information if you choose to provide it (e.g., via a form or when signing up).</li>
                  <li><strong>Usage Data:</strong> We automatically collect certain non-personally identifiable information about how you interact with the chatbot, such as IP addresses, browser type, and device information.</li>
                  <li><strong>Chat Data:</strong> Our chatbot collects and stores chat logs or messages exchanged between you and the chatbot for the purpose of improving service quality and user experience.</li>
                </ul>
              </p>
            </div>

            <div className="section">
              <h3>2. How We Use Your Information</h3>
              <p>
                The information we collect is used for the following purposes:
                <ul>
                  <li>To provide and improve the chatbot service, including analyzing user interactions to enhance performance.</li>
                  <li>To respond to your inquiries or requests and provide customer support.</li>
                  <li>To improve user experience by personalizing interactions with the chatbot.</li>
                  <li>For troubleshooting, data analysis, and system maintenance.</li>
                </ul>
              </p>
            </div>

            <div className="section">
              <h3>3. Data Security</h3>
              <p>
                We take reasonable precautions to protect your personal data from unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your information, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="section">
              <h3>4. Sharing Your Information</h3>
              <p>
                We do not sell, rent, or trade your personal information. However, we may share your information in the following circumstances:
                <ul>
                  <li><strong>With service providers:</strong> We may share your information with trusted third-party vendors who assist us in operating the chatbot service, such as hosting or data analytics services.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law, such as in response to a subpoena or other legal process.</li>
                </ul>
              </p>
            </div>

            <div className="section">
              <h3>5. Your Rights and Choices</h3>
              <p>
                You have certain rights regarding your personal information, including:
                <ul>
                  <li><strong>Access and Correction:</strong> You can request access to and correction of any personal information we hold about you.</li>
                  <li><strong>Data Deletion:</strong> You can request that we delete any personal data we have collected about you, subject to certain legal exceptions.</li>
                  <li><strong>Opt-out:</strong> You can opt out of receiving communications from us at any time by contacting us or updating your preferences in your account settings (if applicable).</li>
                </ul>
              </p>
            </div>

            <div className="section">
              <h3>6. Cookies and Tracking Technologies</h3>
              <p>
                We may use cookies and similar tracking technologies to enhance your experience with the chatbot. Cookies are small files stored on your device that help us improve the functionality of our service. You can control the use of cookies through your browser settings.
              </p>
            </div>

            <div className="section">
              <h3>7. Children's Privacy</h3>
              <p>
                The Service is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information from our records.
              </p>
            </div>

            <div className="section">
              <h3>8. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will update the "Last Updated" date at the top of the policy. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            <div className="section">
              <h3>9. Contact Us</h3>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                <br />
                Email: <a href="mailto:privacy@chattintime.com">privacy@chattintime.com</a>
              </p>
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
            <Link to="/ToS">Terms of Service</Link>
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

export default PrivacyPolicy;
