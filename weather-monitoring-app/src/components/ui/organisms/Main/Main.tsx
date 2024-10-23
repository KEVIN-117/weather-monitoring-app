import React from 'react'
import { Navigation } from '../../molecules/navigation/Navigation'
import { NavItemProps } from '../../molecules/navigation/types/IProps'
import { ChartColumn, Layers, LayoutDashboard, NotepadText } from 'lucide-react'


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
        name: "Contact",
        url: "/contact",
        icon: <Layers />
    },
    {
        name: "Profile",
        url: "/dashboard/statistics",
        icon: <ChartColumn />
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