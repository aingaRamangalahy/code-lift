import { Router } from 'express'
import authController from './auth.controller'
class AuthRouter {
    router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        // POST
        this.router.post('/signin', authController.signin)
        this.router.post('/signup', authController.signup)
        this.router.post('/signout', authController.signout)
    }
}

export default new AuthRouter().router
