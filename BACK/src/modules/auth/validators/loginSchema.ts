import { yup } from '../../../sharred/configs/validator'

export const loginSchema = yup.object({
    body: yup.object({
        login: yup.string().required(),
        senha: yup.string().required(),
    }),
})
