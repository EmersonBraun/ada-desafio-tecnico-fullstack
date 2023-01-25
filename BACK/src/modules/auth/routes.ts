import { Router } from 'express'
import { Controller } from '../../sharred/adapters/express-route-controller-adapter'
import {
    login,
} from './controller/authController'
import {
    loginSchema,
} from './validators'

export default (router: Router): Router => {
    router.post('/login', Controller(login, loginSchema))

    return router
}
