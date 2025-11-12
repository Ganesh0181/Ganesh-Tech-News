import express from 'express';
import {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  getArticleById,
} from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/news').post(protect, admin, createArticle).get(protect, admin, getArticles);
router
  .route('/news/:id')
  .get(protect, admin, getArticleById)
  .put(protect, admin, updateArticle)
  .delete(protect, admin, deleteArticle);

export default router;
