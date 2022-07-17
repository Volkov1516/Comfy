import { Request, Response } from "express";

import { asyncWrapper } from '../middleware/async';

import Comment from "../models/comment";

export const getRelatedComments = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Comment.find({ productId: req.params.id });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});

export const createComment = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Comment.create(req.body);

    res.status(200).json({ data });
});
