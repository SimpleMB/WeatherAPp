export const GET_WEATHER = 'GET_WEATHER';

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
  weather: WeatherShort[];
}

interface CurrentWeather {
  temp: number;
  weather: WeatherShort[];
}

export interface Weather {
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

export type WeatherActionsType = GetWeatherAction;