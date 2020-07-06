import React, { Dispatch } from 'react';
import ChooseLocation from '../components/ChooseLocation';
import CurrentWeather from '../components/CurrentWeather';
import style from './LocationTemplate.module.scss';

interface LocationTemplateProps {
  loc: Dispatch<{ lat: string; lon: string }>;
  randomWeather: {};
}

const LocationTemplate: React.FC<LocationTemplateProps> = (props) => {
  return (
    <main className={style.locationTemplate}>
      <ChooseLocation loc={props.loc} />
      <CurrentWeather weather={props.randomWeather} />
    </main>
  );
};

export default LocationTemplate;
