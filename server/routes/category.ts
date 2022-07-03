import express from 'express';
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/category';

const router = express.Router();

router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategory).patch(updateCategory).delete(deleteCategory);

export default router;
