import React, { useState } from 'react';
import { getRecommendations } from '../api';
import SearchForm from '../components/SearchForm';
import BookGallery from '../components/BookGallery';
import '../styles/recommender.css';

const Recommender = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query, category, tone) => {
    console.group('Search Session');
    console.log('Search initiated:', new Date().toISOString());

    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      console.log('Calling API...');
      const results = await getRecommendations(query, category, tone);

      if (!results || results.length === 0) {
        console.warn('Received empty results from API');
        setError('No books found. Try a different search.');
      } else {
        console.log(`Received ${results.length} recommendations`);
        setRecommendations(results);
      }
    } catch (err) {
      console.error('Search failed:', err);
      setError(err.response?.data?.detail || err.message);
    } finally {
      setIsLoading(false);
      console.groupEnd();
    }
  };

  return (
    <div className="recommender-page">
      <div className="search-section">
        <h1>Book Recommender</h1>
        <SearchForm onSubmit={handleSearch} isLoading={isLoading} />
      </div>

      <div className="results-section">
        <h2>Recommendations</h2>

        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)}>Dismiss</button>
          </div>
        )}

        {isLoading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Searching our library...</p>
          </div>
        ) : (
          <BookGallery recommendations={recommendations} />
        )}
      </div>
    </div>
  );
};

export default Recommender;