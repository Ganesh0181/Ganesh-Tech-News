import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getConfig = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
};

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

export const getCustomNews = async () => {
  const response = await axios.get(`${API_URL}/admin/news`);
  return response.data;
};

export const createArticle = async (article) => {
  const response = await axios.post(`${API_URL}/admin/news`, article, getConfig());
  return response.data;
};

export const updateArticle = async (id, article) => {
  const response = await axios.put(`${API_URL}/admin/news/${id}`, article, getConfig());
  return response.data;
};

export const deleteArticle = async (id) => {
  const response = await axios.delete(`${API_URL}/admin/news/${id}`, getConfig());
  return response.data;
};

export const getArticle = async (id) => {
  const response = await axios.get(`${API_URL}/admin/news/${id}`);
  return response.data;
};
