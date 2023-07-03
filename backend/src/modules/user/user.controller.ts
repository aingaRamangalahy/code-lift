import { Response, NextFunction } from "express";
import { asyncHandler } from "../../core/middlewares";
import { ExtendedRequest } from "../../core/interfaces";
import Container from "typedi";
import UserService from "./user.service";

class UserController {
    private readonly userService: UserService = Container.get(UserService);

    constructor() {}

    getUsers = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.userService.getAllUsers();
            res.status(200).json(response);
        }
    );

    getUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.userService.getUserById(req.params.id);
            res.status(200).json(response);
        }
    );

    createUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            let response = await this.userService.createUser(req.body);
            res.status(200).json(response);
        }
    );

    updateUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.userService.updateUser(
                req.params.id,
                req.body
            );
            res.status(200).json(response);
        }
    );

    deleteUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            let response = await this.userService.deleteUser(req.params.id);
            res.status(200).json(response);
        }
    );
}

export default new UserController();