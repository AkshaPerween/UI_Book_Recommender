import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#2C7A7B', color: 'white' }}>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link to="/recommend" style={{ color: 'white', marginRight: '1rem' }}>Recommender</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
    </nav>
  );
};

export default Navbar;