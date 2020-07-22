import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CurrentWeather from '../CurrentWeather';
import { initialLocationState } from '../../store/location/reducers';
import { initialWeatherState } from '../../store/weather/reducers';

const mockStore = configureStore([thunk]);

describe('CurrentWeather component testing', () => {
  test('renders Loader component when weather is loading (default)', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <CurrentWeather />
      </Provider>
    );

    expect(screen.getByAltText(/loading gif icon/));
  });

  test('renders CurrentWeather component when weather is fetched', async () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState, loading: false },
    });
    render(
      <Provider store={store}>
        <CurrentWeather />
      </Provider>
    );

    expect(await screen.findByText(/Current/)).toBeInTheDocument();
  });
});
