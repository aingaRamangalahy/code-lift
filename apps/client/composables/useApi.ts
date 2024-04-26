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
            console.log('onRespon fired 🔥')
            const token = response._data.data.token
            if (token) token.set(token)
        },

        onResponseError({ response }) {
            console.log('onResponseErrorFired🔥')
        },
    }
    const options = defu(
        userOptions,
        defaultOptions
    ) as NitroFetchOptions<NitroFetchRequest>

    return $fetch<IhttpResponse>(url, options)
}
