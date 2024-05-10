import { Router } from 'express';
import {
    getUserHandler,
    getUsersHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
} from './user.controller';
import { auth } from '@core/middlewares';

const router = Router();

// GET
router.get('/:id', getUserHandler);
router.get(
    '',
    auth.protectRoute,
    auth.authorizedRoles('admin', 'super-admin'),
    getUsersHandler,
);

// POST
router.post(
    '',
    auth.protectRoute,
    auth.authorizedRoles('admin', 'super-admin'),
    createUserHandler,
);

// DELETE
router.delete(
    '/:id',
    auth.protectRoute,
    auth.authorizedRoles('super-admin'),
    deleteUserHandler,
);

// PUT
router.put(
    '/:id',
    auth.protectRoute,
    auth.authorizedRoles('admin', 'super-admin'),
    updateUserHandler,
);

export default router;
