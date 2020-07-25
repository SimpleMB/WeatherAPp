export const SET_LOCATION = 'SET_LOCATION';
export const CLEAR_LOCATION = 'CLEAR_LOCATION';

export interface Location {
  lat: number;
  lon: number;
  city: string;
}

export interface SetLocationAction {
  type: typeof SET_LOCATION;
  payload: Location;
}

export interface ClearLocationAction {
  type: typeof CLEAR_LOCATION;
}

export type LocationActionsType = SetLocationAction | ClearLocationAction;
