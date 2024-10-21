import Image from "next/image";
import { Button } from "@/components/ui/atoms/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LineChartComponent } from "@/components/ui/atoms/lineChart/LineChartComponent";
import { PositiveAndNegativeBarChart } from "@/components/ui/atoms/positiveAndNegativeBarChart/PositiveAndNegativeBarChart";
import { SamedataComposedChart } from "@/components/ui/atoms/samedataComposedChart/SamedataComposedChart";
import { PieChartWithNeedle } from "@/components/ui/atoms/pieChartWithNeedle/PieChartWithNeedle";
import { ContainerBarChars } from "@/components/ui/atoms/containerBarChars/ContainerBarChars";

export default function Home() {
  const defaultData = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  ];

  const dataPie = [
    { name: "A", value: 80, color: "#ff0000" },
    { name: "B", value: 45, color: "#00ff00" },
    { name: "C", value: 25, color: "#0000ff" },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button
          variant="solid"
          color="primary"
          onClick={() => {
            alert("Elvis apaga tu cochinada");
          }}
        >
          Click me
        </Button>
        <ThemeSwitcher />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <ContainerBarChars>   <LineChartComponent data={defaultData} /></ContainerBarChars>
          <ContainerBarChars>   <PositiveAndNegativeBarChart data={defaultData} /> </ContainerBarChars>
          <ContainerBarChars>   <PieChartWithNeedle data={dataPie} /></ContainerBarChars>
          <ContainerBarChars>  <SamedataComposedChart data={defaultData} /></ContainerBarChars>
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
    </div >
  );
}
