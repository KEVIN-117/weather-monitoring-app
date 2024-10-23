import React from 'react'
import { Navigation } from '../../molecules/navigation/Navigation'
import { NavItemProps } from '../../molecules/navigation/types/IProps'
import { ChartColumn, LayoutDashboard, NotepadText } from 'lucide-react'
import { Map } from 'lucide-react';

export const links: NavItemProps[] = [
    {
        name: "Home",
        url: "/",
        icon: <LayoutDashboard />,
    },
    {
        name: "About",
        url: "/about",
        icon: <NotepadText />
    },
    {
        name: "Estadisticas",
        name: "Contact",
        url: "/contact",
        icon: <Layers />
    },
    {
        name: "statistics",
        url: "/dashboard/statistics",
        icon: <ChartColumn />
    },
    {
        name: "Map",
        url: "/dashboard/Map",
        icon: <Map />
    }

]

function Main({ children }: { children: React.ReactNode }) {
    return (
        <Navigation className='p-10' links={links} >
            {children}
        </Navigation>
    )
}

export default Main