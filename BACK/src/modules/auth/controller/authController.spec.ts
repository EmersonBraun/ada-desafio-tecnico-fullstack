import {
    login
} from './authController'
import { describe, test, expect, beforeAll } from '@jest/globals'
import { DEFAULT_DATA } from '../mocks'
import { HTTP_CODES } from '../../../sharred/consts/http-codes'

describe('#authController', () => {
    beforeAll(async () => {
        process.env.NODE_ENV = 'test'
    })

    describe('#login', () => {
        test('should return a token', async () => {
            const response = await login({ body: DEFAULT_DATA })
            expect(response.statusCode).toBe(HTTP_CODES.OK)
            expect(response.body.token).toBeTruthy()
        })
        test('should return error response with wrong credentials', async () => {
            const response = await login({ body: {
                login: 'wrong',
                password: 'wrong'
            } })
            expect(response.statusCode).toBe(HTTP_CODES.BAD_REQUEST)
            expect(response.body).toBeTruthy()
        })
    })
})
