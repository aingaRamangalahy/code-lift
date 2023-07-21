import { Router } from 'express';
import authController from './auth.controller';
class AuthRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // POST
        this.router.post('/login', authController.login);
        this.router.post('/register', authController.register);
        this.router.post('/signout', authController.signout);
        this.router.post('/forgot-password', authController.forgotPassword);
        this.router.post('/reset-password', authController.resetPassword);
    }
}

export default new AuthRouter().router;
