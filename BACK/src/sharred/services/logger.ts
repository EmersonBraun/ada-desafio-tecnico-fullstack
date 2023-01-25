import pino from 'pino'

export const getFormatedDate = () => {
    return new Intl.DateTimeFormat('pt-br', {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
        timeZone: 'America/Los_Angeles'
    }).format(Date.now())
}

const logger = pino({
    transport: {
        target: 'pino-pretty',
    },
    timestamp: () => `,"time":"${new Intl.DateTimeFormat('pt-br', {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
        timeZone: 'America/Los_Angeles'
    }).format(Date.now())}"`
})

export default logger
