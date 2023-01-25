import { Express } from 'express'

import setupRoutes from '../../router'
import setupDatabases from './databases'
import setupMiddlewares from './middlewares'
import setupBodyParser from './body-parser'
import setupHelmet from './helmet'
import setupRateLimit from './rate-limit'

export const bootstrapApp = (app: Express): void => {
    setupRateLimit(app)
    setupHelmet(app)
    setupBodyParser(app)
    setupMiddlewares(app)
    setupDatabases()
    setupRoutes(app)
}
