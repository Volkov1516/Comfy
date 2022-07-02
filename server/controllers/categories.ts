import { Request, Response } from 'express';
import NewCategory from '../models/categories';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const data = await NewCategory.find(req.query);

        res.status(201).json([ ...data ]);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const getCategory = async (req: Request, res: Response) => {
    try {
        const data = await NewCategory.findOne({ _id: req.params.id });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const data = await NewCategory.create(req.body);

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
