import { Line } from "react-chartjs-2";

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
import "./hourlyGraphic.scss";
import Clock from "../../assets/images/clock2.png";

import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface IHourlyGraphicProps {
  data?: any;
}
export const options = {
  responsive: true,
  scales: {
    x: {
      display: false,
      ticks: {
        color: "#959c9e",
        fontSize: 16,
      },
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      ticks: {
        color: "#43586b",
        fontSize: 16,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      displayColors: false,
      backgroundColor: "#43586b",
      bodyFont: {
        size: 20,
      },
      callbacks: {
        title: function () {
          return "";
        },
        label: (tooltipItem: any) => {
          return tooltipItem.raw ? tooltipItem.raw.toString() : "";
        },
      },
    },
  },
};

const labels = ["01", "02", "03", "04", "05", "06"];

const HourlyGraphic: React.FC<IHourlyGraphicProps> = ({ data }) => {
  const [newArray, setNewarray] = useState<any>(data.forecast);
  const forecastValues = Object.values(newArray);

  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: forecastValues,
        borderColor: "#F0F0F0",
        fill: false,
        tension: 0.5,
      },
    ],
  };

  return (
    <div className="hourly-graphic">
      <div className="hourly-graphic__top">
        <img src={Clock} alt="weather" />
        <h1>Hourly Forecast</h1>
      </div>

      <Line options={options} data={data2} />
    </div>
  );
};

export default HourlyGraphic;
