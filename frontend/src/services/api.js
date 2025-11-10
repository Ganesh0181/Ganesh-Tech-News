import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const saveArticle = async (article) => {
  try {
    const response = await axios.post(`${API_URL}/favorites`, article);
    return response.data;
  } catch (error) {
    console.error('Error saving article:', error);
    throw error;
  }
};

export const getFavoriteArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/favorites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching favorite articles:', error);
    throw error;
  }
};

export const deleteFavoriteArticle = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/favorites/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting favorite article:', error);
    throw error;
  }
};
