import { Router } from 'express';
import {
    getCommentsHandler,
    getCommentHandler,
    createCommentHandler,
    updateCommentHandler,
    deleteCommentHandler,
} from './comment.controller';
import { protectRoute, authorizedRoles } from '@core/middlewares';

const router = Router();

// GET
router.get('', getCommentsHandler);
router.get('/:id', getCommentHandler);

// POST
router.post('', protectRoute, createCommentHandler);

// DELETE
router.delete(
    '/:id',
    protectRoute,
    authorizedRoles('admin', 'super-admin'),
    deleteCommentHandler,
);

// PUT
router.put('/:id', protectRoute, updateCommentHandler);

export default router;
