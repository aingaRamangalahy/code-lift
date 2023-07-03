import { Router } from "express"

import userRoute from "@api/user/user.route";

export default class Route {
    router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.use("/api/users", userRoute);
        // this.router.use("/api/articles", articleRoutes);
        // this.router.use("/api/categories", categoryRoutes);
        // this.router.use("/api/comments", commentRoutes);
        // this.router.use("/api/auth", AuthenticationRoutes)
    }
}