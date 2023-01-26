import { verifyPassword, verifyToken, generateToken } from './authService'
import { describe, test, expect, beforeAll } from '@jest/globals'

describe('#authService', () => {
    let token: string
    beforeAll(async () => {
        process.env.NODE_ENV = 'test'
    })

    describe('#generateToken', () => {
        test('should return a token', async () => {
            token = await generateToken()
            expect(token).toBeTruthy()
        })
    })

    describe('#verifyToken', () => {
        test('should return a valid verification', async () => {
            const tokenIsValid = await verifyToken(token)
            expect(tokenIsValid).toBeTruthy()
        })
        test('should return a invalid verification', async () => {
            const tokenIsValid = await verifyToken('wrong')
            expect(tokenIsValid).toBeFalsy()
        })
    })

    describe('#verifyPassword', () => {
        test('should return a valid verification', async () => {
            const { DEFAULT_LOGIN, DEFAULT_PASSWORD }: any = process.env
            const credentialsIsValid = await verifyPassword(DEFAULT_PASSWORD, DEFAULT_LOGIN)
            expect(credentialsIsValid).toBeTruthy()
        })
        test('should return a invalid verification', async () => {
            const credentialsIsValid = await verifyPassword('wrong', 'wrong')
            expect(credentialsIsValid).toBeFalsy()
        })
    })
})
