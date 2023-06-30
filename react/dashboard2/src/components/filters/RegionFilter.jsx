import React from 'react';

const RegionFilter = ({ regions, onChange }) => {
  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    onChange(selectedRegion);
  };

  return (
    <div className="mb-4">
      <label htmlFor="region" className="block font-medium mb-1">Region</label>
      <select id="region" className="w-full border border-gray-300 rounded p-2" onChange={handleRegionChange}>
      
        {regions.map((region) => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
