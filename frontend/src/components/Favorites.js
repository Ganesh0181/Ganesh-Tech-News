import React, { useEffect, useState } from 'react';
import { getFavoriteArticles, deleteFavoriteArticle } from '../services/api';
import NewsCard from './NewsCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const articles = await getFavoriteArticles();
        setFavorites(articles);
      } catch (error) {
        console.error('Failed to fetch favorites:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  const handleRemove = async (id) => {
    try {
      await deleteFavoriteArticle(id);
      setFavorites(favorites.filter(fav => fav._id !== id));
      alert('Article removed from favorites!');
    } catch (error) {
      alert('Failed to remove article.');
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Favorite News</h1>
      {loading ? (
        <p>Loading favorites...</p>
      ) : favorites.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">No favorite articles saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map(article => (
            <div key={article._id} className="relative">
              <NewsCard article={article} onSave={() => {}} />
              <button
                onClick={() => handleRemove(article._id)}
                className="absolute top-2 right-2 px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;