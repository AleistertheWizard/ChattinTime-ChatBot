// src/Header.js
import React, { useState } from 'react';
import './Header.css';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import SettingsModal from './SettingsModal';

const Header = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);
    const [isSettingsOpen, setSettingsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Function to toggle dark mode
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
                <button className="header-button">New Conversation</button>
                <button className="header-button" onClick={() => setSettingsOpen(true)}>Settings</button>
                
                <div className="header-buttons">
                    <button className="header-button" onClick={() => setLoginOpen(true)}>Login</button>
                    <button className="header-button" onClick={() => setSignupOpen(true)}>Signup</button>
                </div>

                <label htmlFor="toggle" className="toggle--label">
                    <span className="toggle--label-background"></span>
                </label>
            </header>

            <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
            <SignupModal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
            <SettingsModal 
                isOpen={isSettingsOpen} 
                onClose={() => setSettingsOpen(false)} 
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode} 
            />
        </>
    );
};

export default Header;