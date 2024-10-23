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
        <div className="-rotate-90">
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
            </Switch>
        </div>
    )
};