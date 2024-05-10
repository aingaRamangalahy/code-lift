import { Router } from 'express';
import {
    getTopicHandler,
    getTopicsHandler,
    createTopicHandler,
    updateTopicHandler,
    deleteTopicHandler,
} from './topic.controller';
import { auth } from '@core/middlewares';

const router = Router();

// GET
router.get('/:id', getTopicHandler);
router.get('', getTopicsHandler);

// POST
router.post(
    '',
    auth.protectRoute,
    auth.authorizedRoles('admin', 'super-admin'),
    createTopicHandler,
);

// DELETE
router.delete(
    '/:id',
    auth.protectRoute,
    auth.authorizedRoles('super-admin'),
    deleteTopicHandler,
);

// PUT
router.put(
    '/:id',
    auth.protectRoute,
    auth.authorizedRoles('admin', 'super-admin'),
    updateTopicHandler,
);

export default router;
