import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Ganesh Tech News</Link>
      <div>
        <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
        <Link to="/favorites" className="hover:text-gray-300">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
