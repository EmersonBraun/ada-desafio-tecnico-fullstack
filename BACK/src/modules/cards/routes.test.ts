import { describe, test, expect, beforeAll } from '@jest/globals'
import superTest from 'supertest'
import app from '../../server'
import { HTTP_CODES } from '../../sharred/consts/http-codes'
import { MongoHelper } from '../../sharred/db/mongoDb'
import { generateToken } from '../auth/service/authService'
import { DEFAULT_DATA } from './mocks'
import { CardRepository } from './repositories/CardRepository'

describe('#Cards - Integration', () => {
    const request = superTest(app)
    let token: string

    beforeAll(async () => {
        process.env.NODE_ENV = 'test'
        token = await generateToken()
        await MongoHelper.connect()
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    const repository = new CardRepository()

    describe('#list', () => {
        test('should return a list', async () => {
            const response = await request.get('/cards').set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(HTTP_CODES.OK)
            expect(response.body).toBeInstanceOf(Array)
        })
    })

    describe('#create', () => {
        test('should return a created registry', async () => {
            const response = await request.post('/cards').set('Authorization', `Bearer ${token}`).send(DEFAULT_DATA)
            expect(response.status).toBe(HTTP_CODES.CREATED)
            expect(response.body).toBeInstanceOf(Object)
        })
    })

    describe('#update', () => {
        test('should return a updated registry', async () => {
            const card = await repository.create(DEFAULT_DATA)
            const id = card.id.toString()

            const newValue = 'some new value'
            const response = await request
                .put(`/cards/${id}`)
                .set('Authorization', `Bearer ${token}`)
                .send({ ...DEFAULT_DATA, titulo: newValue })

            expect(response.status).toBe(HTTP_CODES.OK)
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body).toHaveProperty('id')
        })
    })

    describe('#delete', () => {
        test('should delete a registry', async () => {
            const card = await repository.create(DEFAULT_DATA)
            const id = card.id.toString()

            const response = await request.delete(`/cards/${id}`).set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(HTTP_CODES.OK)
            expect(response.body).toBeInstanceOf(Array)
        })
    })
})
