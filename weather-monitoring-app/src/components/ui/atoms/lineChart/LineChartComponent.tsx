"use client";

import { ResponsiveContainer } from "recharts";
import { IProps } from "./types/IProps";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// Datos predeterminados
const defaultData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
];

export function LineChartComponent({ data = defaultData }: IProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} width={500} height={300}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}


