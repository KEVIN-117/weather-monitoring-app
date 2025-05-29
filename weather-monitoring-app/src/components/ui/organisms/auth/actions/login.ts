"use server";

import { isAxiosError } from 'axios';
import { ILogin, LoginResponse } from '../'
import { authInstance } from '@/store/axios-store';
import { saveCookies } from '@/utils/cookiesLoader'
import { revalidatePath } from 'next/cache';


export async function login(userData: ILogin) {
    try {

        const { data, status, statusText } = await authInstance.post<LoginResponse>('/login', userData)

        const { token, user } = data

        await saveCookies('WEATHER_TOKEN', token)
        await saveCookies('WEATHER_USER', JSON.stringify(user))

        revalidatePath('/')
        return {
            data,
            status,
            statusText,
            error: null
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (isAxiosError(error)) {
            return {
                data: error.response?.data,
                error: error.response?.data.message,
                errors: error.response?.data.errors
            }
        }
        return {
            data: null,
            error: error.message,
        }
    }
}