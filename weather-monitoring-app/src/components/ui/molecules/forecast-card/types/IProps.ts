export interface WeatherForecastData {
    location: {
        name: string
        region: string
        country: string
    }
    current: {
        temp_c: number
        condition: {
            text: string
            icon: string
        }
        feelslike_c: number
        wind_mph: number
        humidity: number
        air_quality: {
            "us-epa-index": number
        }
    }
    forecast: {
        forecastday: Array<{
            date: string
            day: {
                maxtemp_c: number
                mintemp_c: number
                condition: {
                    text: string
                    icon: string
                }
            }
        }>
    }
}