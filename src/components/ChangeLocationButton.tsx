import React from 'react';
import { connect } from 'react-redux';
import { clearLocation } from '../store/location/actions';
import style from './ChangeLocationButton.module.scss';

interface ChangeLocationButtonProps {
  clearLocation: () => void;
}

const ChangeLocationButton: React.FC<ChangeLocationButtonProps> = (props) => {
  return (
    <button
      type="button"
      className={style.button}
      onClick={props.clearLocation}
    >
      Change Location
    </button>
  );
};

export default connect(null, { clearLocation })(ChangeLocationButton);
