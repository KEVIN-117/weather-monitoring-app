import React from "react";
import { Card } from "@nextui-org/react";
import { ContainerBarChars } from "@/components/ui/atoms/containerBarChars/ContainerBarChars";
import { PositiveAndNegativeBarChartComponent } from "@/components/ui/atoms/positiveAndNegativeBarChart/PositiveAndNegativeBarChartComponent";
import { PieChartWithNeedle } from "@/components/ui/atoms/pieChartWithNeedle/PieChartWithNeedle";
import { SamedataComposedChart } from "@/components/ui/atoms/samedataComposedChart/SamedataComposedChart";
import { LineChart } from "@/components/ui/organisms/lineChart/LineChart";
function page() {

  const dataPie = [
    { name: "A", value: 80, color: "#ff0000" },
    { name: "B", value: 45, color: "#00ff00" },
    { name: "C", value: 25, color: "#0000ff" },
  ];
  return (
    <div>
      <Card className="py-4 bg-stone-800/25" isBlurred >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <LineChart />
          <PositiveAndNegativeBarChartComponent data={[]} /> 
          <ContainerBarChars>   <PieChartWithNeedle data={dataPie} /></ContainerBarChars>
          <ContainerBarChars>  <SamedataComposedChart /></ContainerBarChars>
        </div>
      </Card>
    </div>
  );
}

export default page;
