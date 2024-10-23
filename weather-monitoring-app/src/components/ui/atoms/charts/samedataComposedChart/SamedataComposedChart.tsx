"use client";
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
import { Card } from "@nextui-org/react";


export function SamedataComposedChart({data}: IProps) {

  return (
    <Card isBlurred className="w-full max-w-4xl bg-default-100/50 dark:bg-default-100/50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden set-border">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
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
    </Card>

  );
}
