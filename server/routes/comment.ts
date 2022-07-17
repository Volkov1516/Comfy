import express from "express";
import { getRelatedComments, createComment } from "../controllers/comment";

const router = express.Router();

router.get('/:id', getRelatedComments);
router.post('/', createComment);

export default router;
