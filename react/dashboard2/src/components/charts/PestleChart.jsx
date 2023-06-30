import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(...registerables);


const PestleChart = ({data,selectedCountry='Iraq'}) => {




  const filteredData = data.filter((item) => item.country === selectedCountry);

  const uniqueTopics = Array.from(new Set(filteredData.map((item) => item.topic)));

  const labels = uniqueTopics;

  const dataValues = uniqueTopics.map((topic) => {
    const matchingItems = filteredData.filter((item) => item.topic === topic);
    const intensitySum = matchingItems.reduce(
      (sum, item) => sum + item.intensity,
      0
    );
    return intensitySum;
  });


  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Intensity',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10, 
        title: {
          display: true,
          text: 'Intensity',
          font: { size: 16 },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
          font: { size: 16 },
        },
      },
    },
  };


  return (
    <div className='h-full w-full'>
      <h2>Chart for {selectedCountry}</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default PestleChart