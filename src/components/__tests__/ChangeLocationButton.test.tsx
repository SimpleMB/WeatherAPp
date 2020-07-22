import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialLocationState } from '../../store/location/reducers';
import { initialWeatherState } from '../../store/weather/reducers';
import ChangeLocationButton from '../ChangeLocationButton';
import { CLEAR_LOCATION } from '../../store/location/types';

const mockStore = configureStore([thunk]);

describe('ChangeLocationButton testing', () => {
  test('renders button on screen', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <ChangeLocationButton />
      </Provider>
    );
    expect(screen.getByRole('button')).toHaveClass('changeLocationBtn');
  });

  test('clicking button dispatch action', async () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <ChangeLocationButton />
      </Provider>
    );

    await userEvent.click(screen.getByRole('button'));
    const actions = store.getActions();
    const expectedPayload = { type: CLEAR_LOCATION };
    expect(actions).toEqual([expectedPayload]);
  });
});
