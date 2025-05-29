"use server";

import { authInstance } from "@/store/axios-store";
import { loadCookies } from "@/utils/cookiesLoader";
import { isAxiosError } from "axios";

export async function getProfile() {
    try {
        const token = await loadCookies('WEATHER_TOKEN')

        const { data, status } = await authInstance.get('/profile', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        return {
            user: data,
            status,
            error: null
        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (isAxiosError(error)) {
            return {
                user: null,
                error: error.response?.data.message
            }
        } else {
            return {
                user: null,
                error: error.message
            }
        }
    }
}