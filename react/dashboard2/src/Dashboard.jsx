import React,{useState} from 'react';
import ContentArea from './components/Contextarea/ContentArea';
import jsonData from './jsondata.json'
// import Testchart from './components/charts/PestleChart';
import Side from './components/Sidebar/Side';

const Dashboard = () => {
    const [selectedEndYear, setSelectedEndYear] = useState('2018');
    const [selectedRegion, setSelectedRegion] = useState('Northern America');
    const [selectedTopic, setSelectedTopic] = useState('gas');
    const [selectedSector, setSelectedSector] = useState('Food & agriculture');
    const [selectedCountry, setSelectedCountry] = useState('');


    const handleEndYearChange = (endYear) => {
      setSelectedEndYear(endYear);
    };


    const handleRegion = (region) => {
    setSelectedRegion(region);

  };



  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };


  const handleSectorChange = (sector) => {
    setSelectedSector(sector);
  };


  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };





    const nonEmptyEndYears = Array.from(new Set(
        jsonData
          .filter(item => item.end_year !== "")
          .map(item => item.end_year) 
      ));

  const regions = [...new Set(jsonData.map(item => item.region))].filter(region => region !== "");



  const topics = Array.from(new Set(jsonData.map(item => item.topic))).filter(topic => topic !== '');
  
  const sectors = Array.from(new Set(jsonData.map(item => item.sector))).filter(topic => topic !== '');

  const countries = Array.from(new Set(jsonData.map(item => item.country))).filter(country => country !== '');
  

  
  return (
    <div className="flex h-screen">
        <Side 
                  years={nonEmptyEndYears}
                  regions={regions}
                  topics={topics}
                  sectors={sectors}
                  countries={countries}
                  onEndYearChange={handleEndYearChange}
                  onRegionChange = {handleRegion}
                  onTopicChange={handleTopicChange}
                  onSectorChange={handleSectorChange}
                  onCountryChange={handleCountryChange}
        />
      <ContentArea 
                  data ={jsonData}
                  selectedEndYear={selectedEndYear}
                  onEndYearChange={handleEndYearChange}
                  selectedRegion={selectedRegion}
                  onRegionChange = {handleRegion}
                  selectedTopic={selectedTopic}
                  onTopicChange={handleTopicChange}
                  selectedSector={selectedSector}
                  onSectorChange={handleSectorChange}
                  selectedCountry={selectedCountry}
                  onCountryChange={handleCountryChange}
      />

      
    </div>
  );
};

export default Dashboard;
