import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
Chart.register(...registerables);

const PieChart = ({ data }) => {
  const sectors = data.map(item => item.sector);


  const sectorCounts = countOccurrences(sectors);

  const chartData = {
    labels: Object.keys(sectorCounts),
    datasets: [
      {
        data: Object.values(sectorCounts),
        backgroundColor: getColors(Object.keys(sectorCounts).length),
      },
    ],
  };

  function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  }

  function getColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(color);
    }
    return colors;
  }

  return (
    <div className="pie-chart">
      <h2>Pie Chart</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
