import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card border p-3 rounded-lg shadow bg-white dark:bg-gray-700 dark:border-gray-600">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="rounded-md mb-2" />}
      <h2 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{article.title}</h2>
      <p className="text-gray-700 text-sm mb-2 dark:text-gray-300">{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Read More</a>
    </div>
  );
};

export default NewsCard;
