"use server"

import { authInstance } from "@/store/axios-store";
import { IRegister } from "../types/ITypes";
import { saveCookies } from "@/utils/cookiesLoader";


export async function register(userData: IRegister) {
    try {
        const { data, status, statusText } = await authInstance.post('/register', userData)

        await saveCookies('WEATHER_TOKEN', data.token)
        await saveCookies('WEATHER_USER', JSON.stringify(data.user))

        return {
            data,
            status,
            statusText,
            error: null
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return {
            data: null,
            error: error.response?.data.message
        }
    }

}