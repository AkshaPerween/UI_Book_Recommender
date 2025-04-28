import React, { useEffect } from 'react';
import '../styles/about.css';
import { motion } from 'framer-motion';
import bookAnimation from '../assets/book-animation.mp4'; // Add your video file
import bookStack from '../assets/book-stack.jpg'; // Add your image

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Background color animation
  useEffect(() => {
    document.body.classList.add('about-page-active');
    return () => document.body.classList.remove('about-page-active');
  }, []);

  return (
    <motion.div
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

      {/* Hero Section with Video */}
      <div className="hero-section">
        <video autoPlay loop muted playsInline className="book-video">
          <source src={bookAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.h1
          className="page-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          About Our <span className="highlight">Book Recommendation</span> System
        </motion.h1>
      </div>

      {/* Content Sections */}
      <motion.div className="content-container">
        {/* How It Works Section */}
        <motion.div
          className="about-section"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2
            className="section-title"
            whileHover={{ color: '#2C7A7B' }}
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Our intelligent system uses cutting-edge technology to analyze:
          </motion.p>

          <motion.ul>
            {[
              "Semantic meaning of your book description",
              "Emotional tone (happy, sad, suspenseful, etc.)",
              "Book categories and genres"
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.img
            src={bookStack}
            alt="Book stack"
            className="section-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>

        {/* Why We Built This Section */}
        <motion.div
          className="about-section"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2
            className="section-title"
            whileHover={{ color: '#2C7A7B' }}
          >
            Why We Built This
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            We wanted to create a more <span className="highlight">intuitive way</span> to discover books that match
            not just your interests, but also your current emotional state.
            Whether you're feeling happy, sad, or looking for suspense,
            we'll find the perfect book for you.
          </motion.p>

          <motion.div
            className="quote-box"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            "Books are a uniquely portable magic"
            <div className="quote-author">- Stephen King</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;