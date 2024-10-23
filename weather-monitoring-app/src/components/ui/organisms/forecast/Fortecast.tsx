"use server";
import { getData } from "./action/get-action"
import { WeatherCard } from '../../molecules/forecast-card/ForecastCard'

export async function Fortecast() {
    const days = 14
    const data = await getData(days)
    return (
        <WeatherCard data={data} days={days} />
    )
}