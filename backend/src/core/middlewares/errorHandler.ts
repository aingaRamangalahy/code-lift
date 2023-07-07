import { logger } from '@config/logger'
import { NextFunction, Response, Request } from 'express'
import { ExtendedRequest } from '..'
import { ErrorResponse } from '../../core/utils'

const errorHandler = (
    err: any,
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => {
    let error = { ...err }

    error.message = err.message
    // Log error to console for dev
    logger.error(error)

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not found, bad objectId`
        error = new ErrorResponse(message, 404)
    }

    //Mongoose duplicate key
    if (err.code === 11000) {
        const message = `Duplicate field value entered`
        error = new ErrorResponse(message, 400)
    }

    //Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val: any) => val.message)
        error = new ErrorResponse(message, 400)
    }

    // send error object
    res.status(error.statusCode || 500).json({
        success: false,
        errorMessage: error.message || 'Server Error',
    })
}

export { errorHandler }
