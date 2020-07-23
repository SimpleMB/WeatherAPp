import React from 'react';
import { WeatherPrecise } from '../store/weather/types';
import { kelvinToFahrenheit, kelvinToCelsius } from '../utils/tempConverter';
import style from './ForcastDay.module.scss';

interface ForcastDayProps {
  day: WeatherPrecise;
  index: number;
  timezoneOffset: number;
}

const ForcastDay: React.FC<ForcastDayProps> = (props) => {
  const {
    day: { dt, temp, humidity, wind_speed: windSpeed, weather },
    index,
    timezoneOffset,
  } = props;
  const { id, description } = weather[0];

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // dt is UNIX time stamp
  const ISOTime = dt * 1000;

  // timezoneOffset - in location can still be monday but user have tuesday
  const forcastDay = new Date(ISOTime + timezoneOffset).getDay();
  const forcastWeekday = weekdays[forcastDay];
  const forcastDayName = index === 0 ? 'Today' : forcastWeekday;

  const tempDay = `${kelvinToFahrenheit(temp.day)}F / ${kelvinToCelsius(
    temp.day
  )}C`;
  const tempNight = `${kelvinToFahrenheit(temp.night)}F / ${kelvinToCelsius(
    temp.night
  )}C`;

  // eslint-disable-next-line
  const dynamicIcon = require(`../assets/${id}.svg`);

  return (
    <div className={style.forcastDayWrapper}>
      <h3 className={style.forcastHeader}>{forcastDayName}</h3>
      <div className={style.forcastDayFlex}>
        <div>
          <h4 className={style.weatherDesc}>
            {description[0].toUpperCase() + description.substring(1)}
          </h4>
          <ul className={style.weatherList}>
            <li>
              Day: <span>{tempDay}</span>
            </li>
            <li>
              Night: <span>{tempNight}</span>
            </li>
            <li>
              Humidity: <span>{humidity}%</span>
            </li>
            <li>
              Wind: <span>{windSpeed}m/s</span>
            </li>
          </ul>
        </div>
        <img
          className={style.weatherIcon}
          src={String(dynamicIcon)}
          data-testid={id}
          alt="weather icon"
        />
      </div>
    </div>
  );
};

export default ForcastDay;
