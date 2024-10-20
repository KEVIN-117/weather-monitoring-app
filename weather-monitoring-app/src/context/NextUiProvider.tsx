import { NextUIProvider } from "@nextui-org/react";

interface NextUiProviderProps {
    children: React.ReactNode;
}

function NextUiProvider({ children }: NextUiProviderProps) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default NextUiProvider