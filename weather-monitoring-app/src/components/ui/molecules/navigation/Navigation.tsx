"use client";
import { Card, Tooltip } from "@nextui-org/react";
import { IProps, NavItemProps } from "./types/IProps";
import Link from "next/link";
import { Button } from "../../atoms/Button";
import { Logo } from "@/assets/Icons/Logo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Navigation(props: IProps) {

    const { links, children } = props

    return (
        <Card
            className="flex flex-row bg-transparent"
        >
            <Card
                isBlurred
                className="flex flex-col gap-6 py-10 rounded-full items-center justify-between border-none bg-default-100/50 dark:bg-default-100/50 h-screen"
            >
                <Logo width={80} height={80} />
                <aside className="flex flex-col gap-5 h-[55%] overflow-y-scroll">
                    {links.map((link, index) => (
                        <NavItem
                            className=""
                            key={index}
                            name={link.name}
                            url={link.url}
                            icon={link.icon}
                        />
                    ))}
                </aside>
                <footer className="">
                    <ThemeSwitcher />
                </footer>
            </Card>
            <main className="flex-1 p-10">
                {children}
            </main>
        </Card>
    )
}

export function NavItem({ name, url, icon, className }: NavItemProps) {
    return (
        <Tooltip
            content={name}
            color="secondary"
        >
            <Button
                radius="full"
                as={Link}
                href={url}
                color="primary"
                variant="solid"

                className={`${className} flex items-center justify-center min-w-[40px] min-h-[55px]`}
            >
                {icon}
            </Button>
        </Tooltip>
    )
}