import React from 'react';
import { connect } from 'react-redux';
import ForcastDay from './ForcastDay';
import { RootState } from '../store';
import { Weather } from '../store/weather/types';
import style from './Forcast.module.scss';
import Loader from './Loader';

interface Props {
  weather: Weather;
}

const Forcast: React.FC<Props> = (props) => {
  const { timezone_offset: timezoneOffset, daily, loading } = props.weather;

  const forcastDayList = daily.map((day, index) => (
    <li key={day.dt}>
      <ForcastDay day={day} index={index} timezoneOffset={timezoneOffset} />
    </li>
  ));
  if (loading) return <Loader />;
  return (
    <section className={style.forcast}>
      <h2 className={style.header}>Forcast</h2>
      <ul className={style.forcastUL}>{forcastDayList}</ul>
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(Forcast);
