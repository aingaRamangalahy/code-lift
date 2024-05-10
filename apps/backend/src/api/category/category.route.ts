import { Router } from 'express';
import {
    getCategoriesHandler,
    getCategoryHandler,
    createCategoryHandler,
    updateCategoryHandler,
    deleteCategoryHandler,
} from './category.controller';
import { protectRoute, authorizedRoles } from '@core/middlewares';

const router = Router();

// GET
router.get('', getCategoriesHandler);
router.get('/:id', getCategoryHandler);

// POST
router.post(
    '',
    protectRoute,
    authorizedRoles('admin', 'super-admin'),
    createCategoryHandler,
);

// DELETE
router.delete(
    '/:id',
    protectRoute,
    authorizedRoles('super-admin'),
    deleteCategoryHandler,
);

// PUT
router.put(
    '/:id',
    protectRoute,
    authorizedRoles('admin', 'super-admin'),
    updateCategoryHandler,
);

export default router;
