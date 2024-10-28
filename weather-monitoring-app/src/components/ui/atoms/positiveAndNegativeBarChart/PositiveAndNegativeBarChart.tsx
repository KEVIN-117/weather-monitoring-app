"use server";

import { PositiveAndNegativeBarChartComponent } from "./PositiveAndNegativeBarChartComponent";
import { getData } from "../../organisms/forecast/action/get-action";
import { WeatherData } from "../../molecules/forecast-card/types/IProps";

interface FortecastProps {
  lat?: string;
  lon?: string;
}

interface BarChartProps {
  time: string;
  maxtemp_c: number;
  mintemp_c: number;
}

export async function PositiveAndNegativeBarChart({ lat, lon }: FortecastProps) {
  const LAT = lat || "-19.594080";
  const LON = lon || "-65.748528";
  const data = await getData(5, `${LAT},${LON}`);
  console.log(data?.forecast.forecastday[0].date);

  const barChartData = data?.forecast.forecastday[0].hour.map((hour: WeatherData) => ({
    time: hour.time.split(" ")[1].slice(0, 5),
    maxtemp_c: hour.temp_c + 2,
    mintemp_c: hour.temp_c - 2,
  })) as BarChartProps[];

  return (
    <>
      <PositiveAndNegativeBarChartComponent data={barChartData} />
    </>
  );
}
