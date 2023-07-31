import { Request, Response, Router } from 'express';

import userRoute from '@api/user/user.route';
import authRoute from '@api/auth/auth.route';
import topicRoute from '@api/topic/topic.route';
import categoryRoute from '@api/category/category.route';
import resourceRoute from '@api/resource/resource.route';
import commentRoute from '@api/comment/comment.route';

export default class Route {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.use('/api/status', (_req: Request, res: Response) =>
            res.status(200).json({ success: true, message: 'API up!' })
        );

        this.router.use('/api/users', userRoute);
        this.router.use('/api/auth', authRoute);
        this.router.use('/api/topics', topicRoute);
        this.router.use('/api/categories', categoryRoute);
        this.router.use('/api/resources', resourceRoute);
        this.router.use('/api/comments', commentRoute);

        this.router.use('**', (_req: Request, res: Response) =>
            res.status(404).json({ success: false, message: 'API not Found' })
        );
    }
}
