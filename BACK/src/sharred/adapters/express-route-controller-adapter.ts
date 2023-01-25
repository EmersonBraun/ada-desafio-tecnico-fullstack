import { Request, Response } from 'express'
import { HTTP_CODES } from '../consts/http-codes'
import { HttpRequest, HttpResponse } from '../protocols'
import { isDevEnv } from '../services/env-mode'
import { isSuccessCode } from '../services/http-helper'
import { validateRequest } from '../services/validate-request'

type ControllerType = (arg0: any) => HttpResponse | PromiseLike<HttpResponse>;

export const Controller = (controller: ControllerType, schema?: any) => {
    return async (request: Request, response: Response) => {
        const httpRequest: HttpRequest = {
            headers: request.headers,
            body: request.body,
            query: request.query,
            params: request.params,
        }

        if (schema) {
            const { error } = await validateRequest(schema, httpRequest)
            if (error) {
                response.status(HTTP_CODES.BAD_REQUEST).json({
                    error,
                })
                return
            }
        }

        const {
            statusCode = HTTP_CODES.OK,
            errorMessage = '',
            body,
        }: HttpResponse = await controller(httpRequest)


        if (isSuccessCode(statusCode)) {
            response.status(statusCode).json(body)
            return
        }

        if (statusCode === HTTP_CODES.SEVER_ERROR) {
            response.status(statusCode).json({
                error: isDevEnv ? errorMessage : 'Internal server error',
            })
            return
        }

        response.status(HTTP_CODES.BAD_REQUEST).json({
            error: errorMessage,
        })
    }
}
