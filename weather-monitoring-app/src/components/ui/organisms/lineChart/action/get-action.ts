"use server"
import { getFetcher } from "@/actions/fectcher"
import { BaseForecast } from "../types/IProps"

export async function getData(days: number, location: string) {

    const response = await getFetcher<BaseForecast>({
        url: 'forecast.json',
        location: location,
        query: `&days=${days}&alerts=yes&aqi=yes&hour=24&tp=1`
    })

    const data = response.data
    return data
}