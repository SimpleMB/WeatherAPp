import React from 'react';
import ChooseLocation from '../components/ChooseLocation';
import CurrentWeather from '../components/CurrentWeather';
import style from './LocationTemplate.module.scss';
import Alert from '../components/Alert';

const LocationTemplate: React.FC = () => {
  return (
    <main className={style.locationTemplate}>
      <ChooseLocation />
      <CurrentWeather />
      <Alert />
    </main>
  );
};

export default LocationTemplate;
