import React from 'react';
import PieChart from '../charts/PieChart';

const EndYearArea = ({ data,selectedEndYear }) => {

  
  const filteredData = data.filter(
    item => item.end_year === parseInt(selectedEndYear)
  );

  return (
    <div className="end-year-area">
    <p>Selected Year: {selectedEndYear}</p>
    
    <PieChart data={filteredData} />
  </div>
  );
};

export default EndYearArea;
