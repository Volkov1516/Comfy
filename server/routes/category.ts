import express from 'express';
import { getCategory, createCategoryItem } from '../controllers/category';

const router = express.Router();

router.route('/').get(getCategory).post(createCategoryItem);

export default router;
