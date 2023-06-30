import React from 'react';
import EndYearArea from '../areaComp/EndYearArea';
import RegionArea from '../areaComp/RegionArea';
import TopicsArea from '../areaComp/TopicsArea';
import SectorArea from '../areaComp/SectorArea';
import CountriesArea from '../areaComp/CountriesArea';
import PestleChart from '../charts/PestleChart';

import { Route, Routes } from 'react-router-dom';
import Widget from '../widget/Widget';

const ContentArea = ({ selectedEndYear, onEndYearChange, data, selectedRegion, selectedTopic, selectedSector, selectedCountry }) => {

  return (

    <div className='w-full h-full'>
                  <div className="flex justify-between">
                  <Widget test={data} type="intensity"/>
                  <Widget test={data} type="topic" />
                  <Widget test={data} type="sector"/>
                  <Widget test={data} type="pestle"/>
                  </div>
                 

      <div className="flex items-center h-[100vh] text-center border-2	border-slate-100">
            
            
        <Routes>
          <Route path='/' element={<div className='w-full flex flex-wrap md:flex-row justify-between items-center'>
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 md:flex-col'>
              <EndYearArea
              data={data}
              selectedEndYear={selectedEndYear}
            /></div>
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-2/3 md:flex-col'>
              <RegionArea
                data={data}
                selectedRegion={selectedRegion}
              />
            </div>
          </div>
          }
          />


          <Route path='/sector' element={<div className='w-full h-[100vh] flex justify-center border-2 	border-slate-100'>
            <SectorArea
              data={data}
              selectedSector={selectedSector}
            />
          </div>}
          />

          <Route path='/topic' element={<div className='w-full h-[100vh] flex justify-center border-2 	border-slate-100'>
            <TopicsArea
              data={data}
              selectedTopic={selectedTopic}
            />
          </div>}
          />


          <Route path='/pestle' element={<div className='w-full h-[100vh] flex justify-center border-2 	border-slate-100'>
            <PestleChart
              data={data}
              selectedCountry={selectedCountry}
            />
          </div>}
          />



          <Route path='/countries' element={<div className='w-full h-[100vh] flex justify-center border-2 	border-slate-100'>
          <CountriesArea
          data={data}
          selectedCountry={selectedCountry}
        />

        
          </div>}
          />
        </Routes>

  
      </div>

    </div>


  );
};

export default ContentArea;
