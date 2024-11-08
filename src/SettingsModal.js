import React from 'react';

const SettingsModal = ({ isOpen, onClose, toggleTheme, isDarkMode }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Settings</h2>
                <div className="theme-switcher">
                    <label>
                        <input type="radio" checked={isDarkMode} onChange={toggleTheme}/> 
                        Dark Mode
                    </label>
                    <label>
                        <input type="radio" checked={!isDarkMode} onChange={toggleTheme}/> 
                        Light Mode
                    </label>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SettingsModal;