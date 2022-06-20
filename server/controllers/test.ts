import { Request, Response } from "express"

export const getTest = (req: Request, res: Response) => {
    res.json({ id: req.params.id });
};

export const getAllTest = (req: Request, res: Response) => {
    res.send('Get All');
};

export const createTest = (req: Request, res: Response) => {
    res.json(req.body);
};

export const updateTest = (req: Request, res: Response) => {
    res.send('Update');
};

export const deleteTest = (req: Request, res: Response) => {
    res.send('Delete');
};
