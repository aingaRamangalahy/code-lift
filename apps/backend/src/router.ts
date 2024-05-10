import { Request, Response, Router } from 'express';
import userRoute from '@api/user/user.route';
import authRoute from '@api/auth/auth.route';
import topicRoute from '@api/topic/topic.route';
import categoryRoute from '@api/category/category.route';
import commentRoute from '@api/comment/comment.route';
import resourceRoute from '@api/resource/resource.route';

const baseRouter = Router();

baseRouter.use('/api/status', (_req: Request, res: Response) =>
    res.status(200).json({ success: true, message: 'API up!' }),
);

baseRouter.use('/api/users', userRoute);
baseRouter.use('/api/auth', authRoute);
baseRouter.use('/api/topics', topicRoute);
baseRouter.use('/api/categories', categoryRoute);
baseRouter.use('/api/resources', resourceRoute);
baseRouter.use('/api/comments', commentRoute);

baseRouter.use('**', (_req: Request, res: Response) =>
    res.status(404).json({ success: false, message: 'API not Found' }),
);

export default baseRouter;
