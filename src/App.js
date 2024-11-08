// src/App.js
import React from 'react';
import Header from './Header';
import ChatWindow from './ChatWindow';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <ChatWindow />
        </div>
    );
};

export default App;