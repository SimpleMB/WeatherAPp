import React from 'react';
import { connect } from 'react-redux';
import { Weather } from '../store/weather/types';
import { RootState } from '../store';
import style from './Alert.module.scss';

interface AlertProps {
  weather: Weather;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { error } = props.weather;

  return (
    <div className={error ? style.alertWrapperActive : style.alertWrapper}>
      <p className={style.error}>{error}</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(Alert);
