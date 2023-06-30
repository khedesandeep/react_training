import React,{useState} from 'react';
import EndYearFilter from '../filters/EndYearFilter';
import RegionFilter from '../filters/RegionFilter';
import TopicsFilter from '../filters/TopicsFilter';
import SectorFilter from '../filters/SectorFilter';
import CountriesFilter from '../filters/CountriesFilter';
// import RegionFilter from '../filters/RegionFilter';

const Sidebar = ({onEndYearChange,years,regions,onRegionChange,topics,onTopicChange,sectors,onSectorChange,countries,onCountryChange}) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('button clicked')
    setIsOpen(!isOpen);
  };

  console.log(isOpen)
  

  // Event handler for end year change
  const handleEndYearChange = (selectedEndYear) => {
    // Perform the necessary actions with the selectedEndYear value
    console.log('Selected End Year:', selectedEndYear);
    onEndYearChange(selectedEndYear)
  };




  const handleSelectRegion = (region) => {
    onRegionChange(region);
  };

  const handleTopics = (topic) => {
    onTopicChange(topic)
  }

  const handleSector = (sector) => {
    onSectorChange(sector)
  }

  const handleCountries = (country) => {
    onCountryChange(country)
  }

  return (
    <>
    
      <div className="w-1/4 bg-white-200 p-4 hidden md:block ">
        
        <h2 className="text-lg font-bold mb-4">Filters</h2>
          <EndYearFilter years={years} onChange={handleEndYearChange} />
          <RegionFilter regions={regions} onChange={handleSelectRegion}/>
          {/* <RegionFilter /> */}
          <SectorFilter sectors={sectors} onChange={handleSector}/>
          <TopicsFilter topics={topics} onChange={handleTopics}/>
          <CountriesFilter countries={countries} onChange={handleCountries} />
      </div>

      <div>

      <button
           type="button"
           className="bg-gray-900 md:invisible inline-flex items-center justify-center p-2 z-100 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
           onClick={toggleSidebar}
      >{isOpen ? 'Close' : 'Menu'}</button>

{isOpen && <div className='fixed left-0  w-64 h-screen sm:translate-x-0'>
<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
        <EndYearFilter years={years} onChange={handleEndYearChange} />
          <RegionFilter regions={regions} onChange={handleSelectRegion}/>
          {/* <RegionFilter /> */}
          <SectorFilter sectors={sectors} onChange={handleSector}/>
          <TopicsFilter topics={topics} onChange={handleTopics}/>
          <CountriesFilter countries={countries} onChange={handleCountries} />
        </div>
        </div>
 }
      </div>

      <div>
        {isOpen && <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <button
           type="button"
           className="bg-gray-900 inline-flex items-center justify-center p-2 z-100 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
           onClick={toggleSidebar}
      >Close</button>


    

        <div>
        <EndYearFilter years={years} onChange={handleEndYearChange} />
          <RegionFilter regions={regions} onChange={handleSelectRegion}/>
          {/* <RegionFilter /> */}
          <SectorFilter sectors={sectors} onChange={handleSector}/>
          <TopicsFilter topics={topics} onChange={handleTopics}/>
          <CountriesFilter countries={countries} onChange={handleCountries} />
        </div>

        </div>
        </div> }
        
      </div>

    </>
  );
};

export default Sidebar;
