import { Express, Router } from 'express'

import authRoutes from './modules/auth/routes'
import cardsRoutes from './modules/cards/routes'

import handleErrors from './sharred/error/handle-errors'

export default (app: Express) => {
    const router = Router()

    app.use('/', [
        authRoutes(router),
        cardsRoutes(router),
    ])

    handleErrors(app)
}
