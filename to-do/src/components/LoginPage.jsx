import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';
import Header from './Header';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !password) {
            setError('Username and password are required.');
            return false;
        }
        setError('');
        return true;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find((user) => user.username === username && user.password === password);
            if (user) {
                setUser(user);
                alert('Login successful!');
                navigate('/home');
            } else {
                setError('Invalid username or password.');
            }
        }
    };

    return (
        <div>
            <Header />
            <main className="login-container">
                <h1 className="login-heading">Login</h1>
                <form className="login-form" onSubmit={handleLogin}>
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
                    {error && <p className="error-message">{error}</p>}
                    <button className="login-button" type="submit">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account? <a href="/register">Register here</a>.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;