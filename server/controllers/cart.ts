import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { asyncWrapper } from '../middleware/async';

import Cart from '../models/cart';

export const getRelatedCart = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Cart.find({ userId: req.params.id });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});

export const createCart = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Cart.create(req.body);

    res.status(200).json({ data });
});

export const updateCart = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Cart.findOneAndUpdate({ userId: req.params.id }, req.body, { new: true, runValidators: true });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});
