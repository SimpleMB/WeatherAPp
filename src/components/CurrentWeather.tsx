import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './CurrentWeather.module.scss';
import weatherIcon from '../assets/800.svg';
import { Weather, Coords } from '../store/weather/types';
import { getWeather } from '../store/weather/actions';
import { Location } from '../store/location/types';
import { RootState } from '../store';
import { kelvinToFahrenheit, kelvinToCelsius } from '../utils/tempConverter';
import { rngLocation } from '../utils/randomCities';
import Loader from './Loader';

interface Props {
  weather: Weather;
  location: Location;
  getWeather: (coords: Coords) => void;
}
const CurrentWeather: React.FC<Props> = (props) => {
  const {
    weather: {
      current: { temp },
      loading,
    },
    location,
    getWeather: getWeatherAction,
  } = props;

  const [city, setCity] = useState('New York');

  useEffect(() => {
    if (location.lat === 0) {
      const randomCoords = rngLocation();
      getWeatherAction(randomCoords);
      setCity(randomCoords.city);
    } else {
      getWeatherAction(location);
    }
  }, [location, getWeatherAction]);

  const fTemp = kelvinToFahrenheit(temdp);
  const cTemp = kelvinToCelsius(temp);

  if (loading) return <Loader />;
  return (
    <div className={style.currentWeather}>
      <h2 className={style.header}>Current</h2>
      <div className={style.cityWeather}>
        <h3 className={style.city}>{location.city || city}</h3>
        <img
          className={style.weatherIcon}
          src={weatherIcon}
          alt="current weather icon"
        />
      </div>

      <div className="fahrenheit-temp">
        <p className={style.fahrenheitDeg}>
          {fTemp}
          <span className={style.degType}>Fahrenheit</span>
        </p>
      </div>
      <div className="celsius-temp">
        <p className={style.celsiusDeg}>
          {cTemp}
          <span className={style.degType}>Celsius</span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  location: state.location,
  weather: state.weather,
});

export default connect(mapStateToProps, { getWeather })(CurrentWeather);
