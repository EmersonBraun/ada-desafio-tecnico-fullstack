import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jwt-simple'
import { AppMessages } from '../consts/AppMessages'
import { badRequest, unauthorized } from '../services/http-helper'

const secret = process.env.JWT_SECRET || 'SECRET'

export function auth(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const { authorization = '' } = request.headers

    if (!authorization) {
        response.send(unauthorized())
    }

    const authHeaderValue = authorization?.replace('Bearer ', '')

    try {
        const decoded = jwt.decode(authHeaderValue, secret)
        if (!decoded) {
            response.send(badRequest(AppMessages.InvalidToken))
        }
        next()
    } catch (error) {
        console.error(error)
        response.send(badRequest(AppMessages.ErrorToDecode))
    }
}
