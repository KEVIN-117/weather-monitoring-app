"use client";

import { ResponsiveContainer } from "recharts";
import type{ IProps } from "./types/IProps";
import {  Line, XAxis, YAxis, Tooltip } from "recharts";
import { ComposedChart, Area } from "recharts";

// Datos predeterminados
const defaultData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
];

export function SamedataComposedChart({ data = defaultData }: IProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Area type="monotone" dataKey="uv" fill="#82ca9d" stroke="#82ca9d" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
