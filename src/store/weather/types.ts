export const GET_WEATHER = 'GET_WEATHER';
export const LOADING = 'LOADING';

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
  payload: boolean;
}

export type WeatherActionsType = GetWeatherAction | SetLoadingAction;
