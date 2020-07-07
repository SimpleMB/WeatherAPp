import React from 'react';
import style from './ChooseLocation.module.scss';

interface LocationTemplateProps {}

const ChooseLocation: React.FC<LocationTemplateProps> = (props) => {
  return (
    <div className={style.chooseLocation}>
      <h1 className={style.title}>
        When the bloody hell is it going to stop raining...{' '}
        <span className={style.titleSpan}>app</span>
      </h1>
      <div className="searchLocation">
        <label htmlFor="input-location" className={style.labelLocation}>
          {' '}
          send <span className={style.labelHeart}>❤</span> and 🌤 to this
          location:
        </label>
        <input
          id="input-location"
          className={style.inputLocation}
          type="text"
          placeholder="hurry up..."
        />
      </div>
    </div>
  );
};

export default ChooseLocation;
