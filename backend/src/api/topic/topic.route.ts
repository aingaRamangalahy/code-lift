import { Router } from "express";
import TopicController from "./topic.controller";
import { auth } from "@core/middlewares";
class TopicRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    // GET
    this.router.get("/:id", TopicController.getTopic);
    this.router.get("", TopicController.getTopics);

    // POST
    this.router.post(
        '',
        auth.protectRoute,
        auth.authorizedRoles('admin', 'super-admin'),
        TopicController.createTopic
    );

    // DELETE
    this.router.delete(
        '/:id',
        auth.protectRoute,
        auth.authorizedRoles('super-admin'),
        TopicController.deleteTopic
    );

    // PUT
    this.router.put(
        '/:id',
        auth.protectRoute,
        auth.authorizedRoles('admin', 'super-admin'),
        TopicController.updateTopic
    );
  }
}

export default new TopicRouter().router;
