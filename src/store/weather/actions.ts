import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  Coords,
  GET_WEATHER,
  LOADING,
  SET_WEATHER_ERROR,
  CLEAR_WEATHER_ERROR,
} from './types';

const setLoading = (dispatch: ThunkDispatch<{}, unknown, Action<string>>) => {
  dispatch({
    type: LOADING,
    payload: true,
  });
};

const clearError = (dispatch: ThunkDispatch<{}, unknown, Action<string>>) => {
  setTimeout(() => {
    dispatch({
      type: CLEAR_WEATHER_ERROR,
    });
  }, 3000);
};

const setError = (
  error: string,
  dispatch: ThunkDispatch<{}, unknown, Action<string>>
) => {
  dispatch({
    type: SET_WEATHER_ERROR,
    payload: error,
  });
  clearError(dispatch);
};

export const getWeather = (
  coords: Coords
): ThunkAction<void, {}, unknown, Action<string>> => async (dispatch) => {
  if (coords.lat === 0) return;
  setLoading(dispatch);
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
    setError(err.message, dispatch);
  }
};
