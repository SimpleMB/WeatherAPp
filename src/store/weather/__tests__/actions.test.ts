import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { Action } from 'redux';
import { getWeather, setLoading, clearError, setError } from '../actions';
import {
  GET_WEATHER,
  LOADING,
  SET_WEATHER_ERROR,
  CLEAR_WEATHER_ERROR,
} from '../types';

// add generic type to accept thunk actions (dispatch) in store
type DispatchExts = ThunkDispatch<{}, unknown, Action<string>>;
const mockStore = configureStore<{}, DispatchExts>([thunk]);

const mockWeather = {
  weather: 'Sample weather',
};

const mockLocation = {
  lat: 23,
  lon: 23,
  city: 'Somewhere',
  error: '',
};

const mockError = 'Sample error';

// this is for setTimeout dispatch in getWeather
jest.useFakeTimers();

describe('Testing Redux store weather actions', () => {
  const initialState = {};
  const store = mockStore(initialState);
  afterEach(() => store.clearActions());

  test('setLoading should dispatch proper type', () => {
    store.dispatch(setLoading());

    const actions = store.getActions();
    const expectedPayload = { type: LOADING };
    expect(actions).toEqual([expectedPayload]);
  });

  test('setError should dispatch proper type and payload', () => {
    store.dispatch(setError(mockError));

    const actions = store.getActions();
    const expectedPayload = { type: SET_WEATHER_ERROR, payload: mockError };
    expect(actions).toEqual([expectedPayload]);
  });

  test('clearError should dispatch proper type', () => {
    store.dispatch(clearError());

    const actions = store.getActions();
    const expectedPayload = { type: CLEAR_WEATHER_ERROR };
    expect(actions).toEqual([expectedPayload]);
  });

  test('getWeather should dispatch loading action then proper type action and payload', async () => {
    fetchMock.getOnce(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${mockLocation.lat}&lon=${mockLocation.lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      { body: mockWeather, headers: { 'content-type': 'application/json' } }
    );

    // await for all actions to dispatch
    await store.dispatch(getWeather(mockLocation));

    const actions = store.getActions();
    const expectedPayload = [
      { type: LOADING },
      { type: GET_WEATHER, payload: mockWeather },
    ];
    expect(actions).toEqual(expectedPayload);
    fetchMock.restore();
  });

  test('when API error getWeather should dispatch - loading action, error action then clear error action', async () => {
    fetchMock.getOnce(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${mockLocation.lat}&lon=${mockLocation.lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      400
    );

    // await for all actions to dispatch
    await store.dispatch(getWeather(mockLocation));

    // runs all timed-out actions
    jest.runAllTimers();

    const actions = store.getActions();
    const expectedPayload = [
      { type: LOADING },
      { type: SET_WEATHER_ERROR, payload: 'Something went wrong with API...' },
      { type: CLEAR_WEATHER_ERROR },
    ];
    expect(actions).toEqual(expectedPayload);
    fetchMock.restore();
  });
});
