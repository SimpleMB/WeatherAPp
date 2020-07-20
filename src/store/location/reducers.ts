import {
  LocationActionsType,
  Location,
  SET_LOCATION,
  CLEAR_LOCATION,
} from './types';

const initialState: Location = {
  lat: 0,
  lon: 0,
  city: '',
};

export default (state = initialState, action: LocationActionsType) => {
  switch (action.type) {
    case SET_LOCATION:
      localStorage.setItem('location', JSON.stringify(action.payload));
      return action.payload;
    case CLEAR_LOCATION:
      localStorage.removeItem('location');
      return initialState;
    default:
      return state;
  }
};
