import express from 'express';
import { getCategories, getCategory, createCategory } from '../controllers/categories';

const router = express.Router();

router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategory);

export default router;
