import React from 'react';

const TopicsFilter = ({ topics, onChange }) => {
  const handleTopicChange = (e) => {
    const selectedTopic = e.target.value;
    onChange(selectedTopic);
  };

  return (
    <div className="mb-4">
      <label htmlFor="topics" className="block font-medium mb-1">Topics</label>
      <select id="topics" className="w-full border border-gray-300 rounded p-2" onChange={handleTopicChange}>
        {topics.map((topic) => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
    </div>
  );
};

export default TopicsFilter;
