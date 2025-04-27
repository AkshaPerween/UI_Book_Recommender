import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Our Book Recommendation System</h1>

      <div className="about-section">
        <h2>How It Works</h2>
        <p>
          Our system uses advanced natural language processing to analyze:
        </p>
        <ul>
          <li>Semantic meaning of your book description</li>
          <li>Emotional tone (happy, sad, suspenseful, etc.)</li>
          <li>Book categories and genres</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Why We Built This</h2>
        <p>
          We wanted to create a more intuitive way to discover books that match
          not just your interests, but also your current emotional state.
          Whether you're feeling happy, sad, or looking for suspense,
          we'll find the perfect book for you.
        </p>
      </div>
    </div>
  );
};

export default About;

