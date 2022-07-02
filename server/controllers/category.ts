import { Request, Response } from 'express';
import Category from '../models/category';

export const getCategory = async (req: Request, res: Response) => {
    try {
        const data = await Category.find(req.query);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

export const createCategoryItem = async (req: Request, res: Response) => {
    try {
        const data = await Category.create(req.body);

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

export const updateCategoryItem = async (req: Request, res: Response) => {
    try {
        const data = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
