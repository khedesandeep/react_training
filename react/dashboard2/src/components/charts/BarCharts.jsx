import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(...registerables);


const BarCharts = ({data,selectedTopic}) => {
    const filteredData = data.filter(
        (item) => item.topic === selectedTopic && item.country !== null
      );
    
      const countryCounts = filteredData.reduce((acc, item) => {
        const { country } = item;
        acc[country] = (acc[country] || 0) + 1;
        return acc;
      }, {});
    
      const labels = Object.keys(countryCounts);
      const counts = Object.values(countryCounts);
    
      const chartData = {
        labels,
        datasets: [
          {
            label: 'Country Occurrences',
            data: counts,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      };
    
      return (
        <div>
          <h2>Topic Country Chart - {selectedTopic}</h2>
          <Bar data={chartData} />
        </div>
      );
}

export default BarCharts