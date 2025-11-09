import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard"; // Import NewsCard

const NewsList = ({ searchTerm }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(`http://localhost:5000/api/news?q=${searchTerm}`);
        setNews(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchNewsData();
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-900 dark:text-white">
      {loading ? (
        // Render loading skeletons
        Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="news-card border p-3 rounded-lg shadow bg-white dark:bg-gray-700 dark:border-gray-600 animate-pulse">
            <div className="h-48 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          </div>
        ))
      ) : news.length === 0 ? (
        <p>No news articles found.</p>
      ) : (
        news.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))
      )}
    </div>
  );
};

export default NewsList;
