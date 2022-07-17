import { Request, Response } from 'express';
import Cart from '../models/cart';

export const getRelatedCart = async (req: Request, res: Response) => {
    try {
        const data = await Cart.find({ userId: req.params.id });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const createCart = async (req: Request, res: Response) => {
    try {
        const data = await Cart.create(req.body);

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const updateCart = async (req: Request, res: Response) => {
    try {
        const data = await Cart.findOneAndUpdate({ userId: req.params.id }, req.body, { new: true, runValidators: true });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
