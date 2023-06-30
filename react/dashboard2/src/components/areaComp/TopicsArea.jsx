import React from 'react';
import BarCharts from '../charts/BarCharts';

const TopicsArea = ({data, selectedTopic }) => {
  return (
    <div className="topics-area w-[70%]">
      <h2>Topics Area</h2>
      <p>Selected Topics: {selectedTopic}</p>
      <BarCharts data={data} selectedTopic={selectedTopic} />
    </div>
  );
};

export default TopicsArea;
