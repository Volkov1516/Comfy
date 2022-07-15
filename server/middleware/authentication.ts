import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

import User from '../models/user';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req?.headers?.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: 'Auth invalid' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string);
        // @ts-ignore
        req.user = { userId: payload.userId, email: payload.email };

        next();
    } catch (error) {
        return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: 'Auth invalid' });
    }
}
