"use server"
import { getFetcher } from "@/actions/fectcher"
import { WeatherForecastData } from "@/components/ui/molecules/forecast-card/types/IProps"

export async function getData(days: number, location: string) {

    const { data } = await getFetcher<WeatherForecastData>({
        url: 'forecast.json',
        location: location,
        query: `&days=${days}&alerts=yes&aqi=yes&hour=24&tp=1`
    })    
    return data as WeatherForecastData

}