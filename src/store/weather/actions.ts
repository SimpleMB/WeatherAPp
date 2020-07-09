import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Coords, GET_WEATHER } from './types';

export const getWeather = (
  coords: Coords
): ThunkAction<void, {}, unknown, Action<string>> => async (dispatch) => {
  if (coords.lat === 0) return;
  const { lat, lon } = coords;
  try {
    const weatherJSON = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    const weatherData = await weatherJSON.json();
    dispatch({
      type: GET_WEATHER,
      payload: weatherData,
    });
  } catch (error) {
    console.log(error);
  }
};
