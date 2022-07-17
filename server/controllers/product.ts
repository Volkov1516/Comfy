import { Request, Response } from "express";

import { asyncWrapper } from '../middleware/async';

import Product from "../models/product";

export const getProducts = asyncWrapper(async (req: Request, res: Response) => {
    const { sort } = req.query;
    //@ts-ignore
    const data = await Product.find(req.query).sort(sort);

    res.status(201).json([...data]);
});

export const getProduct = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Product.findOne({ _id: req.params.id });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});

export const createProduct = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Product.create(req.body);

    res.status(200).json({ data });
});

export const updateProduct = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});

export const deleteProduct = asyncWrapper(async (req: Request, res: Response) => {
    const test = await Product.findOneAndDelete({ _id: req.params.id });

    if (!test) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(201).json({ test });
});
