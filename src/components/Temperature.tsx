import React from 'react';
import { kelvinToFahrenheit, kelvinToCelsius } from '../utils/tempConverter';
import style from './Temperature.module.scss';

interface TemperatureProps {
  temp: number;
  units: 'imperial' | 'metric';
}

const Temperature: React.FC<TemperatureProps> = (props) => {
  const { temp, units } = props;
  const tempString =
    units === 'imperial' ? kelvinToFahrenheit(temp) : kelvinToCelsius(temp);

  return (
    <div>
      <p
        className={
          units === 'imperial' ? style.fahrenheitDeg : style.celsiusDeg
        }
      >
        {tempString}
        <span className={style.degType}>
          {units === 'imperial' ? 'Fahrenheit' : 'Celsius'}
        </span>
      </p>
    </div>
  );
};

export default Temperature;
