import {
    listCard,
    createCard,
    deleteCard,
    updateCard,
} from './cardController'
import { describe, test, expect, beforeAll } from '@jest/globals'
import { DEFAULT_DATA } from '../mocks'
import { CardRepository } from '../repositories/CardRepository'
import { HTTP_CODES } from '../../../sharred/consts/http-codes'

jest.mock('../repositories/CardRepository', () => ({
    CardRepository: jest.fn().mockImplementation(() => ({
        list: jest.fn().mockResolvedValue({
            data: [],
        }),
        create: jest.fn().mockResolvedValue({
            data: [],
        }),
        update: jest.fn().mockResolvedValue({
            data: [],
        }),
        findById: jest.fn().mockResolvedValue({
            data: [],
        }),
        delete: jest.fn().mockResolvedValue({
            data: [],
        }),
    })),
}))


describe('#cardController', () => {
    beforeAll(async () => {
        process.env.NODE_ENV = 'test'
    })

    describe('#listCard', () => {
        test('should return a list of cards', async () => {
            const response = await listCard()
            expect(response.statusCode).toBe(HTTP_CODES.OK)
            expect(response.body).toEqual({ data: [] })
        })
    })

    describe('#createcard', () => {
        test('should return a created card', async () => {
            const body = DEFAULT_DATA
            const response = await createCard({ body })
            expect(response.statusCode).toBe(HTTP_CODES.CREATED)
            expect(response.body).toEqual({ data: [] })
            expect(CardRepository).toHaveBeenCalledTimes(1)
        })
    })

    describe('#updatecard', () => {
        test('should return a updated card', async () => {
            const params = { id: '123' }
            const body = DEFAULT_DATA
            const response = await updateCard({ params, body })
            expect(response.statusCode).toBe(HTTP_CODES.OK)
            expect(CardRepository).toHaveBeenCalledTimes(1)
        })
    })


    describe('#deletecard', () => {
        test('should return a deleted card', async () => {
            const params = { id: '123' }
            const response = await deleteCard({ params })
            expect(response.statusCode).toBe(HTTP_CODES.OK)
            expect(CardRepository).toHaveBeenCalledTimes(1)
        })
    })
})
