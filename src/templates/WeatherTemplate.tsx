import React from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forcast from '../components/Forcast';
import ChangeLocationButton from '../components/ChangeLocationButton';
import Alert from '../components/Alert';
import style from './WeatherTemplate.module.scss';

interface WeatherTemplateProps {}
const WeatherTemplate: React.FC<WeatherTemplateProps> = (props) => {
  return (
    <div className={style.weatherTemplate}>
      <CurrentWeather />
      <Forcast />
      <ChangeLocationButton />
      <Alert />
    </div>
  );
};

export default WeatherTemplate;
