const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const authRoutes = require('./routes/auth');  // Import auth routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // To parse JSON body data

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);  // Use auth routes for signup and login

// Cohere API route for chatbot
const API_KEY = 'api key here';  // Directly set the Cohere API Key here

app.post('/api/chat', async (req, res) => {
    const userInput = req.body.message;

    try {
        const response = await axios.post(
            'https://api.cohere.ai/v1/generate', // Cohere's API endpoint
            {
                prompt: userInput,
                max_tokens: 50,         // Adjust max tokens as needed for response length
                temperature: 0.7,       // Adjust for response randomness (0 to 1)
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const botResponse = response.data.generations[0].text;
        res.json({ response: botResponse });
    } catch (error) {
        console.error('Error communicating with Cohere API:', error);
        res.status(500).send('Error communicating with LLM API');
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
