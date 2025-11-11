import express from 'express';
import {
  createArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/news').post(protect, admin, createArticle);
router
  .route('/news/:id')
  .put(protect, admin, updateArticle)
  .delete(protect, admin, deleteArticle);

export default router;
