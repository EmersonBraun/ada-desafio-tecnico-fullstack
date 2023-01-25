import { Express } from 'express'
import * as express from 'express'
import { BODY_PARSER_CONFIGURATION } from '../configs'

export default (app: Express): void => {
    app.use(express.json())
    app.use(express.urlencoded(BODY_PARSER_CONFIGURATION))
}
