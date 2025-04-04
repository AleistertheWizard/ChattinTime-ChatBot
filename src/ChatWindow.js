import React, { useState } from 'react';
import axios from 'axios';
import './ChatWindow.css';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]); // Chat messages
    const [inputValue, setInputValue] = useState(''); // Input field value
    const [generatingImage, setGeneratingImage] = useState(false); // Image generation status

    const handleSendMessage = async () => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');

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
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Error: Unable to get a response.', sender: 'bot' }
                ]);
            }
        }
    };

    const handleGenerateImage = async () => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: `Generating image for: ${inputValue}`, sender: 'bot' }]);
            setInputValue('');
            setGeneratingImage(true);

            try {
                const response = await axios.post('http://localhost:5000/api/generate-image', {
                    prompt: inputValue
                });

                const imageUrl = `data:image/png;base64,${response.data.image}`;
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: `Generated Image:`, sender: 'bot', image: imageUrl }
                ]);
            } catch (error) {
                console.error('Error generating image:', error);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Error: Unable to generate image.', sender: 'bot' }
                ]);
            } finally {
                setGeneratingImage(false);
            }
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
            event.preventDefault();
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="logo">
                    <a href="/" className="no-style-link">
                        CHATTIN<span>TIME</span>
                    </a>
                </div>
            </div>
            <div className="chat-log">
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                        <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
                        {msg.image && <img src={msg.image} alt="Generated" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                    </div>
                ))}
            </div>
            <div className="ch-input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="ch-input-field"
                    placeholder="Type your message or prompt..."
                />
                <button onClick={handleSendMessage} className="ch-send-button">Send</button>
             
            </div>
        </div>
    );
};

export default ChatWindow;
