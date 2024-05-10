import { Router } from 'express';
import {
    getCategoriesHandler,
    getCategoryHandler,
    createCategoryHandler,
    updateCategoryHandler,
    deleteCategoryHandler,
} from './category.controller';
import { auth } from '@core/middlewares';

const router = Router();

// GET
router.get('', getCategoriesHandler);
router.get('/:id', getCategoryHandler);

// POST
router.post(
    '',
    auth.protectRoute,
    auth.authorizedRoles('admin', 'super-admin'),
    createCategoryHandler,
);

// DELETE
router.delete(
    '/:id',
    auth.protectRoute,
    auth.authorizedRoles('super-admin'),
    deleteCategoryHandler,
);

// PUT
router.put(
    '/:id',
    auth.protectRoute,
    auth.authorizedRoles('admin', 'super-admin'),
    updateCategoryHandler,
);

export default router;
