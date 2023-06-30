import React from 'react';
import LineCharts from '../charts/LineCharts';

const RegionArea = ({ data,selectedRegion }) => {
  return (
    <div className="region-area ">
      <h2>Region Area</h2>
      <p>Selected Region: {selectedRegion}</p>

      <LineCharts
        selectedRegion={selectedRegion}
        data={data}
      />
    </div>
  );
};

export default RegionArea;
