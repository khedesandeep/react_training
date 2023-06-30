import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(...registerables);
const LivelihoodChart = ({ data, selectedCountries }) => {
    const filteredData = data.filter(item => selectedCountries.includes(item.country) && item.pestle !== '');

    const pestles = Array.from(new Set(filteredData.map(item => item.pestle)));
  
    const dataByCountry = {};
    filteredData.forEach(item => {
      if (!dataByCountry[item.country]) {
        dataByCountry[item.country] = [];
      }
      dataByCountry[item.country].push({
        pestle: item.pestle,
        intensity: item.intensity,
      });
    });
  
    const chartDatasets = Object.keys(dataByCountry).map((country, index) => {
      const countryData = dataByCountry[country];
      const chartData = {
        label: country,
        data: pestles.map(pestle => {
          const matchingData = countryData.find(item => item.pestle === pestle);
          return matchingData ? matchingData.intensity : null;
        }),
        fill: false,
        borderColor: getRandomColor(index),
      };
      return chartData;
    });
  
    const chartData = {
      labels: pestles,
      datasets: chartDatasets,
    };
  
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Intensity',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Pestle',
          },
        },
      },
    };
  
    return <Line data={chartData} options={chartOptions} />;
}

function getRandomColor(index) {
    const colors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ];
  
    return colors[index % colors.length];
  }

export default LivelihoodChart