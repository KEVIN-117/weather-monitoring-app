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
            hour: WeatherData[]
            date: string
            day: {
                maxtemp_c: number
                mintemp_c: number
                avghumidity: number
                condition: {
                    text: string
                    icon: string
                }
            }
        }>
    }
}

export interface WeatherData {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    snow_cm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
    air_quality: {
        co: number;
        no2: number;
        o3: number;
        so2: number;
        pm2_5: number;
        pm10: number;
        "us-epa-index": number;
        "gb-defra-index": number;
    };
}
