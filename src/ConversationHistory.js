// src/ConversationHistory.js
import React from 'react';
import './ConversationHistory.css';

const ConversationHistory = () => {
    const conversations = [
        { id: 1, title: 'Conversation 1' },
        { id: 2, title: 'Conversation 2' },
        { id: 3, title: 'Conversation 3' },
    ];

    return (
        <div className="conversation-history">
            <h2>Conversation History</h2>
            <ul>
                {conversations.map((conv) => (
                    <li key={conv.id}>{conv.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ConversationHistory;
