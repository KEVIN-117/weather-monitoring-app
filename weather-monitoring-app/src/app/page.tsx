import { Fortecast } from "@/components/ui/organisms/forecast/Fortecast";
// import { LineChartComponent } from "@/components/ui/atoms/lineChart/LineChartComponent";
import { LineChart } from "@/components/ui/organisms/lineChart/LineChart";
import { SameData } from "@/components/ui/organisms/sameChart/SameData";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="grid grid-cols-2 gap-4">
        <Fortecast />
        <LineChart />
        <SameData/>
      </section>
    </div>
  );
}
