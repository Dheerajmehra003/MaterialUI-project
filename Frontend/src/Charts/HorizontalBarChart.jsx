import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2020 Performance", "2024 Performance"],
  ["India, IND", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

export const options = {
  chart: {
    title: "Company performance",
    subtitle: "Based on most recent and previous census data",
  },
  chartArea: {width: "50%"},
  hAxis: {
    title: "Total Performance",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  colors: ['rgb(53,138,148)','rgb(40,34,70)'],

  bars: "horizontal",
  axes: {
    y: {
      0: { side: "right" },
    },
  },
};

export function HorizontalBarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
