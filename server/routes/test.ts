import express from 'express';
import { getTest, getAllTest, createTest, updateTest, deleteTest } from '../controllers/test';

const router = express.Router();

router.route('/').get(getAllTest).post(createTest);
router.route('/:id').get(getTest).patch(updateTest).delete(deleteTest);

export default router;
