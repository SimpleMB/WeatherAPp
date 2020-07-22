import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ChooseLocation from '../ChooseLocation';
import { initialLocationState } from '../../store/location/reducers';
import { initialWeatherState } from '../../store/weather/reducers';

const mockStore = configureStore();

describe('ChooseLocation component testing', () => {
  test('renders ChooseLocation component', () => {
    const store = mockStore({
      location: { ...initialLocationState },
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <ChooseLocation />
      </Provider>
    );

    expect(screen.getByText(/When the bloody hell/)).toBeInTheDocument();
  });
});
