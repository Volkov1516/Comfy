import express from 'express';
import { getCategory, createCategoryItem, updateCategoryItem } from '../controllers/category';

const router = express.Router();

router.route('/').get(getCategory).post(createCategoryItem);
router.route('/:id').patch(updateCategoryItem);

export default router;
