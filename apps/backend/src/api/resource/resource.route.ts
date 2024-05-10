import { Router } from 'express';
import { protectRoute, authorizedRoles } from '@core/middlewares';
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
    protectRoute,
    authorizedRoles('publisher', 'admin'),
    createResourceHandler,
);

router.delete(
    '/:id',
    authorizedRoles('publisher', 'admin', 'super-admin'),
    deleteResourceHandler,
);

router.put(
    '/:id',
    protectRoute,
    authorizedRoles('publisher', 'admin'),
    updateResourceHandler,
);

export default router;
