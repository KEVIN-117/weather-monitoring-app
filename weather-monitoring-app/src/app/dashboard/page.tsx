import Header from "@/components/ui/atoms/header/header";
import { Fortecast } from "@/components/ui/organisms/forecast/Fortecast";
// import { LineChartComponent } from "@/components/ui/atoms/lineChart/LineChartComponent";
import { LineChart } from "@/components/ui/organisms/lineChart/LineChart";
import { SameData } from "@/components/ui/organisms/sameChart/SameData";
export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] w-full">
            <Header size="large" title="Pronostico" description="This is the statistics page" />
            <section className="grid grid-cols-2 gap-4 place-content-center">
                <Fortecast />
                <LineChart />
                <SameData />
            </section>
        </div>
    );
}
