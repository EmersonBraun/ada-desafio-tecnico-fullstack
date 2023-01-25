import { Router } from 'express'
import { Controller } from '../../sharred/adapters/express-route-controller-adapter'
import { auth } from '../../sharred/middlewares/auth'
import {
    createCard,
    deleteCard,
    listCard,
    updateCard,
} from './controller/cardController'
import {
    createCardSchema,
    updateCardSchema,
    deleteCardSchema,
} from './validators'

export default (router: Router): Router => {
    router.get('/cards', auth, Controller(listCard))
    router.post('/cards', auth, Controller(createCard, createCardSchema))
    router.put('/cards/:id', auth, Controller(updateCard, updateCardSchema))
    router.delete('/cards/:id', auth, Controller(deleteCard, deleteCardSchema))

    return router
}
