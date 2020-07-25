import {
  LocationActionsType,
  Location,
  SET_LOCATION,
  CLEAR_LOCATION,
} from './types';

export const initialLocationState: Location = {
  lat: 0,
  lon: 0,
  city: '',
};

export default (state = initialLocationState, action: LocationActionsType) => {
  switch (action.type) {
    case SET_LOCATION:
      localStorage.setItem('location', JSON.stringify(action.payload));
      return action.payload;

    case CLEAR_LOCATION:
      localStorage.removeItem('location');
      return initialLocationState;
    default:
      return state;
  }
};
