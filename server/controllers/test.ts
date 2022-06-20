import { Request, Response } from "express";
import Test from '../models/test';

export const getTest = async (req: Request, res: Response) => {
    try {
        const test = await Test.findOne({ _id: req.params.id });

        if (!test) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(201).json({ test });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const getAllTest = async (req: Request, res: Response) => {
    try {
        const test = await Test.find({});

        res.status(201).json({ test });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const createTest = async (req: Request, res: Response) => {
    try {
        const test = await Test.create(req.body);

        res.status(201).json({ test });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const updateTest = async (req: Request, res: Response) => {
    try {
        const test = await Test.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });

        if (!test) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ test });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const deleteTest = async (req: Request, res: Response) => {
    try {
        const test = await Test.findOneAndDelete({ _id: req.params.id });

        if (!test) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(201).json({ test });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
