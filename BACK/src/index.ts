import app from './server'
import { AppMessages } from './sharred/consts/AppMessages'
import { MongoHelper } from './sharred/db/mongoDb'
import logger from './sharred/services/logger'

const port = process.env.PORT || 5000

const server = app.listen(port, () => {
    logger.info(`${AppMessages.AppListening} ${port}`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
    logger.error(AppMessages.SigSignalReceived)
    logger.info(AppMessages.ClosingHttpServer)
    server.close(() => {
        logger.info(AppMessages.ClosedHttpServer)
        MongoHelper.disconnect()
        process.exit(0)
    })
})
