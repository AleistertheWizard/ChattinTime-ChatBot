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
const COHERE_API_KEY = 'KtJtNaU3zRjNqdt0yVFiUxvnSIoMDZTFH59cWAE4';  // Set your Cohere API Key here

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
                    Authorization: `Bearer ${COHERE_API_KEY}`,
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

// StarryAi image generation route
const STARRYAI_API_KEY = '';  // Set your StarryAI API Key here

app.post('/api/generate-image', async (req, res) => {
    const { prompt } = req.body;  // Image prompt sent from the client

    try {
        const response = await axios.post(
            'https://api.starryai.com/creations/',  // StarryAI's image generation API endpoint
            {
                prompt: prompt,  // Image generation prompt
                num_images: 1,    // Number of images to generate
                size: '512x512',  // Image size (check StarryAI's documentation for available sizes)
            },
            {
                headers: {
                    'X-API-Key': STARRYAI_API_KEY,  // Authorization header with API key
                    'Content-Type': 'application/json',
                },
            }
        );

        // Log the response to verify the correct structure
        console.log(response.data);

        // Assuming StarryAI's API returns a `data` object with an `images` array containing URLs
        const imageUrl = response.data.images && response.data.images[0]?.url;  // Check if URL exists

        if (!imageUrl) {
            return res.status(500).send('No image URL returned from StarryAI API');
        }

        res.json({ imageUrl: imageUrl });  // Return the image URL to the frontend
    } catch (error) {
        console.error('Error generating image with StarryAI:', error);
        res.status(500).send('Error generating image');
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
