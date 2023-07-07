import { Router } from "express";
import UserController from "./user.controller";
import { auth } from "@core/middlewares";
class UserRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // GET
        this.router.get("/:id", UserController.getUser);
        this.router.get(
            "",
            auth.protectRoute,
            auth.authorizedRoles("admin"),
            UserController.getUsers
        );

        // POST
        this.router.post(
            "",
            auth.protectRoute,
            auth.authorizedRoles("admin"),
            UserController.createUser
        );

        // DELETE
        this.router.delete(
            "/:id",
            auth.protectRoute,
            auth.authorizedRoles("admin"),
            UserController.deleteUser
        );

        // PUT
        this.router.put("/:id", auth.protectRoute, UserController.updateUser);
    }
}

export default new UserRouter().router;