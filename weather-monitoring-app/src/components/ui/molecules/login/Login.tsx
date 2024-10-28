"use client";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { useState } from "react";
import { Logo } from "@/assets/Icons/Logo";
import Input from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button";
import { EyeFilledIcon } from "@/assets/Icons/EyeFilledIcon ";
import { EyeSlashFilledIcon } from "@/assets/Icons/EyeSlashFilledIcon ";
import { useRouter } from 'next/navigation'

export function Login() {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    function handleRegister() {
        router.push('/auth/register')
    }
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[400px] w-full"
            shadow="sm"
        >
            <CardBody className="flex flex-col justify-center items-center">
                <Logo className="w-40 h-40" />

                <form action="" className="w-full grid grid-cols-1 gap-4">
                    <Input
                        type="text"
                        placeholder="Username"
                        name="username"
                        label="Username or Email"
                        color="primary"
                        radius="md"
                        className="w-full"
                    />

                    <div className="w-full space-y-3">

                        <Input
                            type={isVisible ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            label="Password"
                            color="primary"
                            radius="md"

                        />
                        <Button
                            variant="flat"
                            color={isVisible ? "danger" : "default"}
                            onClick={toggleVisibility}
                            className="text-xl"
                        >
                            {isVisible ? (
                                <EyeSlashFilledIcon className="dark:text-slate-300" />
                            ) : (
                                <EyeFilledIcon className="dark:text-slate-300" />
                            )}
                            {isVisible}
                        </Button>
                    </div>

                    <Button
                        color="primary"
                        className="w-full"
                        onClick={() => alert("Init session")}
                        variant="shadow"
                    >
                        Init Session
                    </Button>
                    <div className="flex justify-center items-center gap-2">
                        <Divider />
                        <p>Or</p>
                        <Divider />
                    </div>
                    <Button
                        color="default"
                        className="w-full"
                        onClick={handleRegister}
                        variant="bordered"

                    >
                        Registrarse
                    </Button>
                </form>
            </CardBody>
        </Card>
    )
}
