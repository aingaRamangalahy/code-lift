import { IUserDocument } from '@api/user/user.interface'
import { ExtendedRequest } from '@core/interfaces'
import { asyncHandler } from '@core/middlewares'
import { NextFunction, Response } from 'express'
import Container from 'typedi'
import AuthService from './auth.service'

class AuthController {
    private readonly authService: AuthService = Container.get(AuthService)

    constructor() {}
    signin = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const user = await this.authService.singin(req.body)
            this.sendTokenResponse(user, res)
        }
    )

    signup = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const user = await this.authService.signup(req.body)
            this.sendTokenResponse(user, res)
        }
    )

    signout = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.signout(req.body.id)
            res.status(200).json(response)
        }
    )

    sendTokenResponse = (user: IUserDocument, res: Response) => {
        // generate token
        const token = user.generateToken()
        const body = {
            _id: user._id,
            role: user.role,
            email: user.email,
            name: user.name,
        }
        res.status(200).json({
            success: true,
            body,
            token,
        })
    }
}

export default new AuthController()
