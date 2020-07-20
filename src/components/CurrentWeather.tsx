import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './CurrentWeather.module.scss';
import { Weather, Coords } from '../store/weather/types';
import { getWeather } from '../store/weather/actions';
import { Location } from '../store/location/types';
import { RootState } from '../store';
import { rngLocation } from '../utils/randomCities';
import Loader from './Loader';
import Temperature from './Temperature';

interface Props {
  weather: Weather;
  location: Location;
  getWeather: (coords: Coords) => void;
}
const CurrentWeather: React.FC<Props> = (props) => {
  const {
    weather: {
      current: { temp, weather },
      loading,
    },
    location,
    getWeather: getWeatherAction,
  } = props;

  const currentWeatherIconId = weather[0].id;
  // eslint-disable-next-line
  const currentWeatherIcon = require(`../assets/${currentWeatherIconId}.svg`);

  const [city, setCity] = useState('New York');

  useEffect(() => {
    if (!localStorage.location) {
      const randomCoords = rngLocation();
      getWeatherAction(randomCoords);
      setCity(randomCoords.city);
    } else {
      getWeatherAction(location);
    }
  }, [location, getWeatherAction]);

  if (loading) return <Loader />;
  return (
    <div className={style.currentWeather}>
      <h2 className={style.header}>Current</h2>
      <div className={style.cityWeather}>
        <h3 className={style.city}>{location.city || city}</h3>
        <img
          className={style.weatherIcon}
          src={String(currentWeatherIcon)}
          alt="current weather icon"
        />
      </div>
      <Temperature units="imperial" temp={temp} />
      <Temperature units="metric" temp={temp} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  location: state.location,
  weather: state.weather,
});

export default connect(mapStateToProps, { getWeather })(CurrentWeather);
