import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getFavorites = async () => {
  const response = await axios.get(`${API_URL}/favorites`);
  return response.data;
};

export const saveArticle = async (article) => {
  const response = await axios.post(`${API_URL}/favorites`, article);
  return response.data;
};

export const deleteFavorite = async (id) => {
  const response = await axios.delete(`${API_URL}/favorites/${id}`);
  return response.data;
};