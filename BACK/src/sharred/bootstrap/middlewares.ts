import { Express } from 'express'
// @ts-ignore
import cors from 'cors'

export default (app: Express): void => {
    app.use(cors())
}