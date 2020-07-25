import { SET_LOCATION, CLEAR_LOCATION, Location } from './types';

export const setLocation = (location: Location) => ({
  type: SET_LOCATION,
  payload: location,
});

export const clearLocation = () => ({
  type: CLEAR_LOCATION,
});
