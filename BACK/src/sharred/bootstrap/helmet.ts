import helmet from 'helmet'
import { Express } from 'express'
import { HELMET_CONFIGURATION } from '../configs'

export default (app: Express): void => {
    app.use(helmet(HELMET_CONFIGURATION))
}
