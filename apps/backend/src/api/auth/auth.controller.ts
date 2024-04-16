import { IUserDocument } from '@api/user/user.interface';
import { ExtendedRequest } from '@core/interfaces';
import { asyncHandler } from '@core/middlewares';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import AuthService from './auth.service';

class AuthController {
    private readonly authService: AuthService = Container.get(AuthService);

    constructor() {}
    login = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.login(req.body);
            res.status(200).json(response);
        }
    );

    register = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.register(req.body);
            res.status(200).json(response);
        }
    );

    forgotPassword = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.forgotPassword(
                req.body.email
            );
            res.status(200).json(response);
        }
    );

    resetPassword = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const { password, token } = req.body;
            const response = await this.authService.resetPassword(
                password,
                token
            );
            res.status(200).json(response);
        }
    )

    logout = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.logout(req.body.id);
            res.status(200).json(response);
        }
    );
}

export default new AuthController();
