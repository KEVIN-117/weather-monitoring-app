export const getAirQualityLabel = (index: number) => {
    if (index <= 2) return 'Bueno'
    if (index <= 4) return 'Moderado'
    if (index <= 6) return 'Nocivo para grupos sensibles'
    return 'No saludable'
}

export function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { weekday: 'short', month: 'short', day: 'numeric' })
}

export const getAirQualityColor = (index: number) => {
    if (index <= 2) return 'bg-green-600'
    if (index <= 4) return 'bg-yellow-600'
    if (index <= 6) return 'bg-orange-600'
    return 'bg-red-600'
}

export const getAirQualityStatus = (value: number, pollutant: string) => {
    const thresholds = {
        co: { good: 4400, moderate: 9400, unhealthy: 12400 },
        no2: { good: 53, moderate: 100, unhealthy: 360 },
        o3: { good: 54, moderate: 70, unhealthy: 85 },
        so2: { good: 35, moderate: 75, unhealthy: 185 },
        pm2_5: { good: 12, moderate: 35.4, unhealthy: 55.4 },
        pm10: { good: 54, moderate: 154, unhealthy: 254 }
    }

    const threshold = thresholds[pollutant as keyof typeof thresholds]
    if (value <= threshold.good) {
        return {
            status: 'Bueno',
            color: 'bg-green-600/30 border-green-600'
        }
    }
    if (value <= threshold.moderate) {
        return {
            status: 'Moderado',
            color: 'bg-yellow-600/30 border-yellow-600'
        }
    }
    if (value <= threshold.unhealthy) {
        return {
            status: 'No saludable',
            color: 'bg-orange-600/30 border-orange-600'
        }
    }
    return { status: 'Critical', color: 'bg-red-600/30 border-red-600' }
}