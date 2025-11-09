import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard"; // Import NewsCard

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/news")
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-900 dark:text-white">
      {news.map((article, i) => (
        <NewsCard key={i} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
