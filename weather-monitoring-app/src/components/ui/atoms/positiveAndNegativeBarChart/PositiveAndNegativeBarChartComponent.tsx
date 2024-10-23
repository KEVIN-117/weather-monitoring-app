"use client";

import { ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";
import { IProps } from "./types/IProps";

// Datos predeterminados
const defaultData = [
  { time: "3:00:00", maxtemp_c: 25, mintemp_c: 15 },
  { time: "4:00:00", maxtemp_c: 28, mintemp_c: 17 },
  { time: "5:00:00", maxtemp_c: 30, mintemp_c: 18 },
];

export function PositiveAndNegativeBarChartComponent({ data }: IProps) {
  if (!data || data.length === 0) {
    data = defaultData;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: '#000', opacity: '0.8', color: '#fff' }} />
        <Bar dataKey="maxtemp_c" fill="#ff7300" />
        <Bar dataKey="mintemp_c" fill="#387908" />
      </BarChart>
    </ResponsiveContainer>
  );
}
