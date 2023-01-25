import { yup } from '../../../sharred/configs/validator'

export const createCardSchema = yup.object({
    body: yup.object({
        titulo: yup.string().required(),
        conteudo: yup.string().required(),
        lista: yup.string().required(),
    }),
})
