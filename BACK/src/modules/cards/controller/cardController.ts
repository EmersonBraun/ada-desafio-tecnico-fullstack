import { HttpRequest, HttpResponse } from '../../../sharred/protocols'
import {
    created,
    notFound,
    ok,
    serverError,
} from '../../../sharred/services/http-helper'
import logger, { getFormatedDate } from '../../../sharred/services/logger'
import { CardRepository } from '../repositories/CardRepository'

export async function listCard(): Promise<HttpResponse> {
    const repository = new CardRepository()
    try {
        const response = await repository.list()
        return ok(response)
    } catch (error) {
        logger.error(error)
        return serverError(error)
    }
}

export async function createCard({ body }: HttpRequest): Promise<HttpResponse> {
    const repository = new CardRepository()
    try {
        const data = await repository.create(body)
        return created(data)
    } catch (error) {
        logger.error(error)
        return serverError(error)
    }
}

export async function updateCard({
    params,
    body,
}: HttpRequest): Promise<HttpResponse> {
    const repository = new CardRepository()
    try {
        console.info(`${getFormatedDate()} - Card ${params.id} - ${body.titulo} - Alterar`);
        const findById = await repository.findById(params.id)
        if (!findById) {
            return notFound()
        }
        const response = await repository.update(params.id, body)
        console.info(`${getFormatedDate()} - Card ${params.id} - ${body.titulo} - Alterado`);
        return ok(response)
    } catch (error) {
        logger.error(error)
        return serverError(error)
    }
}

export async function deleteCard({
    params,
}: HttpRequest): Promise<HttpResponse> {
    const repository = new CardRepository()
    try {
        const findById = await repository.findById(params.id)
        if (!findById) {
            return notFound()
        }
        console.info(`${getFormatedDate()} - Card ${params.id} - ${findById.titulo} - Remover`);
        await repository.delete(params.id)

        console.info(`${getFormatedDate()} - Card ${params.id} - ${findById.titulo} - Removido`);
        const response = await repository.list()
        return ok(response)
    } catch (error) {
        return serverError(error)
    }
}
