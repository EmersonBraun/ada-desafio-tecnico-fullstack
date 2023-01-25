import { yup } from '../../../sharred/configs/validator'

export const deleteCardSchema = yup.object({
    params: yup.object({
        id: yup.string().required()
    })
})


