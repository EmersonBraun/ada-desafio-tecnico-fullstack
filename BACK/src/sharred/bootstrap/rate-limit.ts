import rateLimit from 'express-rate-limit'
import { Express } from 'express'
import { RATE_LIMIT_CONFIGURATION } from '../configs'

export default (app: Express): void => {
    const apiLimiter = rateLimit(RATE_LIMIT_CONFIGURATION)

    app.use('/', apiLimiter)
}
