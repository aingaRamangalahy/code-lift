import { Router } from 'express';
import CommentController from './comment.controller';
import { auth } from '@core/middlewares';
class CommentRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // GET
        this.router.get('/:id', CommentController.getComment);
        this.router.get('', CommentController.getComments);

        // POST
        this.router.post(
            '',
            auth.protectRoute,
            CommentController.createComment
        );

        // DELETE
        this.router.delete(
            '/:id',
            auth.protectRoute,
            auth.authorizedRoles('admin', 'super-admin'),
            CommentController.deleteComment
        );

        // PUT
        this.router.put('/:id',
          auth.protectRoute,
         CommentController.updateComment);
    }
}

export default new CommentRouter().router;
