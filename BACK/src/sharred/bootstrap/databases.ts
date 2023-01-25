import { MongoHelper } from '../db/mongoDb'
import logger from '../services/logger'

export default async function setupDatabases() {
    try {
        await MongoHelper.connect()
    } catch (error) {
        logger.error(error)
    }
}
