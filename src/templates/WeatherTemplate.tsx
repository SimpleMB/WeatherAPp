import React from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forcast from '../components/Forcast';
import style from './WeatherTemplate.module.scss';

interface WeatherTemplateProps {
  weather: {};
}
const WeatherTemplate: React.FC<WeatherTemplateProps> = (props) => {
  const { weather } = props;

  return (
    <div className={style.weatherTemplate}>
      <CurrentWeather weather={props.weather} />
      <Forcast />
    </div>
  );
};

export default WeatherTemplate;
