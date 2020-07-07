import { Dispatch } from 'redux';
import {
  SET_LOCATION,
  CLEAR_LOCATION,
  Location,
  SetLocationAction,
  ClearLocationAction,
} from './types';

export const setLocation = (location: Location) => (
  dispatch: Dispatch<SetLocationAction>
) => {
  dispatch({
    type: SET_LOCATION,
    payload: location,
  });
};

export const clearLocation = () => (
  dispatch: Dispatch<ClearLocationAction>
) => {
  dispatch({
    type: CLEAR_LOCATION,
  });
};
