"use server"
import { getFetcher } from "@/actions/fectcher"
import { WeatherForecastData } from "@/components/ui/molecules/forecast-card/types/IProps"

export async function getData(days: number) {

    const response = await getFetcher<WeatherForecastData>({
        url: 'forecast.json',
        location: '-19.594080,-65.748528',
        query: `&days=${days}&alerts=yes&aqi=yes&hour=24&tp=1`
    })
    const data = response.data as WeatherForecastData
    return data
}