const env = process.env.NODE_ENV || 'development'

export const isDevEnv = ['development', 'dev'].includes(env)
export const isQAEnv = ['qa', 'homolog'].includes(env)
export const isProdEnv = ['prod', 'production'].includes(env)
