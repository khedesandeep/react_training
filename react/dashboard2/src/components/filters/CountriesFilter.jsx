import React from 'react'

const CountriesFilter = ({countries,onChange}) => {
    const handleCountriesChange = (e) => {
        const selectedCountry = e.target.value;
        onChange(selectedCountry);
      };
    
    
      return (
        <div className="mb-4">
          <label htmlFor="countries" className="block font-medium mb-1">Countries</label>
          <select id="countries" className="w-full border border-gray-300 rounded p-2" onChange={handleCountriesChange}>
            <option value="">All</option>
            {countries.map((country,i)=> (
      <option key={i} value={country}>{country}</option>
    ))}
          </select>
        </div>
      );
}

export default CountriesFilter