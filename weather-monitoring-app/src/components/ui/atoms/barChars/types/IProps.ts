export interface IProps {
  type: "SimpleLineChart" | "PositiveAndNegativeBarChart" | "PieChartWithNeedle" | "SamedataComposedChart";
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}