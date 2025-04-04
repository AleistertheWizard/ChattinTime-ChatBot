import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles.css"; // Make sure to import the styles.css

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    setErrorMessage(""); // Clear any previous errors
    setSuccessMessage(""); // Clear any previous success message

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username: formData.name, // Use correct key as expected by the backend
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup response:", response.data);

      // Handle successful signup
      setSuccessMessage("Signup successful! Please login.");
    } catch (err) {
      console.error("Signup error:", err);
      setErrorMessage(
        err.response?.data?.message || "An error occurred during signup."
      );
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="signup-container">
      {/* Fixed logo at the top-right corner */}
      <div className="logo-container">
        <Link to="/" className="logo no-style-link">
          CHAT<span>BOT</span>
        </Link>
      </div>

      <div className="signup-box">
        <h2>Signup</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <div className="login-link">
          <p>
            Already have an account? <Link to="/login">Login!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
