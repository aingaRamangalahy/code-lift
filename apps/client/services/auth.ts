import type { IUser } from '@cl/types'
import { AUTH_ROUTES } from '~/enums/routes'

export const login = async (
    email: string,
    password: string
): Promise<IUser> => {
    const body = { email, password }
    const { data } = await useApi(AUTH_ROUTES.LOGIN, { body, method: 'POST' })
    localStorage.setItem('user', JSON.stringify(data))
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
    localStorage.setItem('user', JSON.stringify(data))
    return data
}

export const logout = async (userId: string): Promise<void> => {
    const body = { id: userId }
    const { data } = await useApi(AUTH_ROUTES.LOGOUT, { body, method: 'POST' })
    if (data.success) {
        useToken().set('')
        localStorage.removeItem('user')
    }
    return data
}
