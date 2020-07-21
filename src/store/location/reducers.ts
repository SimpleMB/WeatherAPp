import {
  LocationActionsType,
  Location,
  SET_LOCATION,
  CLEAR_LOCATION,
  SET_LOCATION_ERROR,
  CLEAR_LOCATION_ERROR,
} from './types';

export const initialLocationState: Location = {
  lat: 0,
  lon: 0,
  city: '',
  error: '',
};

export default (state = initialLocationState, action: LocationActionsType) => {
  switch (action.type) {
    case SET_LOCATION:
      localStorage.setItem('location', JSON.stringify(action.payload));
      return action.payload;

    case CLEAR_LOCATION:
      localStorage.removeItem('location');
      return initialLocationState;

    case SET_LOCATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_LOCATION_ERROR:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};
