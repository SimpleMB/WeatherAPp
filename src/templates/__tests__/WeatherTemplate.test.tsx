import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialLocationState } from '../../store/location/reducers';
import { initialWeatherState } from '../../store/weather/reducers';
import WeatherTemplate from '../WeatherTemplate';

const mockStore = configureStore([thunk]);

describe('LocationTemplate testing', () => {
  test('renders LocationTemplate component', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <WeatherTemplate />
      </Provider>
    );
    expect(screen.getByRole('main')).toHaveClass('weatherTemplate');
  });
});
