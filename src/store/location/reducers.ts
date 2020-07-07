import { LocationActionsType, Location, SET_LOCATION } from './types';

const initialState: Location = {
  lat: 0,
  lon: 0,
  city: '',
};

export default (state = initialState, action: LocationActionsType) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.payload;

    default:
      return state;
  }
};
