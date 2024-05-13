export const useToken = () => {
    const set = (token: string) => {
        localStorage.setItem('token', token)
    }

    const removeToken = () => {
        localStorage.removeItem('token')
    }

    const get = () => {
        return localStorage.getItem('token')
    }

    const bearerToken = () => {
        return `Bearer ${get()}`
    }

    const hasToken = () => {
        return !!get()
    }

    return { set, get, hasToken, bearerToken, removeToken }
}
