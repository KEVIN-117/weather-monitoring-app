import Main from '@/components/ui/organisms/Main/Main'
import React from 'react'

function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Main>
                {children}
            </Main>
        </>
    )
}

export default DashboardLayout