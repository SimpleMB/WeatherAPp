import React from 'react';
import ChooseLocation from '../components/ChooseLocation';
import CurrentWeather from '../components/CurrentWeather';
import style from './LocationTemplate.module.scss';

interface LocationTemplateProps {}

const LocationTemplate: React.FC<LocationTemplateProps> = (props) => {
  return (
    <main className={style.locationTemplate}>
      <ChooseLocation />
      <CurrentWeather />
    </main>
  );
};

export default LocationTemplate;
