import React from 'react';
import { WeatherPrecise } from '../store/weather/types';
import weatherIcon from '../assets/312.svg';
import { kelvinToFahrenheit, kelvinToCelsius } from '../utils/tempConverter';

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
  const { id, main, description, icon } = weather[0];

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

  return (
    <div>
      <h3>{forcastDayName}</h3>
      <div>
        <div>
          <h4>{description[0].toUpperCase() + description.substring(1)}</h4>
          <ul>
            <li>Day: {tempDay}</li>
            <li>Night: {tempNight}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {windSpeed} m/s</li>
          </ul>
        </div>
        <img src={weatherIcon} alt="" />
      </div>
    </div>
  );
};

export default ForcastDay;
