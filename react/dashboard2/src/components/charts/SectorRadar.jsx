import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(...registerables);

const SectorRadar = ({data,selectedSector}) => {

    // console.log('sectorrrrrrrrrrrrr',selectedSector)
    const filteredData = data.filter(
        item => item.sector === selectedSector && item.region !== null && item.region.toLowerCase() !== 'world'
      );
    
  const chartData = {
    labels: filteredData.map(item => item.region),
    datasets: [
      {
        data: filteredData.map(item => item.relevance),
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(192, 75, 192, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(192, 75, 192, 1)'],
      },
    ],
  };

  const chartOptions = {
    plugins: { legend: { display: true } },
  };

  return <Doughnut data={chartData} options={chartOptions} />;
    
}

export default SectorRadar