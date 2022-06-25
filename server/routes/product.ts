import express from 'express';
import { getProduct, createProduct } from '../controllers/product';

const router = express.Router();

router.route('/').get(getProduct).post(createProduct);

export default router;
