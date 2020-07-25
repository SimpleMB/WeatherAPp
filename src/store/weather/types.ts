export const GET_WEATHER = 'GET_WEATHER';
export const LOADING = 'LOADING';
export const SET_WEATHER_ERROR = 'SET_ERROR';
export const CLEAR_WEATHER_ERROR = 'CLEAR_ERROR';

interface WeatherShort {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
}

export interface WeatherPrecise {
  dt: number;
  temp: Temp;
  humidity: number;
  wind_speed: number;
  weather: WeatherShort[];
}

interface CurrentWeather {
  temp: number;
  weather: WeatherShort[];
}

export interface Weather {
  loading: boolean;
  error: string;
  timezone_offset: number;
  current: CurrentWeather;
  daily: WeatherPrecise[];
}

export interface Coords {
  lat: number;
  lon: number;
}

export interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: Weather;
}

export interface SetLoadingAction {
  type: typeof LOADING;
}

interface SetErrorAction {
  type: typeof SET_WEATHER_ERROR;
  payload: string;
}

interface ClearErrorAction {
  type: typeof CLEAR_WEATHER_ERROR;
}

export type WeatherActionsType =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction
  | ClearErrorAction;
