import type { HTTP_METHOD } from '~/enums/httpMethods'
export const request = async (
    method: HTTP_METHOD,
    url: string,
    body?: object,
    params?: object
) => {
    const token = localStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    }

    const baseURL = useRuntimeConfig().public.baseURL;
    console.log("base url", baseURL);
    const options = {
        headers,
        body,
        params,
        baseURL,
        method: method?.toUpperCase() || 'GET',
    } as any

    const { data, error } = await useFetch(url, { ...options })
    // TODO: handle error
    if (!data.value) console.error('humm something went wrong 🔥 ')

    return data.value
}
