import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Discover Books That Match Your Mood</h1>
        <p>Our AI-powered recommendation system finds the perfect books based on your emotions and preferences</p>
        <button onClick={() => navigate('/recommend')} className="explore-button">
          Explore Recommendations
        </button>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Emotion-Based Matching</h3>
          <p>Find books that fit your current emotional state</p>
        </div>
        <div className="feature-card">
          <h3>Smart Categories</h3>
          <p>Filter by fiction, non-fiction, or all categories</p>
        </div>
      </div>
    </div>
  );
};

export default Home;