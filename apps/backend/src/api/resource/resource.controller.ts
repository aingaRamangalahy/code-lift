import { Response, NextFunction } from 'express';
import { asyncHandler } from '@core/middlewares';
import { ExtendedRequest } from '@core/interfaces';
import {
    getResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource,
} from './resource.service';

export const getResourcesHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getResources();
        res.status(200).json(response);
    },
);

export const getResourceHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getResourceById(req.params.id);
        res.status(200).json(response);
    },
);

export const createResourceHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await createResource(req.body);
        res.status(200).json(response);
    },
);

export const updateResourceHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await updateResource(req.params.id, req.body);
        res.status(200).json(response);
    },
);

export const deleteResourceHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await deleteResource(req.params.id);
        res.status(200).json(response);
    },
);
