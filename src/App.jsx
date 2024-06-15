import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import Search from './components/Search';
import { fetchWeatherByCoords, fetchWeatherByCity } from './api/openWeather';
import './index.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cardBackground, setCardBackground] = useState('bg-clear-day');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoords(latitude, longitude).then(data => {
        setWeatherData(data);
        setLoading(false);
        updateBackground(data.weather[0].main);
      });
    });
  }, []);

  const handleSearch = (city) => {
    setLoading(true);
    fetchWeatherByCity(city).then(data => {
      setWeatherData(data);
      setLoading(false);
      updateBackground(data.weather[0].main);
    });
  };

  const updateBackground = (weather) => {
    switch(weather.toLowerCase()) {
      case 'clear':
        setCardBackground('bg-clear-day');
        break;
      case 'clouds':
        setCardBackground('bg-cloudy');
        break;
      case 'rain':
      case 'drizzle':
        setCardBackground('bg-rainy');
        break;
      case 'snow':
        setCardBackground('bg-snowy');
        break;
      case 'thunderstorm':
        setCardBackground('bg-thunderstorm');
        break;
      case 'haze': 
      setCardBackground('bg-haze');

        break;
      default:
        setCardBackground('bg-clear-day');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white flex justify-center">
      <div className={`card p-6 bg-white bg-opacity-75 rounded-lg shadow-lg text-black w-full max-w-md ${cardBackground}`}>      <div className="container mx-auto p-4">
        <Search onSearch={handleSearch} />
        {loading ? (
          <div className="text-center mt-4">Loading...</div>
        ) : (
          weatherData && <WeatherDisplay weatherData={weatherData} />
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
