import { Router } from 'express';
import UserController from './user.controller';
import { auth } from '@core/middlewares';
class UserRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // GET
        this.router.get('/:id', UserController.getUser);
        this.router.get(
            '',
            auth.protectRoute,
            auth.authorizedRoles('admin', 'super-admin'),
            UserController.getUsers
        );

        // POST
        this.router.post(
            '',
            auth.protectRoute,
            auth.authorizedRoles('admin', 'super-admin'),
            UserController.createUser
        );

        // DELETE
        this.router.delete(
            '/:id',
            auth.protectRoute,
            auth.authorizedRoles('super-admin'),
            UserController.deleteUser
        );

        // PUT
        this.router.put(
            '/:id',
            auth.protectRoute,
            auth.authorizedRoles('admin', 'super-admin'),
            UserController.updateUser
        );
    }
}

export default new UserRouter().router;
