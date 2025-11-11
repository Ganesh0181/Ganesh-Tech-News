import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'; // Keep this for now, will be replaced by Tailwind later

import { Toaster } from 'react-hot-toast';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('technology');

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCategory(''); // Clear category when searching
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSearchTerm(''); // Clear search term when changing category
  };

  return (
    <Router>
      <Toaster />
      <Navbar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <div className="container mx-auto p-4 bg-white dark:bg-gray-800 min-h-screen">
        <Routes>
          <Route path="/" element={<NewsList searchTerm={searchTerm} category={category} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;