export interface IProps {
    type: "SimpleLineChart" | "PositiveAndNegativeBarChart" | "PieChartWithNeedle" | "SamedataComposedChart";
    data: any[]; // Ajusta esto según el tipo de datos que manejes
  }