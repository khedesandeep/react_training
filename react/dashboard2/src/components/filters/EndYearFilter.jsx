import React from 'react';

const EndYearFilter = ({ onChange,years }) => {
  const handleEndYearChange = (e) => {
    const selectedEndYear = e.target.value;
    onChange(selectedEndYear);
  };


  // console.log(sortedArr)

  return (
    <div className="mb-4">
      <label htmlFor="end-year" className="block font-medium mb-1">End Year</label>
      <select id="end-year" className="w-full border border-gray-300 rounded p-2" onChange={handleEndYearChange}>

        {years.map(year => (
  <option key={year} value={year}>{year}</option>
))}

      </select>
    </div>
  );
};

export default EndYearFilter;
