import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Forcast from '../Forcast';
import { initialLocationState } from '../../store/location/reducers';
import { initialWeatherState } from '../../store/weather/reducers';

const mockStore = configureStore();

describe('CurrentWeather component testing', () => {
  test('renders Loader component when weather is loading (default)', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <Forcast />
      </Provider>
    );

    expect(screen.getByAltText(/loading gif icon/));
  });

  test('renders Forcast component when weather is fetched', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState, loading: false },
    });
    render(
      <Provider store={store}>
        <Forcast />
      </Provider>
    );

    expect(screen.getByText(/Forcast/)).toBeInTheDocument();
  });

  test('renders list populated with fetched weather', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState, loading: false },
    });
    render(
      <Provider store={store}>
        <Forcast />
      </Provider>
    );

    expect(screen.getByText(/Humidity:/)).toBeInTheDocument();
  });
});
