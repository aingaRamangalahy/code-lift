import { Router } from 'express';
import {
    getTopicHandler,
    getTopicsHandler,
    createTopicHandler,
    updateTopicHandler,
    deleteTopicHandler,
} from './topic.controller';
import { protectRoute, authorizedRoles } from '@core/middlewares';

const router = Router();

// GET
router.get('/:id', getTopicHandler);
router.get('', getTopicsHandler);

// POST
router.post(
    '',
    protectRoute,
    authorizedRoles('admin', 'super-admin'),
    createTopicHandler,
);

// DELETE
router.delete(
    '/:id',
    protectRoute,
    authorizedRoles('super-admin'),
    deleteTopicHandler,
);

// PUT
router.put(
    '/:id',
    protectRoute,
    authorizedRoles('admin', 'super-admin'),
    updateTopicHandler,
);

export default router;
