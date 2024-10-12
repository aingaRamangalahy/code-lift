import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '@core/utils';
import { asyncHandler } from './asyncHandler';
import * as jwt from 'jsonwebtoken';
import User from '@api/user/user.model';
import { ExtendedRequest } from '@core/interfaces';
import { JWT_SECRET } from '@config/index';

const protectRoute = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
        let token;
        if (req.headers.authorization?.startsWith('Bearer')) {
            // set token from Bearer token
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return next(
                new ErrorResponse('Not authorized to access this route', 401),
            );
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            // add user information to request object
            req.user = await User.findById(decoded._id);
            next();
        } catch (error) {
            return next(new ErrorResponse('Invalid token', 401));
        }
    },
);

const authorizedRoles = (...roles) => {
    return (req: ExtendedRequest, res: Response, next: NextFunction) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorResponse(
                    `User role '${req.user.role}' has no access to this route`,
                    403,
                ),
            );
        }
        next();
    };
};

export { protectRoute, authorizedRoles };
