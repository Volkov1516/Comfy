import express from 'express';
import { testOne } from '../controllers/test';

const router = express.Router();

router.route('/').get(testOne);

export default router;
