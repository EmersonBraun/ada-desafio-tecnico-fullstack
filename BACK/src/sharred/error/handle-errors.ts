import { Express, Request, Response, NextFunction } from 'express'
import logger from '../services/logger'
import {
    badRequest,
    forbidden,
    notFound,
    serverError,
    unauthorized,
    validationError,
} from '../services/http-helper'
import { HTTP_CODES } from '../consts/http-codes'

function logErrors(
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) {
    logger.error(`[ERROR MESSAGE]: ${error.message}`)
    logger.error(`[ERROR CODE]: ${error.code}`)
    logger.error(`[ERROR STATUSCODE]: ${error.statusCode}`)
    logger.error(`[ERROR PATH]: ${error.path}`)
    next(error)
}

function clientErrorHandler(
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) {
    if (request.xhr) {
        response.status(HTTP_CODES.SEVER_ERROR).json(serverError(error.message))
    } else {
        next(error)
    }
}

function errorHandler(
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) {
    switch (error.statusCode) {
    case HTTP_CODES.UNAUTHORIZED:
        return response
            .status(HTTP_CODES.UNAUTHORIZED)
            .json(unauthorized(error.message).body)
    case HTTP_CODES.BAD_REQUEST:
        return response
            .status(HTTP_CODES.BAD_REQUEST)
            .json(badRequest(error.message).body)
    case HTTP_CODES.NOT_FOUND:
        return response
            .status(HTTP_CODES.NOT_FOUND)
            .json(notFound(error.message).body)
    case HTTP_CODES.FORBIDDEN:
        return response
            .status(HTTP_CODES.FORBIDDEN)
            .json(forbidden(error.message).body)
    case HTTP_CODES.UNPROCESSABLE_ENTITY:
        return response
            .status(HTTP_CODES.UNPROCESSABLE_ENTITY)
            .json(validationError(error.message))
    case HTTP_CODES.SEVER_ERROR:
        return response
            .status(HTTP_CODES.SEVER_ERROR)
            .json(serverError(error.message).body)
    default:
        return response
            .status(HTTP_CODES.SEVER_ERROR)
            .json(serverError(error.message).body)
    }
}

export default (app: Express): void => {
    app.use(logErrors)
    app.use(clientErrorHandler)
    app.use(errorHandler)

    app.get('*', (req, res) => {
        res.status(HTTP_CODES.NOT_FOUND).json(notFound().body)
    })
}
