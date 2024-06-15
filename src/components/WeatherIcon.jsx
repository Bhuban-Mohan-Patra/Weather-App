import React from 'react';

const WeatherIcon = ({ icon }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return <img src={iconUrl} alt="weather icon" className="mx-auto mb-4" />;
};

export default WeatherIcon;
