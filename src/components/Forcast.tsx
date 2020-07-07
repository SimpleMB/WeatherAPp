import React from 'react';
import style from './Forcast.module.scss';
import ForcastDay from './ForcastDay';

interface ForcastProps {}

const Forcast: React.FC<ForcastProps> = (props) => {
  // const forcastDayList = props.weather.daily.map((day) => (
  //   <ForcastDay key={day.dt} day={day} />
  // ));
  return (
    <div className={style.forcast}>
      <h2 className={style.header}>Forcast</h2>
      <ul className={style.forcastUL}>
        <li>dfd</li>
      </ul>
    </div>
  );
};

export default Forcast;
