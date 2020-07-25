import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import { initialWeatherState } from './store/weather/reducers';
import { initialLocationState } from './store/location/reducers';
import { SET_LOCATION } from './store/location/types';

const mockStore = configureStore([thunk]);

const mockLocation = {
  lat: 23,
  lon: 23,
  city: 'Somewhere',
};

describe('testing App component', () => {
  test('renders App component', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('after mount dispatches action setLocation if localStorege provided', () => {
    localStorage.setItem('location', JSON.stringify(mockLocation));

    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const actions = store.getActions();
    const expectedPayload = [{ type: SET_LOCATION, payload: mockLocation }];
    expect(actions).toEqual(expectedPayload);
  });

  test('renders LocationTemplate if state initial', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole(/main/)).toHaveClass('locationTemplate');
  });

  test('renders WeatherTemplate if state with location', () => {
    const store = mockStore({
      location: { lon: 40, lat: 50, city: 'Somewhere', error: '' },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole(/main/)).toHaveClass('weatherTemplate');
  });
});
