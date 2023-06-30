import React from 'react';
import SectorRadar from '../charts/SectorRadar';


const SectorArea = ({ data,selectedSector }) => {
  return (
    <div className="sector-area h-full  flex items-center ">
      <h2>Sector Area</h2>
      <p>Selected Sector: {selectedSector}</p>

      <SectorRadar data={data} selectedSector={selectedSector} />
    </div>
  );
};

export default SectorArea;
