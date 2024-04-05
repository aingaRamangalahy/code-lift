import { HTTP_METHOD } from "~/enums/httpMethods"
import { request } from "../utils/request"
export const httpClient = {
    get(url: string, body?: object, params?: object) {
        return request(HTTP_METHOD.GET, url, body, params)
    },

    put(url: string, body?: object , params?: object) {
        return request(HTTP_METHOD.PUT, url, body, params)
    },

    post(url: string, body?: object , params?: object) {
        return request(HTTP_METHOD.POST, url, body, params)
    },

    delete(url: string, body?: object , params?: object) {
        return request(HTTP_METHOD.DELETE, url, body, params)
    },

    patch(url: string, body?: object , params?: object) {
        return request(HTTP_METHOD.PATCH, url, body, params)
    }
}