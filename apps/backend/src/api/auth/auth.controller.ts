import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '@core/middlewares';
import { ExtendedRequest } from '@core/interfaces';
import {
    login,
    register,
    forgotPassword,
    resetPassword,
    logout,
} from './auth.service';

export const loginHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await login(req.body);
        res.status(200).json(response);
    },
);

export const registerHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await register(req.body);
        res.status(200).json(response);
    },
);

export const forgotPasswordHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await forgotPassword(req.body.email);
        res.status(200).json(response);
    },
);

export const resetPasswordHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const { password, token } = req.body;
        const response = await resetPassword(password, token);
        res.status(200).json(response);
    },
);

export const logoutHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await logout(req.body.id);
        res.status(200).json(response);
    },
);
