import { Response, NextFunction } from 'express';
import { asyncHandler } from '@core/middlewares';
import { ExtendedRequest } from '@core/interfaces';
import {
    createCategory,
    deleteCategory,
    getCategories,
    getCategoryById,
    updateCategory,
} from './category.service';

export const getCategoriesHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getCategories();
        res.status(200).json(response);
    },
);

export const getCategoryHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await getCategoryById(req.params.id);
        res.status(200).json(response);
    },
);

export const createCategoryHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await createCategory(req.body);
        res.status(200).json(response);
    },
);

export const updateCategoryHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        const response = await updateCategory(req.params.id, req.body);
        res.status(200).json(response);
    },
);

export const deleteCategoryHandler = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let response = await deleteCategory(req.params.id);
        res.status(200).json(response);
    },
);
