import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCustomNews, createArticle, deleteArticle } from '../services/api';

const AdminDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      const customNews = await getCustomNews();
      setArticles(customNews);
    };
    fetchArticles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newArticle = await createArticle({ title, description, url, urlToImage, category });
      setArticles([...articles, newArticle]);
      setTitle('');
      setDescription('');
      setUrl('');
      setUrlToImage('');
      setCategory('');
      alert('Article created!');
    } catch (error) {
      alert('Failed to create article.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      setArticles(articles.filter(article => article._id !== id));
      alert('Article deleted!');
    } catch (error) {
      alert('Failed to delete article.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Admin Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Create Article</h2>
        <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          {/* Form inputs for title, description, url, urlToImage, category */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Create</button>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Custom Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map(article => (
            <div key={article._id} className="relative p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{article.title}</h3>
              <p className="text-gray-700 text-sm mb-2 dark:text-gray-300">{article.description}</p>
              <Link to={`/admin/edit/${article._id}`} className="px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white mr-2">Edit</Link>
              <button onClick={() => handleDelete(article._id)} className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;