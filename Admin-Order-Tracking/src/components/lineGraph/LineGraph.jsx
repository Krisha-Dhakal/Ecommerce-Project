import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
  // Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      display: true,
    },
    y: {
      display: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    filler: {
      propagate: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Orders",
      data: [100, 200, 220, 230, 422, 300, 350],
      borderColor: "rgb(47,128,237,0.5)",
      borderWidth: 2,
      fill: true,
      backgroundColor: "rgb(47,128,237,0.3)",
      lineTension: 0.3,
      showLine: true,
      pointRadius: 2, // Remove points
      pointHoverRadius: 0,
    },
  ],
  fill: true,
  backgroundColor: "red",
};
const LineGraph = () => {
  return (
    <div className="w-full h-full shadow-md rounded-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
