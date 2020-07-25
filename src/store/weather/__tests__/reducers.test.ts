import weatherReducer, { initialWeatherState } from '../reducers';
import {
  GET_WEATHER,
  WeatherActionsType,
  LOADING,
  SET_WEATHER_ERROR,
  CLEAR_WEATHER_ERROR,
} from '../types';

const testError = 'This is sample error';

const testTemperature = 1000;

const testPayload = {
  ...initialWeatherState,
  current: { ...initialWeatherState.current, temp: testTemperature },
};

describe('Testing weather reducer', () => {
  test('Action type: GET_WEATHER. Reducer should return state with provided values', () => {
    const testAction: WeatherActionsType = {
      type: GET_WEATHER,
      payload: testPayload,
    };
    const state = weatherReducer(initialWeatherState, testAction);
    expect(state.current.temp).toEqual(testTemperature);
    expect(state.loading).toBeFalsy();
  });

  test('Action type: LOADING. Reducer should return state with loading set to true', () => {
    const changedInitialState = {
      ...initialWeatherState,
      loading: false,
    };

    const testAction: WeatherActionsType = {
      type: LOADING,
    };
    const state = weatherReducer(changedInitialState, testAction);
    expect(state.loading).toBeTruthy();
  });

  test('Action type: SET_WEATHER_ERROR. Reducer should return state with test error', () => {
    const testAction: WeatherActionsType = {
      type: SET_WEATHER_ERROR,
      payload: testError,
    };
    const state = weatherReducer(initialWeatherState, testAction);
    expect(state.error).toEqual(testError);
  });

  test('Action type: CLEAR_WEATHER_ERROR. Reducer should return state without test error', () => {
    const changedInitialState = {
      ...initialWeatherState,
      error: testError,
    };

    const testAction: WeatherActionsType = {
      type: CLEAR_WEATHER_ERROR,
    };
    const state = weatherReducer(changedInitialState, testAction);
    expect(state.error).toEqual('');
  });
});
