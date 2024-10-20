"use client"
import Image from "next/image";
import { Button } from '@/components/ui/atoms/Button';
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { MoonIcon } from "@/assets/Icons/MoonIcon";
import { SunIcon } from "@/assets/Icons/SunIcon";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button variant="solid" color="primary" onClick={() => {
          alert("Elvis apaga tu cochinada")
        }}>Click me</Button>
        <ThemeSwitcher />
        {/* test button variant and color using all options */}
        <div className="flex gap-4">
          <Button variant="light" color="default">Default</Button>
          <Button variant="solid" color="primary">Primary</Button>
          <Button variant="bordered" color="secondary">Secondary</Button>
          <Button variant="flat" color="success">Success</Button>
          <Button variant="faded" color="warning">Warning</Button>
          <Button variant="shadow" color="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="light" color="primary" >Light</Button>
        </div>
        {/* all props test */}
        <div className="flex gap-4">
          <Button
            type="submit"
            color="default"
            size="lg"
            variant="solid"
            fullWidth
            radius="full"
            loading
            icon={<MoonIcon />}
            className="text-2xl"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Default
          </Button>

          <Button
            type="submit"
            color="primary"
            size="md"
            variant="light"
            fullWidth
            radius="lg"
            loading
            icon={<SunIcon />}
            className="text-xl"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Primary
          </Button>

          <Button
            type="submit"
            color="primary"
            size="md"
            variant="light"
            fullWidth
            radius="lg"
            loading={false}
            icon={<SunIcon />}
            className="text-2xl"
            style={{ color: "red" }}
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        {/* test button size whit diferent color and type */}
        <div className="flex gap-4">
          <Button size="sm" color="default" type="submit">Default</Button>
          <Button size="md" color="primary" type="submit">Primary</Button>
          <Button size="lg" color="secondary" type="submit">Secondary</Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
