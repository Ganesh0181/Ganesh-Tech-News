import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

import favoritesRoutes from './routes/favorites.js';
import userRoutes from './routes/userRoutes.js';

connectDB(); // Connect to the database

app.use('/api/favorites', favoritesRoutes);
app.use('/api/users', userRoutes);

app.get("/api/news", async (req, res) => {
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
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
