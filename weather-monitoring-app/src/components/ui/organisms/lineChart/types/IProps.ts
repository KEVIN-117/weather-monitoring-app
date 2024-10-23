// Interfaz para las condiciones climáticas por hora
interface WeatherCondition {
    text: string;
    icon: string;
    code: number;
}

// Interfaz para la calidad del aire (puedes agregar detalles específicos aquí)
interface AirQuality {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    us_epa_index: number;
    gb_defra_index: number;
}

// Interfaz para los datos por hora
export interface HourlyForecast {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: WeatherCondition;
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
    air_quality: AirQuality;
}

// Interfaz para los datos del pronóstico de un día
interface DailyForecast {
    date: string;
    date_epoch: number;
    hour: HourlyForecast[];
}

export interface BaseForecast {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: HourlyForecast;
    forecast: {
        forecastday: DailyForecast[]
    }
}
