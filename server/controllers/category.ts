import { Request, Response } from 'express';
import Category from '../models/category';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const data = await Category.find(req.query);

        res.status(201).json([ ...data ]);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const getCategory = async (req: Request, res: Response) => {
    try {
        const data = await Category.findOne({ _id: req.params.id });

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
        const data = await Category.create(req.body);

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const data = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const test = await Category.findOneAndDelete({ _id: req.params.id });

        if (!test) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(201).json({ test });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
