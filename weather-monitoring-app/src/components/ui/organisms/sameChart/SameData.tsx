import React from 'react'
import { SamedataComposedChart } from '../../atoms/charts/samedataComposedChart/SamedataComposedChart';
import { getData } from '../forecast/action/get-action';

export async function SameData({ lat, lon }: { lat?: string, lon?: string }) {
    const LAT = lat || '-19.594080'
    const LON = lon || '-65.748528'
    const days = 14;
    const weatherData = await getData(days, `${LAT},${LON}`);

    // Procesar los datos para el gráfico
    const processedData = weatherData.forecast.forecastday.map((day: {date: string, day: {avghumidity: number, condition: {text: string}}}) => ({
        name: day.date,
        avgHumidity: day.day.avghumidity,
        condition: day.day.condition.text, // Condición climática
    }))
    return (
        <SamedataComposedChart data={processedData} />
    )
}