"use client";

import { ResponsiveContainer } from "recharts";
import { IProps } from "./types/IProps";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { Card } from "@nextui-org/react";

// Datos predeterminados
const defaultData = [
  { time: '3:00:00', humidity: 87 },
  { time: '4:00:00', humidity: 93 },
  { time: '5:00:00', humidity: 96 },
  { time: '6:00:00', humidity: 98 },
  { time: '7:00:00', humidity: 98 },
  { time: '8:00:00', humidity: 96 },
  { time: '9:00:00', humidity: 96 },
  { time: '10:00:00', humidity: 96 },
  { time: '11:00:00', humidity: 85 },
  { time: '12:00:00', humidity: 95 },
  { time: '1:00:00', humidity: 94 },
  { time: '2:00:00', humidity: 93 },
  { time: '3:00:00', humidity: 82 },
  { time: '4:00:00', humidity: 62 },
  { time: '5:00:00', humidity: 49 },
  { time: '6:00:00', humidity: 41 },
  { time: '7:00:00', humidity: 39 },
  { time: '8:00:00', humidity: 41 },
  { time: '9:00:00', humidity: 49 },
  { time: '10:00:00', humidity: 52 },
  { time: '11:00:00', humidity: 56 },
  { time: '12:00:00', humidity: 69 },
  { time: '1:00:00', humidity: 75 },
  { time: '2:00:00', humidity: 57 }
]

export function LineChartComponent({ data }: IProps) {

  if (!data || data.length === 0) {
    data = defaultData
  }

  return (
    <Card isBlurred className="w-full max-w-4xl bg-default-100/50 dark:bg-default-100/50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden set-border">


      <ResponsiveContainer className="h-auto" >
        <LineChart data={data} width={500} height={300}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip contentStyle={{
            backgroundColor: '#000',
            opacity: '0.8',
            color: '#fff'
          }} />
          <Line type="monotone" dataKey="humidity" stroke="#8884d8" strokeWidth={10} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}


