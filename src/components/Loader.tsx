import React from 'react';
import loadingGif from '../assets/Loader-Cube-1s-250px.svg';
import style from './Loader.module.scss';

interface Props {}

const Loader = (props: Props) => {
  return (
    <div className={style.loaderScreen}>
      <img
        src={loadingGif}
        alt="loading gif icon, please wait while downloading data"
      />
    </div>
  );
};

export default Loader;
