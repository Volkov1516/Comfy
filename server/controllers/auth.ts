import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../models/user';

export const register = async (req: Request, res: Response) => {
    const user = await User.create({ ...req.body });

    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { email: user.email }, token });
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: 'Please, provide email and password' });
    }

    const user = await User.findOne({email});

    if(!user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'No such user' });
    }
    // @ts-ignore
    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Wrong password' });
    }
    // @ts-ignore
    const token = user.createJWT();

    res.status(StatusCodes.OK).json({user: {email: user.email}, token});
};
