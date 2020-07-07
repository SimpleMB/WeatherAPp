import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import WeatherTemplate from './templates/WeatherTemplate';
import LocationTemplate from './templates/LocationTemplate';
import { Location } from './store/location/types';

interface Props {
  location: Location;
}

const App: React.FC<Props> = (props) => {
  // interface Coords {
  //   lat: string;
  //   lon: string;
  // }

  // const fetchWeatherWithCoords = async (coords: Coords) => {
  //   try {
  //     const weatherJSON = await fetch(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly&appid=f70a003f4e16b43209f8ecedfcb9f427`
  //     );
  //     const weatherData: object = await weatherJSON.json();
  //     setWeather(weatherData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   if (localStorage.location) {
  //     setLocation(localStorage.location);
  //   } else {
  //     // for development only
  //     setLocation({ lat: '33.44', lon: '-94.04' });
  //   }
  // }, []);

  // useEffect(() => {
  //   location.lat && fetchWeatherWithCoords(location);
  // }, [location]);

  return props.location.lat !== 0 ? <WeatherTemplate /> : <LocationTemplate />;
};

interface RootState {
  location: Location;
  weather?: object;
}

const mapStateToProps = (state: RootState) => ({
  location: state.location,
});

export default connect(mapStateToProps, {})(App);
