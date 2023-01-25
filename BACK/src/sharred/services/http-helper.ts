import { HTTP_CODES } from '../consts/http-codes'
import { HttpResponse } from '../protocols/http'

export const ok = (data: any): HttpResponse => ({
    statusCode: HTTP_CODES.OK,
    body: data,
})

export const created = (data: any): HttpResponse => ({
    statusCode: HTTP_CODES.CREATED,
    body: data,
})

export const notContent = (): HttpResponse => ({
    statusCode: HTTP_CODES.NOT_CONTENT,
    body: [],
})

export const badRequest = (errorMessage: string): HttpResponse => ({
    statusCode: HTTP_CODES.BAD_REQUEST,
    errorMessage,
    body: [],
})

export const unauthorized = (errorMessage = 'unauthorized'): HttpResponse => ({
    statusCode: HTTP_CODES.UNAUTHORIZED,
    errorMessage,
    body: [],
})

export const forbidden = (errorMessage = 'not have access'): HttpResponse => ({
    statusCode: HTTP_CODES.FORBIDDEN,
    errorMessage,
    body: [],
})

export const notFound = (errorMessage = 'not found'): HttpResponse => ({
    statusCode: HTTP_CODES.NOT_FOUND,
    errorMessage,
    body: [],
})

export const validationError = (errorMessage: any): HttpResponse => ({
    statusCode: HTTP_CODES.UNPROCESSABLE_ENTITY,
    errorMessage,
    body: [],
})

export const serverError = (errorMessage: any): HttpResponse => ({
    statusCode: HTTP_CODES.SEVER_ERROR,
    errorMessage,
    body: [],
})

export const notImplemented = (): HttpResponse => ({
    statusCode: HTTP_CODES.NOT_IMPLEMENTED,
    errorMessage: 'not implemented',
    body: [],
})

export const notHasContent = (statusCode: number) =>
    statusCode === HTTP_CODES.NOT_CONTENT

export const isSuccessCode = (statusCode: number) =>
    statusCode >= HTTP_CODES.OK && statusCode < HTTP_CODES.BAD_REQUEST
