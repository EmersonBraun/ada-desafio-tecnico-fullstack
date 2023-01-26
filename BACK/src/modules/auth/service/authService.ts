import jwt from 'jwt-simple'

export async function generateToken() {
    return jwt.encode({ user: process.env.DEFAULT_LOGIN}, process.env.JWT_SECRET || 'secret')
}

export async function verifyToken(token: string) {
    try {
        return jwt.decode(token, process.env.JWT_SECRET || 'secret')
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function verifyPassword(
    senha: string,
    login: string
): Promise<boolean | null> {
    try {
        const { DEFAULT_LOGIN, DEFAULT_PASSWORD } = process.env
        return login === DEFAULT_LOGIN && senha === DEFAULT_PASSWORD
    } catch (error) {
        console.error(error)
        return null
    }
}
