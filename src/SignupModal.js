import React, { useState } from 'react';
import axios from 'axios';

const SignupModal = ({ isOpen, onClose }) => {
    // Hooks are declared at the top of the component
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Don't render if modal is not open
    if (!isOpen) return null;

    // Handle form submission for signup
    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                username,
                email,
                password,
            });
            console.log('Signup response:', response.data);

            // Close modal after successful signup
            onClose();
        } catch (err) {
            console.error('Signup error:', err);
            setError(err.response?.data?.message || 'An error occurred during signup.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Signup</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="dark-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="dark-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="dark-input"
                    />
                    {error && <div className="error">{error}</div>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing up...' : 'Signup'}
                    </button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SignupModal;

