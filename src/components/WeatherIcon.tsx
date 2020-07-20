import React from 'react';
import style from './WeatherIcon.module.scss';

interface WeatherIconProps {
  src: string;
  alt: string;
  invert?: boolean;
}

const WeatherIcon: React.FC<WeatherIconProps> = (props) => {
  const { src, alt, invert } = props;
  return (
    <img
      className={invert ? style.weatherIconInvert : style.weatherIcon}
      src={src}
      alt={alt}
    />
  );
};

export default WeatherIcon;
