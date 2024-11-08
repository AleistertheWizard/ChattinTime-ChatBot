// src/ChatWindow.js
import React, { useState } from 'react';
import axios from 'axios';
import './ChatWindow.css'; // Import the CSS file

const ChatWindow = () => {
    const [messages, setMessages] = useState([]); // State to hold chat messages
    const [inputValue, setInputValue] = useState(''); // State for input field

    const handleSendMessage = async () => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
    
            console.log('Sending message to backend:', inputValue);
    
            try {
                const response = await axios.post('http://localhost:5000/api/chat', {
                    message: inputValue
                });
    
                const botResponse = response.data.response;
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: botResponse, sender: 'bot' }
                ]);
            } catch (error) {
                console.error('Error communicating with backend:', error);
    
                // Check if the error has a response from the server
                if (error.response) {
                    // The request was made and the server responded with a status code
                    const statusCode = error.response.status;
                    const errorMessage = error.response.data.message || 'An error occurred';
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: `Error ${statusCode}: ${errorMessage}`, sender: 'bot' }
                    ]);
                } else if (error.request) {
                    // The request was made but no response was received
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: 'Error: No response received from the server.', sender: 'bot' }
                    ]);
                } else {
                    // Something happened in setting up the request
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: `Error: ${error.message}`, sender: 'bot' }
                    ]);
                }
            }
        }
    };
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage(); // Send message on Enter key press
            event.preventDefault(); // Prevent default behavior (like form submission)
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-log">
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                        <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown} // Add keydown event listener
                    className="input-field" // Use CSS class
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default ChatWindow;
