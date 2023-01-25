import mongoose from 'mongoose'
import { AppMessages } from '../consts/AppMessages'
import logger from '../services/logger'

const DEFAULT_MONGO_URL = process.env.MONGO_URL || ''

export const MongoHelper = {
    client: null as any,
    uri: null as any,

    async getUri(): Promise<string> {
        return DEFAULT_MONGO_URL
    },

    async connect(): Promise<void> {
        try {
            const uri = await this.getUri()
            this.uri = uri

            await mongoose.connect(uri, {})
            logger.info(AppMessages.MongoConnected)
        } catch (error) {
            logger.error(error)
        }
    },

    async disconnect(): Promise<void> {
        mongoose.connection.close(false, () => {
            logger.info(AppMessages.CloseConnectionMongo)
        })
        this.client = null
    },

    getConnectionState() {
        return mongoose.STATES[mongoose.connection.readyState]
    },

    mapper: (collection: any): any => {
        if (!collection) return null
        const {
            _doc: { _id, __v, ...collectionWithoutId },
        } = collection
        return { id: _id, ...collectionWithoutId }
    },
}
