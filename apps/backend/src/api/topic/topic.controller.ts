import { Response, NextFunction } from 'express';
import { asyncHandler } from '@core/middlewares';
import { ExtendedRequest } from '@core/interfaces';
import {
    getAllTopics,
    getTopicById,
    createTopic as createTopicService,
    updateTopic,
    deleteTopic,
} from './topic.service';

export const getTopicsHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getAllTopics();
        res.status(200).json(response);
    },
);

export const getTopicHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getTopicById(req.params.id);
        res.status(200).json(response);
    },
);

export const createTopicHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await createTopicService(req.body);
        res.status(200).json(response);
    },
);

export const updateTopicHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await updateTopic(req.params.id, req.body);
        res.status(200).json(response);
    },
);

export const deleteTopicHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await deleteTopic(req.params.id);
        res.status(200).json(response);
    },
);
