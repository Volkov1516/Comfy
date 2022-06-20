import { Request, Response } from "express"

export const testOne = (req: Request, res: Response) => {
    res.send('Test');
};
