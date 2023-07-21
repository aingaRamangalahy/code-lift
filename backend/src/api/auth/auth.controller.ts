import { IUserDocument } from '@api/user/user.interface'
import { ExtendedRequest } from '@core/interfaces'
import { asyncHandler } from '@core/middlewares'
import { NextFunction, Response } from 'express'
import Container from 'typedi'
import AuthService from './auth.service'

class AuthController {
    private readonly authService: AuthService = Container.get(AuthService)

    constructor() {}
    login = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.singin(req.body)
            res.status(200).json(response)
        }
    )

    register = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.register(req.body)
            res.status(200).json(response)
        }
    )

    signout = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.signout(req.body.id)
            res.status(200).json(response)
        }
    )
}

export default new AuthController()
