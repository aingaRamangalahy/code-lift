import type { IUser } from '@cl/types'
import { AUTH_ROUTES } from '~/enums/routes'

export const login = async (
    email: string,
    password: string
): Promise<IUser> => {
    const body = { email, password }
    const { data } = await useApi(AUTH_ROUTES.LOGIN, { body, method: 'POST' })
    return data
}

export const register = async (
    name: string,
    email: string,
    password: string
): Promise<IUser> => {
    const body = { name, email, password }
    const { data } = await useApi(AUTH_ROUTES.REGISTER, {
        body,
        method: 'POST',
    })
    return data
}
