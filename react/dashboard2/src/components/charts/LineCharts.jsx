import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

const LineCharts = ({ data, selectedRegion }) => {
  const filteredData = [
    ...new Set(
      data.filter(
        (item) =>
          item.region !== null &&
          item.sector !== null &&
          item.region === selectedRegion
      )
    ),
  ];

  const chartData = {
    labels: filteredData.map((item) => item.sector),
    datasets: [
      {
        label: selectedRegion,
        data: filteredData.map((item) => item.intensity),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Intensity",
        },
      },
      x: {
        title: {
          display: true,
          text: "Sector",
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default LineCharts;
