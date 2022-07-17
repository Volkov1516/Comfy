import { Request, Response } from "express";
import Comment from "../models/comment";

export const getRelatedComments = async (req: Request, res: Response) => {
    try {
        const data = await Comment.find({ _id: req.params.id });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const createComment = async (req: Request, res: Response) => {
    try {
        const data = await Comment.create(req.body);

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
