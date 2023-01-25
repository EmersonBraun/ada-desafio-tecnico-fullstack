import { describe, test, expect, beforeAll } from '@jest/globals'
import superTest from 'supertest'
import app from '../../server'
import { HTTP_CODES } from '../../sharred/consts/http-codes'
import { MongoHelper } from '../../sharred/db/mongoDb'
import { DEFAULT_DATA } from './mocks'

describe('#Auth - Integration', () => {
    const request = superTest(app)

    beforeAll(async () => {
        process.env.NODE_ENV = 'test'
        await MongoHelper.connect()
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })


    describe('#login', () => {
        test('should return a token', async () => {
            const response = await request.post('/login').send(DEFAULT_DATA)
            expect(response.status).toBe(HTTP_CODES.OK)
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body).toHaveProperty('token')
        })
        test('should return a error when pass invalid credentials', async () => {
            const response = await request.post('/login').send({
                login: 'wrong',
                senha: 'wrong'
            })
            expect(response.status).toBe(HTTP_CODES.BAD_REQUEST)
        })
        test('should return a error when dont pass login', async () => {
            const response = await request.post('/login').send({
                senha: DEFAULT_DATA.senha
            })
            expect(response.status).toBe(HTTP_CODES.BAD_REQUEST)
        })
        test('should return a error when dont pass senha', async () => {
            const response = await request.post('/login').send({
                login: DEFAULT_DATA.login
            })
            expect(response.status).toBe(HTTP_CODES.BAD_REQUEST)
        })
    })

})
