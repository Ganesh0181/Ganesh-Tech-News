import Favorite from '../models/Favorite.js';

// @desc    Get all favorite articles
// @route   GET /api/favorites
// @access  Public
const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({});
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a favorite article
// @route   POST /api/favorites
// @access  Public
const addFavorite = async (req, res) => {
  try {
    const { title, description, url, urlToImage, publishedAt, source } = req.body;

    const newFavorite = new Favorite({
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      source,
    });

    const favorite = await newFavorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Article already in favorites' });
    }
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a favorite article
// @route   DELETE /api/favorites/:id
// @access  Public
const deleteFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);

    if (favorite) {
      await favorite.remove();
      res.json({ message: 'Article removed from favorites' });
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getFavorites, addFavorite, deleteFavorite };