import { Router } from 'express';
import {
    getUserHandler,
    getUsersHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
} from './user.controller';
import { protectRoute, authorizedRoles } from '@core/middlewares';

const router = Router();

// GET
router.get('/:id', getUserHandler);
router.get(
    '',
    protectRoute,
    authorizedRoles('admin', 'super-admin'),
    getUsersHandler,
);

// POST
router.post(
    '',
    protectRoute,
    authorizedRoles('admin', 'super-admin'),
    createUserHandler,
);

// DELETE
router.delete(
    '/:id',
    protectRoute,
    authorizedRoles('super-admin'),
    deleteUserHandler,
);

// PUT
router.put(
    '/:id',
    protectRoute,
    authorizedRoles('admin', 'super-admin'),
    updateUserHandler,
);

export default router;
