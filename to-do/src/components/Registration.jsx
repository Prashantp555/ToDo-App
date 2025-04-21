import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '../styles/Registration.css';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !password || !retypePassword) {
            setError('All fields are required.');
            return false;
        }
        if (username.length < 3) {
            setError('Username must be at least 3 characters long.');
            return false;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return false;
        }
        if (password !== retypePassword) {
            setError('Passwords do not match.');
            return false;
        }
        setError('');
        return true;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find((user) => user.username === username)) {
                setError('Username already exists.');
                return;
            }
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
            setUsername('');
            setPassword('');
            setRetypePassword('');
            navigate('/login');
        }
    };

    return (
        <div>
            <Header />
            <main className="register-container">
                <h1 className="register-heading">Register</h1>
                <form className="register-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="retypePassword">Re-type Password:</label>
                        <input
                            type="password"
                            id="retypePassword"
                            value={retypePassword}
                            onChange={(e) => setRetypePassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button className="register-button" type="submit">Register</button>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Login here</a>.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Registration;