import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import bookAnimation from '../assets/book-animation2.mp4'; // Add your video file
import readingIllustration from '../assets/reading-illustration.jpg'; // Add your illustration
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Set special background for home page
  useEffect(() => {
    document.body.classList.add('home-page-active');
    return () => document.body.classList.remove('home-page-active');
  }, []);

  return (
    <motion.div
      className="home-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section with Video Background */}
      <div className="hero-section">
        <video autoPlay loop muted playsInline className="book-video">
          <source src={bookAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover Books That <span className="highlight">Match Your Mood</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
          >
            Our AI-powered recommendation system finds the perfect books based on your emotions and preferences
          </motion.p>

          <motion.button
            onClick={() => navigate('/recommend')}
            className="explore-button"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(44, 122, 123, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Recommendations
          </motion.button>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div className="features" variants={containerVariants}>
        <motion.div
          className="feature-card"
          variants={itemVariants}
          whileHover={{ y: -10 }}
        >
          <img src={readingIllustration} alt="Reading illustration" className="feature-icon" />
          <h3>Emotion-Based Matching</h3>
          <p>Find books that fit your current emotional state</p>
          <div className="pulse-dot"></div>
        </motion.div>

        <motion.div
          className="feature-card"
          variants={itemVariants}
          whileHover={{ y: -10 }}
          transition={{ delay: 0.2 }}
        >
          <img src={readingIllustration} alt="Reading illustration" className="feature-icon" />
          <h3>Smart Categories</h3>
          <p>Filter by fiction, non-fiction, or all categories</p>
          <div className="pulse-dot"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;