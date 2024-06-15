import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city..."
        className="p-2 rounded-lg"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-600 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default Search;
