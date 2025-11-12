import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

import connectDB from './config/db.js';

import favoritesRoutes from './routes/favorites.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/favorites', favoritesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve();
app.use('/backend/uploads', express.static(path.join(__dirname, '/backend/uploads')));

app.get('/api/news', async (req, res) => {
  try {
    const { q, category } = req.query;
    let url;

    if (category) {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;
    } else {
      const query = q || 'technology';
      url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`;
    }

    const response = await axios.get(url);
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));