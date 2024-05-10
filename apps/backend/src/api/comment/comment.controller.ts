import { Response, NextFunction } from 'express';
import { asyncHandler } from '@core/middlewares';
import { ExtendedRequest } from '@core/interfaces';
import {
    createComment,
    deleteComment,
    getCommentById,
    getComments,
    updateComment,
} from './comment.service';

export const getCommentsHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getComments();
        res.status(200).json(response);
    },
);

export const getCommentHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getCommentById(req.params.id);
        res.status(200).json(response);
    },
);

export const createCommentHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await createComment(req.body);
        res.status(200).json(response);
    },
);

export const updateCommentHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await updateComment(req.params.id, req.body);
        res.status(200).json(response);
    },
);

export const deleteCommentHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await deleteComment(req.params.id);
        res.status(200).json(response);
    },
);
