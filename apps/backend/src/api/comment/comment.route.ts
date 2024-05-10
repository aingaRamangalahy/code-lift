import { Router } from 'express';
import {
    getCommentsHandler,
    getCommentHandler,
    createCommentHandler,
    updateCommentHandler,
    deleteCommentHandler,
} from './comment.controller';
import { auth } from '@core/middlewares';

const router = Router();

// GET
router.get('', getCommentsHandler);
router.get('/:id', getCommentHandler);

// POST
router.post('', auth.protectRoute, createCommentHandler);

// DELETE
router.delete(
    '/:id',
    auth.protectRoute,
    auth.authorizedRoles('admin', 'super-admin'),
    deleteCommentHandler,
);

// PUT
router.put('/:id', auth.protectRoute, updateCommentHandler);

export default router;
