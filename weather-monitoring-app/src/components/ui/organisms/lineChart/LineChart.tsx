"use server";
import { HourlyForecast } from './types/IProps'
import { LineChartComponent } from '../../atoms/lineChart/LineChartComponent'
import { getData } from './action/get-action'

interface FortecastProps {
    lat?: string
    lon?: string
}

interface LineChartProps {
    time: string;
    humidity: number;
}


export async function LineChart({ lat, lon }: FortecastProps) {
    const LAT = lat || '-19.594080'
    const LON = lon || '-65.748528'
    const data = await getData(5, `${LAT},${LON}`)
    console.log(data?.forecast.forecastday[0].date);


    const hourlyData = data?.forecast.forecastday[0].hour.map((hour: HourlyForecast) => ({
        time: hour.time.split(' ')[1].slice(0, 7),
        humidity: hour.humidity,
    })) as LineChartProps[]

    return (
        <>
            <LineChartComponent data={hourlyData} />
        </>
    )
}

