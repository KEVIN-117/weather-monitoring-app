"use server";

import { cookies } from 'next/headers'

const cookiesInstance = cookies()

export async function loadCookies(key: string = 'WEATHER_TOKEN') {
    return cookiesInstance.get(key)
}

export async function saveCookies(key: string = 'WEATHER_TOKEN', value: string) {
    return cookiesInstance.set(key, value, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
        secure: process.env.NODE_ENV === 'production'
    })
}

export async function removeCookies(key: string = 'WEATHER_TOKEN') {
    return cookiesInstance.delete(key)
}