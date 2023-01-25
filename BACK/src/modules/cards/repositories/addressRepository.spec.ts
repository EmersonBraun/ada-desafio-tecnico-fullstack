import { describe, test, expect, beforeAll } from '@jest/globals'
import MongoDBRepository from '../../../sharred/adapters/mongodb-repository-adapter'
import { CardRepository } from './CardRepository'

jest.mock('../../../sharred/adapters/mongodb-repository-adapter', () => {
    return jest.fn().mockImplementation(() => {
        return {
            find: jest.fn().mockImplementation(() => {
                return new Promise((resolve) => {
                    resolve([])
                })
            }),
            insertOne: jest.fn().mockImplementation(() => {
                return new Promise((resolve) => {
                    resolve({})
                })
            }),
            findById: jest.fn().mockImplementation(() => {
                return new Promise((resolve) => {
                    resolve({})
                })
            }),
            findOneAndUpdate: jest.fn().mockImplementation(() => {
                return new Promise((resolve) => {
                    resolve({})
                })
            }),
            findOneAndDelete: jest.fn().mockImplementation(() => {
                return new Promise((resolve) => {
                    resolve({})
                })
            }),
        }
    })
})

describe('#CardRepository', () => {
    beforeAll(async () => {
        process.env.NODE_ENV = 'test'
    })

    describe('#list', () => {
        test('should return a list', async () => {
            const repository = new CardRepository()
            const response = await repository.list()
            expect(MongoDBRepository).toHaveBeenCalledTimes(1)
            expect(response).toBeInstanceOf(Array)
        })
    })

    describe('#create', () => {
        test('should return a created registry', async () => {
            const repository = new CardRepository()
            const response = await repository.create({})
            expect(MongoDBRepository).toHaveBeenCalledTimes(1)
            expect(response).toBeInstanceOf(Object)
        })
    })

    describe('#update', () => {
        test('should return a updated registry', async () => {
            const repository = new CardRepository()
            const response = await repository.update('123', {})
            expect(MongoDBRepository).toHaveBeenCalledTimes(1)
            expect(response).toBeInstanceOf(Object)
        })
    })

    describe('#delete', () => {
        test('should delete a registry', async () => {
            const repository = new CardRepository()
            const response = await repository.delete('123')
            expect(MongoDBRepository).toHaveBeenCalledTimes(1)
            expect(response).toBeInstanceOf(Object)
        })
    })
})
