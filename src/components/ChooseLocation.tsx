import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../store/location/actions';
import { Location } from '../store/location/types';
import style from './ChooseLocation.module.scss';

interface LocationTemplateProps {
  setLocation: (location: Location) => void;
}

const ChooseLocation: React.FC<LocationTemplateProps> = (props) => {
  const changeLocation = () => {
    console.log('works');
    props.setLocation({
      lat: 51.507351,
      lon: -0.127758,
      city: 'London',
    });
  };

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
          onFocus={changeLocation}
        />
      </div>
    </div>
  );
};

export default connect(null, { setLocation })(ChooseLocation);
