import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2018", 1000, 400, 200],
  ["2019", 1170, 460, 250],
  ["2020", 1060, 520, 300],
  ["2021", 1030, 540, 350],
  ["2022", 1030, 540, 350],
  ["2023", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2018-2023",
  },
  colors: ['rgb(53,138,148)','rgb(37,11,165)', '#188310']
};

export default function Barchart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
