"use client";

import { ResponsiveContainer } from "recharts";
import type{ IProps } from "./types/IProps";
import { PieChart, Pie, Label } from "recharts";

// Datos predeterminados
const defaultData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
];

export function PieChartWithNeedle({ data = defaultData }: IProps) {
  const totalValue = data.reduce((acc, entry) => acc + entry.uv, 0);
  const targetValue = data[0].uv;
  const needleAngle = (targetValue / totalValue) * 180;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="uv"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          startAngle={180}
          endAngle={0}
        />
        {/* Aquí es donde se dibuja la aguja */}
        <g transform="translate(100, 100)">
          <line
            x1="0"
            y1="0"
            x2={80 * Math.cos((needleAngle - 90) * (Math.PI / 180))}
            y2={80 * Math.sin((needleAngle - 90) * (Math.PI / 180))}
            stroke="#ff7300"
            strokeWidth="3"
          />
        </g>
        <Label
          value={`Valor: ${data[0].uv}`}
          position="center"
          style={{ fontSize: '14px', fontWeight: 'bold' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}


