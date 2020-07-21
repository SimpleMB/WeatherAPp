import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import { initialWeatherState } from './store/weather/reducers';
import { initialLocationState } from './store/location/reducers';

const mockStore = configureStore([thunk]);

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
