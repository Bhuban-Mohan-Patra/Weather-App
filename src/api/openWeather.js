const API_KEY = '0effa94427c955796c1b328a07d38137';

export const fetchWeatherByCoords = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};

export const fetchWeatherByCity = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};
