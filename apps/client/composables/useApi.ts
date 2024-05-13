import type { UseFetchOptions } from '#app'
import type { IhttpResponse } from '~/types/httpResponse'
import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import defu from 'defu'
import { useToken } from './useToken'

export const useApi = (
    url: string,
    userOptions?: NitroFetchOptions<NitroFetchRequest>
) => {
    const token = useToken()
    const config = useRuntimeConfig()
    const toast = useToast()
    const defaultOptions: NitroFetchOptions<NitroFetchRequest> = {
        baseURL: config.public.baseURL,
        method: 'GET',

        onRequest({ options }) {
            const hasToken = token.hasToken()
            if (hasToken) {
                options.headers = {
                    ...options.headers,
                    Authorization: token.bearerToken(),
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                }
            }
        },

        onResponse({ response }) {
            if (!response.ok) {
                const defaultMessage = 'An error occured.'
                const serverMessage = response._data.errorMessage
                toast.add({
                    title: defaultMessage,
                    description: serverMessage,
                    color: 'red',
                })
            } else {
                const accessToken = response._data.token
                if (accessToken) token.set(accessToken)
            }
        },

        onResponseError({ response }) {
            console.log(':crossed_flags: onResponseErrorFired🔥', response)
        },
    }
    const options = defu(
        userOptions,
        defaultOptions
    ) as NitroFetchOptions<NitroFetchRequest>

    return $fetch<IhttpResponse>(url, options)
}
