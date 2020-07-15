import { LocationActionsType, Location, SET_LOCATION } from './types';

const initialState: Location = {
  lat: 0,
  lon: 0,
  city: '',
};

export default (state = initialState, action: LocationActionsType) => {
  switch (action.type) {
    case SET_LOCATION:
      // TODO: set local storage
      localStorage.setItem('location', JSON.stringify(action.payload));
      return action.payload;

    default:
      return state;
  }
};
