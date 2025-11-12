import News from '../models/News.js';

// @desc    Create a news article
// @route   POST /api/admin/news
// @access  Private/Admin
const createArticle = async (req, res) => {
  const { title, description, url, urlToImage, category } = req.body;

  try {
    const article = new News({
      title,
      description,
      url,
      urlToImage,
      category,
      author: req.user._id,
    });

    const createdArticle = await article.save();
    res.status(201).json(createdArticle);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update a news article
// @route   PUT /api/admin/news/:id
// @access  Private/Admin
const updateArticle = async (req, res) => {
  const { title, description, url, urlToImage, category } = req.body;

  try {
    const article = await News.findById(req.params.id);

    if (article) {
      article.title = title || article.title;
      article.description = description || article.description;
      article.url = url || article.url;
      article.urlToImage = urlToImage || article.urlToImage;
      article.category = category || article.category;

      const updatedArticle = await article.save();
      res.json(updatedArticle);
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a news article
// @route   DELETE /api/admin/news/:id
// @access  Private/Admin
const deleteArticle = async (req, res) => {
  try {
    const article = await News.findById(req.params.id);

    if (article) {
      await article.remove();
      res.json({ message: 'Article removed' });
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all news articles
// @route   GET /api/admin/news
// @access  Private/Admin
const getArticles = async (req, res) => {
  try {
    const articles = await News.find({}).populate('author', 'name');
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get a news article by ID
// @route   GET /api/admin/news/:id
// @access  Private/Admin
const getArticleById = async (req, res) => {
  try {
    const article = await News.findById(req.params.id);

    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { createArticle, updateArticle, deleteArticle, getArticles, getArticleById };
