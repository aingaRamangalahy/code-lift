import { Response, NextFunction } from 'express';
import { asyncHandler } from '@core/middlewares';
import { ExtendedRequest } from '@core/interfaces';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from './user.service';

export const getUsersHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getAllUsers();
        res.status(200).json(response);
    },
);

export const getUserHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getUserById(req.params.id);
        res.status(200).json(response);
    },
);

export const createUserHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await createUser(req.body);
        res.status(200).json(response);
    },
);

export const updateUserHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await updateUser(req.params.id, req.body);
        res.status(200).json(response);
    },
);

export const deleteUserHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await deleteUser(req.params.id);
        res.status(200).json(response);
    },
);
