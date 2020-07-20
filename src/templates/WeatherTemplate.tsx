import React from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forcast from '../components/Forcast';
import style from './WeatherTemplate.module.scss';
import ChangeLocationButton from '../components/ChangeLocationButton';

interface WeatherTemplateProps {}
const WeatherTemplate: React.FC<WeatherTemplateProps> = (props) => {
  return (
    <div className={style.weatherTemplate}>
      <CurrentWeather />
      <Forcast />
      <ChangeLocationButton />
    </div>
  );
};

export default WeatherTemplate;
