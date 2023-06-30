import React from 'react'
import LivelihoodChart from '../charts/LivelihoodChart'

const CountriesArea = ({data,selectedCountry}) => {
  return (
    <div className="end-year-area w-full ">
    <h2>Countries Area</h2>
    <p>Selected Country: {selectedCountry}</p>

    <LivelihoodChart data={data} selectedCountries={selectedCountry} />
   </div>
  )
}

export default CountriesArea