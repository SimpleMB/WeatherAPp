import { SET_LOCATION, LocationActionsType, CLEAR_LOCATION } from '../types';
import locationReducer, { initialLocationState } from '../reducers';

const testPayload = {
  lat: 20,
  lon: 20,
  city: 'Somewhere',
};

describe('Testing location reducer', () => {
  test('reducer with action of type SET_LOCATION should return provided state with payload', () => {
    const testAction: LocationActionsType = {
      type: SET_LOCATION,
      payload: testPayload,
    };
    const state = locationReducer(initialLocationState, testAction);
    expect(state).toEqual(testPayload);
  });
  test('reducer with CLEAR_LOCATION should return initial state', () => {
    const testAction: LocationActionsType = {
      type: CLEAR_LOCATION,
    };

    const state = locationReducer(initialLocationState, testAction);
    expect(state).toEqual(initialLocationState);
  });
});
