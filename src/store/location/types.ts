export const SET_LOCATION = 'SET_LOCATION';
export const CLEAR_LOCATION = 'CLEAR_LOCATION';
export const SET_LOCATION_ERROR = 'SET_LOCATION_ERROR';
export const CLEAR_LOCATION_ERROR = 'CLEAR_LOCATION_ERROR';

export interface Location {
  lat: number;
  lon: number;
  city: string;
  error: string;
}

export interface SetLocationAction {
  type: typeof SET_LOCATION;
  payload: Location;
}

export interface ClearLocationAction {
  type: typeof CLEAR_LOCATION;
}

interface SetErrorAction {
  type: typeof SET_LOCATION_ERROR;
  payload: string;
}

interface ClearErrorAction {
  type: typeof CLEAR_LOCATION_ERROR;
}

export type LocationActionsType =
  | SetLocationAction
  | ClearLocationAction
  | SetErrorAction
  | ClearErrorAction;
