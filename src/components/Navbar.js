import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/navbar.css'; // We'll create this CSS file

const Navbar = () => {
  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 150 }
    },
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div className="nav-container">
        <motion.div className="nav-logo" whileHover={{ rotate: -5 }}>
          <Link to="/">BookFinder</Link>
        </motion.div>

        <div className="nav-links">
          <motion.div variants={itemVariants} whileHover="hover">
            <Link to="/" className="nav-link">Home</Link>
          </motion.div>
          <motion.div variants={itemVariants} whileHover="hover">
            <Link to="/recommend" className="nav-link">Recommender</Link>
          </motion.div>
          <motion.div variants={itemVariants} whileHover="hover">
            <Link to="/about" className="nav-link">About</Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;