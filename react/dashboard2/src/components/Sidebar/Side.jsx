import React from 'react'
import RegionFilter from '../filters/RegionFilter';
import EndYearFilter from '../filters/EndYearFilter';
import { Link } from 'react-router-dom';
import SectorFilter from '../filters/SectorFilter';
import TopicsFilter from '../filters/TopicsFilter';
import CountriesFilter from '../filters/CountriesFilter';

const Side = ({onEndYearChange,years,regions,onRegionChange,topics,onTopicChange,sectors,onSectorChange,countries,onCountryChange}) => {


    // console.log(years)

    const handleSelectRegion = (region) => {
        onRegionChange(region);
      };

      const handleEndYearChange = (selectedEndYear) => {
        onEndYearChange(selectedEndYear)
      };

      const handleSector = (sector) => {
        onSectorChange(sector)
      }

      const handleTopics = (topic) => {
        onTopicChange(topic)
      }

      const handleCountries = (country) => {
        onCountryChange(country)
      }

    return (
        <div className="w-1/4 bg-slate-100 p-4 h-screen text-black	 hidden md:block ">


            <div className='text-sm h-[90%]'>
                
                <ul className='m-0 p-0 w-full '>
                    <h1 className='text-2xl'>Factors</h1>
                    <div className='m-0 p-5 flex items-center flex-col space-y-4'>

                   <li className='hover:bg-slate-500 rounded p-3 w-full'>
                    <span > <Link to='/'>End & Region Chart</Link></span>
                    
                   </li>

                   <li className='hover:bg-slate-500 rounded p-3   w-full'>
                    <span><Link to='/sector'>Sector Donght</Link></span>
                   </li>

                   <li className='hover:bg-slate-500 rounded p-3  w-full'>
                    <span><Link to='/topic'>Topic</Link></span>
                   </li>


                   <li className='hover:bg-slate-500 rounded p-3  w-full'>
                    <span><Link to='/countries'>Countries</Link></span>
                   </li>

                   <li className='hover:bg-slate-500 rounded p-3  w-full'>
                    <span><Link to='/pestle'>PestleChart of Countries</Link></span>
                   </li>
                    </div>

                </ul>

                <ul className='m-0 p-0 w-full '>
                    <h1 className='text-2xl'>Filters</h1>
                    <div className='m-0 p-5  space-y-4 text-sm'>                            
                            <EndYearFilter years={years} onChange={handleEndYearChange} />
                            <RegionFilter regions={regions} onChange={handleSelectRegion} />
                            <SectorFilter sectors={sectors} onChange={handleSector}/>
                            <TopicsFilter topics={topics} onChange={handleTopics}/>
                            <CountriesFilter countries={countries} onChange={handleCountries} />
                    </div>

                </ul>
            </div>


            
        </div>
    )
}

export default Side