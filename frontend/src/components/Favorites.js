import React, { useState, useEffect } from 'react';
import { getFavorites, deleteFavorite } from '../services/api';
import NewsCard from './NewsCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoriteArticles = await getFavorites();
        setFavorites(favoriteArticles);
      } catch (error) {
        alert('Failed to fetch favorites.');
      }
    };
    fetchFavorites();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFavorite(id);
      setFavorites(favorites.filter(favorite => favorite._id !== id));
      alert('Favorite removed!');
    } catch (error) {
      alert('Failed to remove favorite.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map(favorite => (
          <div key={favorite._id} className="relative">
            <NewsCard article={favorite.article} />
            <button
              onClick={() => handleDelete(favorite._id)}
              className="absolute top-2 right-2 px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
