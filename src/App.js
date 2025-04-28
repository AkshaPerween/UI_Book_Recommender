import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recommender from './pages/Recommender';
import About from './pages/About';
import './App.css';
import { Suspense } from 'react'; // Add this import

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommend" element={<Recommender />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </Suspense>
      </div>
    </Router>
  );
}

export default App;

