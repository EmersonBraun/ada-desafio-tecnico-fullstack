import { HttpRequest } from '../protocols'

interface ValidationResponse {
  error?: {
    type: string
    message: string[]
  }
}
export const validateRequest = async (schema: any, httpRequest: HttpRequest): Promise<ValidationResponse> => {
    try {
        await schema.validate(httpRequest, { abortEarly: false })
        return { error: undefined }
    } catch (error: any) {
        const errorMessage = { type: error.name, message: error.errors }
        return { error: errorMessage }
    }
}
