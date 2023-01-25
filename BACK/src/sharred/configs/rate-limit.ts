import { AppMessages } from '../consts/AppMessages'

export const RATE_LIMIT_CONFIGURATION = {
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 1000, // Limit each IP to 1000 requests per `window` (here, per 1 minute)
    message: AppMessages.TooManyAccounts,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}
