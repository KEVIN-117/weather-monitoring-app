"use server";
import { env } from "@/config/loadEnv"
import axiosInstance from "@/store/axios-store"
// import { loadCookie } from "./cookiesLoader"
import { isAxiosError } from "axios"

interface IProps {
    url: string,
    location: string
    query?: string,
    // cache?: RequestCache,
    // method: string,
}

// curl -X 'GET' 'https://api.weatherapi.com/v1/current.json?q=-19.592756,-65.749366&alerts=yes&key=9d8bbd15fe9247cb9b220406242210' -H 'accept: application/json'


export async function getFetcher<T>(config: IProps) {
    try {
        const token = env.key
        const URL = env.baseUrl
        const {url, query, location} = config
        const fullUrl = `${URL}/${url}?q=${location}${query}&lang=es&key=${token}`        
        const { data } = await axiosInstance.get<T>(fullUrl)       

        return {
            data,
            error: null
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (isAxiosError(error)) {
            return {
                data: null,
                error: error.response?.data.message,
                errors: error.response?.data as {
                    message: string
                }
            }
        }
        else {
            return {
                data: null,
                error: error.message
            }
        }
    }
}