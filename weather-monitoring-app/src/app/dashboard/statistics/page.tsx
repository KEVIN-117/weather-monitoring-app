import React from "react";
import { Card } from "@nextui-org/react";
import { ContainerBarChars } from "@/components/ui/atoms/containerBarChars/ContainerBarChars";
import { PositiveAndNegativeBarChart } from "@/components/ui/atoms/positiveAndNegativeBarChart/PositiveAndNegativeBarChart";
import { PieChartWithNeedle } from "@/components/ui/atoms/pieChartWithNeedle/PieChartWithNeedle";
import { SamedataComposedChart } from "@/components/ui/atoms/samedataComposedChart/SamedataComposedChart";
import { LineChartComponent } from "@/components/ui/atoms/lineChart/LineChartComponent";

function page() {
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
    <div>
      <Card className="py-4 bg-stone-800/25" isBlurred >
        hola mundo desde un card y andate a la ... Kevin
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <ContainerBarChars>   <LineChartComponent data={defaultData} /></ContainerBarChars>
          <ContainerBarChars>   <PositiveAndNegativeBarChart data={defaultData} /> </ContainerBarChars>
          <ContainerBarChars>   <PieChartWithNeedle data={dataPie} /></ContainerBarChars>
          <ContainerBarChars>  <SamedataComposedChart data={defaultData} /></ContainerBarChars>
        </div>
      </Card>
    </div>
  );
}

export default page;
