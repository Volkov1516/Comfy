import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../models/user';

export const register = async (req: Request, res: Response) => {
    const user = await User.create({ ...req.body });

    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { email: user.email }, token });
};

export const login = async (req: Request, res: Response) => {
    res.send('Login');
};
