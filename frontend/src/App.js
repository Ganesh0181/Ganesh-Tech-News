import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import Favorites from './components/Favorites';
import './App.css'; // Keep this for now, will be replaced by Tailwind later

function App() {
  const [searchTerm, setSearchTerm] = useState('technology');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <div className="container mx-auto p-4 bg-white dark:bg-gray-800 min-h-screen">
        <Routes>
          <Route path="/" element={<NewsList searchTerm={searchTerm} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
