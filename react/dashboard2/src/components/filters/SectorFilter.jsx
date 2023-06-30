import React from 'react';

const SectorFilter = ({ sectors, onChange }) => {
  const handleSectorChange = (e) => {
    const selectedSector = e.target.value;
    onChange(selectedSector);
  };

  return (
    <div className="mb-4">
      <label htmlFor="sector" className="block font-medium mb-1">Sector</label>
      <select id="sector" className="w-full border border-gray-300 rounded p-2" onChange={handleSectorChange}>
       
        {sectors.map((sector) => (
          <option key={sector} value={sector}>{sector}</option>
        ))}
      </select>
    </div>
  );
};

export default SectorFilter;
