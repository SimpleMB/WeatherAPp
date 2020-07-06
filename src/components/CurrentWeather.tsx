import React from 'react';
import style from './CurrentWeather.module.scss';
import weatherIcon from '../assets/800.svg';

interface CurrentWeatherProps {
  weather: {};
}
const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
  console.log(props.weather);
  return (
    <div className={style.currentWeather}>
      <h2 className={style.header}>Current</h2>
      <div className={style.cityWeather}>
        <h3 className={style.city}>New York</h3>
        <img
          className={style.weatherIcon}
          src={weatherIcon}
          alt="current weather icon"
        />
      </div>

      <div className="fahrenheit-temp">
        <p className={style.fahrenheitDeg}>
          75º<span className={style.degType}>Fahrenheit</span>
        </p>
      </div>
      <div className="celsius-temp">
        <p className={style.celsiusDeg}>
          24º<span className={style.degType}>Celsius</span>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
