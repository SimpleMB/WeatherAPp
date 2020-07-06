import React, { useEffect, useState } from 'react';
import WeatherTemplate from './templates/WeatherTemplate';
import LocationTemplate from './templates/LocationTemplate';

const App: React.FC = () => {
  interface Coords {
    lat: string;
    lon: string;
  }

  const [location, setLocation] = useState({ lat: '', lon: '' });

  const [weather, setWeather] = useState({});

  const fetchWeatherWithCoords = async (coords: Coords) => {
    try {
      const weatherJSON = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly&appid=f70a003f4e16b43209f8ecedfcb9f427`
      );
      const weatherData: object = await weatherJSON.json();
      setWeather(weatherData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.location) {
      setLocation(localStorage.location);
    } else {
      setLocation({ lat: '33.44', lon: '-94.04' });
    }
  }, []);

  useEffect(() => {
    location.lat && fetchWeatherWithCoords(location);
  }, [location]);

  return location.lat !== '' ? (
    <WeatherTemplate weather={weather} />
  ) : (
    <LocationTemplate loc={setLocation} randomWeather={weather} />
  );
};

export default App;
