import News from '../models/News.js';

// @desc    Get all favorite articles
// @route   GET /api/favorites
// @access  Public
const getFavorites = async (req, res) => {
  try {
    const favorites = await News.find({});
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Add a favorite article
// @route   POST /api/favorites
// @access  Public
const addFavorite = async (req, res) => {
  try {
    const { title, description, url, urlToImage, publishedAt, source } = req.body;
    const newArticle = new News({
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      source,
    });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Article already saved' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Delete a favorite article
// @route   DELETE /api/favorites/:id
// @access  Public
const deleteFavorite = async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (article) {
      await article.remove();
      res.json({ message: 'Article removed' });
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export { getFavorites, addFavorite, deleteFavorite };
