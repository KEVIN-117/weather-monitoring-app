// app/components/ThemeSwitcher.tsx
"use client";

import { MoonIcon } from "@/assets/Icons/MoonIcon";
import { SunIcon } from "@/assets/Icons/SunIcon";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    function handlerChangeTheme() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div>
            The current theme is: {theme}
            <Switch
                defaultSelected
                size="lg"
                color="primary"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <SunIcon className={className} />
                    ) : (
                        <MoonIcon className={className} />
                    )
                }
                onClick={handlerChangeTheme}
            >
                Dark mode
            </Switch>
        </div>
    )
};