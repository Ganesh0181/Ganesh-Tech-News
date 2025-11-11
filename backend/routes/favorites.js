import express from 'express';
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from '../controllers/favoritesController.js';

const router = express.Router();

router.route('/').get(getFavorites).post(addFavorite);
router.route('/:id').delete(deleteFavorite);

export default router;