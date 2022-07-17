import { Request, Response } from 'express';

import { asyncWrapper } from '../middleware/async';

import Category from '../models/category';

export const getCategories = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Category.find(req.query);

    res.status(201).json([...data]);
});

export const getCategory = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Category.findOne({ _id: req.params.id });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});

export const createCategory = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Category.create(req.body);

    res.status(200).json({ data });
});

export const updateCategory = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});

export const deleteCategory = asyncWrapper(async (req: Request, res: Response) => {
    const test = await Category.findOneAndDelete({ _id: req.params.id });

    if (!test) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(201).json({ test });
});
