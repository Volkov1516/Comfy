import { Request, Response } from "express";
import Test from '../models/test';

export const getTest = (req: Request, res: Response) => {
    res.json({ id: req.params.id });
};

export const getAllTest = (req: Request, res: Response) => {
    res.send('Get All');
};

export const createTest = async (req: Request, res: Response) => {
    const test = await Test.create(req.body);

    res.status(201).json({ test });
};

export const updateTest = (req: Request, res: Response) => {
    res.send('Update');
};

export const deleteTest = (req: Request, res: Response) => {
    res.send('Delete');
};
