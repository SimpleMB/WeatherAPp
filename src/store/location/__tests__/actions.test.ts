import configureStore from 'redux-mock-store';
import { setLocation, clearLocation } from '../actions';
import { SET_LOCATION, CLEAR_LOCATION } from '../types';

const mockStore = configureStore();

const mockLocation = {
  lat: 23,
  lon: 23,
  city: 'Somewhere',
};

describe('Testing Redux store location actions', () => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);
  afterEach(() => store.clearActions());
  test('setLocation should dispatch proper type and payload', () => {
    store.dispatch(setLocation(mockLocation));

    const actions = store.getActions();
    const expectedPayload = { type: SET_LOCATION, payload: mockLocation };
    expect(actions).toEqual([expectedPayload]);
  });

  test('clearLocation should dispatch proper type action', () => {
    store.dispatch(clearLocation());

    const actions = store.getActions();
    const expectedPayload = { type: CLEAR_LOCATION };
    expect(actions).toEqual([expectedPayload]);
  });
});
