import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from "./AboutUs";
import Rules from "./Rules";
import Credits from "./Credits";
import Pricing from "./Pricing";
import Contact from "./Contact";
import ToS from "./ToS";
import PrivacyPolicy from "./PrivacyPolicy"
import ChatWindow from './ChatWindow';
import Signup from "./Signup";
import Login from "./Login";
import './App.css';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element ={<ChatWindow />} />
          <Route path="/ToS" element={<ToS />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    );
  }

export default App;
