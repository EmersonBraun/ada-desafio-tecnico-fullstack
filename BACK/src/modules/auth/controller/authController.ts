import { AppMessages } from '../../../sharred/consts/AppMessages'

import { HttpRequest, HttpResponse } from '../../../sharred/protocols'
import {
    badRequest,
    ok,
    serverError,
} from '../../../sharred/services/http-helper'
import logger from '../../../sharred/services/logger'
import {
    generateToken,
    verifyPassword
} from '../service/authService'

export async function login({ body }: HttpRequest): Promise<HttpResponse> {
    const passwordIsValid = (await verifyPassword(
        body.senha,
        body.login
    )) as boolean | null
    if (!passwordIsValid) {
        logger.error(AppMessages.InvalidLogin)
        return badRequest(AppMessages.InvalidLogin)
    }

    try {
        const token = await generateToken()
        logger.info(AppMessages.LoginSuccess)
        return ok({
            token,
        })
    } catch (error) {
        logger.error(error)
        return serverError(error)
    }
}
