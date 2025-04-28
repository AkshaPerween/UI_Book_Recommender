import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getRecommendations } from '../api';
import SearchForm from '../components/SearchForm';
import BookGallery from '../components/BookGallery';
import '../styles/recommender.css';
import bookAnimation from '../assets/book-animation3.mp4'; // Add your video file
import floatingBooks from '../assets/floating-books.jpg'; // Add your image

const Recommender = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleSearch = async (query, category, tone) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const results = await getRecommendations(query, category, tone);

      if (!results || results.length === 0) {
        setError('No books found. Try a different search.');
      } else {
        setRecommendations(results);
      }
    } catch (err) {
      setError(err.response?.data?.detail || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="recommender-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Video */}
      <div className="hero-video">
        <video autoPlay loop muted playsInline className="book-video">
          <source src={bookAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content-container">
        {/* Search Section */}
        <motion.div
          className="search-section"
          variants={itemVariants}
        >
          <motion.h1
            className="page-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover Your Next <span className="highlight">Favorite Book</span>
          </motion.h1>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <SearchForm onSubmit={handleSearch} isLoading={isLoading} />
          </motion.div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          className="results-section"
          variants={itemVariants}
        >
          <motion.h2
            className="section-title"
            whileHover={{ scale: 1.02 }}
          >
            Recommendations
          </motion.h2>

          {error && (
            <motion.div
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {error}
              <motion.button
                onClick={() => setError(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Dismiss
              </motion.button>
            </motion.div>
          )}

          {isLoading ? (
            <motion.div
              className="loading-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p>Searching our library...</p>
              <motion.img
                src={floatingBooks}
                alt="Searching books"
                className="loading-image"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            <BookGallery recommendations={recommendations} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Recommender;