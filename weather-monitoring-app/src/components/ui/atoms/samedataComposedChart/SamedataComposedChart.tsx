"use client";
import { useEffect, useState } from "react";
import { getData } from "../../organisms/forecast/action/get-action";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { IProps } from "./types/IProps";

const defaultData: IProps["data"] = [
  { name: "Jan", avgHumidity: 70 },  // Datos de ejemplo
  { name: "Feb", avgHumidity: 75 },
];

export function SamedataComposedChart() {
  const [chartData, setChartData] = useState<IProps["data"]>(defaultData);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const days = 14;
        const weatherData = await getData(days, "Buenos Aires, Argentina");

        // Procesar los datos para el gráfico
        const processedData = weatherData.forecast.forecastday.map((day) => ({
          name: day.date,
          avgHumidity: day.day.avghumidity,
          condition: day.day.condition.text, // Condición climática
        }));
        

        setChartData(processedData);
      } catch (error) {
        console.error("Error al obtener los datos del pronóstico:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={chartData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="avgHumidity" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="avgHumidity" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
