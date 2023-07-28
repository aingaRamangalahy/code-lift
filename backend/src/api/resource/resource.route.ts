import { Router } from "express";
import ResourceController from "./resource.controller";
import { auth } from "@core/middlewares";
class ResourceRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    // GET
    this.router.get("/:id", ResourceController.getResource);
    this.router.get("", ResourceController.getResources);

    // POST
    this.router.post(
        '',
        auth.protectRoute,
        auth.authorizedRoles('publisher', 'admin'),
        ResourceController.createResource
    );

    // DELETE
    this.router.delete(
        '/:id',
        auth.authorizedRoles('publisher', 'admin', 'super-admin'),
        ResourceController.deleteResource
    );

    // PUT
    this.router.put(
        '/:id',
        auth.protectRoute,
        auth.authorizedRoles('publisher', 'admin'),
        ResourceController.updateResource
    );
  }
}

export default new ResourceRouter().router;
