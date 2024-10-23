"use server";
import { getData } from "./action/get-action"
import { WeatherCard } from '../../molecules/forecast-card/ForecastCard'

interface FortecastProps {
    lat?: string
    lon?: string
}

export async function Fortecast({ lat, lon }: FortecastProps) {
    const days = 14
    const LAT = lat || '-19.594080'
    const LON = lon || '-65.748528'
    const data = await getData(days, `${LAT},${LON}`)
    return (
        <WeatherCard data={data} days={days} />
    )
}