import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './CurrentWeather.module.scss';
import weatherIcon from '../assets/800.svg';
import { Weather, Coords } from '../store/weather/types';
import { getWeather } from '../store/weather/actions';
import { Location } from '../store/location/types';
import { RootState } from '../store';

interface Props {
  weather: Weather;
  location: Location;
  getWeather: (coords: Coords) => void;
}
const CurrentWeather: React.FC<Props> = (props) => {
  const { weather, location, getWeather: getWeatherAction } = props;
  useEffect(() => {
    if (location.lat === 0) return;
    getWeatherAction(location);
    // eslint-disable-next-line
  }, []);

  const {
    current: { temp },
  } = weather;

  const fTemp = `${Math.floor(1.8 * (temp - 273) + 32)}º`;
  const cTemp = `${Math.floor(temp - 273.15)}º`;

  return (
    <div className={style.currentWeather}>
      <h2 className={style.header}>Current</h2>
      <div className={style.cityWeather}>
        <h3 className={style.city}>{location.city || 'New York'}</h3>
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
