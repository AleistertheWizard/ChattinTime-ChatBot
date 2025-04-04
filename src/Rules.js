import React from "react";
import { Link } from 'react-router-dom'; // Import Link component
import "./styles.css"; // Import your CSS file

const Rules = () => {
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
          <h2 className="section-title">ChattinTime Rules and Guidelines</h2>
          <div className="about-content">
            <div className="rules-content">
              <h3>1. Respectful Communication</h3>
              <p>
                Please be respectful when interacting with the chatbot. Offensive language, hate speech, or any form of discrimination will not be tolerated. Treat others with kindness and respect, just as you would in real-life conversations.
              </p>

              <h3>2. No Spamming</h3>
              <p>
                Avoid sending excessive or repeated messages that disrupt the flow of conversation. Spamming the chatbot with irrelevant or unnecessary input may result in temporary or permanent suspension from using the service.
              </p>

              <h3>3. No Personal Information Sharing</h3>
              <p>
                For your safety and privacy, do not share personal information, such as your home address, phone number, or credit card details while chatting with the bot. We advise users not to share sensitive data in public chat interactions.
              </p>

              <h3>4. Be Honest and Clear</h3>
              <p>
                Provide clear, honest, and relevant input when chatting with the bot. This helps the chatbot respond more effectively and ensures better interactions. Avoid giving misleading or confusing information that could hinder the chatbot's responses.
              </p>

              <h3>5. No Malicious Use</h3>
              <p>
                Do not attempt to exploit or abuse the chatbot's features. This includes attempting to hack the system, gain unauthorized access, or cause damage to the platform in any way. Engaging in malicious activities can result in immediate termination of access.
              </p>

              <h3>6. Appropriate Content</h3>
              <p>
                Ensure that your conversations remain appropriate for all audiences. Any conversations involving explicit content, sexually suggestive material, or illegal activities are strictly prohibited. Such interactions may lead to a ban from the chatbot service.
              </p>

              <h3>7. No Impersonation</h3>
              <p>
                Do not impersonate others, including other users, public figures, or the chatbot itself. Misleading others by pretending to be someone you're not, or trying to deceive the chatbot for malicious purposes, is not allowed.
              </p>

              <h3>8. Adherence to Legal Guidelines</h3>
              <p>
                By using the chatbot, you agree to comply with all applicable local, state, and national laws. You are responsible for ensuring that your use of the service does not violate any laws or regulations.
              </p>

              <h3>9. Reporting Issues</h3>
              <p>
                If you encounter any issues, bugs, or inappropriate content during your chatbot interaction, please report them immediately. Your feedback helps us improve the chatbot service and ensure a better experience for everyone.
              </p>

              <h3>10. Modifications to Rules</h3>
              <p>
                We reserve the right to modify or update these rules at any time. Any changes will be communicated to you through updates to this page. We encourage you to review the rules periodically to stay informed about the guidelines.
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

export default Rules;
