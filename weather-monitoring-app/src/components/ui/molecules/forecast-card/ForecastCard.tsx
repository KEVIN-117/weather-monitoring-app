"use client"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { Droplets, Wind, ThermometerSun } from "lucide-react"
import { Title } from "../../atoms/title/Title"
import { formatDate, getAirQualityColor, getAirQualityLabel, getAirQualityStatus } from "./utils"
import { WeatherForecastData } from "./types/IProps"
import { SamedataComposedChart } from "../../atoms/samedataComposedChart/SamedataComposedChart"


export function WeatherCard({ data, days }: { data: WeatherForecastData, days: number }) {
    const weatherData = data

    if (!weatherData) return <div className="text-center p-4">Loading weather data...</div>

    return (
        <Card isBlurred className="w-full max-w-4xl bg-default-100/50 dark:bg-default-100/50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden set-border">
            <CardHeader className="bg-default-100/50 dark:bg-default-100/50 p-6 flex justify-between items-center set-border">
                <Title classname="text-4xl" content={`Tiempo en ${weatherData.location.name}`} size="large" />
                <Title content={`${weatherData.location.region}, ${weatherData.location.country}`} size="middle" />
            </CardHeader>
            <CardBody className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Image
                            alt={weatherData.current.condition.text}
                            className="w-16 h-16"
                            src={weatherData.current.condition.icon}
                        />
                        <span className="text-6xl ml-4 font-bold">{Math.round(weatherData.current.temp_c)}°C</span>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-2xl font-semibold">{weatherData.current.condition.text}</p>
                        <p className="text-lg ">{Math.round(weatherData.current.feelslike_c)}°C</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/10 p-4 rounded-lg flex items-center justify-center set-border">
                        <Wind className="w-6 h-6 mr-3 text-blue-300" />
                        <div>
                            <p className="text-sm ">Velocidad del viento</p>
                            <p className="text-lg font-semibold">{weatherData.current.wind_mph} mph</p>
                        </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex items-center justify-center set-border">
                        <Droplets className="w-6 h-6 mr-3 text-blue-300" />
                        <div>
                            <p className="text-sm ">Humedad</p>
                            <p className="text-lg font-semibold">{weatherData.current.humidity}%</p>
                        </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex items-center md:col-span-1 sm:col-span-2 justify-center set-border">
                        <ThermometerSun className="w-6 h-6 mr-3 text-blue-300" />
                        <div>
                            <p className="text-sm ">Calidad del aire</p>
                            <div className="flex items-center">
                                <span className={`w-3 h-3 rounded-full mr-2 ${getAirQualityColor(weatherData.current.air_quality["us-epa-index"])}`}></span>
                                <p className="text-lg font-semibold">{getAirQualityLabel(weatherData.current.air_quality["us-epa-index"])}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Calidad del aire detallada</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(weatherData.current.air_quality).map(([key, value]) => {
                            if (key !== "us-epa-index" && key !== "gb-defra-index") {
                                const { status, color } = getAirQualityStatus(value, key)
                                return (
                                    <div key={key} className={`p-4 rounded-lg border-2 ${color}`}>
                                        <p className="text-sm font-medium">{key.toUpperCase()}</p>
                                        <p className="text-lg font-semibold">{value.toFixed(2)} μg/m³</p>
                                        <p className="text-xs mt-1">{status}</p>
                                    </div>
                                )
                            }
                            return null
                        })}
                    </div>
                </div>
                <div className="" >
                    <div className="flex justify-between mb-4 items-center">
                        <h3 className="text-xl font-semibold mb-4">
                            Pronóstico para los próximos {days} días</h3>
                    </div>
                    <div className="grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-2 overflow-x-auto pb-2">
                        {weatherData.forecast.forecastday.map((day) => (
                            <div key={day.date} className="text-center bg-white/10 p-2 rounded-lg set-border">
                                <div className="font-medium">{formatDate(day.date)}</div>
                                <Image alt={day.day.condition.text} className="w-10 h-10 mx-auto" src={day.day.condition.icon} />
                                <p className="text-sm mt-1">
                                    <span className="font-semibold">{Math.round(day.day.maxtemp_c)}°</span>
                                    <span className="">/{Math.round(day.day.mintemp_c)}°</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </CardBody>
            <SamedataComposedChart/>
        </Card>
    )
}