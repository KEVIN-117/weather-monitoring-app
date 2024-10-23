import { Fortecast } from '@/components/ui/organisms/forecast/Fortecast';
import { LineChart } from '@/components/ui/organisms/lineChart/LineChart';
import React from 'react'

interface PageProps {
    searchParams: {
        lat: string;
        lng: string;
    }
}

export default async function page(props: PageProps) {

    const { searchParams } = props
    const { lat, lng } = searchParams
    return (
        <div className="grid grid-cols-2">
            <Fortecast lat={lat} lon={lng} />
            <LineChart lat={lat} lon={lng} />
        </div>
    )
}