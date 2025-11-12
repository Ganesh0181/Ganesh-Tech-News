import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticle, updateArticle } from '../services/api';

const EditArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [category, setCategory] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const article = await getArticle(id);
        setTitle(article.title);
        setDescription(article.description);
        setUrl(article.url);
        setUrlToImage(article.urlToImage);
        setCategory(article.category);
      } catch (error) {
        alert('Failed to fetch article.');
      }
    };
    fetchArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateArticle(id, { title, description, url, urlToImage, category });
      alert('Article updated!');
      navigate('/admin');
    } catch (error) {
      alert('Failed to update article.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Edit Article</h1>
      <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">URL</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Image URL</label>
          <input type="text" value={urlToImage} onChange={(e) => setUrlToImage(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Update</button>
      </form>
    </div>
  );
};

export default EditArticle;