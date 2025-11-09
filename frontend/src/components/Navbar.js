import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Ganesh Tech News</Link>
      <div className="flex items-center">
        <form onSubmit={handleSearch} className="mr-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 rounded-md text-black"
          />
          <button type="submit" className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-white ml-2">
            Search
          </button>
        </form>
        <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
        <Link to="/favorites" className="mr-4 hover:text-gray-300">Favorites</Link>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-md bg-gray-700 dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600 text-white"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
