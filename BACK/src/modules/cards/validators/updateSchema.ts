import { yup } from '../../../sharred/configs/validator'

export const updateCardSchema = yup.object({
    body: yup.object({
        titulo: yup.string().required(),
        conteudo: yup.string().required(),
        lista: yup.string().oneOf(['ToDo','Doing','Done']).required(),
    }),
})
