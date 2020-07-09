import React from 'react';
import { WeatherPrecise } from '../store/weather/types';

interface ForcastDayProps {
  day: WeatherPrecise;
  index: number;
}

const ForcastDay: React.FC<ForcastDayProps> = (props) => {
  const {
    day: { dt, temp, weather },
    index,
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
  const forcastDay = new Date(dt * 1000).getDay();
  const forcastWeekday = weekdays[forcastDay];

  const currentDay = new Date(Date.now()).getDay();
  const currentWeekday = weekdays[currentDay];

  const forcastDayName = forcastDay === currentDay ? 'Today' : forcastWeekday;

  return <li>{forcastDayName}</li>;
};

export default ForcastDay;
