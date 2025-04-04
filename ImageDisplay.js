// src/ImageDisplay.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ImageDisplay = () => {
    const location = useLocation();
    const { imageUrl } = location.state || {};

    if (!imageUrl) {
        return <div>No image to display</div>;
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Generated Image</h2>
            <img
                src={imageUrl}
                alt="Generated"
                style={{ maxWidth: '100%', borderRadius: '5px' }}
            />
        </div>
    );
};

export default ImageDisplay;