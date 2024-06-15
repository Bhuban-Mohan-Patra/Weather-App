import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherDisplay = ({ weatherData }) => {
  const { main, weather, wind, sys, name } = weatherData;
  const icon = weather[0].icon;

  return (
    <div className="text-center mt-4">
      <h1 className="text-4xl mb-4">{name}</h1>
      <WeatherIcon icon={icon} />
      <div className="text-xl">
        <p>{weather[0].main}</p>
        <p>({weather[0].description})</p>
        <p>Temperature: {main.temp}°C</p>
        <p>Feels Like: {main.feels_like}°C</p>
        <p>Wind Speed: {wind.speed} m/s</p>
        <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
