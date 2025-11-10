import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();
app.use(cors());

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
