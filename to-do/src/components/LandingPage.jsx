import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css'; 
import Header from './Header';
import Footer from './Footer';

const LandingPage = () => {
    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/login'); 
    };

    return (
        <div className="landing-page">
            <Header />
            <div className="hero-section">
                <h1>Welcome to Task Tracker</h1>
                <p>Your personal task management tool.</p>
                <button className="button" onClick={handleGetStarted}>
                    Get Started
                </button>
            
            <main className="main-content">
                <img
                    src="/to_do_list.jpg"
                    alt="To-Do List"
                    className="todo-image"
                />
            </main>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;