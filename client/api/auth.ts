import type { IUser } from "../../shared-types";
import { httpClient } from "./httpClient"

export const login = async (email: string, password: string): Promise<IUser> => {
    const body = { email, password }
    const { data, token } = await httpClient.post("/api/auth/login", body) as any;
    if (token) localStorage.setItem("token", token)
    return data
}

export const register = async (name: string, email: string, password: string): Promise<IUser> => {
    const body = { name, email, password }
    const { data, token } =  httpClient.post("/api/auth/register", body) as any;
    if (token) localStorage.setItem("token", token)
    return data
}