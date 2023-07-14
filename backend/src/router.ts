import { Request, Response, Router } from 'express'

import userRoute from '@api/user/user.route'
import authRoute from '@api/auth/auth.route'

export default class Route {
    router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.use('/api/users', userRoute)
        this.router.use('/api/auth', authRoute)
        // this.router.use("/api/articles", articleRoutes);
        // this.router.use("/api/categories", categoryRoutes);
        // this.router.use("/api/comments", commentRoutes);
        this.router.use('/', (_req: Request, res: Response) =>
            res.status(200).json({ success: true, message: 'API up!' })
        )
    }
}
