import { Request, Response } from "express";
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
    const { sort } = req.query;
    try {
        //@ts-ignore
        const data = await Product.find(req.query).sort(sort);

        res.status(201).json([ ...data ]);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.findOne({ _id: req.params.id });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.create(req.body);

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const test = await Product.findOneAndDelete({ _id: req.params.id });

        if (!test) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(201).json({ test });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
