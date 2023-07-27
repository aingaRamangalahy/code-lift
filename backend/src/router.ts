import { Request, Response, Router } from 'express';

import userRoute from '@api/user/user.route';
import authRoute from '@api/auth/auth.route';
import topicRoute from '@api/topic/topic.route';
import categoryRoute from '@api/category/category.route';

export default class Route {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.use('/api/users', userRoute);
        this.router.use('/api/auth', authRoute);
        this.router.use('/api/topics', topicRoute);
        this.router.use('/api/categories', categoryRoute);
        // this.router.use("/api/articles", articleRoutes);
        // this.router.use("/api/categories", categoryRoutes);
        // this.router.use("/api/comments", commentRoutes);
        this.router.use('/', (_req: Request, res: Response) =>
            res.status(200).json({ success: true, message: 'API up!' })
        );
    }
}
