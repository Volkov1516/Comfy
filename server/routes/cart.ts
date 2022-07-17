import express from 'express';
import { getRelatedCart, createCart, updateCart } from '../controllers/cart';

const router = express.Router();

router.get('/:id', getRelatedCart);
router.post('/', createCart);
router.patch('/:id', updateCart);

export default router;
