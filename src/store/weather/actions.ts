import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  Coords,
  GET_WEATHER,
  LOADING,
  SET_WEATHER_ERROR,
  CLEAR_WEATHER_ERROR,
} from './types';

export const setLoading = () => ({
  type: LOADING,
});

export const clearError = () => ({
  type: CLEAR_WEATHER_ERROR,
});

export const setError = (error: string) => ({
  type: SET_WEATHER_ERROR,
  payload: error,
});

export const getWeather = (
  coords: Coords
): ThunkAction<void, {}, unknown, Action<string>> => async (dispatch) => {
  if (coords.lat === 0) return;
  dispatch(setLoading());
  const { lat, lon } = coords;
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    if (!weatherResponse.ok)
      throw new Error('Something went wrong with API...');
    const weatherData = await weatherResponse.json();
    dispatch({
      type: GET_WEATHER,
      payload: weatherData,
    });
  } catch (err) {
    dispatch(setError(err.message));
    setTimeout(() => dispatch(clearError()), 5000);
  }
};
