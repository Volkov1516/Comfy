import { Request, Response } from "express";
import Product from "../models/product";

export const getProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.find(req.query);

        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.create(req.body);

        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
