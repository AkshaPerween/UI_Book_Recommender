import axios from 'axios';

const API_BASE_URL = 'http://localhost:8001';

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getTones = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tones`);
    return response.data.tones;
  } catch (error) {
    console.error('Error fetching tones:', error);
    return [];
  }
};

export const getRecommendations = async (query, category, tone) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/recommend`, {
      query,
      category,
      tone
    });
    return response.data.recommendations;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return [];
  }
};