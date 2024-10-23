import { Fortecast } from "@/components/ui/organisms/forecast/Fortecast";
// import { LineChartComponent } from "@/components/ui/atoms/lineChart/LineChartComponent";
import { LineChart } from "@/components/ui/organisms/lineChart/LineChart";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="grid grid-cols-2">
        <Fortecast />
        <LineChart />
      </section>
    </div>
  );
}
