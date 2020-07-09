import React from 'react';
import { connect } from 'react-redux';
import ForcastDay from './ForcastDay';
import { RootState } from '../store';
import { Weather } from '../store/weather/types';
import style from './Forcast.module.scss';

interface Props {
  weather: Weather;
}

const Forcast: React.FC<Props> = (props) => {
  const forcastDayList = props.weather.daily.map((day, index) => (
    <ForcastDay key={day.dt} day={day} index={index} />
  ));
  return (
    <div className={style.forcast}>
      <h2 className={style.header}>Forcast</h2>
      <ul className={style.forcastUL}>{forcastDayList}</ul>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(Forcast);
