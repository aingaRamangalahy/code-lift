import { Router } from 'express';
import { auth } from '@core/middlewares';
import {
    getResourcesHandler,
    getResourceHandler,
    createResourceHandler,
    deleteResourceHandler,
    updateResourceHandler,
} from './resource.controller';

const router = Router();

router.get('', getResourcesHandler);
router.get('/:id', getResourceHandler);

router.post(
    '',
    auth.protectRoute,
    auth.authorizedRoles('publisher', 'admin'),
    createResourceHandler,
);

router.delete(
    '/:id',
    auth.authorizedRoles('publisher', 'admin', 'super-admin'),
    deleteResourceHandler,
);

router.put(
    '/:id',
    auth.protectRoute,
    auth.authorizedRoles('publisher', 'admin'),
    updateResourceHandler,
);

export default router;
